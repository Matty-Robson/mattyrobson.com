// Big Furniture Warehouse: Figma default 876:14, hover 876:28, video 880:110.
window.mountFurnitureCard=function(card){
  let buttonRevealTimer;
  const assets='Assets/Card 4/card assets/';
  const heading='Making Furniture Shopping Feel Effortless';
  const words=text=>text.split(' ').map(word=>`<span class="fw-word">${word}</span>`).join(' ');
  const composition=document.createElement('div');composition.className='fw-composition';
  composition.innerHTML=`<div class="fw-logo"><img class="fw-default-logo" src="${assets}logo.svg" alt="Big Furniture Warehouse"><img class="fw-hover-logo" src="${assets}logo-hover.svg" alt=""></div><div class="fw-copy"><h2 aria-label="${heading}">${words(heading)}</h2>${window.renderProjectChips('furniture')}<button class="fw-learn-more project-explore" type="button">Explore Design</button></div>`;
  const content=document.createElement('div');content.className='fw-content';
  content.append(composition.querySelector('.fw-logo'),composition.querySelector('.fw-copy'));
  composition.append(content);
  card.surface.append(composition);let lastActive=false;const animations=[];
  composition.querySelector('.fw-copy').inert=true;composition.querySelector('.project-explore').disabled=true;
  function setActive(active){composition.style.setProperty('--chip-speed',card.config.animation.speed);if(active===lastActive)return;lastActive=active;window.clearTimeout(buttonRevealTimer);card.classList.remove('is-button-ready');const button=composition.querySelector('.project-explore');button.disabled=true;if(active){buttonRevealTimer=window.setTimeout(()=>{card.classList.add('is-button-ready');button.disabled=false;},card.motion.matches?0:420/card.config.animation.speed);}card.classList.toggle('is-project-active',active);animations.splice(0).forEach(a=>a.cancel());composition.querySelector('.fw-copy').inert=!active;if(!active||card.motion.matches)return;
    [{selector:'h2',start:0,duration:232.143,step:104.46424865722656}].forEach(group=>composition.querySelectorAll(group.selector+' .fw-word').forEach((word,i)=>{
      const start=(group.start+i*group.step)/2000,end=(group.start+i*group.step+group.duration)/2000;
      const frames=[{opacity:0,filter:'blur(var(--text-reveal-blur, 6px))',offset:0,easing:'cubic-bezier(0,0,.58,1)'}];
      if(start>0)frames.push({opacity:0,filter:'blur(var(--text-reveal-blur, 6px))',offset:start,easing:'cubic-bezier(0,0,.58,1)'});
      frames.push({opacity:1,filter:'blur(0px)',offset:end},{opacity:1,filter:'blur(0px)',offset:1});
      const animation=word.animate(frames,{duration:2000/card.config.animation.speed,iterations:1,fill:'both'});
      animation.onfinish=()=>{word.style.opacity='1';word.style.filter='none';animation.cancel();};animations.push(animation);
    }));
  }
  return {setActive};
};
