
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzel-pPMHCRHdYcn1evpO2H3klxfp6ejCZ43dJ_DbjnAHofe5nsGwVnfZMRtwKWD7P56w/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank you for contacting us. We will get back to you soon."
        setTimeout(() => {
            msg.innerHTML = ""
            
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
