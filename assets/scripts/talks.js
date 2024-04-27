window.addEventListener('DOMContentLoaded', () => {
   // add scroll to top button
    const btn = document.getElementById('scroll-to-top-talk')
  
    if(btn) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
          btn.classList.add('show')
        } else {
          btn.classList.remove('show')
        }
      })
    
      btn.addEventListener('click', function (e) {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      })
    }
  })