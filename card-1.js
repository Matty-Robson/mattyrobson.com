// Figma 825:14 / 831:206. Geometry uses the 660 × 508 design canvas.
window.mountFsgCard = function(card) {
  const assets='Assets/Card 1/card assets/';
  let buttonRevealTimer;
  const vectors=[
    [94.8037,11.61517,16.36971,25.38483,'831:230'],[0,0,9.35594,28.68,'831:239'],
    [153.29199,.37762,16.36175,28.67244,'831:248'],[9.88086,11.61951,15.66998,17.43091,'831:257'],
    [114.76172,11.5968,16.95793,17.47326,'831:266'],[133.97656,11.5968,16.95793,17.47326,'831:275'],
    [68.50684,11.64679,16.88825,17.40149,'831:284'],[53.88379,11.62738,12.24678,17.41719,'831:293'],
    [29.41992,.37762,2.8142,28.3055,'831:302'],[35.04883,6.18384,8.09576,22.49772,'831:311'],
    [173.13574,.29333,6.86436,7.07169,'831:312'],[175.34668,1.65161,2.70212,4.14879,'831:313']
  ];
  const heading='Bringing Playfulness to Every Interaction';
  const words=text=>text.split(' ').map(word=>`<span class="fsg-word">${word}</span>`).join(' ');
  const composition=document.createElement('div');composition.className='fsg-composition';
  composition.innerHTML=`<div class="fsg-hover-flowers" data-motion-node="831:322"><img src="${assets}flowers-hover.png" alt="Felt flowers"></div><div class="fsg-logo"><img class="fsg-logo-default" src="${assets}logo.svg" alt="Felt So Good"><div class="fsg-logo-vectors" aria-hidden="true">${vectors.map(([x,y,w,h,id],i)=>`<span data-motion-node="${id}" style="left:${x/180*100}%;top:${y/37*100}%;width:${w/180*100}%;height:${h/37*100}%"><img src="${assets}logo-vector-${i}.svg" alt=""></span>`).join('')}</div></div><div class="fsg-copy"><h2 aria-label="${heading}">${words(heading)}</h2>${window.renderProjectChips('fsg')}<button class="fsg-learn-more project-explore" type="button">Explore Design</button></div><div class="fsg-stitch"></div>`;
  card.surface.append(composition);
  const animations=[];let lastActive=false;
  function setActive(active){
    composition.style.setProperty('--chip-speed',card.config.animation.speed);if(active===lastActive)return;lastActive=active;card.classList.toggle('is-project-active',active);window.clearTimeout(buttonRevealTimer);card.classList.remove('is-button-ready');const button=composition.querySelector('.fsg-learn-more');button.disabled=true;if(active){const delay=card.motion.matches?0:420/card.config.animation.speed;buttonRevealTimer=window.setTimeout(()=>{card.classList.add('is-button-ready');button.disabled=false;},delay);}
    animations.splice(0).forEach(animation=>animation.cancel());
    composition.querySelector('.fsg-copy').inert=!active;
    if(!active||card.motion.matches)return;
    const speed=card.config.animation.speed;
    const groups=[{selector:'h2',start:0,duration:232.143,step:104.46424865722656}];
    groups.forEach(group=>composition.querySelectorAll(group.selector+' .fsg-word').forEach((word,i)=>{
      const start=(group.start+i*group.step)/2000,end=(group.start+i*group.step+group.duration)/2000;
      const frames=[{opacity:0,filter:'blur(var(--text-reveal-blur, 6px))',offset:0,easing:'cubic-bezier(0,0,.58,1)'}];
      if(start>0)frames.push({opacity:0,filter:'blur(var(--text-reveal-blur, 6px))',offset:start,easing:'cubic-bezier(0,0,.58,1)'});
      frames.push({opacity:1,filter:'blur(0px)',offset:end},{opacity:1,filter:'blur(0px)',offset:1});
      const animation=word.animate(frames,{duration:2000/speed,iterations:1,fill:'both'});
      animation.onfinish=()=>{
        // Release the filter compositing layer once the word is fully revealed.
        word.style.opacity='1';
        word.style.filter='none';
        animation.cancel();
      };
      animations.push(animation);
    }));
  }
  composition.querySelector('.fsg-copy').inert=true;
  composition.querySelector('.fsg-learn-more').disabled=true;
  return {setActive};
};
