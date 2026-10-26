(() => {
  const defaults = {
  "appearance": {
    "width": 660,
    "aspect": 1.3,
    "radius": 12,
    "background": "#c8c8c8",
    "borderColor": "#888888",
    "border": 1,
    "shadow": 0.12,
    "blur": 32,
    "spread": 0,
    "x": 0,
    "y": 0,
    "alignment": "center"
  },
  "tilt": {
    "enabled": true,
    "x": 10,
    "y": 10,
    "perspective": 1100,
    "sensitivity": 1,
    "invertX": false,
    "invertY": false,
    "stiffness": 110,
    "damping": 20,
    "mass": 1,
    "resetSpeed": 1
  },
  "hover": {
    "enabled": true,
    "textRevealBlur": false,
    "duration": 380,
    "delay": 80,
    "stagger": 70,
    "x": 0,
    "y": 16,
    "z": -25,
    "scale": 1.04,
    "opacity": 1,
    "depthAnimation": true,
    "depth": 18
  },
  "parallax": {
    "enabled": true,
    "intensity": 1,
    "smoothing": 14,
    "limit": 45,
    "magnetic": false
  },
  "lighting": {
    "enabled": false,
    "intensity": 0.18,
    "size": 220,
    "shadowMovement": 14,
    "hoverShadow": 0.2,
    "layerShadow": 0.08
  },
  "animation": {
    "speed": 1,
    "playbackSpeed": 1.5,
    "sensitivity": 0,
    "staggered": true,
    "leaveDuration": 400,
    "scaling": true
  },
  "layers": [
    {
      "enabled": true,
      "width": 30,
      "height": 31,
      "scale": 1,
      "opacity": 1,
      "parallax": 0.15,
      "reveal": true,
      "revealAnimation": true,
      "x": 76,
      "y": 25,
      "z": 65
    },
    {
      "enabled": true,
      "width": 33,
      "height": 71,
      "scale": 1,
      "opacity": 1,
      "parallax": 0.2,
      "reveal": true,
      "revealAnimation": true,
      "x": -3,
      "y": 48,
      "z": 68
    },
    {
      "enabled": false,
      "width": 16,
      "height": 10,
      "scale": 1,
      "opacity": 1,
      "parallax": 0.25,
      "reveal": true,
      "revealAnimation": true,
      "x": 58,
      "y": 75,
      "z": 110
    }
  ],
  "cardPositions": {
    "fsg": [
      {
        "x": 76,
        "y": 25,
        "z": 65
      },
      {
        "x": -3,
        "y": 48,
        "z": 68
      },
      {
        "x": 58,
        "y": 75,
        "z": 110
      }
    ],
    "bikers": [
      {
        "x": 57,
        "y": -12,
        "z": 65
      },
      {
        "x": 39,
        "y": 61,
        "z": 68
      },
      {
        "x": 58,
        "y": 75,
        "z": 110
      }
    ]
  }
};
  defaults.cardPositions.rimmers=[{x:76,y:55,z:65},{x:-3,y:48,z:68},{x:58,y:75,z:110}];
  defaults.cardPositions.anchor=[{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0}];
  defaults.cardPositions.faith=[{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0}];
  defaults.cardPositions.judy=[{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0}];
  defaults.cardPositions.furniture=[{x:66,y:3,z:65},{x:67,y:46,z:68},{x:58,y:75,z:110}];
  defaults.designBackground={mode:'dotgrid',dotSize:2,gap:22,opacity:.45,strength:1,mouseInteraction:true,clickShock:true,shockStrength:5,shockRadius:320,shockSpeed:650,shockWidth:1.4,shockFade:1,proximity:140,bounce:.6,tension:.4,returnDuration:.8,swell:.8,stretch:.5,glow:.5};
  const settingsRevision="codex-baseline-20261013";
  const storageKey='portfolio-interactive-card';
  const copy=()=>JSON.parse(JSON.stringify(defaults));
  const merge=(base,saved)=>{Object.keys(base).forEach(k=>{if(saved?.[k]===undefined)return;if(base[k]&&typeof base[k]==='object')merge(base[k],saved[k]);else if(typeof saved[k]===typeof base[k])base[k]=saved[k];});return base;};
  let saved;try{saved=JSON.parse(localStorage.getItem(storageKey));}catch{}
  // Migrate the retained layers once, preserving their customised geometry and depth.
  if (saved && saved.layerSchemaVersion !== 2) {
    if (Array.isArray(saved.layers) && saved.layers.length === 5) saved.layers=saved.layers.slice(2);
    saved.layers?.forEach((layer,i)=>{
      if(saved.sketchLayoutVersion){
        if(layer.x===[-7,86,70][i])layer.x=defaults.layers[i].x;
        if(layer.y===[31,23,80][i])layer.y=defaults.layers[i].y;
      }
      layer.reveal=false;
    });
    delete saved.sketchLayoutVersion;
    saved.layerSchemaVersion=2;
    try{localStorage.setItem(storageKey,JSON.stringify(saved));}catch{}
  }
  if(saved&&!saved.cardPositions){
    const positions=(saved.layers||defaults.layers).map((layer,i)=>({x:layer.x??defaults.layers[i].x,y:layer.y??defaults.layers[i].y,z:layer.z??defaults.layers[i].z}));
    saved.cardPositions={fsg:JSON.parse(JSON.stringify(positions)),bikers:JSON.parse(JSON.stringify(positions))};
    try{localStorage.setItem(storageKey,JSON.stringify(saved));}catch{}
  }
  if(saved?.settingsRevision!==settingsRevision){
    saved={...copy(),layerSchemaVersion:2,settingsRevision};
    try{localStorage.setItem(storageKey,JSON.stringify(saved));}catch{}
  }
  if(saved&&saved.textBlurDefaultVersion!==2){saved.hover.textRevealBlur=false;saved.textBlurDefaultVersion=2;}
  const interactiveCardConfig=merge(copy(),saved); window.interactiveCardConfig=interactiveCardConfig;interactiveCardConfig.caseStudies=saved?.caseStudies||{};
  // Decode sheets once before exposing animated layers on either card.
  function prepareSpriteAssets(project){
    const sources=['furniture','judy','faith','anchor'].includes(project)?[]:project==='rimmers'?['Assets/Card 3/card assets/piano-keys-stable.webp']:project==='bikers'?['Assets/Card 2/card assets/motocross.webp','Assets/Card 2/card assets/speedometer.webp']:['Assets/Card Sprites/bunny-stable.webp','Assets/Card Sprites/dragon.webp'];
    return Promise.all(sources.map(src=>{const image=new Image();image.src=src;return image.decode().then(()=>true).catch(()=>false);}));
  }
  const mobileMode=matchMedia('(max-width: 700px), (hover: none) and (pointer: coarse)');
  class InteractiveProjectCard extends HTMLElement {
    connectedCallback(){
      this.innerHTML='<div class="card-surface">'+defaults.layers.map((_,i)=>'<div class="card-layer'+(i<2?' has-sprite':'')+'">'+(i<2&&!['furniture','judy','faith','anchor'].includes(this.dataset.project)?'<span class="card-sprite '+(this.dataset.project==='furniture'?'is-drawer':this.dataset.project==='rimmers'?'is-piano':this.dataset.project==='bikers'?(i===0?'is-motocross':'is-speedometer'):(i===0?'is-bunny':'is-dragon'))+'" aria-hidden="true"></span>':'')+'</div>').join('')+'<div class="card-light"></div></div>';
      this.surface=this.querySelector('.card-surface');this.layers=[...this.querySelectorAll('.card-layer')];this.light=this.querySelector('.card-light');this.sprites=[...this.querySelectorAll('.card-sprite')];
      this.pointer={x:0,y:0};this.position={x:0,y:0};this.velocity={x:0,y:0};this.hover=false;this.last=0;this.enterTime=0;this.progress=defaults.layers.map(()=>0);this.config=interactiveCardConfig;
      this.spritesReady=false;
      prepareSpriteAssets(this.dataset.project).then(results=>{this.spritesReady=results.every(Boolean);this.wake();});
      if(this.dataset.project==='rimmers'){
        this.sprites[0].innerHTML='<span class="piano-frame is-current"></span><span class="piano-frame is-next"></span>';
      }
      this.motion=matchMedia('(prefers-reduced-motion: reduce)');
      if(this.dataset.project==='fsg'){this.classList.add('is-fsg');this.projectContent=window.mountFsgCard(this);}
      if(this.dataset.project==='bikers'){this.classList.add('is-bikers');this.projectContent=window.mountBikersCard(this);}
      if(this.dataset.project==='rimmers'){this.classList.add('is-rimmers');this.projectContent=window.mountRimmersCard(this);}
      if(this.dataset.project==='anchor'){this.classList.add('is-anchor');this.projectContent=window.mountAnchorCard(this);}
      if(this.dataset.project==='faith'){this.classList.add('is-faith');this.projectContent=window.mountFaithCard(this);}
      if(this.dataset.project==='judy'){this.classList.add('is-judy');this.projectContent=window.mountJudyCard(this);}
      if(this.dataset.project==='furniture'){this.classList.add('is-furniture');this.projectContent=window.mountFurnitureCard(this);}
      this.addEventListener('pointerenter',e=>{if(this.returnReset||mobileMode.matches||e.pointerType==='touch'||this.hover)return;this.hover=true;this.enterTime=performance.now();this.wake();});
      this.addEventListener('pointermove',e=>{if(mobileMode.matches||e.pointerType==='touch')return;this.returnReset=false;const r=this.getBoundingClientRect();this.pointer={x:Math.max(-1,Math.min(1,((e.clientX-r.left)/r.width)*2-1)),y:Math.max(-1,Math.min(1,((e.clientY-r.top)/r.height)*2-1))};if(!this.hover){this.hover=true;this.enterTime=performance.now();}this.wake();});
      this.addEventListener('pointerleave',()=>{if(!mobileMode.matches)this.reset();});this.addEventListener('focusin',()=>{
        if(this.returnReset)return;
        // A pointer click focuses the card; preserve the current reveal timeline.
        if (!this.hover) {
          this.hover=true;
          this.enterTime=performance.now();
        }
        this.wake();
      });this.addEventListener('focusout',event=>{
        if(!this.contains(event.relatedTarget))this.returnReset=false;
        if (!this.contains(event.relatedTarget)&&!mobileMode.matches&&!this.matches(':hover')) this.reset();
      });this.addEventListener('keydown',()=>{if(this.returnReset){this.returnReset=false;this.enterTime=performance.now();this.wake();}});this.update();
    }
    resetAfterNavigation(){this.returnReset=true;this.reset();this.position={x:0,y:0};this.velocity={x:0,y:0};this.progress.fill(0);this.projectContent?.setActive(false);}
    reset(){this.mobileFocused=false;this.classList.remove('is-scroll-focused');this.hover=false;this.pointer={x:0,y:0};this.wake();}
    update(){this.config=interactiveCardConfig;const c=this.config;this.style.setProperty('--text-reveal-blur',c.hover.textRevealBlur?'6px':'0px');this.style.setProperty('--card-width',c.appearance.width+'px');document.querySelector('.design-card-row').style.setProperty('--card-width',c.appearance.width+'px');this.style.setProperty('--card-perspective',c.tilt.perspective+'px');this.style.transform=`translate(${c.appearance.x}px,${c.appearance.y}px)`;this.style.justifySelf=c.appearance.alignment;const s=this.surface.style;for(const [k,v]of Object.entries({'--card-aspect':c.appearance.aspect,'--card-radius':c.appearance.radius+'px','--card-bg':c.appearance.background,'--card-border-color':c.appearance.borderColor,'--card-border':c.appearance.border+'px'}))s.setProperty(k,v);this.wake();}
    wake(){if(this.frame)return;this.last=performance.now();this.frame=requestAnimationFrame(t=>this.tick(t));}
    tick(now){this.frame=0;const c=this.config;const dt=Math.min((now-this.last)/1000,0.025);this.last=now;const reduced=this.motion.matches;const active=this.mobileFocused||(!this.returnReset&&(this.matches(':focus-within')||(this.hover&&Math.hypot(this.pointer.x,this.pointer.y)>=c.animation.sensitivity)));let moving=false;
      this.projectContent?.setActive(active);
      for(const axis of ['x','y']){const target=active&&!reduced?this.pointer[axis]:0;const speed=c.animation.speed*(active?1:c.tilt.resetSpeed);const acceleration=(c.tilt.stiffness*(target-this.position[axis])-c.tilt.damping*this.velocity[axis])/c.tilt.mass;this.velocity[axis]+=acceleration*dt*speed;this.position[axis]+=this.velocity[axis]*dt*speed;if(reduced)this.position[axis]=0;moving ||= Math.abs(target-this.position[axis])>0.0005||Math.abs(this.velocity[axis])>0.0005;}
      const px=this.position.x,py=this.position.y;const tx=c.tilt.enabled?-py*c.tilt.x*c.tilt.sensitivity*(c.tilt.invertX?-1:1):0;const ty=c.tilt.enabled?px*c.tilt.y*c.tilt.sensitivity*(c.tilt.invertY?-1:1):0;
      const magnet=c.parallax.magnetic&&!reduced?8:0;this.surface.style.transform=`translate3d(${px*magnet}px,${py*magnet}px,0) rotateX(${tx}deg) rotateY(${ty}deg)`;
      this.layers.forEach((el,i)=>{const l={...c.layers[i],...c.cardPositions[this.dataset.project||'fsg'][i]};if(['furniture','judy','faith','anchor'].includes(this.dataset.project)||(this.dataset.project==='rimmers'&&i>0))l.enabled=false;const delay=c.hover.delay+(c.animation.staggered?i*c.hover.stagger:0);const reveal=active&&now-this.enterTime>=delay;const target=reveal?1:0;const duration=(active?c.hover.duration:c.animation.leaveDuration)/c.animation.speed;const immediate=reduced||!l.revealAnimation;const rate=immediate?1:1-Math.exp(-dt*1000*5/Math.max(duration,1));this.progress[i]+=(target-this.progress[i])*rate;const h=this.progress[i];moving ||= Math.abs(h-target)>0.001;const revealed=!l.reveal||!c.hover.enabled;const r=revealed?1:h;const par=c.parallax.enabled&&!reduced?l.parallax*c.parallax.intensity*c.parallax.limit:0;const smooth=1-Math.exp(-c.parallax.smoothing*dt);el._px=(el._px||0)+(px-(el._px||0))*smooth;el._py=(el._py||0)+(py-(el._py||0))*smooth;moving ||= Math.abs(el._px-px)>0.001||Math.abs(el._py-py)>0.001;el.style.display=l.enabled?'block':'none';el.style.left=l.x+'%';el.style.top=l.y+'%';el.style.width=l.width+'%';el.style.height=l.height+'%';el.style.opacity=(i<2&&!this.spritesReady?0:l.opacity)*(revealed?1:r*c.hover.opacity);const z=l.z+(!reduced&&c.hover.depthAnimation?h*c.hover.depth:0)+(revealed?0:(1-r)*c.hover.z);const scale=l.scale*(c.animation.scaling?1+(c.hover.scale-1)*h:1);el.style.transform=`translate3d(${el._px*par+(revealed?0:(1-r)*c.hover.x)}px,${el._py*par+(revealed?0:(1-r)*c.hover.y)}px,${z}px) scale(${scale})`;el.style.boxShadow=`0 8px 18px rgba(0,0,0,${c.lighting.layerShadow})`;});
      // Playback stays on a child so it cannot overwrite the layer's 3D transform.
      this.sprites.forEach((sprite,i)=>{
        if(this.dataset.project==='rimmers'&&i>0)return;
        const bikers=this.dataset.project==='bikers';
        const columns=this.dataset.project==='furniture'?5:bikers&&i===1?6:4;
        const count=columns*2;
        const duration=this.dataset.project==='furniture'?2600:this.dataset.project==='rimmers'?2200:bikers?(i===0?1800:2400):(i===0?1810:1880);
        const frame=active&&!reduced?Math.floor((Math.max(0,now-this.enterTime)*c.animation.playbackSpeed%duration)/duration*count):0;
        if(this.dataset.project==='rimmers'){
          // Lock the keyboard to one reference pose; blend only the moving middle key.
          const elapsed=active&&!reduced?(now-this.enterTime)*c.animation.playbackSpeed:0;
          const phase=elapsed%1800;
          const ease=t=>(1-Math.cos(Math.PI*Math.max(0,Math.min(1,t))))/2;
          let press=0;
          if(active&&!reduced){
            if(phase>=240&&phase<420)press=ease((phase-240)/180);
            else if(phase>=420&&phase<520)press=1;
            else if(phase>=520&&phase<820)press=1-ease((phase-520)/300);
          }
          const frames=sprite.querySelectorAll('.piano-frame');
          frames[0].style.backgroundPosition='0% 0%';
          frames[0].style.opacity='1';
          frames[1].style.backgroundPosition='0% 100%';
          frames[1].style.opacity=String(press);
          sprite.style.setProperty('--piano-offset-y','0%');
        }else if(bikers&&i===1){
          // The supplied dial atlas has 353px spacing, not equal-width cells.
          const centres=[205,557,910,1263,1616,1968];
          const frameSize=350;
          const x=centres[frame%6]-frameSize/2;
          const y=frame<6?10:365;
          sprite.style.backgroundSize=`${2172/frameSize*100}% ${724/frameSize*100}%`;
          sprite.style.backgroundPosition=`${x/(2172-frameSize)*100}% ${y/(724-frameSize)*100}%`;
        }else{
          sprite.style.backgroundPosition=`${(frame%columns)*100/(columns-1)}% ${Math.floor(frame/columns)*100}%`;
        }
        if(bikers&&i===0){
          // Keep the rear tyre planted while the front wheel rises and falls.
          const anchors=[[110,351],[107,360],[114,381],[102,386],[113,339],[100,337],[100,327],[99,333]];
          const [x,y]=anchors[frame];
          sprite.style.setProperty('--sprite-offset-x',`${(110-x)/443.5*100}%`);
          sprite.style.setProperty('--sprite-offset-y',`${(351-y)/443.5*100}%`);
        }
      });
      const strength=c.appearance.shadow+(active?c.lighting.hoverShadow:0);this.surface.style.boxShadow=`${-px*c.lighting.shadowMovement}px ${12-py*c.lighting.shadowMovement}px ${c.appearance.blur}px ${c.appearance.spread}px rgba(0,0,0,${Math.min(1,strength)})`;
      this.light.style.background=c.lighting.enabled?`radial-gradient(circle ${c.lighting.size}px at ${(px+1)*50}% ${(py+1)*50}%, rgba(255,255,255,${c.lighting.intensity}), transparent)`:'none';
      if(moving||(active&&!reduced))this.frame=requestAnimationFrame(t=>this.tick(t));
    }
  }
  customElements.define('interactive-project-card',InteractiveProjectCard);
  const cards=()=>[...document.querySelectorAll('interactive-project-card')];const controls=document.querySelector('#configControls');
  const ranges={shockStrength:[0,15,.25],shockRadius:[50,1500,10],shockSpeed:[100,1800,25],shockWidth:[.25,6,.05],shockFade:[.25,4,.05],proximity:[20,500,5],bounce:[0,.9,.01],tension:[0,1,.01],returnDuration:[.3,3,.05],swell:[0,3,.05],stretch:[0,3,.05],glow:[0,2,.05],dotSize:[1,8,.5],gap:[6,60,1],strength:[0,3,.05],width:[300,1200,8],aspect:[1,3,0.05],radius:[0,80,1],border:[0,10,0.5],shadow:[0,1,0.01],blur:[0,120,1],spread:[-20,40,1],x:[-200,200,1],y:[-200,200,1],perspective:[300,2500,10],sensitivity:[0,2,0.05],stiffness:[10,300,1],damping:[2,60,1],mass:[0.2,5,0.1],resetSpeed:[0.2,3,0.1],z:[-100,250,1],scale:[0.2,2,0.01],opacity:[0,1,0.01],parallax:[0,1,0.01],duration:[0,1500,10],delay:[0,1000,10],stagger:[0,400,10],depth:[0,100,1],intensity:[0,2,0.01],smoothing:[1,40,1],limit:[0,100,1],size:[20,800,10],shadowMovement:[0,80,1],hoverShadow:[0,1,0.01],layerShadow:[0,1,0.01],speed:[0.2,3,0.1],playbackSpeed:[0.1,4,0.1],leaveDuration:[0,1500,10]};
  const labels={shockStrength:'Click ripple strength',shockRadius:'Click ripple reach (px)',shockSpeed:'Click ripple speed (px/s)',shockWidth:'Click ripple width (× spacing)',shockFade:'Click ripple fade (higher = faster)',proximity:'Cursor response radius (px)',bounce:'Spring bounce',tension:'Neighbour coupling',returnDuration:'Spring return time (s)',swell:'Active dot growth',stretch:'Motion stretch',glow:'Active glow',mode:'Background',dotSize:'Dot size (px)',gap:'Dot spacing (px)',strength:'Interaction strength',mouseInteraction:'Cursor interaction',clickShock:'Click shockwaves',textRevealBlur:'Text reveal blur',playbackSpeed:'Sprite playback speed (×)',x:'X position',y:'Y position',z:'Z depth',aspect:'Aspect ratio',border:'Border thickness',shadow:'Shadow intensity',blur:'Shadow blur',spread:'Shadow spread',resetSpeed:'Mouse-leave reset speed',depth:'Hover Z movement',scale:'Scale',reveal:'Reveal on hover',revealAnimation:'Animate reveal',sensitivity:'Sensitivity'};
  function save(){try{localStorage.setItem(storageKey,JSON.stringify({...interactiveCardConfig,layerSchemaVersion:2,settingsRevision,textBlurDefaultVersion:2}));}catch{}cards().forEach(card=>card.update());window.dispatchEvent(new Event('portfolio-background-change'));}
  window.saveInteractiveCardConfig=save;
  function section(title,obj,group){const details=document.createElement('details');details.className='config-section';details.dataset.cardConfig='true';const summary=document.createElement('summary');summary.textContent=title;details.append(summary);const body=document.createElement('div');body.className='config-section-body';details.append(body);
    for(const [key,value]of Object.entries(obj)){if(group.startsWith('layer-shared')&&['x','y','z'].includes(key))continue;const label=document.createElement('label');label.className=typeof value==='boolean'?'config-check':'config-control';const id='card-'+group+'-'+key;label.htmlFor=id;const row=document.createElement('span');row.className='config-control-row';const text=document.createElement('span');text.textContent=group.startsWith('layer')&&['x','y','width','height'].includes(key)?({x:'X position (%)',y:'Y position (%)',width:'Width (%)',height:'Height (%)'}[key]):labels[key]||key.replace(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase());row.append(text);const input=document.createElement(key==='alignment'||key==='mode'?'select':'input');input.id=id;
      if(typeof value==='boolean'){input.type='checkbox';input.checked=value;}else if(typeof value==='number'){input.type='range';let range=ranges[key]||[0,100,1];if(group==='tilt'&&['x','y'].includes(key))range=[0,30,0.5];if(group.startsWith('layer')&&['x','y'].includes(key))range=[-30,100,1];if(group.startsWith('layer')&&['width','height'].includes(key))range=[1,100,1];if(group==='animation'&&key==='sensitivity')range=[0,1,0.01];[input.min,input.max,input.step]=range;input.value=value;const output=document.createElement('output');output.htmlFor=id;output.textContent=value;row.append(output);input.addEventListener('input',()=>output.textContent=input.value);}else if(key==='mode'){for(const [v,label]of [['dotgrid','DotGrid'],['existing','Existing Background'],['plain','Plain']])input.add(new Option(label,v));input.value=value;}else if(key==='alignment'){for(const v of ['start','center','end']){const opt=new Option(v,v);input.add(opt);}input.value=value;}else{input.type='color';input.value=value;}
      input.addEventListener('input',()=>{obj[key]=typeof value==='boolean'?input.checked:typeof value==='number'?Number(input.value):input.value;save();});label.append(row,input);body.append(label);
    }controls.append(details);}
  function build(){controls.querySelectorAll('[data-card-config]').forEach(e=>e.remove());section('Design Background',interactiveCardConfig.designBackground,'designBackground');for(const group of ['appearance','tilt','hover','parallax','lighting','animation'])section('3D Card · '+group,interactiveCardConfig[group],group);interactiveCardConfig.layers.forEach((layer,i)=>section('3D Card · Layer '+(i+1)+' · Shared',layer,'layer-shared'+i));for(const [project,title]of [['fsg','Card 1 · Felt So Good'],['bikers','Card 2 · Bikers World'],['rimmers','Card 3 · Rimmers Music'],['furniture','Card 4 · Big Furniture Warehouse']]){interactiveCardConfig.cardPositions[project].forEach((position,i)=>{if(project==='furniture')return;section(title+' · Layer '+(i+1)+' position',position,'layer-'+project+'-'+i);});}const reset=document.createElement('button');reset.type='button';reset.className='config-reset';reset.dataset.cardConfig='true';reset.textContent='Reset 3D Card Settings';reset.addEventListener('click',()=>{const background={...interactiveCardConfig.designBackground};merge(interactiveCardConfig,copy());Object.assign(interactiveCardConfig.designBackground,background);build();cards().forEach(card=>card.reset());save();});controls.append(reset);const cardSections=[...controls.querySelectorAll('[data-card-config]')];controls.prepend(...cardSections);}
  build();
  function designAddress(){const current=new URLSearchParams(location.search),params=new URLSearchParams();for(const key of ['layout','photoLayout'])if(['sidebar','original'].includes(current.get(key)))params.set(key,current.get(key));return location.pathname+(params.size?'?'+params.toString():'');}
  function route(options={}){const design=!location.hash.startsWith('#project/')&&location.hash!=='#photography'&&new URLSearchParams(location.search).get('view')!=='folders';document.querySelector('.page').classList.toggle('is-design-home',design);document.querySelector('#designCardPage').hidden=!design;document.querySelector('#stage').inert=design;document.querySelector('#configPanel').inert=!design&&catalogueIsHome;document.querySelectorAll('[data-page]').forEach(a=>{a.href=designAddress()+(a.dataset.page==='photography'?'#photography':'');const active=a.dataset.page===(design?'design':'photography');a.classList.toggle('is-active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});cards().forEach(card=>{if(design)card.update();else card.reset();});window.dispatchEvent(new CustomEvent('portfolio-view-change',{detail:{skipSidebarReveal:options.skipSidebarReveal===true}}));}
  document.querySelectorAll('[data-page="design"], .site-nav-brand').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();if(link.matches('.site-nav-brand')&&document.querySelector('.page').classList.contains('is-design-home'))return;history.pushState(null,'',designAddress());route({skipSidebarReveal:link.matches('.site-nav-brand')});}));window.addEventListener('hashchange',route);window.addEventListener('popstate',route);route();document.querySelector('.page').classList.add('portfolio-route-ready');
  setupMobileCards();

  function setupMobileCards(){
    const page=document.querySelector('#designCardPage');
    if(mobileMode.matches){
      document.querySelector('#configPanel').classList.add('is-collapsed');
      const toggle=document.querySelector('#configToggle');
      toggle.textContent='Show';toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Show wheel configuration');
    }

    let focused=null,scheduled=false,neutral=null,orientationAngle=null;
    const reduced=matchMedia('(prefers-reduced-motion: reduce)');
    function activate(card){
      if(card===focused)return;
      if(focused)focused.reset();focused=card;
      if(card){card.mobileFocused=true;card.hover=true;card.enterTime=performance.now();card.pointer={x:0,y:0};card.classList.add('is-scroll-focused');card.wake();}
    }
    function updateFocus(){
      scheduled=false;
      if(!mobileMode.matches||page.hidden||document.hidden){activate(null);return;}
      const bounds=page.getBoundingClientRect();const centre=(bounds.top+bounds.bottom)/2;
      const candidates=cards().map(card=>{const r=card.getBoundingClientRect();return {card,distance:Math.abs((r.top+r.bottom)/2-centre),visible:Math.max(0,Math.min(r.bottom,bounds.bottom)-Math.max(r.top,bounds.top))/r.height};}).filter(c=>c.visible>=.35).sort((a,b)=>a.distance-b.distance);
      let next=candidates[0];const previous=candidates.find(c=>c.card===focused);
      if(previous&&next&&previous.distance-next.distance<60)next=previous;
      activate(next?.card||null);
    }
    function schedule(){if(!scheduled){scheduled=true;requestAnimationFrame(updateFocus);}}
    page.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);window.addEventListener('portfolio-view-change',schedule);document.addEventListener('visibilitychange',schedule);
    mobileMode.addEventListener('change',()=>{cards().forEach(c=>c.reset());focused=null;neutral=null;schedule();});
    const button=document.createElement('button');button.type='button';button.className='motion-enable';button.textContent='Enable motion tilt';button.hidden=true;page.append(button);
    let sensorStarted=false;
    function receiveOrientation(event){
      if(!mobileMode.matches||page.hidden||document.hidden||reduced.matches||!focused||!Number.isFinite(event.beta)||!Number.isFinite(event.gamma))return;
      const angle=screen.orientation?.angle||0;
      if(!neutral||angle!==orientationAngle){neutral={beta:event.beta,gamma:event.gamma};orientationAngle=angle;}
      const dx=event.gamma-neutral.gamma,dy=event.beta-neutral.beta;const radians=angle*Math.PI/180;
      const clamp=v=>Math.max(-1,Math.min(1,v/20));
      focused.pointer={x:clamp(dx*Math.cos(radians)+dy*Math.sin(radians)),y:clamp(dy*Math.cos(radians)-dx*Math.sin(radians))};focused.wake();
      button.hidden=true;
    }
    function start(){if(sensorStarted)return;sensorStarted=true;window.addEventListener('deviceorientation',receiveOrientation);}
    const supported=window.isSecureContext&&typeof DeviceOrientationEvent!=='undefined';
    function updatePermissionControl(){
      button.hidden=!mobileMode.matches||reduced.matches||!supported||sensorStarted;
      if(supported&&typeof DeviceOrientationEvent.requestPermission!=='function')start();
    }
    button.addEventListener('click',async()=>{
      try{const permission=typeof DeviceOrientationEvent.requestPermission==='function'?await DeviceOrientationEvent.requestPermission():'granted';if(permission==='granted'){neutral=null;start();button.hidden=true;}else{button.textContent='Motion access denied';button.disabled=true;}}catch{button.textContent='Motion unavailable';button.disabled=true;}
    });
    mobileMode.addEventListener('change',updatePermissionControl);reduced.addEventListener('change',()=>{neutral=null;updatePermissionControl();schedule();});
    updatePermissionControl();schedule();
  }
})();
