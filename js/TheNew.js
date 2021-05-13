/**
 * jquery.transitions.js
 * CSS3 Animations for Image Transitions
 * http://www.codrops.com
 *
 * Copyright 2011, Pedro Botelho / Codrops
 * Free to use under the MIT license.
 *
 * Date: Mon Dec 19 2011
 */

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var colors = ['rgb(51, 102, 153)', 'rgb(0, 153, 204)', 'rgb(0, 204, 255)', 'rgb(51, 204, 255)', 'rgb(204, 204, 255)', 'rgb(255, 204, 255)', 'rgb(255, 153, 204)', 'rgb(255, 102, 153)', 'rgb(255, 0, 102)', 'rgb(204, 0, 102)', 'rgb(153, 0, 51)']


var colors2 = ['rgb(51, 80, 153)', 'rgb(0, 80, 204)', 'rgb(0, 80, 255)', 'rgb(51, 80, 255)', 'rgb(204, 80, 255)', 'rgb(255, 80, 255)', 'rgb(255, 80, 204)', 'rgb(255, 80, 153)', 'rgb(255, 80, 102)', 'rgb(204, 80, 102)', 'rgb(153, 80, 51)']

const Ezz = {
  name: "Zezo",
  password: "zzz"
};

var width = ['22', '26', '30', '35']
var messages = [' ☺️ واحشنى يا عزز كتييير  كتيير والله', "🙄😉 جاية متأخرة بس قلت احضرلك حاجة حلوة", '🤵🏿 الناس الشياكة لازملهم تهنئة شياكة', '😂 مش عاوز امسح دى من على تلفونى من ساعتها', '🤑💸 الغنى اللى بيجيب من ستار باكس', ' 🤩 العظمة تليق بك يا باش مهندس', '💞 كل سنة وانت طيب يا زيزو']

function createMultiFlipSelect($teTransition) {

  var AllStyleFiles = document.querySelectorAll('head .style')
  AllStyleFiles.forEach(styleFile => {
    if (styleFile.id != "style3") {
      document.querySelector('head').removeChild(styleFile)
    }
    if (document.querySelector('head').contains(styleFile)) return
    else document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" id="style3" class="style" href="css/style3.css" />'
  })

  for (let i = 0; i < 7; i++) {

    var te_front = document.createElement('div')
    var te_back = document.createElement('div')
    var te_card = document.createElement('div')
    te_card.classList.add("te-card")
    te_card.classList.add(`te-flip${i + 1}`)
    te_front.classList.add("te-front")
    te_back.classList.add("te-back")
    te_card.appendChild(te_front)
    te_card.appendChild(te_back)
    $teTransition.appendChild(te_card)
  }
}

function createRotateSelect($teTransition) {

  var AllStyleFiles = document.querySelectorAll('head .style')
  AllStyleFiles.forEach(styleFile => {
    if (styleFile.id != "style2") {
      document.querySelector('head').removeChild(styleFile)
    }
    if (document.querySelector('head').contains(styleFile)) return
    else document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" id="style2" class="style" href="css/style2.css" />'
  })

  var te_front = document.createElement('div')
  var te_back = document.createElement('div')
  te_front.classList.add("te-front")
  te_back.classList.add("te-back")
  $teTransition.appendChild(te_front)
  $teTransition.appendChild(te_back)
}

function createFlipSelect($teTransition) {
  var AllStyleFiles = document.querySelectorAll('head .style')
  AllStyleFiles.forEach(styleFile => {
    if (styleFile.id != "style1") {
      document.querySelector('head').removeChild(styleFile)
    }
    if (document.querySelector('head').contains(styleFile)) return
    else document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" id="style1" class="style" href="css/style1.css" />'
  })
  //te-transition difference
  var te_front = document.createElement('div')
  var te_back = document.createElement('div')
  var te_card = document.createElement('div')
  $teTransition.classList.add("te-flip1")
  $teTransition.classList.add("te-show")
  te_card.classList.add("te-card")
  te_front.classList.add("te-front")
  te_back.classList.add("te-back")
  te_card.appendChild(te_front)
  te_card.appendChild(te_back)
  $teTransition.appendChild(te_card)
}

