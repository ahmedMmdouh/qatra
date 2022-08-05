// Year in Footer
// let year = document.querySelector("#year");
// let date = new Date();
// year.innerHTML = date.getFullYear();


// Form Validationl
let form = document.querySelector(".form-input") 
let formContainer = document.querySelector(".form-container")
let ok = document.querySelector("#ok")
form.onsubmit = () => {
    event.preventDefault()
    setInterval(() => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'Top-end',
            showConfirmButton: false,
            timer: 990,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'تم التسجيل بنجاح'
          })      
    }, 1000);
    setInterval(() => {
        window.location.href = "index.html"        
    }, 2000);
}