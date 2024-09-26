function register(){
    let accDet = {
        userName:username.value,
        accNum:accno.value,
        pw:pw.value,
        money:10000
    }
   if(username.value=="" || accno.value=="" || pw.value==""){
    alert("Please complete following details");
   }
   else{
    if(accno.value in localStorage){
        alert("Account number already exists");
    }
    else{
        localStorage.setItem(accDet.accNum,JSON.stringify(accDet));
        alert("User register successfull");
        window.location.href="login.html";

    }
   }
    

}