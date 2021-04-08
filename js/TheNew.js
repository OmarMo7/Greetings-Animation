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
$(function () {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }


  //else if ($typeValue.includes("rotation")) {
  //   window.location.pathname =
  //     "C:/Users/EGYPT/Downloads/Compressed/ImageTransitions/ImageTransitions/index2.html";
  // } else if ($typeValue.includes("flip")) {
  //   window.location.pathname =
  //     "C:/Users/EGYPT/Downloads/Compressed/ImageTransitions/ImageTransitions/index.html";
  // } else if ($typeValue.includes("cube")) {
  //   window.location.pathname =
  //     "C:/Users/EGYPT/Downloads/Compressed/ImageTransitions/ImageTransitions/index4.html";
  // } else if ($typeValue.includes("unfold")) {
  //   window.location.pathname =
  //     "C:/Users/EGYPT/Downloads/Compressed/ImageTransitions/ImageTransitions/index5.html";
  // }
  function createMultiFlipSelect(te_transition, $typeValue) {

    var AllStyleFiles = document.querySelectorAll('head .style')
    AllStyleFiles.forEach(styleFile => {
      console.log(styleFile)
      if (styleFile.id != "style3") {
        document.querySelector('head').removeChild(styleFile)
      }
      if (document.querySelector('head').contains(styleFile)) { console.log("contains"); return; }
      else document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" id="style3" class="style" href="css/style3.css" />'
    })
    // var link = document.createElement('link')
    // link.rel = "stylesheet"
    // link.type = "text/css"
    // link.href = "../css/style3.css"
    // var body = document.querySelector('head')
    // document.body.insertBefore(link, body)
    // te_transition.classList.forEach(classs => {
    //   console.log(classs)
    //   if (classs != "te-transition") {
    //     te_transition.classList.remove(classs)
    //     console.log('removed')
    //   }
    // })
    for (let i = 0; i < 7; i++) {
      // var img = document.createElement('img')
      // var imgNext = document.createElement('img')
      var te_front = document.createElement('div')
      var te_back = document.createElement('div')
      var te_card = document.createElement('div')
      // img.src = $teImagesSrc[2]
      // imgNext.src = $teImagesSrc[3]
      te_card.classList.add("te-card")
      te_card.classList.add(`te-flip${i + 1}`)
      console.log(`te-flip${i + 1}`)
      te_front.classList.add("te-front")
      // te_front.appendChild(img)
      te_back.classList.add("te-back")
      // te_back.appendChild(imgNext)
      te_card.appendChild(te_front)
      te_card.appendChild(te_back)
      te_transition.appendChild(te_card)
    }
  }

  function createRotateSelect(te_transition, $typeValue) {

    var AllStyleFiles = document.querySelectorAll('head .style')
    AllStyleFiles.forEach(styleFile => {
      console.log(styleFile)
      if (styleFile.id != "style2") {
        document.querySelector('head').removeChild(styleFile)
      }
      if (document.querySelector('head').contains(styleFile)) { console.log("contains"); return; }
      else document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" id="style2" class="style" href="css/style2.css" />'
    })
    // var link = document.createElement('link')
    // link.rel = "stylesheet"
    // link.type = "text/css"
    // link.href = "../css/style3.css"
    // var body = document.querySelector('head')
    // document.body.insertBefore(link, body)
    var te_front = document.createElement('div')
    var te_back = document.createElement('div')


    // te_transition.classList.forEach(classs => {
    //   console.log(classs)
    //   if (classs != "te-transition") {
    //     te_transition.classList.remove(classs)
    //     console.log('removed')
    //   }
    // })
    //te-transition difference

    // var img = document.createElement('img')
    // var imgNext = document.createElement('img')
    // img.src = $teImagesSrc[2]
    // imgNext.src = $teImagesSrc[3]
    // te_transition.innerHTML = `
    // 			<div class="te-front"></div>
    // 			<div class="te-back"></div>`
    te_front.classList.add("te-front")
    // te_front.appendChild(img)
    te_back.classList.add("te-back")
    // te_back.appendChild(imgNext)
    te_transition.appendChild(te_front)
    te_transition.appendChild(te_back)
  }

  function createFlipSelect(te_transition, $typeValue) {
    var AllStyleFiles = document.querySelectorAll('head .style')
    AllStyleFiles.forEach(styleFile => {
      console.log(styleFile)
      if (styleFile.id != "style1") {
        document.querySelector('head').removeChild(styleFile)
      }
      if (document.querySelector('head').contains(styleFile)) { console.log("contains"); return; }
      else document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" id="style1" class="style" href="css/style1.css" />'
    })
    //te-transition difference
    var te_front = document.createElement('div')
    var te_back = document.createElement('div')
    var te_card = document.createElement('div')

    // te_transition.classList.forEach(classs => {
    //   console.log(classs)
    //   if (classs != "te-transition") {
    //     te_transition.classList.remove(classs)
    //     console.log('removed')
    //   }
    // })
    te_transition.classList.add("te-flip1")
    te_transition.classList.add("te-show")
    te_card.classList.add("te-card")
    te_front.classList.add("te-front")
    te_back.classList.add("te-back")
    te_card.appendChild(te_front)
    te_card.appendChild(te_back)
    te_transition.appendChild(te_card)
  }

  function createCubeSelect(te_transition, $typeValue) {

    var AllStyleFiles = document.querySelectorAll('head .style')
    AllStyleFiles.forEach(styleFile => {
      console.log(styleFile)
      if (styleFile.id != "style4") {
        document.querySelector('head').removeChild(styleFile)
      }
      if (document.querySelector('head').contains(styleFile)) return;
      else document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" id="style4" class="style" href="css/style4.css" />'
    })
    //te-transition difference
    // te_transition.classList.forEach(classs => {
    //   console.log(classs)
    //   if (classs != "te-transition") {
    //     te_transition.classList.remove(classs)
    //     console.log('removed')
    //   }
    // })
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

    te_transition.appendChild(divFront)
    te_transition.appendChild(divTop)
    te_transition.appendChild(divBottom)
    te_transition.appendChild(divRight)
    te_transition.appendChild(divLeft)
  }
  function createUnfoldSelect(te_transition) {

    var AllStyleFiles = document.querySelectorAll('head .style')
    AllStyleFiles.forEach(styleFile => {
      console.log(styleFile)
      if (styleFile.id != "style5") {
        document.querySelector('head').removeChild(styleFile)
      }
      if (document.querySelector('head').contains(styleFile)) return;
      else document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" id="style5" class="style" href="css/style5.css" />'
    })
    //te-transition difference
    // te_transition.classList.forEach(classs => {
    //   console.log(classs)
    //   if (classs != "te-transition") {
    //     te_transition.classList.remove(classs)
    //     console.log('removed')
    //   }
    // })
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

    te_transition.appendChild(divFront1)
    te_transition.appendChild(divFront2)
    te_transition.appendChild(divFront3)
    te_transition.appendChild(divBack1)
    te_transition.appendChild(divBack2)
    te_transition.appendChild(divBack3)
  }

  function createOtherSelect() {
    //te-transition difference
    var te_front = document.createElement('div')
    var te_back = document.createElement('div')
    var te_transition = document.querySelector('.te-transition')
    while (te_transition.firstChild) {
      te_transition.removeChild(te_transition.firstChild)
    }
    te_front.classList.add("te-front")
    te_back.classList.add("te-back")
    te_card.appendChild(te_front)
    te_card.appendChild(te_back)
  }

  var TransitionEffects = (function () {
    var $teWrapper = document.getElementById("te-wrapper"), //Selected only  to pick elements from
      $teWrapper2 = $("#te-wrapper"),
      $teCover = $teWrapper.querySelector(".te-cover"),
      $teCover2 = $teWrapper2.find("div.te-cover"),
      $teImages = $teWrapper.querySelectorAll(".te-images > img"),
      $teImages2 = $teWrapper2.find("div.te-images > img"),
      imagesCount = $teImages.length,
      current_img = 0,
      last_img = 0,
      $navNext = document.getElementById("te-next"), //Next button
      $type = document.querySelector("#type"), //Flip1-flip2.....
      // $typeValue = $type.value,
      $teTransition = $teWrapper.querySelector(".te-transition"),
      $teTransition2 = $teWrapper2.find(".te-transition"), // requires perspective
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
      ],
      animated = false,
      // check for support
      hasPerspective = true,
      init = function (num) {
        var te_transition = document.querySelector('.te-transition')
          , $typeValue = $wPerspective[num];
        while (te_transition.firstChild) {
          te_transition.removeChild(te_transition.firstChild)
        }
        te_transition.classList.forEach(classs => {
          console.log(classs)
          te_transition.classList.remove(classs)
        })
        console.log(num);
        console.log($typeValue);
        // $teTransition.classList.add($typeValue);

        if ($typeValue.includes("multiflip")) {
          createMultiFlipSelect(te_transition, $typeValue);
        }
        else if ($typeValue.includes("rotation")) {
          createRotateSelect(te_transition, $typeValue);
        }
        else if ($typeValue.includes("flip")) {
          createFlipSelect(te_transition, $typeValue);
        }
        else if ($typeValue.includes("cube")) {
          createCubeSelect(te_transition, $typeValue);
        }
        else if ($typeValue.includes("unfold")) {
          createUnfoldSelect(te_transition, $typeValue);
        }

        if (hasPerspective && animated) return false;

        animated = true;
        $teTransition.classList.add('te-transition')
        $teTransition.classList.add($typeValue)
        showNext($typeValue);
        // return false;
        if (hasPerspective) {
          console.log(type);
          $teWrapper.addEventListener(
            "animationstart",
            function (event) {
              $type.style.setProperty("disabled", true);
            },
            addEventListener("animationend", function (event) {
              if (
                (type === "te-unfold1" &&
                  event.originalEvent.animationName !== "unfold1_3Back") ||
                (type === "te-unfold2" &&
                  event.originalEvent.animationName !== "unfold2_3Back")
              )
                return false;

              $teCover.classList.remove("te-hide");
              if ($wPerspective.includes($typeValue))
                $teWrapper.classList.remove("te-perspective");
              $teTransition.classList.remove("te-show");
              animated = false;
              $type.style.setProperty("disabled", false);
            })
          );
        }

        // $type.addEventListener('change', function (event) {
        //   // $typeValue = this.value
        //   console.log($typeValue)
        // $teTransition.classList.forEach(classs => {
        //   $teTransition.classList.remove(classs)
        // })
        // $teTransition.classList.add('te-transition')
        // $teTransition.classList.add($typeValue)


        // });
      },
      showNext = ($typeValue) => {
        console.log($typeValue);

        if (hasPerspective) {
          if ($wPerspective.includes($typeValue)) {
            console.log("found");
            $teWrapper.classList.add("te-perspective");
          }
          $teTransition.classList.add("te-show");
          $teCover.classList.add("te-hide");
        }
        updateImages()
        // setTimeout(, 4000);
      },
      updateImages = function () {

        /**test1 */
        // var $back = $teTransition2.find('div.te-back'),
        //   $front = $teTransition2.find('div.te-front');
        // (current_img === imagesCount - 1) ?
        //   (last_img = imagesCount - 1, current_img = 0) :
        //   (last_img = current_img, ++current_img);
        // var $last_img = $teImages2.eq(last_img),
        //   $currentImg = $teImages2.eq(current_img);

        // $front.empty().append('<img src="' + $last_img.attr('src') + '">');
        // $back.empty().append('<img src="' + $currentImg.attr('src') + '">');

        // $teCover2.find('img').attr('src', $currentImg.attr('src'));

        /** test2 */
        var $back = $teTransition2.find('div.te-back'),
          $front = $teTransition2.find('div.te-front');
        var back = $teTransition.querySelector("div.te-back"),
          front = $teTransition.querySelector("div.te-front");
        current_img == imagesCount - 1
          ? ((last_img = imagesCount - 1), (current_img = 0))
          : ((last_img = current_img), ++current_img);
        var last_img_src = $teImages.item(last_img).getAttribute("src"),
          current_img_src = $teImages.item(current_img).getAttribute("src");

        while (front.firstChild) {
          front.removeChild(front.firstChild);
        }
        // front.innerHTML = '<img src="' + last_img_src + '">';
        while (back.firstChild) {
          back.removeChild(back.firstChild);
        }
        // back.innerHTML = '<img src="' + current_img_src + '">';

        var img_front = document.createElement("img");
        var img_back = document.createElement("img");
        img_front.src = last_img_src;
        img_back.src = current_img_src;
        if (front.childElementCount === 1) {
          while (front.firstChild) {
            front.removeChild(front.firstChild);
          }
          front.appendChild(img_front);
        } else {
          front = $teTransition2.find("div.te-front");
          console.log('happen')
          console.log($teTransition2)
          front.empty().append(img_front);
        }
        if (back.childElementCount === 1) {
          while (back.firstChild) {
            back.removeChild(back.firstChild);
          }
          back.appendChild(img_back);
          console.log("happen");
        } else {
          back = $teTransition2.find("div.te-back");
          back.empty().append(img_back);
        }

        var cover = $teCover.querySelector("img");
        cover.setAttribute("src", current_img_src);
      };

    return { init: init };
  })();
  var i = 0;
  TransitionEffects.init(15);
  // setInterval(() => { var num = randomNumber(0, 17); TransitionEffects.init(num); console.log("gonna"); }, 3000)
});
