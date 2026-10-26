/* Shared, data-driven project pages and interruptible card-to-page transitions. */
(() => {
  'use strict';
  const page=document.querySelector('.page');
  const portfolio=document.querySelector('#designCardPage');
  const projects=window.portfolioCaseStudies;
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const article=document.createElement('article');article.className='case-study';article.hidden=true;article.setAttribute('aria-label','Project case study');document.body.append(article);
  article.addEventListener('keydown',event=>event.stopPropagation());
  let current=null,cleanupSections=()=>{},flightAnimations=[],flightNodes=[],generation=0;
  const element=(tag,className,text)=>{const n=document.createElement(tag);if(className)n.className=className;if(text)n.textContent=text;return n;};
  function projectURL(project){return location.pathname+location.search+'#project/'+project.slug;}
  function portfolioURL(){return location.pathname+location.search;}
  function logo(project){
    const wrap=element('div','case-logo');wrap.setAttribute('role','img');wrap.setAttribute('aria-label',project.title);
    wrap.style.aspectRatio=project.logoAspectRatio||4;wrap.style.height='auto';if((project.logoAspectRatio||4)<1.5)wrap.style.width='100px';
    if(project.logos){wrap.classList.add('is-layered');wrap.style.aspectRatio=project.logoAspectRatio;project.logos.forEach(layer=>{const img=document.createElement('img');img.src=layer.src;img.alt=layer.alt||'';Object.assign(img.style,{left:layer.x*100+'%',top:layer.y*100+'%',width:layer.width*100+'%',height:layer.height*100+'%'});wrap.append(img);});}
    else{const img=document.createElement('img');img.src=project.logo;img.alt='';wrap.append(img);}
    return wrap;
  }
  function chips(project){const list=element('ul','case-chips');project.chips.forEach(label=>list.append(element('li','',label)));return list;}
  function image(src,alt,className){const img=document.createElement('img');img.src=src;img.alt=alt;img.className=className||'';img.decoding='async';return img;}
  function link(text,href,className){const a=element('a',className,text);a.href=href;return a;}
  function render(project){
    cleanupSections();article.replaceChildren();article.style.setProperty('--project-bg',project.theme.background);article.style.setProperty('--project-ink',project.theme.ink);
    const header=element('header','case-topbar');header.append(link('Back to Projects',portfolioURL(),'case-back'));
    const idx=projects.indexOf(project);const configure=element('button','case-config-open','Configure case study');configure.type='button';configure.addEventListener('click',()=>window.dispatchEvent(new Event('case-study-config-open')));header.append(configure);
    header.append(element('span','case-count',String(idx+1).padStart(2,'0')+' / '+String(projects.length).padStart(2,'0')));
    const hero=element('section','case-hero');const inner=element('div','case-hero-inner');const mark=logo(project);inner.append(mark);
    const words=element('div','case-hero-copy');words.append(element('p','case-project-name',project.title));const title=element('h1','',project.headline);title.tabIndex=-1;words.append(title);if(project.introduction)words.append(element('p','case-introduction',project.introduction));words.append(chips(project));inner.append(words);
    if(project.heroImage||project.cardImage){const visual=element('figure','case-hero-visual');visual.dataset.kind=project.heroImage?'website':'artwork';const data=project.cardImage;visual.append(image(project.heroImage||data.src,project.heroAlt||data?.alt||project.title));if(!project.heroImage)visual.append(element('figcaption','',data.caption));inner.append(visual);}
    if(!project.heroImage&&!project.cardImage){const visual=element('figure','case-hero-visual case-image-placeholder');visual.dataset.kind='placeholder';visual.setAttribute('role','img');visual.setAttribute('aria-label','Hero screenshot placeholder');visual.append(element('p','','Hero screenshot to be added'));inner.append(visual);}
    hero.append(inner);article.append(header,hero);
    const body=element('main','case-body');
    if(project.overview){const overview=element('section','case-overview');overview.append(element('h2','','Project overview'));const dl=element('dl','');for(const [key,label]of [['project','The Project'],['involvement','My Involvement'],['approach','The Approach']])if(project.overview[key]){const row=element('div','');row.append(element('dt','',label),element('dd','',project.overview[key]));dl.append(row);}overview.append(dl);body.append(overview);}
    if(project.metadata&&Object.keys(project.metadata).length){const metadata=element('dl','case-metadata');for(const [label,value]of Object.entries(project.metadata)){const row=element('div','');row.append(element('dt','',label),element('dd','',Array.isArray(value)?value.join(', '):value));metadata.append(row);}body.append(metadata);}
    for(const section of project.sections||[]){if(section.enabled===false)continue;const view=window.renderCaseStudySection(section);if(view)body.append(view);}
    article.append(body);
    const next=projects[(idx+1)%projects.length],previous=projects[(idx+projects.length-1)%projects.length];
    const footer=element('footer','case-footer');const preview=link('',projectURL(next),'case-next');preview.dataset.caseProject=next.key;preview.style.setProperty('--next-bg',next.theme.background);preview.style.setProperty('--next-ink',next.theme.ink);preview.append(element('span','case-next-label','Next project'),logo(next),element('h2','',next.title),element('p','',next.headline),element('span','case-next-cta','Explore Project'));
    if(next.heroImage||next.cardImage)preview.append(image(next.heroImage||next.cardImage.src,next.heroAlt||next.cardImage?.alt||next.title,'case-next-art'));
    else{preview.classList.add('has-no-preview-image');preview.append(element('span','case-next-placeholder','Project preview to be added'));}
    const links=element('nav','case-footer-links');links.setAttribute('aria-label','Project navigation');const prev=link('Previous: '+previous.title,projectURL(previous),'');prev.dataset.caseProject=previous.key;links.append(prev,link('All design projects',portfolioURL(),'case-back'));footer.append(preview,links);article.append(footer);
    cleanupSections=window.setupCaseStudySections(article);article.scrollTop=0;
  }
  function cancelFlight(){generation++;flightAnimations.forEach(a=>a.cancel());flightAnimations=[];flightNodes.forEach(n=>n.remove());flightNodes=[];document.querySelectorAll('[data-case-flight-hidden]').forEach(n=>{n.style.visibility='';delete n.dataset.caseFlightHidden;});}
  function hideDuringFlight(node){if(node){node.dataset.caseFlightHidden='';node.style.visibility='hidden';}}
  // Freeze the actual on-screen logo, including layered SVGs and current animation pose.
  function snapshot(node){
    if(!node)return null;const rect=node.getBoundingClientRect();if(!rect.width||!rect.height)return null;
    const clone=node.cloneNode(true);const src=[node,...node.querySelectorAll('*')],dest=[clone,...clone.querySelectorAll('*')];src.forEach((n,i)=>{const style=getComputedStyle(n);for(const name of style)dest[i].style.setProperty(name,style.getPropertyValue(name));dest[i].removeAttribute('id');dest[i].style.animation='none';dest[i].style.transition='none';});
    const holder=element('div','case-flight');holder.setAttribute('aria-hidden','true');Object.assign(holder.style,{left:rect.left+'px',top:rect.top+'px',width:rect.width+'px',height:rect.height+'px'});Object.assign(clone.style,{position:'absolute',inset:'0',left:'0',top:'0',width:'100%',height:'100%',margin:'0',transform:'none',translate:'none',rotate:'none',opacity:'1',visibility:'visible'});holder.append(clone);document.body.append(holder);flightNodes.push(holder);return {holder,rect};
  }
  function animate(node,frames,options){const a=node.animate(frames,options);flightAnimations.push(a);return a.finished.catch(()=>{});}
  function getCard(project){return document.querySelector(`interactive-project-card[data-project="${project.key}"]`);}
  function cardLogo(card){return card?.querySelector('[class$="-logo"]');}
  function sync(){
    const slug=location.hash.match(/^#project\/([^/?#]+)$/)?.[1];const project=projects.find(p=>p.slug===slug);
    if(project&&project===current)return;
    if(slug&&!project){cancelFlight();cleanupSections();current=null;article.replaceChildren();article.hidden=false;page.inert=true;page.classList.add('is-case-study');const message=element('main','case-body case-unavailable');message.append(element('h1','','Project not found'),element('p','','This project is not available.'),link('Back to Projects',portfolioURL(),'case-back'));article.append(message);document.title='Project not found — Matty Robson';return;}
    cancelFlight();const was=current;const reverseSource=was?article.querySelector('.case-hero .case-logo'):null;const returningToProjects=page.classList.contains('is-design-home');const reverseSnapshot=was&&!project&&returningToProjects&&!motion.matches?snapshot(reverseSource):null;
    if(project){current=project;render(project);article.hidden=false;page.inert=true;page.classList.add('is-case-study');document.title=project.title+' — Matty Robson';
      window.dispatchEvent(new CustomEvent('case-study-change',{detail:{project}}));
      requestAnimationFrame(()=>article.querySelector('h1')?.focus({preventScroll:true}));
    }else{
      current=null;cleanupSections();article.hidden=true;page.inert=false;page.classList.remove('is-case-study');window.dispatchEvent(new CustomEvent('case-study-change',{detail:{project:null}}));
      if(was&&returningToProjects){document.title='Matty Robson — Design';const scroll=history.state?.portfolioScroll??Number(sessionStorage.getItem('portfolio-case-scroll')||0);portfolio.scrollTop=scroll;const card=getCard(was);card?.resetAfterNavigation();card?.focus({preventScroll:true});
        if(reverseSnapshot){const ticket=generation;requestAnimationFrame(async()=>{const destination=cardLogo(card);if(!destination){reverseSnapshot.holder.remove();return;}try{
          destination.getBoundingClientRect();
          const transitions=destination.getAnimations().filter(a=>typeof CSSTransition!=='undefined'&&a instanceof CSSTransition);
          // A cancelled or replaced layout transition must never strand a hidden logo.
          await Promise.race([Promise.all(transitions.map(a=>a.finished.catch(()=>{}))),new Promise(resolve=>setTimeout(resolve,450))]);
          if(ticket!==generation)return;
          const r=destination.getBoundingClientRect();
          // Keep the reset card logo visible while the travelling copy lands.
          // Hiding it creates a blank interval when navigation interrupts a flight.
          destination.style.visibility='';delete destination.dataset.caseFlightHidden;
          await animate(reverseSnapshot.holder,[{transform:'none'},{transform:`translate(${r.left-reverseSnapshot.rect.left}px,${r.top-reverseSnapshot.rect.top}px) scale(${r.width/reverseSnapshot.rect.width})`}],{duration:700,easing:'cubic-bezier(.22,1,.36,1)',fill:'forwards'});
        }finally{
          destination.style.visibility='';delete destination.dataset.caseFlightHidden;reverseSnapshot.holder.remove();
        }});}
      }
    }
  }
  function open(project,source){
    if(!project)return;
    const travelDuration=matchMedia('(max-width:700px)').matches?700:850;
    cancelFlight();
    const scroll=portfolio.scrollTop;sessionStorage.setItem('portfolio-case-scroll',String(scroll));
    if(!current)history.replaceState({...history.state,portfolioScroll:scroll},'',location.href);
    let prepared=null;
    if(source&&!motion.matches){
      const sourceLogo=source.matches('interactive-project-card')?cardLogo(source):source.querySelector('.case-logo');
      // Capture before routing hides the source. Keep these snapshots through sync cleanup.
      prepared={project,logo:snapshot(sourceLogo)};

    }
    // Detach snapshots from cleanup until the route has been processed.
    const preserved=prepared?[prepared.logo?.holder].filter(Boolean):[];
    flightNodes=flightNodes.filter(n=>!preserved.includes(n));
    history.pushState({portfolioCase:true,fromPortfolio:!current,portfolioScroll:scroll},'',projectURL(project));
    window.dispatchEvent(new PopStateEvent('popstate'));
    // sync runs on portfolio-view-change; open prepared visuals before the next paint.
    if(prepared){flightNodes.push(...preserved);
      const target=article.querySelector('.case-hero .case-logo');if(target){const r=target.getBoundingClientRect();hideDuringFlight(target);const flight=prepared.logo;if(flight)animate(flight.holder,[{transform:'none'},{transform:`translate(${r.left-flight.rect.left}px,${r.top-flight.rect.top}px) scale(${r.width/flight.rect.width})`}],{duration:travelDuration,easing:'cubic-bezier(.22,1,.36,1)',fill:'forwards'}).then(()=>{target.style.visibility='';delete target.dataset.caseFlightHidden;flight.holder.remove();});else{target.style.visibility='';delete target.dataset.caseFlightHidden;}}
    }
  }
  document.addEventListener('click',event=>{
    const button=event.target.closest('.project-explore');if(button){const card=button.closest('interactive-project-card');if(card){event.preventDefault();open(projects.find(p=>p.key===card.dataset.project),card);}return;}
    const next=event.target.closest('[data-case-project]');if(next&&!event.metaKey&&!event.ctrlKey&&!event.shiftKey&&!event.altKey){event.preventDefault();open(projects.find(p=>p.key===next.dataset.caseProject),next);return;}
    const back=event.target.closest('.case-back');if(back&&!event.metaKey&&!event.ctrlKey&&!event.shiftKey&&!event.altKey){event.preventDefault();if(history.state?.portfolioCase&&history.state?.fromPortfolio)history.back();else{history.pushState({portfolioScroll:Number(sessionStorage.getItem('portfolio-case-scroll')||0)},'',portfolioURL());window.dispatchEvent(new PopStateEvent('popstate'));}}
  });
  window.addEventListener('portfolio-view-change',sync);
  motion.addEventListener('change',()=>{if(motion.matches)cancelFlight();});
  window.caseStudyController={getProject:()=>current,refresh:()=>{if(!current)return;const scroll=article.scrollTop;cancelFlight();render(current);article.scrollTop=scroll;}};
  sync();
})();
