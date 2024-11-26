//jb bhi forms k sth deal  karo yaad rkho ki submit hone par forms pg ko reload kr dete hai  hme khayal rkhana hai ke pages reload naa ho  nahi to js nahi chalegi , kyuki js chlne se phele hi pg reload ho jaay
// form ko submit karne  se phele page ko reload krne  se pg  ko rokna hai
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");
var form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    for (var i = 0; i < inps.length; i++) {
        if (inps[i].value.trim() === '') {
            h4.textContent = "Error, some fields are blank";
            h4.style.color = "red";
           break;
        }
    }

    
});
