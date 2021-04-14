const buttonSend = document.getElementById("send");

buttonSend.onclick = () => {
  const dateInput = document.getElementsByTagName("input")[0].value;

  let dateI = new Date(dateInput);
  let year = parseInt(dateI.getFullYear());
  let month = parseInt(dateI.getMonth()) + 1;
  let day = parseInt(dateI.getDate()) + 1;

  let currentDate = new Date();
  let currentYear = parseInt(currentDate.getFullYear());
  let currentMonth = parseInt(currentDate.getMonth()) + 1;
  let currentDay = parseInt(currentDate.getDate());

  let age = currentYear - year;
  let m = currentMonth - month;
  let d = currentDay - day;

  if (m <= 0 && d < 0) {
    age--;
  }

  if (m < 0 && d == 0) age--;

  if (age < 0) age = 0;

  const check = document.querySelector("input[type=radio]:checked");

  let resultText = document.getElementsByTagName("h1")[1];
  let resultImg = document.getElementsByTagName("img")[0];

  if (check != null) {
    if (check.value == "male") {
      resultText.innerHTML = `UM HOMEM DE ${age} ANOS`;

      if (age < 12) resultImg.src = "/img/male kid.jpg";

      if (age > 12 && age < 18) resultImg.src = "/img/male teen.jpg";

      if (age > 18 && age < 50) resultImg.src = "/img/adult man.jpg";

      if (age > 50) resultImg.src = "/img/old man.jpg";
    } else {
      resultText.innerHTML = `UMA MULHER DE ${age} ANOS`;

      if (age < 12) resultImg.src = "/img/female kid.jpg";

      if (age > 12 && age < 18) resultImg.src = "/img/female teen.jpg";

      if (age > 18 && age < 50) resultImg.src = "/img/adult woman.jpg";

      if (age > 50) resultImg.src = "/img/old woman.jpg";
    }
  }

  if (check != null && dateInput != "") {
    const resultArea = document.getElementById("result");
    resultArea.style.opacity = 1;
  }
};