function createCubeSelect($teTransition) {

  var AllStyleFiles = document.querySelectorAll('head .style')
  AllStyleFiles.forEach(styleFile => {
    if (styleFile.id != "style4") {
      document.querySelector('head').removeChild(styleFile)
    }
    if (document.querySelector('head').contains(styleFile)) return;
    else document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" id="style4" class="style" href="css/style4.css" />'
  })
  //te-transition difference
  var divFront = document.createElement('div')
  var divTop = document.createElement('div')
  var divBottom = document.createElement('div')
  var divRight = document.createElement('div')
  var divLeft = document.createElement('div')
  ////
  divFront.classList.add('te-cube-front')
  divFront.classList.add('te-cube-face')
  divFront.classList.add('te-front')
  ////
  divTop.classList.add('te-cube-top')
  divTop.classList.add('te-cube-face')
  divTop.classList.add('te-back')
  ////
  divBottom.classList.add('te-cube-bottom')
  divBottom.classList.add('te-cube-face')
  divBottom.classList.add('te-back')
  ////
  divRight.classList.add('te-cube-right')
  divRight.classList.add('te-cube-face')
  divRight.classList.add('te-back')
  ////
  divLeft.classList.add('te-cube-left')
  divLeft.classList.add('te-cube-face')
  divLeft.classList.add('te-back')

  $teTransition.appendChild(divFront)
  $teTransition.appendChild(divTop)
  $teTransition.appendChild(divBottom)
  $teTransition.appendChild(divRight)
  $teTransition.appendChild(divLeft)
}
function createUnfoldSelect($teTransition) {

  var AllStyleFiles = document.querySelectorAll('head .style')
  AllStyleFiles.forEach(styleFile => {
    if (styleFile.id != "style5") {
      document.querySelector('head').removeChild(styleFile)
    }
    if (document.querySelector('head').contains(styleFile)) return;
    else document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" id="style5" class="style" href="css/style5.css" />'
  })
  var divFront1 = document.createElement('div')
  var divFront2 = document.createElement('div')
  var divFront3 = document.createElement('div')
  var divBack1 = document.createElement('div')
  var divBack2 = document.createElement('div')
  var divBack3 = document.createElement('div')
  ////
  divFront1.classList.add('te-front')
  divFront1.classList.add('te-front1')
  divFront2.classList.add('te-front')
  divFront2.classList.add('te-front2')
  divFront3.classList.add('te-front')
  divFront3.classList.add('te-front3')
  ////
  divBack1.classList.add('te-back')
  divBack1.classList.add('te-back1')
  divBack2.classList.add('te-back')
  divBack2.classList.add('te-back2')
  divBack3.classList.add('te-back')
  divBack3.classList.add('te-back3')

  $teTransition.appendChild(divFront1)
  $teTransition.appendChild(divFront2)
  $teTransition.appendChild(divFront3)
  $teTransition.appendChild(divBack1)
  $teTransition.appendChild(divBack2)
  $teTransition.appendChild(divBack3)
}

function createOtherSelect($teTransition) {
  var AllStyleFiles = document.querySelectorAll('head .style')
  AllStyleFiles.forEach(styleFile => {
    if (styleFile.id != "style6") {
      document.querySelector('head').removeChild(styleFile)
    }
    if (document.querySelector('head').contains(styleFile)) return;
    else document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" id="style6" class="style" href="css/style6.css" />'
  })
  //te-transition difference
  var te_front = document.createElement('div')
  var te_back = document.createElement('div')

  te_front.classList.add("te-front")
  te_back.classList.add("te-back")
  $teTransition.appendChild(te_front)
  $teTransition.appendChild(te_back)
}

