let Lemail=document.getElementById('Lemail');
let Lpassword=document.getElementById('Lpassword');
let dataContainer = JSON.parse(localStorage.getItem('Data'));
let warning;
function addData(){
    let data={
        email:Lemail.value,
        pass:Lpassword.value
    };
    dataContainer.push(data);
    clear();
    window.location.href = 'welcome.html';
}
function clear(){
    Lemail.value=null;
    Lpassword.value=null;
}
let sub=document.querySelector('.sub2');
sub.addEventListener('submit',function(e){
e.preventDefault();
})
function isEmpty(){
    
    if(Lemail.value==''||Lpassword.value==''){
        warning=`<p class="text-danger" role="alert">
  All inputs is required
</p>`
        document.getElementById('demo2').innerHTML=warning;
        return false;
    }
    else{
        return true;
    }

   

}
function isEqual(){
    for(let i=0;i<dataContainer.length;i++){
        if(dataContainer[i].email==Lemail.value&&dataContainer[i].pass==Lpassword.value){
            localStorage.setItem('userName',dataContainer[i].name);
                  return true;
        }
       
          
            

       
    }
      warning=`<p class="text-danger" role="alert">
            incorrect email or password
           </p>`
                   document.getElementById('demo2').innerHTML=warning;
     return false;
}
let logIn=document.querySelector('.log-in');
logIn.addEventListener('click',function(){
    if(isEmpty()&&isEqual()){
    warning=``;
    document.getElementById('demo2').innerHTML=warning;
   addData();

    }
})
