handleSubmit = () => {
  var form = document.getElementById('contactformInputs').elements;
  data = {
    from: form['from'].value,
    email: form['email'].value,
    message: form['message'].value,
    subject: form['subject'].value,
  }
  console.log(data)
  fetch("https://rahuliitd.herokuapp.com/contact", {
    method: "POST",
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then((response)=>{
      console.log(response)
      if (response.status === 200){
          alert("Message Sent."); 
          this.resetForm()
      }else if(response.status === 404){
          alert("Message failed to send.")
      }
  })
}

resetForm = () => { 
  document.getElementById('contactformInputs').reset();
}