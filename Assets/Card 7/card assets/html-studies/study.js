/* Playback drives the actual exported Figma CSS tracks, including each easing. */
(() => {
 const body=document.body,canvas=document.querySelector('.study-canvas'),viewport=document.querySelector('.study-viewport');
 const play=document.querySelector('[data-play]'),pause=document.querySelector('[data-pause]'),reset=document.querySelector('[data-reset]'),scrub=document.querySelector('[data-scrub]'),output=document.querySelector('output');
 let actualSize=false;const sizeButton=document.createElement('button');sizeButton.type='button';sizeButton.textContent='Actual size';document.querySelector('.study-controls').insertBefore(sizeButton,output);sizeButton.addEventListener('click',()=>{actualSize=!actualSize;sizeButton.textContent=actualSize?'Fit to width':'Actual size';viewport.style.overflowX=actualSize?'auto':'hidden';fit();});
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let animations=[],raf=0,duration=0,swatches=null;
 function fit(){const scale=actualSize?1:Math.min(1,viewport.clientWidth/Number(body.dataset.width));canvas.style.transform=`scale(${scale})`;viewport.style.height=Number(body.dataset.height)*scale+'px';}
 const resize=new ResizeObserver(fit);resize.observe(viewport);fit();
 function collect(){canvas.getBoundingClientRect();animations=canvas.getAnimations({subtree:true});duration=Math.max(0,...animations.map(a=>a.effect.getTiming().duration).filter(Number.isFinite));}
 function stopUI(){cancelAnimationFrame(raf);raf=0;}
 function update(){const time=Math.max(0,...animations.map(a=>a.currentTime||0));scrub.value=duration?Math.min(1000,(animations.some(a=>a.effect.getTiming().iterations===Infinity)?time%duration:time)/duration*1000):0;output.value=(time/1000).toFixed(2)+' s';if(animations.some(a=>a.playState==='running'))raf=requestAnimationFrame(update);else{pause.textContent='Resume';raf=0;}}
 function replay(){stopUI();if(reduced.matches){body.classList.remove('motion-running');output.value='Reduced motion';return;}if(swatches)swatches.open();body.classList.remove('motion-running');canvas.getBoundingClientRect();body.classList.add('motion-running');collect();pause.textContent='Pause';animations.forEach(a=>{a.currentTime=0;a.play();});update();}
 function resetAll(){stopUI();animations.forEach(a=>a.cancel());body.classList.remove('motion-running');swatches?.close();scrub.value=0;output.value='Ready';pause.textContent='Pause';}
 play.addEventListener('click',replay);reset.addEventListener('click',resetAll);
 pause.addEventListener('click',()=>{if(!animations.length){replay();return;}const running=animations.some(a=>a.playState==='running');animations.forEach(a=>running?a.pause():a.play());pause.textContent=running?'Resume':'Pause';if(!running)update();else stopUI();});
 scrub.addEventListener('input',()=>{if(reduced.matches)return;if(!animations.length){replay();}animations.forEach(a=>{a.pause();a.currentTime=duration*Number(scrub.value)/1000;});stopUI();pause.textContent='Resume';output.value=(duration*Number(scrub.value)/1000000).toFixed(2)+' s';});
 // Wire the Figma Play Animation affordances without adding wrappers to the design.
 for(const text of canvas.querySelectorAll('p'))if(text.textContent.trim()==='Play Animation'){const target=text.closest('button')||text.parentElement;target.setAttribute('role','button');target.tabIndex=0;target.setAttribute('aria-label','Play animation');target.addEventListener('click',replay);target.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();replay();}});}
 if(body.dataset.study==='swatches'){
  const strip=canvas.querySelector('[data-node-id="35:2233"]'),template=document.querySelector('#swatches-expanded');
  if(strip&&template){const original=strip.innerHTML;let opened=false;strip.tabIndex=0;strip.setAttribute('role','button');strip.setAttribute('aria-label','Reveal all colour swatches');strip.setAttribute('aria-expanded','false');
   const open=()=>{if(opened)return;opened=true;strip.replaceChildren(template.content.cloneNode(true));strip.setAttribute('aria-expanded','true');if(!reduced.matches)body.classList.add('motion-running');};
   const close=()=>{if(!opened)return;opened=false;strip.innerHTML=original;strip.setAttribute('aria-expanded','false');body.classList.remove('motion-running');};swatches={open,close};strip.addEventListener('pointerenter',open);strip.addEventListener('pointerleave',close);strip.addEventListener('focus',open);strip.addEventListener('blur',close);strip.addEventListener('click',()=>opened?close():open());strip.addEventListener('keydown',e=>{if(e.key==='Escape')close();if(e.key==='Enter'||e.key===' '){e.preventDefault();opened?close():open();}});
  }
 }
 reduced.addEventListener('change',()=>{if(reduced.matches)resetAll();});document.addEventListener('visibilitychange',()=>{if(document.hidden){animations.forEach(a=>a.pause());stopUI();pause.textContent='Resume';}});
 window.addEventListener('pagehide',()=>{stopUI();resize.disconnect();});
 window.addEventListener('message',e=>{if(e.source!==parent)return;if(e.data?.type==='anchor-motion-pause'){animations.forEach(a=>a.pause());stopUI();pause.textContent='Resume';}});
})();
