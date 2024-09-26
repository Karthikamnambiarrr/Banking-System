function login(){
    let account = JSON.parse(localStorage.getItem(accno.value))
    if(accno.value in localStorage){
        if(pw.value==account.pw){
            alert("Login Successfull");
            window.location.href="bank.html";
         }
        else{
            document.querySelector("#new").innerHTML = `<p>Incorrect password</p>`;

         }

    }
    else{
        alert("Account number does not exist.Register your account");
    }
}