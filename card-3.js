// Rimmers Music: Figma default 852:2721 and hover 852:2749.
window.mountRimmersCard=function(card){
  let buttonRevealTimer;
  const assets='Assets/Card 3/card assets/';
  const heading='Designed Around the Customer';
  const words=text=>text.split(' ').map(word=>`<span class="rm-word">${word}</span>`).join(' ');
  const composition=document.createElement('div');composition.className='rm-composition';
  composition.innerHTML=`<div class="rm-logo"><img class="rm-default-logo" src="${assets}logo.svg" alt="Rimmers Music"><img class="rm-hover-logo" src="${assets}logo-hover.svg" alt=""></div><div class="rm-piano"><img src="${assets}piano.png" alt="Grand piano"></div><div class="rm-background-wash"></div><div class="rm-copy"><h2 aria-label="${heading}">${words(heading)}</h2>${window.renderProjectChips('rimmers')}<button class="rm-learn-more project-explore" type="button">Explore Design</button></div>`;
  const content=document.createElement('div');content.className='rm-content';
  content.append(composition.querySelector('.rm-logo'),composition.querySelector('.rm-copy'));
  composition.append(content);
  card.surface.append(composition);let lastActive=false;const animations=[];
  composition.querySelector('.rm-copy').inert=true;composition.querySelector('.project-explore').disabled=true;
  function setActive(active){composition.style.setProperty('--chip-speed',card.config.animation.speed);if(active===lastActive)return;lastActive=active;window.clearTimeout(buttonRevealTimer);card.classList.remove('is-button-ready');const button=composition.querySelector('.project-explore');button.disabled=true;if(active){buttonRevealTimer=window.setTimeout(()=>{card.classList.add('is-button-ready');button.disabled=false;},card.motion.matches?0:420/card.config.animation.speed);}card.classList.toggle('is-project-active',active);animations.splice(0).forEach(a=>a.cancel());composition.querySelector('.rm-copy').inert=!active;if(!active||card.motion.matches)return;
    [{selector:'h2',start:0,duration:276.596,step:124.46800231933594}].forEach(group=>composition.querySelectorAll(group.selector+' .rm-word').forEach((word,i)=>{
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
