const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const msg1 = document.querySelector("#msg1");
const msg2 = document.querySelector("#msg2");

btn1.addEventListener("click", () => {
    event.preventDefault();
    let amount = parseFloat(document.querySelector("#amount1").value);
    const pw1 = document.querySelector("#pw1").value;
    const acNum = document.querySelector("#account1").value;
    const acDet = JSON.parse(localStorage.getItem(acNum));

    if (acDet && amount > 0 && acDet.pw === pw1) {
        acDet.money += amount;
        localStorage.setItem(acNum, JSON.stringify(acDet));
        msg1.innerHTML = `<p><b>Your current balance is ${acDet.money}</b></p>`;
        
        setTimeout(() => {
            document.querySelector("#form1").reset();
            msg1.innerHTML = '';
        }, 2000);
    } else {
        alert("Please check credentials.");
    }
});

btn2.addEventListener("click", () => {
    event.preventDefault();
    let amount = parseFloat(document.querySelector("#amount2").value);
    const pw2 = document.querySelector("#pw2").value;
    const acNum = document.querySelector("#account2").value;
    const acDet = JSON.parse(localStorage.getItem(acNum));

    if (acDet && amount > 0 && acDet.pw === pw2 && amount <= acDet.money) {
        acDet.money -= amount;
        localStorage.setItem(acNum, JSON.stringify(acDet));
        msg2.innerHTML = `<p><b>Your current balance is ${acDet.money}</b></p>`;
        
        setTimeout(() => {
            document.querySelector("#form2").reset();
            msg2.innerHTML = '';
        }, 1000);
    } else {
        alert("Please check credentials.");
    }
});
