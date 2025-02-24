let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

slidervalue.textContent = inputslider.value;

inputslider.addEventListener('input', ()=>{
    slidervalue.textContent = inputslider.value;
});
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allsymbols = "!@#$%^&*";
genBtn.addEventListener('click', ()=>{
    passbox.value = generatePass();
});

function generatePass(){
    let pass = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChar : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += number.checked ? allNumbers : "";
    allChars += symbols.checked ? allsymbols : "";

    if(allChars == "" || allChars.length == 0){
        return pass;
    }
    
    let i = 1;
    while(i<=inputslider.value){
        pass += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return pass;
}

copyIcon.addEventListener('click', ()=>{
    navigator.clipboard.writeText(passbox.value);
    alert("password copied");
})