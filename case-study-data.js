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
  const showcaseContent = {
  "fsg": {
    "introduction": "An expressive storefront for handmade felt characters, balancing seasonal discovery with a clearer route for wholesale buyers.",
    "heroImage": "Assets/Case Studies/fsg/homepage.webp",
    "heroAlt": "A clearer welcome for stockists — proposed website design detail",
    "metadata": {
      "Deliverables": "Homepage, collection & product pages",
      "Devices": "Desktop & mobile",
      "Stage": "Design showcase"
    },
    "overview": {
      "project": "Modernise Felt So Good’s online shop while communicating its ethical production, natural materials and playful character.",
      "approach": "Analytics, discovery insights and ecommerce usability guidance shaped a mobile-led journey for retail shoppers and trade customers."
    },
    "sections": [
      {
        "id": "research-thinking",
        "type": "research",
        "title": "Research & design thinking",
        "items": [
          {
            "title": "Seasonal discovery",
            "description": "Christmas Characters, Traditional Christmas and new launches were important shopping routes.",
            "solution": "Lead with seasonal collections and new characters, using playful hover videos to bring the range to life."
          },
          {
            "title": "Two shopping intents",
            "description": "Wholesale is the primary revenue audience, alongside retail shoppers.",
            "solution": "Introduce trade registration and sign-in early, supported by stockist credibility."
          },
          {
            "title": "A mobile first impression",
            "description": "The deck reports 58.3% mobile traffic and 95.8% new users. Product-level reporting was limited to data from October 2025.",
            "solution": "Use a clear hierarchy, concise messaging and visible ethical and material reassurance."
          }
        ]
      },
      {
        "id": "homepage-design",
        "type": "feature",
        "title": "A clearer welcome for stockists",
        "description": "A prominent trade account invitation and recognisable stockist logos give wholesale buyers a direct route into registration.",
        "layout": "image-left",
        "images": [
          {
            "src": "Assets/Case Studies/fsg/homepage.webp",
            "alt": "A clearer welcome for stockists — design detail from the supplied showcase",
            "caption": "Proposed design detail from the project showcase"
          }
        ]
      },
      {
        "id": "collection-design",
        "type": "feature",
        "title": "Browse characters with less effort",
        "description": "Seasonal shortcuts and richer product previews help shoppers explore the range, while wholesale starter packs support first orders.",
        "layout": "image-right",
        "images": [
          {
            "src": "Assets/Case Studies/fsg/collection.webp",
            "alt": "Browse characters with less effort — design detail from the supplied showcase",
            "caption": "Proposed design detail from the project showcase"
          }
        ]
      },
      {
        "id": "product-design",
        "type": "feature",
        "title": "Product details that are easy to scan",
        "description": "Product information, specifications and delivery details are organised into readable sections instead of long text blocks and hidden tabs.",
        "layout": "image-left",
        "images": [
          {
            "src": "Assets/Case Studies/fsg/product.webp",
            "alt": "Product details that are easy to scan — design detail from the supplied showcase",
            "caption": "Proposed design detail from the project showcase"
          }
        ]
      },
      {
        "id": "design-scope",
        "type": "summary",
        "title": "Design scope",
        "body": "The showcase covers homepage, collection and product page designs for desktop and mobile, supported by UX research and design methodology. These are proposed design decisions; the supplied material does not report post-launch performance."
      }
    ]
  },
  "bikers": {
    "introduction": "A bold motorcycle retail experience built around product discovery, rider confidence and complementary purchases.",
    "heroImage": "Assets/Case Studies/bikers/homepage.webp",
    "heroAlt": "A bold entrance with practical navigation — proposed website design detail",
    "metadata": {
      "Deliverables": "Homepage, collection & product pages",
      "Devices": "Desktop & mobile",
      "Stage": "Design showcase"
    },
    "overview": {
      "project": "Differentiate Bikers World from competing retailers while targeting conversion and average order value through bundles, upselling and cross-selling.",
      "approach": "Customer analytics and discovery findings informed a strong visual direction, direct category routes and reassurance throughout the purchase journey."
    },
    "sections": [
      {
        "id": "research-thinking",
        "type": "research",
        "title": "Research & design thinking",
        "items": [
          {
            "title": "Shopping on mobile",
            "description": "Mobile accounted for 69.6% of traffic in the deck’s October 2024–October 2025 analysis.",
            "solution": "Prioritise clear mobile navigation and an accessible, prominent search field."
          },
          {
            "title": "Brands riders seek out",
            "description": "Alpinestars and FOX were important in both the brief and sales data.",
            "solution": "Give leading brands prominent entry points and promotional space."
          },
          {
            "title": "Relevant additions",
            "description": "Clothing and parts led category sales, with a free-gift promotion featuring among purchased items.",
            "solution": "Surface bundles and complementary products during browsing and product evaluation."
          }
        ]
      },
      {
        "id": "homepage-design",
        "type": "feature",
        "title": "A bold entrance with practical navigation",
        "description": "Performance-led imagery sits beneath a full-width search field and labelled account and bag controls, with reassurance visible early.",
        "layout": "image-left",
        "images": [
          {
            "src": "Assets/Case Studies/bikers/homepage.webp",
            "alt": "A bold entrance with practical navigation — design detail from the supplied showcase",
            "caption": "Proposed design detail from the project showcase"
          }
        ]
      },
      {
        "id": "collection-design",
        "type": "feature",
        "title": "Faster routes into the right helmet",
        "description": "Visual quick links expose common helmet categories, with review messaging directly beneath the collection introduction.",
        "layout": "image-right",
        "images": [
          {
            "src": "Assets/Case Studies/bikers/collection.webp",
            "alt": "Faster routes into the right helmet — design detail from the supplied showcase",
            "caption": "Proposed design detail from the project showcase"
          }
        ]
      },
      {
        "id": "product-design",
        "type": "feature",
        "title": "Confidence at the purchase decision",
        "description": "Price, size, availability, finance and delivery information sit around the buying controls. Related products and outfit suggestions support further discovery.",
        "layout": "image-left",
        "images": [
          {
            "src": "Assets/Case Studies/bikers/product.webp",
            "alt": "Confidence at the purchase decision — design detail from the supplied showcase",
            "caption": "Proposed design detail from the project showcase"
          }
        ]
      },
      {
        "id": "design-scope",
        "type": "summary",
        "title": "Design scope",
        "body": "The showcase covers homepage, collection and product page designs for desktop and mobile, supported by UX research and design methodology. These are proposed design decisions; the supplied material does not report post-launch performance."
      }
    ]
  },
  "rimmers": {
    "introduction": "A premium, piano-first shopping experience connecting online discovery with showroom expertise and support.",
    "heroImage": "Assets/Case Studies/rimmers/homepage.webp",
    "heroAlt": "Bring showroom expertise online — proposed website design detail",
    "metadata": {
      "Deliverables": "Homepage, collection & product pages",
      "Devices": "Desktop & mobile",
      "Stage": "Design showcase"
    },
    "overview": {
      "project": "Reposition Rimmers Music as a specialist piano retailer, bringing the quality of its showroom experience into the online journey.",
      "approach": "The client brief, trading data and ecommerce usability guidance informed clearer category routing, focused filtering and reassurance for considered purchases."
    },
    "sections": [
      {
        "id": "research-thinking",
        "type": "research",
        "title": "Research & design thinking",
        "items": [
          {
            "title": "A piano-first catalogue",
            "description": "Pianos led category purchases, while digital pianos and Yamaha featured strongly across traffic and sales.",
            "solution": "Prioritise digital, acoustic and pre-owned piano journeys."
          },
          {
            "title": "Expert help matters",
            "description": "Ask a Question, Sell My Piano and Part Exchange appeared among the most-viewed pages.",
            "solution": "Make expert advice and assisted purchase services visible alongside shopping routes."
          },
          {
            "title": "More than the instrument",
            "description": "Accessories, extended guarantees and music school enrolments appeared in purchase data.",
            "solution": "Support the wider ownership journey with relevant services and complementary products."
          }
        ]
      },
      {
        "id": "homepage-design",
        "type": "feature",
        "title": "Bring showroom expertise online",
        "description": "An editorial services section presents tuition, tuning and restoration, and selling or part-exchanging a piano.",
        "layout": "image-left",
        "images": [
          {
            "src": "Assets/Case Studies/rimmers/homepage.webp",
            "alt": "Bring showroom expertise online — design detail from the supplied showcase",
            "caption": "Proposed design detail from the project showcase"
          }
        ]
      },
      {
        "id": "collection-design",
        "type": "feature",
        "title": "Refine a considered purchase",
        "description": "Quick filter buttons provide immediate category shortcuts, supported by a fuller drawer-based filtering experience.",
        "layout": "image-right",
        "images": [
          {
            "src": "Assets/Case Studies/rimmers/collection.webp",
            "alt": "Refine a considered purchase — design detail from the supplied showcase",
            "caption": "Proposed design detail from the project showcase"
          }
        ]
      },
      {
        "id": "product-design",
        "type": "feature",
        "title": "Keep reassurance close to the piano",
        "description": "Large product imagery, clear buying controls and expandable information bring finance, delivery and expert help into the purchase journey.",
        "layout": "image-left",
        "images": [
          {
            "src": "Assets/Case Studies/rimmers/product.webp",
            "alt": "Keep reassurance close to the piano — design detail from the supplied showcase",
            "caption": "Proposed design detail from the project showcase"
          }
        ]
      },
      {
        "id": "design-scope",
        "type": "summary",
        "title": "Design scope",
        "body": "The showcase covers homepage, collection and product page designs for desktop and mobile, supported by UX research and design methodology. These are proposed design decisions; the supplied material does not report post-launch performance."
      }
    ]
  },
  "faith": {
    "introduction": "A more considered jewellery shopping journey, shaped around category discovery, leading brands and purchase confidence.",
    "heroImage": "Assets/Case Studies/faith/homepage.webp",
    "heroAlt": "Give leading brands room to shine — proposed website design detail",
    "metadata": {
      "Deliverables": "Homepage, collection & product pages",
      "Devices": "Desktop & mobile",
      "Stage": "Design showcase"
    },
    "overview": {
      "project": "Refine Faith Jewellers’ existing experience with stronger presentation and clearer shopping journeys, supporting its approachable, value-led positioning.",
      "approach": "Customer behaviour, category and brand performance, and ecommerce usability guidance informed homepage merchandising, collection browsing and product evaluation."
    },
    "sections": [
      {
        "id": "research-thinking",
        "type": "research",
        "title": "Research & design thinking",
        "items": [
          {
            "title": "Category-led discovery",
            "description": "Jewellery and Gifts were the strongest-selling categories in the supplied analysis.",
            "solution": "Provide direct category and occasion-led routes into the catalogue."
          },
          {
            "title": "Recognisable brands",
            "description": "Swarovski attracted strong product interest, while Faith Sterling Silver was a major selling brand.",
            "solution": "Use brand spotlights and bestseller merchandising to surface relevant ranges."
          },
          {
            "title": "Reassure first-time visitors",
            "description": "The deck describes a high proportion of new visitors and a majority of traffic on mobile.",
            "solution": "Keep navigation clear and reinforce reviews, store presence and helpful service messaging."
          }
        ]
      },
      {
        "id": "homepage-design",
        "type": "feature",
        "title": "Give leading brands room to shine",
        "description": "A Swarovski feature combines lifestyle imagery, clear collection routes and product merchandising to support discovery.",
        "layout": "image-left",
        "images": [
          {
            "src": "Assets/Case Studies/faith/homepage.webp",
            "alt": "Give leading brands room to shine — design detail from the supplied showcase",
            "caption": "Proposed design detail from the project showcase"
          }
        ]
      },
      {
        "id": "collection-design",
        "type": "feature",
        "title": "Keep gifting within reach",
        "description": "Occasion-led discovery blocks provide alternative paths through the collection experience when shoppers need inspiration.",
        "layout": "image-right",
        "images": [
          {
            "src": "Assets/Case Studies/faith/collection.webp",
            "alt": "Keep gifting within reach — design detail from the supplied showcase",
            "caption": "Proposed design detail from the project showcase"
          }
        ]
      },
      {
        "id": "product-design",
        "type": "feature",
        "title": "Make buying information accessible",
        "description": "A focused purchase area brings together availability, delivery, finance and expandable product details, supported by related recommendations.",
        "layout": "image-left",
        "images": [
          {
            "src": "Assets/Case Studies/faith/product.webp",
            "alt": "Make buying information accessible — design detail from the supplied showcase",
            "caption": "Proposed design detail from the project showcase"
          }
        ]
      },
      {
        "id": "design-scope",
        "type": "summary",
        "title": "Design scope",
        "body": "The showcase covers homepage, collection and product page designs for desktop and mobile, supported by UX research and design methodology. These are proposed design decisions; the supplied material does not report post-launch performance."
      }
    ]
  },
  "furniture": {
    "introduction": "A familiar furniture store refined for Shopify, combining room-led inspiration with practical buying information.",
    "heroImage": "Assets/Case Studies/furniture/homepage.webp",
    "heroAlt": "Turn room inspiration into discovery — proposed website design detail",
    "metadata": {
      "Deliverables": "Homepage, collection & product pages",
      "Devices": "Desktop & mobile",
      "Stage": "Design showcase"
    },
    "overview": {
      "project": "Support a move to Shopify while preserving familiarity and the brand’s value-for-money positioning. Improve the journey with lifestyle imagery and clearer product information.",
      "approach": "The client brief and customer browsing data shaped room-led discovery, larger product imagery and stronger support across homepage, collection and product pages."
    },
    "sections": [
      {
        "id": "research-thinking",
        "type": "research",
        "title": "Research & design thinking",
        "items": [
          {
            "title": "Mobile-led discovery",
            "description": "Around 72% of visits were mobile, with substantially more new than returning users.",
            "solution": "Keep room navigation, product information and reassurance easy to find."
          },
          {
            "title": "Storage deserves visibility",
            "description": "Bedroom led category sales, followed by Storage and Living Room; Astbury was the leading range.",
            "solution": "Give storage solutions and popular ranges prominent merchandising space."
          },
          {
            "title": "Evidence has limits",
            "description": "The deck reports that 87.94% of age data was unknown.",
            "solution": "Prioritise observed browsing and purchase behaviour rather than narrow age assumptions."
          }
        ]
      },
      {
        "id": "homepage-design",
        "type": "feature",
        "title": "Turn room inspiration into discovery",
        "description": "Smart Storage pairs lifestyle imagery with direct routes into useful storage types. The wider homepage also introduces shoppable room scenes.",
        "layout": "image-left",
        "images": [
          {
            "src": "Assets/Case Studies/furniture/homepage.webp",
            "alt": "Turn room inspiration into discovery — design detail from the supplied showcase",
            "caption": "Proposed design detail from the project showcase"
          }
        ]
      },
      {
        "id": "collection-design",
        "type": "feature",
        "title": "Make furniture easier to compare",
        "description": "Larger product cards, visible finish swatches and recommendations support browsing. The desktop grid moves from four columns to three to give imagery more space.",
        "layout": "image-right",
        "images": [
          {
            "src": "Assets/Case Studies/furniture/collection.webp",
            "alt": "Make furniture easier to compare — design detail from the supplied showcase",
            "caption": "Proposed design detail from the project showcase"
          }
        ]
      },
      {
        "id": "product-design",
        "type": "feature",
        "title": "Support a coordinated space",
        "description": "Related ranges and complementary furniture help shoppers continue exploring. Product details also prioritise dimensions, finish selection and dispatch expectations.",
        "layout": "image-left",
        "images": [
          {
            "src": "Assets/Case Studies/furniture/product.webp",
            "alt": "Support a coordinated space — design detail from the supplied showcase",
            "caption": "Proposed design detail from the project showcase"
          }
        ]
      },
      {
        "id": "design-scope",
        "type": "summary",
        "title": "Design scope",
        "body": "The showcase covers homepage, collection and product page designs for desktop and mobile, supported by UX research and design methodology. These are proposed design decisions; the supplied material does not report post-launch performance."
      }
    ]
  }
};
  for (const [key, content] of Object.entries(showcaseContent)) Object.assign(additions[key], content);
  window.portfolioCaseStudies = Object.entries(additions).map(([key,content]) => {
    const project = window.portfolioProjects[key];
    Object.assign(project,content,{key});
    return project;
  });
})();
