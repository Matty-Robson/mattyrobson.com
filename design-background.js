// Design-only background lifecycle. Configuration belongs to interactiveCardConfig.
(() => {
  const page=document.querySelector('.page'),design=document.querySelector('#designCardPage');
  const row=document.querySelector('.design-card-row');
  const region=document.createElement('div');region.className='design-card-region';
  row.before(region);region.append(row);
  const layer=document.createElement('div');layer.className='design-dotgrid';layer.setAttribute('aria-hidden','true');region.prepend(layer);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let engine=null,canvas=null,failed=false;
  function dispose(){canvas?.removeEventListener('webglcontextlost',onContextLost);engine?.destroy();engine=null;canvas?.remove();canvas=null;}
  function onContextLost(event){event.preventDefault();failed=true;dispose();layer.classList.add('is-static');}
  function sync(){
    const config=window.interactiveCardConfig?.designBackground;if(!config)return;
    const active=page.classList.contains('is-design-home');
    const mode=config.mode;
    page.classList.toggle('has-design-background',active&&mode!=='existing');
    page.classList.toggle('has-dotgrid-background',active&&mode==='dotgrid');
    layer.hidden=!active||mode!=='dotgrid';
    const light=document.body.dataset.theme==='light';
    const baseColor=light?'#fdfdfd':'#202020',activeColor=light?'#444444':'#bbbbbb';
    layer.style.setProperty('--dot-color',baseColor);layer.style.setProperty('--dot-size',config.dotSize+'px');
    layer.style.setProperty('--dot-pitch',(config.dotSize+config.gap)+'px');layer.style.setProperty('--dot-opacity',config.opacity);
    if(!active||mode!=='dotgrid'||document.hidden||reduced.matches){dispose();layer.classList.toggle('is-static',reduced.matches);return;}
    const settings={...config,baseColor,activeColor};
    if(!engine&&!failed){
      canvas=document.createElement('canvas');canvas.className='design-dotgrid-canvas';layer.append(canvas);
      canvas.addEventListener('webglcontextlost',onContextLost,{once:true});
      try{engine=window.createPortfolioDotGrid(canvas,settings);}catch{engine=null;}
      if(!engine){failed=true;dispose();}
    }else engine?.update(settings);
    layer.classList.toggle('is-static',failed);
  }
  window.addEventListener('portfolio-view-change',sync);
  window.addEventListener('portfolio-background-change',sync);
  document.addEventListener('visibilitychange',sync);
  reduced.addEventListener('change',sync);
  new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['data-theme']});
  window.addEventListener('pagehide',dispose);
  window.addEventListener('pageshow',sync);
})();
