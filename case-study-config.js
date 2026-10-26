/* Case-study editing reuses the portfolio's panel, state and local persistence. */
(() => {
 'use strict';
 const projects=window.portfolioCaseStudies,config=window.interactiveCardConfig;
 const clone=value=>JSON.parse(JSON.stringify(value));
 const defaults=new Map(projects.map(p=>[p.slug,clone(p)]));
 for(const project of projects)if(config.caseStudies[project.slug])Object.assign(project,clone(config.caseStudies[project.slug]));
 const panel=document.querySelector('#configPanel'),controls=document.querySelector('#configControls'),toggle=document.querySelector('#configToggle');
 const home=document.createComment('Portfolio configuration panel');panel.before(home);
 const heading=panel.querySelector('.config-header strong'),oldHeading=heading.textContent;
 let project=null,selected='',root=null;
 const types={showcase:'Website showcase',annotations:'Interactive annotations',feature:'Feature spotlight',research:'Research & design thinking',comparison:'Before & after',mobile:'Mobile showcase',gallery:'Image gallery',summary:'Project summary',demo:'Interactive demonstration'};
 const node=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n;};
 function save(){if(!project)return;config.caseStudies[project.slug]=clone(project);window.saveInteractiveCardConfig();window.caseStudyController?.refresh();}
 function button(parent,text,action){const b=node('button','case-editor-button',text);b.type='button';b.addEventListener('click',action);parent.append(b);return b;}
 function field(parent,label,value,change,type='text'){
  const wrap=node('label','config-control');wrap.append(node('span','config-control-row',label));
  const input=node(type==='textarea'?'textarea':'input');if(type!=='textarea')input.type=type;input.setAttribute('aria-label',label);input.value=value||'';
  input.addEventListener(/path/i.test(label)?'change':'input',()=>change(input.value));wrap.append(input);parent.append(wrap);return input;
 }
 function select(parent,label,value,choices,change){const wrap=node('label','config-control');wrap.append(node('span','config-control-row',label));const input=node('select');input.setAttribute('aria-label',label);for(const [v,l]of choices)input.add(new Option(l,v));input.value=value;input.addEventListener('change',()=>change(input.value));wrap.append(input);parent.append(wrap);return input;}
 function range(parent,label,value,change){const wrap=node('label','config-control'),row=node('span','config-control-row',label),output=node('output','',Math.round(value*100)+'%');row.append(output);const input=node('input');input.type='range';input.setAttribute('aria-label',label);input.min=0;input.max=100;input.step=1;input.value=Math.round(value*100);input.addEventListener('input',()=>{output.textContent=input.value+'%';change(Number(input.value)/100);});wrap.append(row,input);parent.append(wrap);}
 function group(title){const details=node('details','config-section');details.dataset.caseConfig='true';details.open=title.includes('Section selector')||title.startsWith('Section ·');details.append(node('summary','',title));const body=node('div','config-section-body');details.append(body);root.append(details);return body;}
 function pathValid(value){return !value||(!/^(?:javascript|data|vbscript):/i.test(value)&&!value.startsWith('//'));}
 function imageField(parent,label,item,change){field(parent,label,item?.src||'',value=>{if(!pathValid(value))return;change(value?{...item,src:value,alt:item?.alt||label}:undefined);save();});}
 function build(){
  root?.remove();if(!project)return;root=node('div','case-editor');root.dataset.caseConfig='true';controls.prepend(root);
  const intro=group('Case Study · '+project.title);
  const preview=node('a','case-editor-link','Open section library & interaction demos');preview.href='case-study-preview.html';preview.target='_blank';preview.rel='noopener';intro.append(preview);
  field(intro,'Headline',project.headline,value=>{project.headline=value;save();});field(intro,'Introduction',project.introduction,value=>{project.introduction=value;save();},'textarea');
  field(intro,'Hero background',project.theme.background,value=>{project.theme.background=value;save();},'color');field(intro,'Hero text',project.theme.ink,value=>{project.theme.ink=value;save();},'color');
  field(intro,'Hero screenshot path',project.heroImage,value=>{if(!pathValid(value))return;project.heroImage=value||undefined;save();});
  const overview=group('Case Study · Overview');for(const [key,label]of [['project','The Project'],['involvement','My Involvement'],['approach','The Approach']])field(overview,label,project.overview?.[key],value=>{project.overview||={};project.overview[key]=value;if(!Object.values(project.overview).some(Boolean))delete project.overview;save();},'textarea');
  const metadata=group('Case Study · Metadata');for(const label of ['Industry','Platform','Design disciplines','Responsibilities'])field(metadata,label,project.metadata?.[label],value=>{project.metadata||={};if(value)project.metadata[label]=value;else delete project.metadata[label];save();});
  const sections=group('Case Study · Section selector');
  const list=project.sections||[];if(!list.some(s=>s.id===selected))selected=list[0]?.id||'';
  select(sections,'Selected section',selected,[['','Choose a section'],...list.map((s,i)=>[s.id,`${i+1}. ${s.title||types[s.type]}${s.enabled===false?' (hidden)':''}`])],value=>{selected=value;build();});
  const addType=select(sections,'Add section','showcase',Object.entries(types),()=>{});
  button(sections,'Add selected section',()=>{const type=addType.value,id=type+'-'+Date.now().toString(36);project.sections.push({id,type,title:types[type],placeholder:'Add verified project content to this section.',...(type==='summary'?{body:''}:{})});selected=id;save();build();});
  const active=list.find(s=>s.id===selected);
  if(active){
   const actions=node('div','case-editor-actions');sections.append(actions);const index=list.indexOf(active);
   button(actions,'Move up',()=>{if(index<1)return;[list[index-1],list[index]]=[list[index],list[index-1]];save();build();}).disabled=index===0;
   button(actions,'Move down',()=>{if(index>=list.length-1)return;[list[index+1],list[index]]=[list[index],list[index+1]];save();build();}).disabled=index===list.length-1;
   button(actions,active.enabled===false?'Show section':'Hide section',()=>{active.enabled=active.enabled===false;save();build();});
   button(actions,'Remove section',()=>{list.splice(index,1);selected='';save();build();});
   const editor=group('Section · '+types[active.type]);
   field(editor,'Title',active.title,value=>{active.title=value;save();});field(editor,'Description',active.description,value=>{active.description=value;save();},'textarea');field(editor,'Placeholder note',active.placeholder,value=>{active.placeholder=value||undefined;save();},'textarea');
   if(['showcase','gallery','mobile','feature'].includes(active.type)){
    const layouts=active.type==='feature'?['image-left','image-right','full']:active.type==='mobile'?['three','prominent','horizontal']:['full','contained','split','grid','horizontal'];
    select(editor,'Layout',active.layout||layouts[0],layouts.map(l=>[l,l.replaceAll('-',' ')]),value=>{active.layout=value;save();});
    field(editor,'Image paths (one per line)',(active.images||[]).map(i=>i.src||'').join('\n'),value=>{const paths=value.split('\n').map(p=>p.trim()).filter(Boolean);if(paths.some(p=>!pathValid(p)))return;active.images=paths.map((src,i)=>({...active.images?.[i],src,alt:active.images?.[i]?.alt||active.title||'Project design'}));if(paths.length)delete active.placeholder;save();},'textarea');
    for(const [i,item]of (active.images||[]).entries()){
     const details=node('details','config-section');details.append(node('summary','',`Image ${i+1} · Accessibility & crop`));const body=node('div','config-section-body');details.append(body);editor.append(details);
     field(body,'Image description',item.alt,value=>{item.alt=value;save();});field(body,'Caption',item.caption,value=>{item.caption=value;save();});
     button(body,item.crop?'Remove crop':'Configure crop',()=>{if(item.crop)delete item.crop;else item.crop={aspectRatio:'1.5',fit:'cover',x:.5,y:.5};save();build();});
     if(item.crop){field(body,'Crop aspect ratio',item.crop.aspectRatio,value=>{item.crop.aspectRatio=value;save();});select(body,'Image fit',item.crop.fit||'cover',[['cover','Fill crop'],['contain','Contain image']],value=>{item.crop.fit=value;save();});for(const axis of ['x','y'])range(body,'Focal point '+axis,item.crop[axis]??.5,value=>{item.crop[axis]=value;save();});}
    }
    if(active.type==='feature'){field(editor,'Section number',active.number,value=>{active.number=value;save();});field(editor,'Category',active.category,value=>{active.category=value;save();});field(editor,'Supporting chips (comma separated)',(active.chips||[]).join(', '),value=>{active.chips=value.split(',').map(x=>x.trim()).filter(Boolean);save();});}
   }
   if(active.type==='demo')select(editor,'Demonstration',active.demo||'search',[['horizontal-filters','Horizontal filters'],['quick-buy','Quick buy'],['search','Search'],['fast-filters','Image fast filters'],['filters','Filters'],['products','Product cards'],['cart','Basket'],['navigation','Navigation'],['accordion','Accordion'],['footer','Footer'],['motion','Motion library']],value=>{active.demo=value;delete active.placeholder;save();});
   if(active.type==='summary')field(editor,'Closing summary',active.body,value=>{active.body=value;if(value)delete active.placeholder;save();},'textarea');
   if(active.type==='comparison'){
    imageField(editor,'Before image path',active.before,value=>{active.before=value;if(active.before?.src&&active.after?.src)delete active.placeholder;});imageField(editor,'After image path',active.after,value=>{active.after=value;if(active.before?.src&&active.after?.src)delete active.placeholder;});select(editor,'Comparison mode',active.mode||'slider',[['slider','Interactive slider'],['static','Side by side']],value=>{active.mode=value;save();});
   }
   if(active.type==='annotations'){
    imageField(editor,'Annotated screenshot path',active.image,value=>{active.image=value;if(value)delete active.placeholder;});
    button(editor,'Add hotspot',()=>{active.annotations||=[];active.annotations.push({title:'Design feature',description:'Add a verified explanation.',x:.5,y:.5});save();build();});
    for(const [i,a]of (active.annotations||[]).entries()){
     const item=node('details','config-section');item.append(node('summary','',`${i+1}. ${a.title}`));const body=node('div','config-section-body');item.append(body);editor.append(item);
     field(body,'Title',a.title,value=>{a.title=value;save();});field(body,'Explanation',a.description,value=>{a.description=value;save();},'textarea');field(body,'Category',a.category,value=>{a.category=value;save();});range(body,'Horizontal position',a.x,value=>{a.x=value;save();});range(body,'Vertical position',a.y,value=>{a.y=value;save();});
     imageField(body,'Optional crop image path',a.image,value=>a.image=value);
     button(body,a.region?'Remove highlighted region':'Add highlighted region',()=>{if(a.region)delete a.region;else a.region={x:a.x,y:a.y,width:.2,height:.15};save();build();});
     if(a.region)for(const key of ['x','y','width','height'])range(body,'Region '+key,a.region[key],value=>{a.region[key]=value;save();});
     button(body,'Remove hotspot',()=>{active.annotations.splice(i,1);save();build();});
    }
   }
   if(active.type==='research'){
    select(editor,'Research layout',active.layout||'grid',[['grid','Visual modules'],['considerations','Numbered considerations']],value=>{active.layout=value;save();});
    button(editor,'Add research item',()=>{active.items||=[];active.items.push({title:'Research item',description:'Add a supplied finding or design consideration.'});delete active.placeholder;save();build();});
    for(const [i,item]of (active.items||[]).entries()){const body=node('div','case-editor-research');editor.append(body);select(body,'Item format',item.kind||'insight',[['insight','Insight / problem → response'],['exploration','Exploration image grid']],value=>{item.kind=value;save();build();});field(body,'Item number',item.number,value=>{item.number=value;save();});if(item.kind==='exploration')field(body,'Exploration image paths (one per line)',(item.images||[]).map(i=>i.src).join('\n'),value=>{const paths=value.split('\n').map(x=>x.trim()).filter(Boolean);if(paths.some(p=>!pathValid(p)))return;item.images=paths.map(src=>({src,alt:item.title||'Design exploration'}));save();},'textarea');field(body,'Item '+(i+1)+' title',item.title,value=>{item.title=value;save();});field(body,'Finding / consideration',item.description,value=>{item.description=value;save();},'textarea');field(body,'Design response',item.solution,value=>{item.solution=value;save();},'textarea');imageField(body,'Supporting image path',item.image,value=>item.image=value);button(body,'Remove item',()=>{active.items.splice(i,1);save();build();});}
   }
  }
  const finish=group('Case Study · Manage');button(finish,'Reset this case study',()=>{const original=clone(defaults.get(project.slug));for(const key of Object.keys(project))delete project[key];Object.assign(project,original);delete config.caseStudies[project.slug];window.saveInteractiveCardConfig();window.caseStudyController.refresh();selected='';build();});
  button(finish,'Export project data',()=>{const blob=new Blob([JSON.stringify(project,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=node('a');a.href=url;a.download=project.slug+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
 }
 function sync(event){project=event.detail?.project||null;document.body.classList.toggle('has-case-config',Boolean(project));
  if(project){document.body.append(panel);panel.inert=false;panel.setAttribute('aria-label','Case study configuration');heading.textContent='Case Study Config';build();}
  else{root?.remove();root=null;home.after(panel);panel.setAttribute('aria-label','Wheel configuration');heading.textContent=oldHeading;}
 }
 window.addEventListener('case-study-change',sync);
 window.addEventListener('case-study-config-open',()=>{if(!project)return;panel.classList.remove('is-collapsed');toggle.setAttribute('aria-expanded','true');toggle.textContent='Hide';panel.querySelector('summary')?.focus();});
})();