var TransitionEffects = (function () {
  var $teWrapper = document.getElementById("te-wrapper"), //Selected only  to pick elements from
    $teCover = $teWrapper.querySelector(".te-cover"),
    $teImages = ["images/carback.jpg", "images/car.jpg", "images/pool.jpg",
      "images/suit.jpg",
      "images/christmas.jpg",
      "images/starbucks.jpg",
      "images/sun.jpg"],
    imagesCount = $teImages.length,
    current_img = 0,
    last_img = 0,
    $teTransition = $teWrapper.querySelector(".te-transition"),
    $wPerspective = [
      "te-flip1",
      "te-flip2",
      "te-flip3",
      "te-flip4",
      "te-rotation1",
      "te-rotation2",
      "te-rotation3",
      "te-rotation4",
      "te-rotation5",
      "te-multiflip1",
      "te-multiflip2",
      "te-multiflip3",
      "te-cube1",
      "te-cube2",
      "te-cube3",
      "te-cube4",
      "te-unfold1",
      "te-unfold2",
      "te-example1",
      "te-example2",
      "te-example3",
      "te-example4",
      "te-example5",
      "te-example6",
      "te-example7"
    ],
    animated = false,
    // check for support
    hasPerspective = true,
    init = function (num) {

      var $typeValue = $wPerspective[num];
      while ($teTransition.firstChild) {
        $teTransition.removeChild($teTransition.firstChild)
      }
      $teTransition.classList.forEach(classs => {
        $teTransition.classList.remove(classs)
      })

      if ($typeValue.includes("multiflip")) {
        createMultiFlipSelect($teTransition);
      }
      else if ($typeValue.includes("rotation")) {
        createRotateSelect($teTransition);
      }
      else if ($typeValue.includes("flip")) {
        createFlipSelect($teTransition);
      }
      else if ($typeValue.includes("cube")) {
        createCubeSelect($teTransition);
      }
      else if ($typeValue.includes("unfold")) {
        createUnfoldSelect($teTransition);
      }
      else if ($typeValue.includes("example")) {
        createOtherSelect($teTransition);
      }

      if (hasPerspective && animated) return false;

      animated = true;
      if (!$teTransition.classList.contains("te-transition")) {
        $teTransition.classList.add('te-transition')
      }
      $teTransition.classList.add($typeValue)
      showNext($typeValue);
      if (hasPerspective) {
        $teWrapper.addEventListener(
          "animationstart",
          function (event) {
          },
          addEventListener("animationend", function (event) {
            $teCover.classList.remove("te-hide");
            if ($wPerspective.includes($typeValue))
              $teWrapper.classList.remove("te-perspective");
            $teTransition.classList.remove("te-show");
            animated = false;
          })
        );
      }
    },
    showNext = ($typeValue) => {

      if (hasPerspective) {
        if ($wPerspective.includes($typeValue)) {
          $teWrapper.classList.add("te-perspective");
        }
        $teTransition.classList.add("te-show");
        $teCover.classList.add("te-hide");
      }
      updateImages()
      // setTimeout(, 4000);
    },
    updateImages = function () {
      current_img == imagesCount - 1
        ? ((last_img = imagesCount - 1), (current_img = 0))
        : ((last_img = current_img), ++current_img);
      var last_img_src = $teImages[last_img],
        current_img_src = $teImages[current_img];



      var img_front = document.createElement("img");
      var img_back = document.createElement("img");
      img_front.src = last_img_src;
      img_back.src = current_img_src;


      //front
      $teTransition.querySelectorAll("div.te-front").forEach(front => {
        while (front.firstChild) {
          front.removeChild(front.firstChild)
        }
        console.log('appended')
        front.innerHTML = `<img src='${img_front.src}' />`
      })

      //back
      $teTransition.querySelectorAll("div.te-back").forEach(back => {
        while (back.firstChild) {
          back.removeChild(back.firstChild)
        }
        console.log('appended')
        back.innerHTML = `<img src='${img_back.src}' />`
      })

      var cover = $teCover.querySelector("img");
      cover.setAttribute("src", current_img_src);
    };



  return { init: init };
})();
function refreshPage() {
  window.location.reload();
}

