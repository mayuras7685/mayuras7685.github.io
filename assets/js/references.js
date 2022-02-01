/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
    {
        sl1:1,
        name1 : "MY self",
        image1 : "assets/images/references-page/reviewphoto1.jpg",
        message1 : "Hi Everyone, I am Mayur Asodara from Ahmedabad, India.<br>I am a UNDERGUDATE at Vishwakarma Goverment engineering college, Ahmedabad in Electronics and Communication Engineering.",
        

        sl2:2,
        name2 : "Interest", 
        image2: "assets/images/references-page/reviewphoto2.jpg",
        message2 : "I am fluent in classics like C++, Javascript and Python.<br>My field of Interest's are building new  Web Technologies and Products and also in areas related to Artificial Intelligence and Machine Learning.",
        
        
    }
];

AOS.init();   
const fillData = () => {
    let output = "";
    
    references.forEach(
        (
            { sl1, image1, name1, designation1, message1, absbox_for_linkedin1,
             sl2, image2, name2, designation2, message2, absbox_for_linkedin2 }
        ) =>
           (output +=
            `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`
                )
            );
            referenceTable.innerHTML = output;
        }

document.addEventListener("DOMContentLoaded", fillData);



AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Python",
    cardImage: "assets/images/education-page/python.png",
    
  },

  {
    title: "Javascript",
    cardImage: "assets/images/education-page/javascript.png",
   
  },

  {
    title: "C++",
    cardImage: "assets/images/education-page/c.png",

   
  },

  {
    title: "React",
    cardImage: "assets/images/education-page/react.png",
 
  },
  
  {
    
    title: "HTML5",
    cardImage: "assets/images/education-page/html5.png",
   
  },

  {
    title: "CSS3",
    cardImage: "assets/images/education-page/css3.png",
   
  },

  {
    title: "Mongo db",
    cardImage: "assets/images/education-page/mongodb.png",
    
  },

  {
    
    title: "Git",
    cardImage: "assets/images/education-page/git.png",
   
  },

  {
    title: "NodeJS",
    cardImage: "assets/images/education-page/node-js.png",
   
  },

  {
    title: "Django",
    cardImage: "assets/images/education-page/django.png",
    
  },

  {
    title: "Tensorflow",
    cardImage: "assets/images/education-page/tans.png",
   
  },

  {
    title: "Pytorch",
    cardImage: "assets/images/education-page/pyt.svg",
    
  },
 
];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage}) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "",
    image: "assets/images/education-page/vs code.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "Pycharm",
    image: "assets/images/education-page/pycharm.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "Sublime Text",
    image: "assets/images/education-page/sub.png",
    description: "Earned July 20, 2020",
  },
  {
    title: "Colab",
    image: "assets/images/education-page/coalb.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

$(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {
    
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }
  
  sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });


});



