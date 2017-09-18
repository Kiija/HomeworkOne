(function() {
  var theImages = document.querySelectorAll('.image-holder'),
      theHeading = document.querySelector('.heading'),
      theSubheading = document.querySelector('.main-copy h2'),
      theSeasonText = document.querySelector('.main-copy p'),
      appliedClass;

      //I want to change all the content on the page
      function changeElements(){
        //debugger; // this is a special term that stops code execution

        let subImages = document.querySelector('.subImagesContainer');
        let objectIndex = dynamicContent[this.id];

        while(subImages.firstChild) {
          subImages.removeChild(subImages.firstChild);
        }

        //add the images to the bottom of the page
        objectIndex.images.forEach(function(image, index) {
          //create an image element
          let newSubImg = document.createElement('img');
          //add a css class to it
          newSubImg.classList.add('thumb');
          // set the src
          newSubImg.src = "images/" + objectIndex.images[index];
          //ad it to the page
          subImages.appendChild(newSubImg);
        });

        theSubheading.classList.remove(appliedClass);
        theHeading.classList.remove(appliedClass);

        theSubheading.firstChild.nodeValue = objectIndex.headline;
        theSeasonText.firstChild.nodeValue = objectIndex.text;

        theSubheading.classList.add(this.id);
        theHeading.classList.add(this.id);

        appliedClass = this.id;
  }

  theImages.forEach(function(image, index){
      //add an event handler to each image
      image.addEventListener('click', changeElements, false);
    });

})();
