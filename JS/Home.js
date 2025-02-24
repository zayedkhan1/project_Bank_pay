document.getElementById('btn_addMOney').addEventListener('click',function(event){
    event.preventDefault();
    let Amount=document.getElementById('money_field').value;
   console.log(Amount);
   let Password=document.getElementById('pin_field').value;
   console.log(Password);
   
   if(Password=='1'){
    console.log('redy to go')
    let recent_balance=document.getElementById('balance').innerText;
    console.log(recent_balance)
    let total_balance=parseInt(recent_balance)+parseInt(Amount);
    console.log(total_balance)
   document.getElementById('balance').innerText=total_balance;
 
   }else{
    console.log('not redy for go')
   }
  
})
//cash Out

document.getElementById('btn_cashOut').addEventListener('click',function(event){
    event.preventDefault();
    let Amount=document.getElementById('money_field').value;
   console.log(Amount);
   let Password=document.getElementById('pin_field').value;
   console.log(Password);
   
   if(Password=='1'){
    console.log('redy to go')
    let recent_balance=document.getElementById('balance').innerText;
    console.log(recent_balance)
    let total_balance=parseInt(recent_balance)- parseInt(Amount);
    console.log(total_balance)
   document.getElementById('balance').innerText=total_balance;
 
   }else{
    console.log('not redy for go')
   }
  
})
///toggle
document.getElementById('out_btn').addEventListener('click',function(){
    document.getElementById('btn_cashOut').classList.remove('two');
    document.getElementById('btn_addMOney').classList.add('two')
})

document.getElementById('add_btn').addEventListener('click',function(){
    document.getElementById('btn_addMOney').classList.remove('two')
    document.getElementById('btn_cashOut').classList.add('two');
})