performAction = function () {
  var te_cover = document.querySelector('.te-cover')
  var te_shadow = document.querySelector('.te-shadow')
  te_cover.classList.remove('te-hide')
  te_shadow.classList.remove('te-hide')
  performLuminance()
  document.body.setAttribute('style', `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width[0]}' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='${colors[0]}' fill-opacity='0.2' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`)
  // setTimeout(() => {
  //   TransitionEffects.init(1);
  // }, 5000)

  var i = 1;
  var j = 1;
  setInterval(() => {
    var styles = {
      "transition": "all 1s ease-out",
      "background": `${colors[i++]}`,
      "background-image": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width[j++]}' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='${colors2[i]}' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    };

    Object.assign(document.body.style, styles)
    if (i == colors.length) i = 0
    if (j == width.length) j = 0
  }, 6000)
  setInterval(() => {
    var imgs = document.querySelectorAll('img')
    var num = randomNumber(0, 24);
    imgs.forEach(img => {
      if (!img.classList.contains('border-radius')) {
        console.log(img)
        img.classList.add('border-radius')
      }
    })

    TransitionEffects.init(num); console.log("gonna");
  }, 6000)

  /**Typewriter function */
  var k = 0;
  var typeContainer = document.querySelector('.typeContainer')
  var typeWriter = document.createElement('div')
  var text = document.createElement('div')
  typeWriter.appendChild(text)
  typeContainer.appendChild(typeWriter)
  setInterval(() => {
    typeWriter.removeChild(text)
    typeWriter.classList.remove('typewriter')
    if (document.querySelector('.typeContainer .typewriter div') == null) {
      typeWriter.appendChild(text)
    }
    typeWriter.classList.add('typewriter')
    text.textContent = ""
    text.textContent = messages[k]
    if (text.scrollWidth >= window.screen.width - 15) {
      text.style.fontSize = "12px"
    }
    else {
      text.style.fontSize = "18px"
    }
    console.log(window.screen.width - 15)
    console.log(text.scrollWidth)
    k++;
    if (k == messages.length) k = 0;
  }, 6000)

}
performLogin = function () {
  if (localStorage.getItem('name') != null && localStorage.getItem('password') != null &&
    localStorage.getItem('name') == Ezz.name && localStorage.getItem('password') == Ezz.password) {
    performDancingText()
    performSnowFlake(1.2)
    setTimeout(() => {
      var container = document.querySelector('.container')
      var controls = document.querySelector('.te-controls')
      var wrapper = document.querySelector('.wrapper')
      var shadow = document.createElement('div')
      shadow.classList.add('te-shadow')
      controls.appendChild(shadow)
      var display = {
        "display": ""
      };
      var displayNone = {
        "display": "none"
      };
      Object.assign(wrapper.style, displayNone)
      Object.assign(container.style, display)
      performAction();
      performSnowFlake(0.8);
    }, 10 * 1000)
    localStorage.removeItem('name'); localStorage.removeItem('password');
    return;
  }
  if (document.querySelector('form') != null) return;
  var form = document.createElement('form')
  var container = document.createElement('div')
  var labelUser = document.createElement('label')
  var labelPassword = document.createElement('label')
  var userInput = document.createElement('input')
  var passInput = document.createElement('input')
  var loginButton = document.createElement('button')

  labelUser.innerHTML = '<b>Username</b>'
  labelPassword.innerHTML = '<b>Password</b>'
  labelUser.setAttribute('for', 'uname')
  labelUser.id = "uname"
  labelPassword.setAttribute('for', 'psw')
  labelPassword.id = "psw"
  userInput.setAttribute('type', 'text')
  passInput.setAttribute('type', 'password')
  loginButton.setAttribute('type', 'submit')
  userInput.setAttribute('placeholder', 'Enter Username')
  passInput.setAttribute('placeholder', 'Enter Password')
  userInput.setAttribute('name', 'uname')
  passInput.setAttribute('name', 'psw')
  userInput.setAttribute('required', '')
  passInput.setAttribute('required', '')
  form.setAttribute('method', 'post')
  userInput.id = 'username'
  passInput.id = 'password'
  loginButton.id = 'login'


  container.classList.add('form')
  container.id = "formContainer"
  container.appendChild(labelUser)
  container.appendChild(userInput)
  container.appendChild(labelPassword)
  container.appendChild(passInput)
  container.appendChild(loginButton)
  form.appendChild(container)
  var container = document.querySelector('.container')
  var display = {
    "display": "none"
  };
  Object.assign(container.style, display)
  document.body.insertBefore(form, container)
  loginButton = document.querySelector('#login');
  loginButton.textContent = "Login"
  loginButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked')
    console.log(userInput.value)
    console.log(passInput.value)
    console.log(localStorage.getItem('name'))
    console.log(localStorage.getItem('password'))
    localStorage.setItem('name', userInput.value)
    localStorage.setItem('password', passInput.value)
    verifyUser(localStorage.getItem('name'), localStorage.getItem('password'));
  })
}
performDancingText = function () {
  var wrapper = document.createElement('div')
  var span1 = document.createElement('span')
  var span2 = document.createElement('span')
  var span3 = document.createElement('span')
  var span4 = document.createElement('span')
  var span5 = document.createElement('span')
  var span6 = document.createElement('span')
  var span7 = document.createElement('span')
  var span8 = document.createElement('span')
  var span9 = document.createElement('span')
  var span10 = document.createElement('span')
  var span11 = document.createElement('span')
  var span12 = document.createElement('span')
  var span13 = document.createElement('span')
  var span14 = document.createElement('span')
  var span15 = document.createElement('span')
  var span16 = document.createElement('span')
  var span17 = document.createElement('span')
  wrapper.classList.add('wrapper')
  span1.textContent = "H"
  span2.textContent = "a"
  span3.textContent = "p"
  span4.textContent = "p"
  span5.textContent = "y"
  span6.textContent = "B"
  span7.textContent = "i"
  span8.textContent = "r"
  span9.textContent = "t"
  span10.textContent = "h"
  span11.textContent = "d"
  span12.textContent = "a"
  span13.textContent = "y"
  span14.textContent = "Z"
  span15.textContent = "e"
  span16.textContent = "z"
  span17.textContent = "o"
  wrapper.appendChild(span1)
  wrapper.appendChild(span2)
  wrapper.appendChild(span3)
  wrapper.appendChild(span4)
  wrapper.appendChild(span5)
  wrapper.appendChild(span6)
  wrapper.appendChild(span7)
  wrapper.appendChild(span8)
  wrapper.appendChild(span9)
  wrapper.appendChild(span10)
  wrapper.appendChild(span11)
  wrapper.appendChild(span12)
  wrapper.appendChild(span13)
  wrapper.appendChild(span14)
  wrapper.appendChild(span15)
  wrapper.appendChild(span16)
  wrapper.appendChild(span17)
  var container = document.querySelector('.container')
  document.body.insertBefore(wrapper, container)
  var display = {
    "display": "none"
  };
  Object.assign(container.style, display)
}
performSnowFlake = function (font_size) {
  var exist = false;
  if (document.querySelector('.snowflake') != null) { exist = true }
  if (!exist) {
    var snowFlakes = document.createElement('div')
    snowFlakes.classList.add('snowflakes')
    snowFlakes.setAttribute('aria-hidden', 'true')
    for (let i = 0; i < 10; i++) {
      var snowFlake = document.createElement('div')
      snowFlake.classList.add('snowflake')
      if (i == 0 || i % 3 == 0) { snowFlake.innerHTML = "&#128149" }
      else if (i == 2 || i % 2 == 0) { snowFlake.innerHTML = "&#127802" }
      else if (i == 1 || i % 1 == 0) {
        snowFlake.innerHTML = "&#127880"
      }
      snowFlakes.appendChild(snowFlake);
    }
    document.querySelector('body').insertBefore(snowFlakes, document.querySelector('.wrapper'))
  }
  document.querySelectorAll('.snowflake').forEach(flake => {
    var font = { "font-size": `${font_size}em` };
    console.log(font_size)
    Object.assign(flake.style, font)
  })

}
performLuminance = function () {
  var luminance = document.createElement('div')
  var text = document.createElement('div')
  luminance.classList.add('luminance')
  text.classList.add('text')
  text.textContent = "Zezo"
  luminance.appendChild(text)

  document.body.insertBefore(luminance, document.querySelector('.container'))
}
verifyUser = function (user, pass) {
  if (user == "Zezo" && pass == "zzz") {
    console.log("right")
    setTimeout(() => { refreshPage(); console.log('time') }, 500)
  }
  else { performLogin() }
}
performLogin();


