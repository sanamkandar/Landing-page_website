// Targeting element/css properties for js for DOM manipulation

// targeting .inner-toggle for toggle button
let toggleBtn = document.querySelector(".inner-toggle");

// targeting .navLink
// for all links/elements in navbar returns nodelist of all elements
let navlink = document.querySelectorAll(".navLink");

// trageting .themeName
// for changing text Day or Night of toggle
let modeName = document.querySelector(".themeName");

// targeting .headline
// for heading line in program section for black
let headLine = document.querySelector(".headline");

// targeting .headForm
// for changing background of contact us in black
let conatctBackground = document.querySelector(".headForm");

// targeting .credential
// for last line of doc. changing text color
let credit = document.querySelector(".credential");
let textCredit = document.querySelector(".credentialLink");

// Added event listener for theme day to night mode
// > on click themeSwitch() will changes selected element properties
toggleBtn.addEventListener("click", function themeSwitch() {
  // condition checks if theme is day change into night vice-versa
  if (modeName.innerHTML == "Day") {
    // DAY MODE

    document.body.style.background = "black"; // background darkmode
    toggleBtn.style.margin = "1.5px 28px"; // theme switched

    navlink[0].style.color = "white"; // logo in navbar
    navlink[1].style.color = "white"; // work in navbar
    navlink[2].style.color = "white"; // services in navbar
    navlink[3].style.color = "white"; // about us in navbar
    navlink[4].style.color = "white"; // contact us in navbar
    navlink[5].style.color = "white"; // blog in navbar

    modeName.style.color = "white"; // colour for text 'day & night'
    modeName.innerHTML = "Night"; // changing day into night text, vice-versa

    headLine.style.color = "white"; // headline change into white

    conatctBackground.style.background = "black"; // change background of contact us into black
    conatctBackground.style.color = "white"; // change text of contact us into white

    credit.style.color = "white"; // change text color of credential section
    textCredit.style.color = "blue"; // change text color of credential section
  } else {
    // NIGHT MODE

    document.body.style.background = "white"; // background darkmode
    toggleBtn.style.margin = "1.5px 2px"; // theme switched

    navlink[0].style.color = "black"; // logo in navbar
    navlink[1].style.color = "black"; // work in navbar
    navlink[2].style.color = "black"; // services in navbar
    navlink[3].style.color = "black"; // about us in navbar
    navlink[4].style.color = "black"; // contact us in navbar
    navlink[5].style.color = "black"; // blog in navbar

    modeName.style.color = "black"; // colour for text 'day & night'
    modeName.innerHTML = "Day"; // changing day into night text , vice-versa

    headLine.style.color = "black"; // headline change into black

    conatctBackground.style.background = "rgb(238, 233, 233)"; //change background of contact us into graish white
    conatctBackground.style.color = "black"; // change text of contact us into black

    credit.style.color = "black"; // change text color of credential section (link)
  }
});
