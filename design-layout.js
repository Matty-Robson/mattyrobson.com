// Optional design-page presentation. Shared content and card instances stay intact.
(() => {
  const page=document.querySelector('.page');
  const design=document.querySelector('#designCardPage');
  const intro=document.querySelector('.design-intro');
  const introHeading=intro.querySelector('h1');
  const originalHeading=introHeading.textContent;
  const designParagraphs=[...intro.querySelectorAll('p')];
  const greeting=document.createElement('div');
  greeting.className='sidebar-greeting';greeting.hidden=true;
  greeting.innerHTML='<span>Hey, I’m Matty</span><span class="sidebar-portrait-slot"><span class="sidebar-portrait"><span class="sidebar-portrait-crop"><img src="Assets/Sidebar/matty-portrait.png" alt="Matty with his dog"></span></span></span>';
  intro.prepend(greeting);
  const photoCopy=document.createElement('p');photoCopy.className='sidebar-photo-copy';photoCopy.hidden=true;
  photoCopy.textContent='I mostly take photos of life as it happens. Places I go, people I meet and the details that catch my eye. Nothing really staged or planned, just documenting what’s going on around me and the little moments I think are worth capturing.';
  intro.append(photoCopy);
  const instagram=document.createElement('a');instagram.className='sidebar-instagram';instagram.href='https://www.instagram.com/mtty.robson/';instagram.hidden=true;
  instagram.setAttribute('aria-label','Instagram @mtty.robson');
  instagram.innerHTML='<img src="Assets/Sidebar/instagram.svg" alt=""><span class="instagram-label">Instagram<span class="brand-reveal"><span>&nbsp;@mtty.robson</span></span></span>';
  const footer=document.createElement('footer');footer.className='sidebar-footer';
  // The header Contact link is the single source for the contact address.
  const contactEmail=document.querySelector('.site-nav a[href^="mailto:"]').getAttribute('href').slice(7);
  const email=document.createElement('a');email.className='sidebar-instagram sidebar-email';email.href='mailto:'+contactEmail;
  email.setAttribute('aria-label','Email '+contactEmail);
  email.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg><span class="instagram-label">Email<span class="brand-reveal"><span>&nbsp;'+contactEmail+'</span></span></span>';
  const copyright=document.createElement('p');copyright.className='sidebar-copyright';
  function updateCopyright(){copyright.textContent='© '+new Date().getFullYear()+' Matty Robson';}
  updateCopyright();
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)updateCopyright();});
  footer.append(email,copyright);
  const themeToggle=document.querySelector('#themeToggle');
  const themeHome=document.createComment('Original theme toggle position');themeToggle.before(themeHome);
  const nav=document.querySelector('.site-nav');
  const photographyWord=intro.querySelector('.intro-photography');
  const photographyLink=document.createElement('a');
  photographyLink.className='intro-photography-link';
  photographyLink.innerHTML='<strong>photography</strong><span class="intro-camera-icons" aria-hidden="true"><img src="Assets/Camera Icons/Ricoh GRIIIx.png" alt=""><img src="Assets/Camera Icons/Polaroid GO.png" alt=""><img src="Assets/Camera Icons/Fujifilm XT30II.png" alt=""></span>';
  const cameraReducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
  const cameraImages=[...photographyLink.querySelectorAll('img')];
  const cameraMotion={x:0,y:0,vx:0,vy:0,targetX:0,targetY:0,frame:0,last:0,ready:false,hover:false,exitUntil:0};
  const cameraWobble=cameraImages.map(()=>({angle:0,velocity:0}));
  function paintCameras(){
    photographyLink.style.setProperty('--camera-cursor-x',cameraMotion.x+'px');
    photographyLink.style.setProperty('--camera-cursor-y',cameraMotion.y+'px');
    cameraImages.forEach((image,i)=>{
      image.style.setProperty('--camera-wobble',cameraWobble[i].angle+'deg');
      image.style.setProperty('--camera-drift-x',Math.max(-5,Math.min(5,-cameraMotion.vx*.009*(i+1)))+'px');
      image.style.setProperty('--camera-drift-y',Math.max(-4,Math.min(4,-cameraMotion.vy*.008*(i+1)))+'px');
    });
  }
  function stopCameras(){
    cancelAnimationFrame(cameraMotion.frame);cameraMotion.frame=0;cameraMotion.ready=false;cameraMotion.hover=false;
    cameraMotion.vx=cameraMotion.vy=0;
    cameraWobble.forEach(w=>{w.angle=0;w.velocity=0;});paintCameras();
  }
  function cameraFrame(now){
    cameraMotion.frame=0;
    if(document.hidden||cameraReducedMotion.matches||!photographyLink.isConnected)return;
    const dt=Math.min(.033,Math.max(0,(now-cameraMotion.last)/1000));cameraMotion.last=now;
    const steps=Math.max(1,Math.ceil(dt*120)),h=dt/steps;
    for(let step=0;step<steps;step++){
      for(const [axis,velocity,target]of [['x','vx','targetX'],['y','vy','targetY']]){
        cameraMotion[velocity]+=(240*(cameraMotion[target]-cameraMotion[axis])-21*cameraMotion[velocity])*h;
        cameraMotion[axis]+=cameraMotion[velocity]*h;
      }
      cameraWobble.forEach((w,i)=>{
        const target=Math.max(-13,Math.min(13,(cameraMotion.vx*.035-cameraMotion.vy*.018)*[1,-.8,.65][i]));
        w.velocity+=((155+i*28)*(target-w.angle)-(16+i*2)*w.velocity)*h;
        w.angle+=w.velocity*h;
      });
    }
    paintCameras();
    const moving=Math.hypot(cameraMotion.targetX-cameraMotion.x,cameraMotion.targetY-cameraMotion.y)>.05||Math.hypot(cameraMotion.vx,cameraMotion.vy)>.1||cameraWobble.some(w=>Math.abs(w.angle)>.05||Math.abs(w.velocity)>.1);
    if(moving&&(cameraMotion.hover||now<cameraMotion.exitUntil))cameraMotion.frame=requestAnimationFrame(cameraFrame);
    else if(!cameraMotion.hover)cameraMotion.ready=false;
  }
  function positionCameras(event){
    const rect=photographyLink.getBoundingClientRect();
    const follow=event&&event.pointerType!=='touch'&&!cameraReducedMotion.matches;
    cameraMotion.targetX=follow?event.clientX:rect.left+rect.width/2;
    cameraMotion.targetY=follow?event.clientY:rect.top+rect.height/2;
    if(!cameraMotion.ready||!follow){
      cameraMotion.x=cameraMotion.targetX;cameraMotion.y=cameraMotion.targetY;
      cameraMotion.vx=cameraMotion.vy=0;cameraMotion.ready=true;paintCameras();
    }
    if(follow&&!cameraMotion.frame){cameraMotion.last=performance.now();cameraMotion.frame=requestAnimationFrame(cameraFrame);}
  }
  photographyLink.addEventListener('pointerenter',event=>{cameraMotion.hover=true;positionCameras(event);});
  photographyLink.addEventListener('pointermove',event=>{if(!cameraReducedMotion.matches)positionCameras(event);});
  photographyLink.addEventListener('pointerleave',()=>{
    cameraMotion.hover=false;cameraMotion.exitUntil=performance.now()+300;
    if(!cameraMotion.frame)cameraMotion.ready=false;
  });
  photographyLink.addEventListener('focus',()=>{if(!photographyLink.matches(':hover')){stopCameras();positionCameras();}});
  cameraReducedMotion.addEventListener('change',()=>{stopCameras();if(photographyLink.matches(':focus-visible,:hover'))positionCameras();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopCameras();});
  window.addEventListener('pagehide',stopCameras);
  photographyLink.addEventListener('click',event=>{
    if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    event.preventDefault();nav.querySelector('[data-page="photography"]').click();
  });

  const navHome=document.createComment('Original header position');
  const introHome=document.createComment('Original introduction position');
  nav.before(navHome);intro.before(introHome);
  const sidebar=document.createElement('aside');
  sidebar.className='design-sidebar';sidebar.setAttribute('aria-label','About Matty and navigation');sidebar.hidden=true;design.prepend(sidebar);
  const photoTools=document.createElement('div');photoTools.className='photo-layout-tools';photoTools.hidden=true;page.append(photoTools);
  const sidebarDesktop=matchMedia('(min-width:1200px)');
  const switcher=document.createElement('div');switcher.className='design-layout-switch';switcher.setAttribute('role','group');switcher.setAttribute('aria-label','Design page layout');
  for(const [value,label] of [['original','Original'],['sidebar','Sidebar']]){
    const button=document.createElement('button');button.type='button';button.dataset.layout=value;button.textContent=label;
    button.addEventListener('click',()=>{
      const url=new URL(location.href);const key=page.classList.contains('is-design-home')?'layout':'photoLayout';if(value==='sidebar')url.searchParams.set(key,'sidebar');else url.searchParams.delete(key);
      history.pushState(null,'',url.pathname+url.search+url.hash);window.dispatchEvent(new PopStateEvent('popstate'));
    });switcher.append(button);
  }
  let revealedSidebar='';
  let sidebarReveals=[];
  function sync(event){
    const active=page.classList.contains('is-design-home');
    const params=new URLSearchParams(location.search);
    const alternate=active&&params.get('layout')!=='original';
    const photography=!active&&!location.hash.startsWith('#project/')&&params.get('view')!=='folders';
    const photoAlternate=photography&&params.get('photoLayout')!=='original';
    const hasSidebar=alternate||photoAlternate;
    greeting.hidden=!hasSidebar;
    if(hasSidebar){if(themeToggle.parentElement!==greeting)greeting.append(themeToggle);}
    else if(themeToggle.parentElement===greeting)themeHome.after(themeToggle);
    introHeading.hidden=photoAlternate;
    introHeading.textContent=alternate?'A digital designer from the North East, mainly working on websites and eCommerce experiences.':originalHeading;
    designParagraphs.forEach(p=>p.hidden=photoAlternate);
    photoCopy.hidden=!photoAlternate;instagram.hidden=!photoAlternate;
    const folderMenu=document.querySelector('#sidebarFolderList');
    folderMenu.hidden=!photoAlternate;
    page.classList.toggle('is-sidebar-design',alternate);
    page.classList.toggle('is-sidebar-photography',photoAlternate);
    page.classList.toggle('is-photography-page',photography);
    page.classList.toggle('is-sidebar-layout',hasSidebar);
    sidebar.hidden=!hasSidebar;switcher.hidden=hasSidebar||(!active&&!photography);
    photoTools.hidden=!photography||photoAlternate;
    switcher.setAttribute('aria-label',active?'Design page layout':'Photography page layout');
    switcher.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.layout===(hasSidebar?'sidebar':'original'))));
    if(!alternate)stopCameras();
    photographyLink.href=location.pathname+location.search+'#photography';
    photographyWord.replaceChildren(...(alternate?[photographyLink,document.createTextNode(',')]:[document.createTextNode('photography,')]));
    if(hasSidebar){
      // Keep the desktop sidebar mounted in one place across routes so
      // the hovered brand retains its expanded state.
      const sidebarParent=sidebarDesktop.matches?page:(photoAlternate?document.querySelector('#archiveScroll'):design);
      if(sidebar.parentElement!==sidebarParent){
        if(sidebarParent.moveBefore&&sidebar.isConnected)sidebarParent.moveBefore(sidebar,sidebarParent.firstChild);
        else sidebarParent.prepend(sidebar);
      }
      if(nav.parentElement!==sidebar)sidebar.append(nav,switcher,intro,instagram,folderMenu,footer);
    }else{
      design.prepend(sidebar);navHome.after(nav);introHome.after(intro);
      if(photography)photoTools.append(switcher);else intro.before(switcher);
    }
    const revealKey=hasSidebar?(photoAlternate?'photography':'design'):'';
    if(revealKey!==revealedSidebar){
      sidebarReveals.forEach(animation=>animation.cancel());sidebarReveals=[];
      if(revealKey&&!cameraReducedMotion.matches&&!event?.detail?.skipSidebarReveal){
        const switchingPages=Boolean(revealedSidebar);
        const sections=[...(switchingPages?[]:[nav,switcher,greeting]),introHeading,...designParagraphs,photoCopy,instagram,folderMenu].filter(section=>!section.hidden);
        sidebarReveals=sections.map((section,index)=>section.animate(
          [{opacity:0,translate:'0 7px'},{opacity:1,translate:'0 0'}],
          {duration:240,delay:index*25,easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'}
        ));
      }
      revealedSidebar=revealKey;
    }
  }
  window.addEventListener('portfolio-view-change',sync);
  sidebarDesktop.addEventListener('change',sync);
})();
