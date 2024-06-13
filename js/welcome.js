let userName=localStorage.getItem('userName');
let welcome;
    if(userName!=null){
welcome=`<h2 class="text-info">Welcome ${userName}</h2>`
    document.getElementById('demo3').innerHTML=welcome;
}
function logout(){
    localStorage.removeItem('userName');
}
let logOut=document.querySelector('.logout');
logOut.addEventListener('click',function(){
logout();
    
})
