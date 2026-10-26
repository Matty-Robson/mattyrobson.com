/* Case study content extends the card data rather than creating a second source
 * for project names, headings or chips. Add verified project material here. */
(() => {
  'use strict';
  /** @typedef {{src:string,alt:string,caption?:string,width?:number,height?:number,crop?:{aspectRatio:number|string,fit?:'cover'|'contain',x?:number,y?:number}}|{placeholder:string,alt:string}} CaseImage */
  /** @typedef {{id?:string,title:string,description:string,x:number,y:number,category?:string,image?:CaseImage,region?:{x:number,y:number,width:number,height:number}}} CaseAnnotation */
  /** @typedef {{id:string,title?:string,description?:string,placeholder?:string,enabled?:boolean}} SectionBase */
  /** @typedef {SectionBase & {type:'showcase'|'mobile'|'gallery',images?:CaseImage[],layout?:'full'|'contained'|'split'|'horizontal'|'grid'|'three'|'prominent'}} ImageSection */
  /** @typedef {SectionBase & {type:'annotations',image?:CaseImage,annotations?:CaseAnnotation[]}} AnnotationSection */
  /** @typedef {SectionBase & {type:'feature',images?:CaseImage[],eyebrow?:string,number?:string,category?:string,chips?:string[],layout?:'image-left'|'image-right'|'full'}} FeatureSection */
  /** @typedef {SectionBase & {type:'research',layout?:'grid'|'considerations',items?:Array<{title:string,description:string,image?:CaseImage,images?:CaseImage[],kind?:'insight'|'exploration',number?:string,layout?:'grid'|'horizontal',label?:string,solution?:string}>}} ResearchSection */
  /** @typedef {SectionBase & {type:'comparison',before:CaseImage,after:CaseImage,mode?:'slider'|'static'}} ComparisonSection */
  /** @typedef {SectionBase & {type:'summary',body:string}} SummarySection */
  /** @typedef {'horizontal-filters'|'search'|'fast-filters'|'filters'|'products'|'quick-buy'|'cart'|'navigation'|'accordion'|'footer'|'motion'} DemoKind */
  /** @typedef {SectionBase & {type:'demo',demo:DemoKind}} DemoSection */
  /** @typedef {DemoSection|ImageSection|AnnotationSection|FeatureSection|ResearchSection|ComparisonSection|SummarySection} CaseSection */
  /** @typedef {{src:string,alt:string,x?:number,y?:number,width?:number,height?:number}} CaseLogoLayer */
  /** @typedef {{key:string,slug:string,title:string,headline:string,introduction?:string,chips:string[],logo:string,logos?:CaseLogoLayer[],logoAspectRatio?:number,theme:{background:string,ink:string},heroImage?:string,heroAlt?:string,cardImage?:{src:string,alt:string,caption:string},metadata?:Record<string,string|string[]>,overview?:{project?:string,involvement?:string,approach?:string},sections:CaseSection[]}} ProjectCaseStudy */

  const assets = number => `Assets/Card ${number}/card assets/`;
  const screenshotPlaceholder = () => ({
    id:'website-showcase',type:'showcase',title:'Website showcase',
    placeholder:'Project website screenshots will be added here. The current portfolio assets contain the project branding, but no completed website screenshots.'
  });
  const additions = {
    fsg:{
      slug:'felt-so-good',headline:'Bringing Playfulness to Every Interaction',
      introduction:'A project focused on creative direction, playful interactions, visual storytelling and brand experience.',
      cardImage:{src:assets(1)+'hero.png',alt:'Felt So Good project card artwork',caption:'Project card artwork'},
      logo:assets(1)+'logo.svg',logoAspectRatio:180/37,theme:{background:'#b31f69',ink:'#ffffff'},
      sections:[screenshotPlaceholder()]
    },
    bikers:{
      slug:'bikers-world',headline:'Improving the Shopping Experience',
      introduction:'A project focused on art direction, interactive design, visual identity and product discovery.',
      cardImage:{src:assets(2)+'rider.png',alt:'Motorcycle rider in the Bikers World project card artwork',caption:'Project card artwork'},
      logo:assets(2)+'logo-hover.svg',logoAspectRatio:185/37,theme:{background:'#000435',ink:'#ffffff'},
      sections:[screenshotPlaceholder()]
    },
    rimmers:{
      slug:'rimmers-music',headline:'Designed Around the Customer',
      introduction:'A project focused on UX research, product discovery, finance UX and navigation.',
      cardImage:{src:assets(3)+'piano.png',alt:'Grand piano in the Rimmers Music project card artwork',caption:'Project card artwork'},
      logo:assets(3)+'logo-hover.svg',logoAspectRatio:260/20,theme:{background:'#f7f7f7',ink:'#202020'},
      overview:{
        project:'Rimmers Music is presented in the portfolio through four design topics: UX research, product discovery, finance UX and navigation.',
        involvement:'The supplied contribution topics are shown above. Detailed responsibilities have not yet been provided.',
        approach:'The design process and supporting evidence will be documented when the project material is available.'
      },
      sections:[
        screenshotPlaceholder(),
        {id:'design-breakdown',type:'annotations',title:'Interactive design breakdown',placeholder:'Add a real Rimmers Music website screenshot and verified explanations to activate the design markers. No screenshot or annotation evidence has been supplied yet.'},
        {id:'research-thinking',type:'research',title:'Research & design thinking',placeholder:'Research findings, early explorations and design decisions can be added here once supplied. No user testing, findings or outcomes are claimed in this preview.'}
      ]
    },
    furniture:{
      slug:'big-furniture-warehouse',headline:'Making Furniture Shopping Feel Effortless',
      introduction:'A project focused on UX research, product discovery, interactive shopping and information architecture.',
      logo:assets(4)+'logo-hover.svg',logoAspectRatio:100/83,theme:{background:'#662d91',ink:'#ffffff'},
      sections:[screenshotPlaceholder()]
    },
    judy:{
      slug:'judy-plum-wigs',headline:window.portfolioProjects.judy.heading,
      introduction:'A project focused on UX design, NHS prescriptions, VAT relief and appointment booking.',
      logo:assets(5)+'name-updated.svg',logoAspectRatio:293/72,
      logos:[
        {src:assets(5)+'name-updated.svg',alt:'',x:.2958,y:.2548,width:.6974,height:.3786},
        {src:assets(5)+'tagline-updated.svg',alt:'',x:.4506,y:.6747,width:.3835,height:.1454},
        {src:assets(5)+'mark-updated.svg',alt:'',x:.0002,y:.006944,width:.266877,height:.98611}
      ],
      theme:{background:'#E6FFE1',ink:'#202020'},sections:[screenshotPlaceholder()]
    },
    faith:{
      slug:'faith-jewellers',headline:window.portfolioProjects.faith.heading,
      introduction:'A project focused on luxury e-commerce, product discovery, visual direction and product presentation.',
      logo:assets(6)+'logo.svg',logoAspectRatio:274.969/84,theme:{background:'#ffffff',ink:'#202020'},
      sections:[screenshotPlaceholder()]
    }
  };
  window.portfolioCaseStudies = Object.entries(additions).map(([key,content]) => {
    const project = window.portfolioProjects[key];
    Object.assign(project,content,{key});
    return project;
  });
})();
