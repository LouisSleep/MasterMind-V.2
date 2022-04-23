const ColorsList = ["#ed6a5a", "#5ca4a9", "#88d18a", "#ce7da5", "#a833b9"];

function PushColorList() {
  const ColorsListEmpty = [];
  for (let i = 0; i < 4; i++) {
    const RandomColor = Math.random() * 5;

    const RandomColorEntire = Math.floor(RandomColor);

    console.log(RandomColorEntire);

    const Colors = ColorsList[RandomColorEntire];

    ColorsListEmpty.push(Colors);
  }

  console.log(ColorsListEmpty);
  return ColorsListEmpty;
}

let SequenceOrdinateur = PushColorList();

let ChoiceColors = [];

function SequenceUtilisateurButton1() {
  if (ChoiceColors.length < 4) {
    const ChoiceButton1 = document.querySelector("#button1");
    const circle = document.createElement("div");
    circle.id = "answerColors";
    const square = document.createElement("div");
    square.id = "answerColors1";
    var text = document.createTextNode(".");
    circle.appendChild(text);
    square.appendChild(circle);

    circle.style.cssText =
      "background:" +
      ChoiceButton1.value +
      ";border-radius:50px; width:35px; height:35px; color: transparent;";
    square.style.cssText =
      "width:45px; height:45px; border-radius:50px;color: transparent;grid-column :auto auto;background:white; display:flex; align-items:center; justify-content:center;";

    document.querySelector(".plateBoard").appendChild(square);

    ChoiceColors.push(ChoiceButton1.value);
    console.log(ChoiceColors);
    // return ChoiceColors
  }
}

function SequenceUtilisateurButton2() {
  if (ChoiceColors.length < 4) {
    const ChoiceButton2 = document.querySelector("#button2");

    const circle = document.createElement("div");
    circle.id = "answerColors";
    const square = document.createElement("div");
    square.id = "answerColors1";
    var text = document.createTextNode(".");
    circle.appendChild(text);
    square.appendChild(circle);

    circle.style.cssText =
      "background:" +
      ChoiceButton2.value +
      ";border-radius:50px; width:35px; height:35px; color: transparent;";
    square.style.cssText =
      "width:45px; height:45px; border-radius:50px;color: transparent;grid-column :auto;background:white; display:flex; align-items:center; justify-content:center;";

    document.querySelector(".plateBoard").appendChild(square);

    ChoiceColors.push(ChoiceButton2.value);
    console.log(ChoiceColors);
    // return ChoiceColors
  }
}

function SequenceUtilisateurButton3() {
  if (ChoiceColors.length < 4) {
    const ChoiceButton3 = document.querySelector("#button3");
    const circle = document.createElement("div");
    circle.id = "answerColors";
    const square = document.createElement("div");
    square.id = "answerColors1";
    var text = document.createTextNode(".");
    circle.appendChild(text);
    square.appendChild(circle);

    circle.style.cssText =
      "background:" +
      ChoiceButton3.value +
      ";border-radius:50px; width:35px; height:35px; color: transparent;";
    square.style.cssText =
      "width:45px; height:45px; border-radius:50px;color: transparent;grid-column :auto;background:white; display:flex; align-items:center; justify-content:center;";

    document.querySelector(".plateBoard").appendChild(square);

    ChoiceColors.push(ChoiceButton3.value);
    console.log(ChoiceColors);
    // return ChoiceColors
  }
}

function SequenceUtilisateurButton4() {
  if (ChoiceColors.length < 4) {
    const ChoiceButton4 = document.querySelector("#button4");
    const circle = document.createElement("div");
    circle.id = "answerColors";
    const square = document.createElement("div");
    square.id = "answerColors1";
    var text = document.createTextNode(".");
    circle.appendChild(text);
    square.appendChild(circle);

    circle.style.cssText =
      "background:" +
      ChoiceButton4.value +
      ";border-radius:50px; width:35px; height:35px; color: transparent;";
    square.style.cssText =
      "width:45px; height:45px; border-radius:50px;color: transparent;grid-column :auto;background:white; display:flex; align-items:center; justify-content:center;";

    document.querySelector(".plateBoard").appendChild(square);

    ChoiceColors.push(ChoiceButton4.value);
    console.log(ChoiceColors);
    // return ChoiceColors
  }
}

