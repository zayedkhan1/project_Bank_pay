//set event handler
document.getElementById('btn_login').addEventListener('click',function(event){
  console.log('btn_clicked')
  //use preventDefault() for removing reload
    event.preventDefault();
    //getting the value of input field
    const phone_Number=document.getElementById("phone_field").value;
   const password_text=document.getElementById('password_field').value;
  console.log(phone_Number,password_text)
  //checking the input field
  if(phone_Number=='01927220142' &&  password_text=='12345678'){
    console.log('you are loged in')
    window.location.href='/HTML/Home.html'
  }else{
    console.log('incorrect password')
  }
})