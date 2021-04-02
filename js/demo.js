// $(function () {

// 	if (!Modernizr.csstransforms3d)
// 		$('#message').show();

// });


/**To be manipulated */
/**function randomNumber(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
        }

        function show(event) {

          if (hasPerspective && animated)
            return false;

          animated = true;
          var num = randomNumber(0, 17);
          $typeValue = $wPerspective[num];
          console.log($typeValue)
          console.log(num)
          console.log($wPerspective[num])
          $teTransition.classList.forEach(classs => {
            $teTransition.classList.remove(classs)
          })
          console.log($typeValue)

          $teTransition.classList.add('te-transition')
          $teTransition.classList.add($typeValue)
          showNext();
          return false;
        }
        setInterval(show, 1000); */