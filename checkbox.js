const myCheckBox = document.getElementById("myCheckBox");
const myvisa = document.getElementById("myvisa");
const mymastercard = document.getElementById("mymastercard");
const mypaypal = document.getElementById("mypaypal");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paaymentstatus = document.getElementById("paaymentstatus");


mysubmit.onclick = function(){

    if(myCheckBox.checked){
        subresult.textContent = `You are Subscribed`;
    }
    else{
        subresult.textContent = `You are not Subscribed`;
    }

    if(myvisa.checked){
        paymentstatus.textContent = `You made payment through Visa`;
    }
    else if(mymastercard.checked){
        paymentstatus.textContent = `You made payment through Mastercard`;
    }

    else if(mypaypal.checked){
        paymentstatus.textContent = `You made payment through Paypal`;
    }

    else{
        paymentstatus.textContent = `Please choose a payment method`;
    
    }
}