// template_bpavk3e
// service_uc6u3wm
// rJeubM889V0KM5C2W

function contact(event) {
   event.preventDefault();
   emailjs
      .sendForm(
         'template_bpavk3e',
         'service_uc6u3wm',
         event.target,
         'rJeubM889V0KM5C2W'
   ).then(() => {
      console.log('this worked')
   })
   // setTimeout(() => {
   //    console.log('it worked 1')
   // }, 500);
   
}

console.log()