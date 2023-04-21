// Runs the background movement 
const scaleFactor = 1/20

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape")
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  
  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}


// Runs the darm theme toggle
let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += 'dark-theme'
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}


// Runs the Model loading event
function contact(event){
  event.preventDefault();
  const loading = document.querySelector('.model__overlay--loading');
  const success = document.querySelector('.model__overlay--success');
  loading.classList += " model__overlay--visible"
  emailjs
     .sendForm(
        'service_uc6u3wm',
        'template_bpavk3e',
        event.target,
        'rJeubM889V0KM5C2W' 

  ).then(() => {
      loading.classList.remove("model__overlay--visible");
      success.classList += " model__overlay--visible";
     }).catch(() => {
       loading.classList.remove("model__overlay--visible");
       alert(
         "The email service is temporarily down. Please contact me at samuel.wooley@live.com"
       )
     })
}

// Runs the MOdel open and close feature
let isModelOpen = false;
function toggleModel() {
  if (isModelOpen) {
    isModelOpen = false
    return document.body.classList.remove("model--open")
  }
  isModelOpen = true;
  document.body.classList += " model--open";
}