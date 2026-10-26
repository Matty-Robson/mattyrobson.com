// Bikers World: Figma default 836:526 and hover 836:541.
window.mountBikersCard=function(card){
  const assets='Assets/Card 2/card assets/';
  let buttonRevealTimer;
  const heading='Improving the Shopping Experience';
  const words=text=>text.split(' ').map(word=>`<span class="bw-word">${word}</span>`).join(' ');
  const composition=document.createElement('div');composition.className='bw-composition';
  composition.innerHTML=`<div class="bw-logo"><img class="bw-default-logo" src="${assets}logo.svg" alt="Bikers World"><img class="bw-hover-logo" src="${assets}logo-hover.svg" alt=""></div><img class="bw-rider" src="${assets}rider.png" alt="Motorcycle rider"><div class="bw-copy"><h2 aria-label="${heading}">${words(heading)}</h2>${window.renderProjectChips('bikers')}<button class="bw-learn-more project-explore" type="button">Explore Design</button></div>`;
  const content=document.createElement('div');content.className='bw-content';
  content.append(composition.querySelector('.bw-logo'),composition.querySelector('.bw-copy'));
  composition.append(content);
  card.surface.append(composition);let lastActive=false;const animations=[];
  composition.querySelector('.bw-copy').inert=true;composition.querySelector('.bw-learn-more').disabled=true;
  function setActive(active){composition.style.setProperty('--chip-speed',card.config.animation.speed);if(active===lastActive)return;lastActive=active;card.classList.toggle('is-project-active',active);window.clearTimeout(buttonRevealTimer);card.classList.remove('is-button-ready');const button=composition.querySelector('.bw-learn-more');button.disabled=true;if(active){const delay=card.motion.matches?0:420/card.config.animation.speed;buttonRevealTimer=window.setTimeout(()=>{card.classList.add('is-button-ready');button.disabled=false;},delay);}animations.splice(0).forEach(a=>a.cancel());composition.querySelector('.bw-copy').inert=!active;if(!active||card.motion.matches)return;
    [{selector:'h2',start:0,duration:276.596,step:124.46800231933594}].forEach(group=>composition.querySelectorAll(group.selector+' .bw-word').forEach((word,i)=>{
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
