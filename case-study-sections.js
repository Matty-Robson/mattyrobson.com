/* Reusable, data-driven case study sections. No project-specific claims live here. */
(() => {
 'use strict';
 let uniqueId = 0;
 const node = (tag, className, text) => { const el=document.createElement(tag); if(className)el.className=className;if(text)el.textContent=text;return el; };
 const clamp = value => Math.min(1,Math.max(0,Number(value)||0));
 function picture(item) {
  const figure=node('figure','case-figure');
  if(item?.src){const img=node('img');img.src=item.src;img.alt=item.alt||'';img.loading='lazy';img.decoding='async';if(item.width)img.width=item.width;if(item.height)img.height=item.height;if(item.crop){const crop=item.crop;if(crop.aspectRatio)img.style.aspectRatio=String(crop.aspectRatio);img.style.objectFit=crop.fit==='contain'?'contain':'cover';img.style.objectPosition=`${clamp(crop.x??.5)*100}% ${clamp(crop.y??.5)*100}%`;}figure.append(img);}
  else { const placeholder=node('div','case-placeholder',item?.placeholder||'Project image to be added');placeholder.setAttribute('role','img');placeholder.setAttribute('aria-label',item?.alt||placeholder.textContent);figure.append(placeholder); }
  if(item?.caption)figure.append(node('figcaption','',item.caption));return figure;
 }
 function copy(section, parent) { if(section.title)parent.append(node('h2','',section.title));if(section.description)parent.append(node('p','',section.description)); }
 function images(items, layout) {const group=node('div','case-images');group.dataset.layout=layout||'grid';(items||[]).forEach(item=>group.append(picture(item)));return group;}
 function chips(values,parent){if(!values?.length)return;const list=node('ul','case-section-chips');values.forEach(value=>list.append(node('li','',value)));parent.append(list);}
 function annotationSection(section,el){
  if(!section.image)return;
  const stage=node('div','case-annotated');const figure=picture(section.image);const caption=figure.querySelector('figcaption');if(caption)caption.remove();stage.append(figure);
  const prefix=`case-annotation-${++uniqueId}`;
  (section.annotations||[]).forEach((annotation,index)=>{
   const marker=node('button','case-hotspot',String(index+1));marker.type='button';marker.style.left=`${clamp(annotation.x)*100}%`;marker.style.top=`${clamp(annotation.y)*100}%`;marker.setAttribute('aria-label',annotation.title);marker.setAttribute('aria-expanded','false');marker.setAttribute('aria-controls',`${prefix}-${index}`);
   const panel=node('div','case-annotation-panel');panel.id=`${prefix}-${index}`;panel.hidden=true;panel.append(node('h3','',annotation.title),node('p','',annotation.description));if(annotation.category)panel.append(node('span','case-annotation-category',annotation.category));if(annotation.image)panel.append(picture(annotation.image));
   const region=node('div','case-annotation-region');region.hidden=true;if(annotation.region){const r=annotation.region;region.style.cssText=`left:${clamp(r.x)*100}%;top:${clamp(r.y)*100}%;width:${Math.min(clamp(r.width),1-clamp(r.x))*100}%;height:${Math.min(clamp(r.height),1-clamp(r.y))*100}%;`;}
   const item=node('div','case-annotation');item.append(marker,region,panel);stage.append(item);
  });el.append(stage);if(caption)el.append(caption);
 }
 function comparisonSection(section,el){
  if(!section.before?.src||!section.after?.src)return;
  const comparison=node('div','case-comparison');comparison.dataset.mode=section.mode||'slider';
  const after=picture({...section.after,caption:section.after.caption||'After'});after.classList.add('case-comparison-after');
  const before=picture({...section.before,caption:section.before.caption||'Before'});before.classList.add('case-comparison-before');
  comparison.append(after,before);
  if(section.mode!=='static'){const label=node('label','case-comparison-control','Compare before and after');const range=node('input');range.type='range';range.min='0';range.max='100';range.value='50';range.setAttribute('aria-label','Before and after comparison');range.setAttribute('aria-valuetext','50% before, 50% after');label.append(range);comparison.append(label);const divider=node('div','case-comparison-divider');divider.setAttribute('aria-hidden','true');const handle=node('span','case-comparison-handle');handle.innerHTML='<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 5 2 10l5 5M13 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';divider.append(handle);comparison.append(divider);comparison.style.setProperty('--comparison','50%');}
  el.append(comparison);
 }
 window.renderCaseStudySection = section => {
  if(!section||section.enabled===false||!['showcase','annotations','feature','research','comparison','mobile','gallery','summary','demo'].includes(section.type))return null;
  if(!section.placeholder){
   if(['showcase','mobile','gallery'].includes(section.type)&&!section.images?.length)return null;
   if(section.type==='annotations'&&!section.image)return null;
   if(section.type==='comparison'&&(!section.before?.src||!section.after?.src))return null;
   if(section.type==='research'&&!section.items?.length)return null;
   if(section.type==='summary'&&!section.body)return null;
  }
  const el=node('section',`case-section case-section-${section.type}`);if(section.id)el.id=section.id;
  el.dataset.caseReveal='';
  if(section.type==='feature'){
   el.dataset.layout=section.layout||'image-left';const text=node('div','case-feature-copy');if(section.number||section.category||section.eyebrow)text.append(node('p','case-feature-label',[section.number,section.category||section.eyebrow].filter(Boolean).join(' / ')));copy(section,text);chips(section.chips,text);el.append(images(section.images,section.images?.length>1?'grid':'full'),text);
  }else{
   copy(section,el);
   if(section.placeholder)el.append(node('p','case-placeholder-note',section.placeholder));
   switch(section.type){
    case 'showcase':case 'gallery':case 'mobile':el.append(images(section.images,section.layout||(section.type==='mobile'?'horizontal':'full')));break;
    case 'annotations':annotationSection(section,el);break;
    case 'comparison':comparisonSection(section,el);break;
    case 'research':{const list=node('div','case-research-items');list.dataset.layout=section.layout||'grid';(section.items||[]).forEach(item=>{const entry=node('article','case-research-item');entry.dataset.kind=item.kind||'insight';if(item.number||item.label)entry.append(node('p','case-research-label',[item.number,item.label].filter(Boolean).join(' / ')));if(item.images?.length)entry.append(images(item.images,item.layout||'grid'));if(item.image)entry.append(picture(item.image));if(item.title)entry.append(node('h3','',item.title));if(item.description)entry.append(node('p','',item.description));if(item.solution){entry.append(node('h4','','Design response'),node('p','',item.solution));}list.append(entry);});el.append(list);break;}
    case 'demo':if(window.createAnchorDemo)el.append(window.createAnchorDemo(section.demo));break;
    case 'summary':if(section.body)el.append(node('p','case-summary-body',section.body));break;
   }
  }return el;
 };
 window.setupCaseStudySections = root => {
  const disposers=[];const listen=(target,type,handler)=>{target.addEventListener(type,handler);disposers.push(()=>target.removeEventListener(type,handler));};
  root.querySelectorAll('.case-annotated').forEach(stage=>{
   let pinned=null;let active=null;
   const close=()=>{if(!active)return;active.querySelector('button').setAttribute('aria-expanded','false');active.querySelector('.case-annotation-panel').hidden=true;active.querySelector('.case-annotation-region').hidden=true;active=null;};
   const position=()=>{if(!active)return;const marker=active.querySelector('button');const box=marker.getBoundingClientRect();const bounds=stage.getBoundingClientRect();const panel=active.querySelector('.case-annotation-panel');panel.style.left=`${Math.max(8,Math.min(box.left-bounds.left+20,bounds.width-panel.offsetWidth-8))}px`;panel.style.top=`${Math.max(8,Math.min(box.top-bounds.top+28,bounds.height-panel.offsetHeight-8))}px`;};
   const open=item=>{if(active===item){position();return;}close();active=item;const marker=item.querySelector('button');marker.setAttribute('aria-expanded','true');item.querySelector('.case-annotation-panel').hidden=false;const region=item.querySelector('.case-annotation-region');region.hidden=!region.style.width;position();};
   if('ResizeObserver'in window){const resize=new ResizeObserver(position);resize.observe(stage);stage.querySelectorAll('img').forEach(img=>resize.observe(img));disposers.push(()=>resize.disconnect());}listen(window,'resize',position);stage.querySelectorAll('img').forEach(img=>listen(img,'load',position));
   stage.querySelectorAll('.case-annotation').forEach(item=>{const marker=item.querySelector('button');listen(marker,'pointerenter',event=>{if(event.pointerType==='mouse'&&!pinned)open(item);});listen(marker,'focus',()=>open(item));listen(marker,'click',()=>{if(pinned===item){pinned=null;close();}else{pinned=item;open(item);}});listen(item,'focusout',event=>{if(!item.contains(event.relatedTarget)&&pinned!==item)close();});});
   listen(stage,'pointerleave',()=>{if(!pinned&&!stage.contains(document.activeElement))close();});listen(stage,'keydown',event=>{if(event.key==='Escape'){pinned=null;close();event.stopPropagation();}});listen(document,'pointerdown',event=>{if(!stage.contains(event.target)){pinned=null;close();}});
  });
  root.querySelectorAll('.case-comparison').forEach(comparison=>{const after=comparison.querySelector('.case-comparison-after img');const size=()=>{if(after?.naturalWidth&&after.naturalHeight)comparison.style.setProperty('--case-comparison-aspect',`${after.naturalWidth} / ${after.naturalHeight}`);};if(after){listen(after,'load',size);size();}});
  root.querySelectorAll('.case-comparison input').forEach(range=>{
   const comparison=range.closest('.case-comparison'),divider=comparison.querySelector('.case-comparison-divider');
   listen(range,'input',()=>{comparison.style.setProperty('--comparison',`${range.value}%`);range.setAttribute('aria-valuetext',`${range.value}% before, ${100-Number(range.value)}% after`);});
   if(divider){const update=event=>{const rect=comparison.querySelector('.case-comparison-after img').getBoundingClientRect();range.value=String(Math.round(clamp((event.clientX-rect.left)/rect.width)*100));range.dispatchEvent(new Event('input',{bubbles:true}));};
    listen(divider,'pointerdown',event=>{if(event.pointerType==='mouse'&&event.button!==0)return;event.preventDefault();divider.setPointerCapture(event.pointerId);update(event);});
    listen(divider,'pointermove',event=>{if(divider.hasPointerCapture(event.pointerId))update(event);});
    for(const type of ['pointerup','pointercancel'])listen(divider,type,event=>{if(divider.hasPointerCapture(event.pointerId))divider.releasePointerCapture(event.pointerId);});
   }
  });
  if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-case-visible');observer.unobserve(entry.target);}}),{threshold:.06});root.querySelectorAll('[data-case-reveal]').forEach(el=>{el.classList.add('is-case-pending');observer.observe(el);});disposers.push(()=>observer.disconnect());}
  return ()=>disposers.forEach(dispose=>dispose());
 };
})();
