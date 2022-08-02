var question = "Aviabilet sotib olishga tayyormisiz?";
var question1 = "Eslatib o'tamiz to'lov qilinganda so'ng, qabul qilingan mablag' qaytarib berilmaydi!!!";


var elBody = document.querySelector("body")
var elBox = document.createElement("div");
var elTitle = document.createElement("h1");
var elText = document.createElement("p");
var elText2 = document.createElement("p");
var elText3 = document.createElement("p");
var elForm = document.createElement("form");
var elInput = document.createElement("input");
var elBtn = document.createElement("button");
var elBtnReset = document.createElement("button");
var answerClick = document.createElement("p");

var intro = alert(question);
var answer = alert(question1);


elBody.appendChild(elBox);
elBox.appendChild(elTitle);
elBox.appendChild(elText);
elBox.appendChild(elText2);
elBox.appendChild(elText3);
elBox.appendChild(elForm);
elForm.appendChild(elInput);
elForm.appendChild(elBtn);
elForm.appendChild(elBtnReset);

elBox.setAttribute("class", "box");
elTitle.setAttribute("class", "box__title");
elText.setAttribute("class", "box__paragraph");
elText2.setAttribute("class", "box__paragraph");
elText3.setAttribute("class", "box__paragraph");
elForm.setAttribute("class", "box__form");
elInput.setAttribute("class", "box__input")
elInput.setAttribute("type", "text");
elInput.setAttribute("placeholder", "Tanlagan classingiz narxini kiriting!!!");
elInput.setAttribute("name", "user-price");
elInput.setAttribute("autocomplete", "off");
elBtn.setAttribute("class", "box__button")
elBtn.setAttribute("type", "submit");
elBtnReset.setAttribute("class", "box__button")
elBtnReset.setAttribute("type", "reset");
elInput.setAttribute("required", "")
answerClick.setAttribute("class", "box__text ");

elTitle.textContent = "UZAIRWAYS doim siz bilan!!!";
elText.textContent= "Ekanom class = 100.000 so`m dan 350.000 gacha";
elText2.textContent = "Biznes class = 455.000 so`m dan 1.000.000 gacha";
elText3.textContent = "Vip class = 1.500.000 so`m dan";
elBtn.textContent = "Xarid qilish";
elBtnReset.textContent = "Yangilash";

elForm.addEventListener("submit", function (noreset) {
  noreset.preventDefault();


  elBox.appendChild(answerClick);

  if (elInput.value >= 100000 && elInput.value <= 350000) {
    answerClick.setAttribute("class", "box__text");
    answerClick.textContent = "Xaridingiz uchun rahmat! Sizning klassingiz 'Ekanom'"
  }
  else if (elInput.value >= 455000 && elInput.value <= 1000000) {
    answerClick.setAttribute("class", "box__text ");
    answerClick.textContent = "Xaridingiz uchun rahmat! Sizning klassingiz 'Biznes'"
  }
  else if (elInput.value >= 1500000) {
    answerClick.setAttribute("class", "box__text");
    answerClick.textContent = "Xaridingiz uchun rahmat! Sizning klassingiz 'Vip'"
  }
  else if (isNaN(elInput.value)) {
    answerClick.setAttribute("class", "box__text ");
    answerClick.textContent = "Faqat aviachipta narxlarini kiriting!!!"
  }
  else {
    answerClick.setAttribute("class", "box__text ");
    answerClick.textContent = "Kechirasiz, Faqat yuqorida keltirilgan narxlarni kiriting!"
  }

  elInput.value = "";
})

elForm.addEventListener("reset", function (reset) {
  reset.preventDefault();

  answerClick.textContent = " ";
})