function SequenceUtilisateurButton5() {
  if (ChoiceColors.length < 4) {
    const ChoiceButton5 = document.querySelector("#button5");
    const circle = document.createElement("div");
    circle.id = "answerColors";
    const square = document.createElement("div");
    square.id = "answerColors1";
    var text = document.createTextNode(".");
    circle.appendChild(text);
    square.appendChild(circle);

    circle.style.cssText =
      "background:" +
      ChoiceButton5.value +
      ";border-radius:50px; width:35px; height:35px; color: transparent;";
    square.style.cssText =
      "width:45px; height:45px; border-radius:50px;color: transparent;grid-column :auto;background:white; display:flex; align-items:center; justify-content:center;";

    document.querySelector(".plateBoard").appendChild(square);

    ChoiceColors.push(ChoiceButton5.value);
    console.log(ChoiceColors);
    // return ChoiceColors
  }
}

function CompareList() {
  let IASeqDoublon = SequenceOrdinateur.slice();
  // let CountRightAnswer = 0
  // let i = 0
  for (i = 0; i < 4; i++) {
    if (ChoiceColors[i] == IASeqDoublon[i]) {
      console.log("ok");
      // ChoiceColors.splice(i,1)
      // IASeqDoublon.splice(i,1)

      // CountRightAnswer++
      const circleCheck = document.createElement("div");
      circleCheck.id = "CheckColors";
      const squareCheck = document.createElement("div");
      squareCheck.id = "CheckColors1";
      var text = document.createTextNode(".");
      circleCheck.appendChild(text);
      squareCheck.appendChild(circleCheck);

      circleCheck.style.cssText =
        "background:green;border-radius:50px; width:15px; height:15px; color: transparent;";
      squareCheck.style.cssText =
        "width:20px; height:20px; border-radius:50px;color: transparent;grid-column :auto;background:white; display:flex; align-items:center; justify-content:center;margin-bottom:50%";

      document.querySelector(".Check").appendChild(squareCheck);
    } else if (SequenceOrdinateur.includes(ChoiceColors[i])) {
      console.log("ok mais pas au bon endroit");
      const circleCheck = document.createElement("div");
      circleCheck.id = "CheckColors";
      const squareCheck = document.createElement("div");
      squareCheck.id = "CheckColors1";
      var text = document.createTextNode(".");
      circleCheck.appendChild(text);
      squareCheck.appendChild(circleCheck);

      // ChoiceColors.splice(i,1)

      circleCheck.style.cssText =
        "background:gray;border-radius:50px; width:15px; height:15px; color: transparent;";
      squareCheck.style.cssText =
        "width:20px; height:20px; border-radius:50px;color: transparent;grid-column :auto;background:white; display:flex; align-items:center; justify-content:center;margin-bottom:50%";

      document.querySelector(".Check").appendChild(squareCheck);
    } else if (SequenceOrdinateur != ChoiceColors[i]) {
      console.log("toz");

      const circleCheck = document.createElement("div");
      circleCheck.id = "CheckColors";
      const squareCheck = document.createElement("div");
      squareCheck.id = "CheckColors1";
      var text = document.createTextNode(".");
      circleCheck.appendChild(text);
      squareCheck.appendChild(circleCheck);

      circleCheck.style.cssText =
        "background:white;border-radius:50px; width:15px; height:15px; color: transparent;";
      squareCheck.style.cssText =
        "width:20px; height:20px; border-radius:50px;color: transparent;grid-column :auto;background:white; display:flex; align-items:center; justify-items:center; margin-bottom:50%";

      document.querySelector(".Check").appendChild(squareCheck);
    }
  }

  if (JSON.stringify(ChoiceColors) == JSON.stringify(SequenceOrdinateur)) {
    alert("WIN");
    window.location.reload();
  }
  // console.log(CountRightAnswer)
  // console.log(CountCloseAnswer)

  console.log(ChoiceColors);
  if (ChoiceColors.length >= 1) {
    ChoiceColors.length = 0;
  }

  console.log(ChoiceColors);
}



var Click = 10;
function compteur() {
  Click = Click - 1;
  const numberClick = (document.querySelector("#count").innerHTML = Click);

  if (numberClick == 0) {
    alert(
      "tu as perdu ! Attention la page va se rafraichir, tu lui as donné trop chaud"
    );
    window.location.reload();
  }

  return numberClick;
}

function Myfunction() {
  var JOURNUIT = document.querySelector("body");
  var PJourNuit = document.querySelector("p");
  JOURNUIT.classList.toggle("active");
}

function Reload() {
  window.location.reload();
}
