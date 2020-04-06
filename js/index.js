const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelector('nav');
let cta = document.querySelector('.cta-text')
let main = document.querySelector('.main-content')
let contact1 = document.querySelector('.contact')
let footer = document.querySelector('footer')

function navSet (){
  
  
  let navKeys = Object.keys(siteContent.nav);

  let navValues = Object.values(siteContent.nav);
  let i = 0;

  for(i; i< navValues.length -1 ;i++){
    let tag = nav.children[i];

    tag.id = navKeys[i]
    tag.textContent= navValues[i]
    


  }

  
}

function ctaSet(){
  let ctaKeys = Object.keys(siteContent.cta)
  let ctaValues = Object.values(siteContent.cta)
  
  let ctaImg = document.getElementById('cta-img')
  

  let i = 0;

  ctaImg.setAttribute('src', ctaValues[2] ) 

  for(i; i < ctaValues.length -1   ; i++){
    let tag = cta.children;

    
    tag[i].textContent= ctaValues[i]
    


  }
  
}

function mainSet(){
  const values = Object.values(siteContent["main-content"]);
  const topCont = main.querySelector('.top-content');
  const middleImg = main.querySelector('#middle-img');

  const features = main.querySelector('#feat');
  features.children[0].textContent = siteContent["main-content"]["features-h4"]
  features.children[1].textContent = siteContent["main-content"]["features-content"]

  const about = main.querySelector('#about')
  about.children[0].textContent = siteContent["main-content"]["about-h4"]
  about.children[1].textContent = siteContent["main-content"]["about-content"]

  const services = main.querySelector('#services')
  services.children[0].textContent = siteContent["main-content"]["services-h4"]
  services.children[1].textContent = siteContent["main-content"]["services-content"]

  const vision = main.querySelector('#vision')
  vision.children[0].textContent = siteContent["main-content"]["vision-h4"]
  vision.children[1].textContent = siteContent["main-content"]["vision-content"]


 


  

  middleImg.setAttribute('src',siteContent["main-content"]["middle-img-src"] );


  



  



}

function contactset (){
  const values = Object.values(siteContent.contact);
  

  for(let i =0; i < contact1.childElementCount; i++){
    contact1.children[i].textContent = values[i]
  }



}

function footerSet (){
  const values = Object.values(siteContent.footer)

  footer.children[0].textContent = values[0]
  

}
navSet()
ctaSet()
mainSet()
contactset()
footerSet()

