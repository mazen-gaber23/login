let Sname=document.getElementById('Sname');
let Semail=document.getElementById('Semail');
let Spassword=document.getElementById('Spassword');
let dataContainer = JSON.parse(localStorage.getItem('Data')) || [];
let warning;


function addData(){
    let data={
        name:Sname.value,
        email:Semail.value,
        pass:Spassword.value
    };
    dataContainer.push(data);
    localStorage.setItem('Data',JSON.stringify(dataContainer));
    clear();
    window.location.href = 'index.html';
}
let signUp=document.querySelector('.sign-up');
signUp.addEventListener('click',function(){
    if(isEmpty()&&!isExist()){
    warning=``;
    document.getElementById('demo1').innerHTML=warning;
   addData();

    }
})
let sub=document.querySelector('.sub');
sub.addEventListener('submit',function(e){
e.preventDefault();
})
function clear(){
    Semail.value=null;
    Sname.value=null;
    Spassword.value=null;
}
function isEmpty(){
    
    if(Semail.value==''||Sname.value==''||Spassword.value==''){
        warning=`<p class="text-danger" role="alert">
  All inputs is required
</p>`
        document.getElementById('demo1').innerHTML=warning;
        return false;
    }
    else{
        return true;
    }

   

}
function isExist(){
    for(let i=0;i<dataContainer.length;i++){
        if(dataContainer[i].email==Semail.value){
            warning=`<p class="text-danger" role="alert">
           this email is exist
          </p>`
                  document.getElementById('demo1').innerHTML=warning;
                  return true;
        }
       
           
        
       
    } 
     return false;
}
