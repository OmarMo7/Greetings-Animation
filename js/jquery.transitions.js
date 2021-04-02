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
			$teCover2 = $teWrapper2.find('div.te-cover'),
			$teImages = $teWrapper.querySelectorAll('.te-images > img'),
			$teImages2 = $teWrapper2.find('div.te-images > img'),
			imagesCount = $teImages.length,
			current_img = 0,
			last_img = 0,

			$navNext = document.getElementById('te-next'),//Next button
			$type = document.querySelector('#type'),//Flip1-flip2.....
			$typeValue = $type.value,
			$teTransition = $teWrapper.querySelector('.te-transition'),
			$teTransition2 = $teWrapper2.find('.te-transition')
			,		// requires perspective
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


				function createFlipSelect() {
					var te_controls = document.querySelector('.te-controls')
					var select = document.createElement('select')
					var te_front = document.createElement('div')
					var te_back = document.createElement('div')
					var te_transition = document.querySelector('.te-transition')
					select.id = "type"
					var te_card = document.createElement('div')
					var option1 = document.createElement('option')
					var option2 = document.createElement('option')
					var option3 = document.createElement('option')
					var option4 = document.createElement('option')

					//type selection difference
					select.appendChild(option1)
					select.appendChild(option2)
					select.appendChild(option3)
					select.appendChild(option4)
					option1.value = "te-flip1"
					option1.textContent = "Flip 1"
					option1.setAttribute('selected', 'true')
					option2.value = "te-flip2"
					option2.textContent = "Flip 2"
					option3.value = "te-flip3"
					option3.textContent = "Flip 3"
					option4.value = "te-flip4"
					option4.textContent = "Flip 4"
					te_controls.appendChild(select)
					//te-transition difference
					te_transition.classList.add("te-flip1")
					te_transition.classList.add("te-show")
					te_card.id = "differ"
					te_card.classList.add("te-card")
					te_front.classList.add("te-front")
					te_back.classList.add("te-back")
					te_card.appendChild(te_front)
					te_card.appendChild(te_back)
					te_transition.appendChild(te_card)
				}
				function createRotateSelect() {
					//type selection difference
					var te_controls = document.querySelector('.te-controls')
					var select = document.createElement('select')
					select.id = "type"
					var option1 = document.createElement('option')
					var option2 = document.createElement('option')
					var option3 = document.createElement('option')
					var option4 = document.createElement('option')
					var option5 = document.createElement('option')
					select.appendChild(option1)
					select.appendChild(option2)
					select.appendChild(option3)
					select.appendChild(option4)
					select.appendChild(option5)
					option1.value = "te-rotation1"
					option1.textContent = "Rotation 1"
					option1.setAttribute('selected', 'true')
					option2.value = "te-rotation2"
					option2.textContent = "Rotation 2"
					option3.value = "te-rotation3"
					option3.textContent = "Rotation 3"
					option4.value = "te-rotation4"
					option4.textContent = "Rotation 4"
					option5.value = "te-rotation5"
					option5.textContent = "Rotation 5"
					te_controls.appendChild(select)
					//te-transition difference
					var te_front = document.createElement('div')
					var te_back = document.createElement('div')
					var te_transition = document.querySelector('.te-transition')
					te_card.id = "differ"
					te_front.classList.add("te-front")
					te_back.classList.add("te-back")
					te_transition.appendChild(te_front)
					te_transition.appendChild(te_back)
				}
				createFlipSelect();
				createRotateSelect();
				if (hasPerspective) {
					console.log(type)
					$teWrapper.addEventListener('animationstart',
						function (event) {

							$type.style.setProperty('disabled', true);

						},
						addEventListener('animationend', function (event) {

							if ((type === 'te-unfold1' && event.originalEvent.animationName !== 'unfold1_3Back') ||
								(type === 'te-unfold2' && event.originalEvent.animationName !== 'unfold2_3Back'))
								return false;

							$teCover.classList.remove('te-hide');
							if ($wPerspective.includes($typeValue))
								$teWrapper.classList.remove('te-perspective');
							$teTransition.classList.remove('te-show');
							animated = false;
							$type.style.setProperty('disabled', false);

						})
					);


				}


				$type.addEventListener('change', function (event) {
					$typeValue = this.value
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

				/**test1 */
				// var $back = $teTransition2.find('div.te-back'),
				// 	$front = $teTransition2.find('div.te-front');
				// (current_img === imagesCount - 1) ?
				// 	(last_img = imagesCount - 1, current_img = 0) :
				// 	(last_img = current_img, ++current_img);
				// var $last_img = $teImages2.eq(last_img),
				// 	$currentImg = $teImages2.eq(current_img);

				// $front.empty().append('<img src="' + $last_img.attr('src') + '">');
				// $back.empty().append('<img src="' + $currentImg.attr('src') + '">');

				// $teCover2.find('img').attr('src', $currentImg.attr('src'));






				/** test2 */
				// var $back = $teTransition2.find('div.te-back'),
				// 	$front = $teTransition2.find('div.te-front');
				var back = $teTransition.querySelector('div.te-back'),
					front = $teTransition.querySelector('div.te-front');
				(current_img === imagesCount - 1) ?
					(last_img = imagesCount - 1, current_img = 0) :
					(last_img = current_img, ++current_img);
				var last_img_src = $teImages.item(last_img).getAttribute('src'),
					current_img_src = $teImages.item(current_img).getAttribute('src')

				while (front.firstChild) {
					front.removeChild(front.firstChild)
				}
				// front.innerHTML = '<img src="' + last_img_src + '">';
				while (back.firstChild) {
					back.removeChild(back.firstChild)
				}
				// back.innerHTML = '<img src="' + current_img_src + '">';

				var img_front = document.createElement('img')
				var img_back = document.createElement('img')
				img_front.src = last_img_src
				img_back.src = current_img_src
				if (front.childElementCount === 1) {
					while (front.firstChild) {
						front.removeChild(front.firstChild)
					}
					front.appendChild(img_front);
				}
				else {
					front = $teTransition2.find('div.te-front');
					front.empty().append(img_front);
				}
				if (back.childElementCount === 1) {
					while (back.firstChild) {
						back.removeChild(back.firstChild)
					}
					back.appendChild(img_back);
					console.log("happen")
				}
				else {
					back = $teTransition2.find('div.te-back');
					back.empty().append(img_back);
				}

				var cover = $teCover.querySelector('img')
				cover.setAttribute('src', current_img_src)
			};

		return { init: init };

	})();

	TransitionEffects.init();

});