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

  var TransitionEffects = (function () {

    var $teWrapper = document.getElementById('te-wrapper'),//Selected only  to pick elements from
      $teWrapper2 = $('#te-wrapper'),
      $teCover = $teWrapper.querySelector('.te-cover'),
      $teImages = $teWrapper.querySelectorAll('.te-images > img'),
      imagesCount = $teImages.length,
      current_img = 0,
      last_img = 0,

      $navNext = document.getElementById('te-next'),//Next button
      $type = document.getElementById('type'),//Flip1-flip2.....
      $type2 = $('#type'),
      $typeValue = $type2.val(),
      $teTransition = $teWrapper.querySelector('.te-transition'),
      // requires perspective
      $wPerspective = ['te-flip1', 'te-flip2', 'te-flip3', 'te-flip4',
        'te-rotation1', 'te-rotation2', 'te-rotation3', 'te-rotation4', 'te-rotation5',
        'te-multiflip1', 'te-multiflip2', 'te-multiflip3',
        'te-cube1', 'te-cube2', 'te-cube3', 'te-cube4',
        'te-unfold1', 'te-unfold2'],
      animated = false,
      // check for support
      hasPerspective = true,
      init = function () {

        $teTransition.classList.add($typeValue);
        $navNext.addEventListener('click', function (event) {

          if (hasPerspective && animated)
            return false;

          animated = true;
          showNext();
          return false;
        });

        if (hasPerspective) {
          $teWrapper2.on({
            'webkitAnimationStart': function (event) {

              $type.style.setProperty('disabled', true);

            },
            'webkitAnimationEnd': function (event) {

              if ((type === 'te-unfold1' && event.originalEvent.animationName !== 'unfold1_3Back') ||
                (type === 'te-unfold2' && event.originalEvent.animationName !== 'unfold2_3Back'))
                return false;

              $teCover.classList.remove('te-hide');
              if ($wPerspective.includes($typeValue))
                $teWrapper.classList.remove('te-perspective');
              $teTransition.classList.remove('te-show');
              animated = false;
              $type.style.setProperty('disabled', false);

            }
          });


        }


        $type2.on('change.TransitionEffects', function (event) {
          $typeValue = $(this).val()
          $teTransition.classList.forEach(classs => {
            $teTransition.classList.remove(classs)
          })
          console.log($typeValue)

          $teTransition.classList.add('te-transition')
          $teTransition.classList.add($typeValue)

        });

      },
      showNext = () => {

        console.log($typeValue)

        if (hasPerspective) {

          if ($wPerspective.includes($typeValue)) {
            console.log('found')
            $teWrapper.classList.add('te-perspective');
          }
          $teTransition.classList.add('te-show');
          $teCover.classList.add('te-hide')

        }

        updateImages();

      },
      updateImages = function () {

        var $back = $teTransition.querySelector('div.te-back'),
          $front = $teTransition.querySelector('div.te-front');

        (current_img === imagesCount - 1) ?
          (last_img = imagesCount - 1, current_img = 0) :
          (last_img = current_img, ++current_img);
        $front.innerHTML = ''
        $front.innerHTML = `<img src=" ${$teImages.item(last_img).getAttribute('src')}">`
        console.log($teImages.item(last_img).getAttribute('src'))
        // $front.empty().append('<img src="' + $last_img.attr('src') + '">');
        $back.innerHTML = ''
        $back.innerHTML = `<img src="${$teImages.item(current_img).getAttribute('src')}">`;
        console.log($teImages.item(current_img).getAttribute('src'))
        $teCover.querySelector('img').setAttribute('src', $teImages.item(current_img).getAttribute('src'));
      };

    return { init: init };

  })();

  TransitionEffects.init();

});