let popupKeys = document.querySelectorAll("#Gallery .popupKey"),
popupEle = document.querySelector(".popup"),
popupBoxEle = popupEle.querySelector(".box"),
popupExitKey = popupEle.querySelector(".close"),
popUpImgEle = popupEle.querySelector("img"),
galleryImages = document.querySelectorAll("#Gallery img"),
currentImgIndex,
popUpNextKey = popupEle.querySelector(".next"),
popUpPrevKey = popupEle.querySelector(".prev"),
popUpIndicatorsContainer = popupEle.querySelector(".indicators");


for (let i = 0; i < galleryImages.length; i++) {
    let newIndicator = document.createElement("li");
    newIndicator.textContent = i + 1;

    if (i == 0) {
        newIndicator.classList.add("active")
    }


    popUpIndicatorsContainer.append(newIndicator)
}

let popUpIndicators = popupEle.querySelectorAll(".indicators li");

popupKeys.forEach(function (popupKey) {
    popupKey.addEventListener("click" , function() {
        let currentImgEle = popupKey.parentElement.previousElementSibling,
            currentImgSrc = currentImgEle.getAttribute("src"),
            galleryImagesArr = Array.from(galleryImages);

        currentImgIndex = galleryImagesArr.indexOf(currentImgEle);


        updatePopUpImage (currentImgSrc);

        updateIndicators ()

        openPopUp();
    });
});

popupEle.addEventListener("click", closePopUp);

popupBoxEle.addEventListener("click" , function (e) {
    e.stopPropagation();
});

popupExitKey.addEventListener("click" , closePopUp);

popUpNextKey.addEventListener("click" , function() {

    currentImgIndex = ++currentImgIndex % galleryImages.length;

    let nextImgIndex = currentImgIndex,
        nextImgEle = galleryImages[nextImgIndex],
        nextImgSrc = nextImgEle.getAttribute("src");

    updateIndicators ()

    updatePopUpImage (nextImgSrc)

});

popUpPrevKey.addEventListener("click" , function() {

    currentImgIndex = (--currentImgIndex + galleryImages.length) % galleryImages.length;

    let prevImgIndex = currentImgIndex,
        prevImgEle = galleryImages[prevImgIndex],
        prevImgSrc = prevImgEle.getAttribute("src");

    updateIndicators ()

    updatePopUpImage (prevImgSrc)

});

popUpIndicators.forEach(function (popUpIndicator , currentIndicatorIndex) {
    popUpIndicator.addEventListener("click" , function () {
    let newImgEle = galleryImages[currentIndicatorIndex],
    newImgSrc = newImgEle.getAttribute("src");

        currentImgIndex = currentIndicatorIndex;

        updatePopUpImage(newImgSrc);

        updateIndicators();
    });
});

document.addEventListener("keydown", function (e) {

    if (!popupEle.classList.contains("active")) {
        return;
    }

    if (e.ctrlKey || e.altKey || e.metaKey) {
        return;
    }

    let key = e.key;

    if (key === "Escape") {
        closePopUp();
        return;
    }

    if (key === "ArrowRight") {
        popUpNextKey.click();
        return;
    }

    if (key === "ArrowLeft") {
        popUpPrevKey.click();
        return;
    }

    if (!isNaN(key) && key.trim() !== "") {
        let imgNumber = parseInt(key);
        
        if (imgNumber > 0 && imgNumber <= galleryImages.length) {
            let targetIndex = imgNumber - 1; 

            if (targetIndex === currentImgIndex) {
                sameImageEffect();
            } else {
                currentImgIndex = targetIndex; 
                let newImgSrc = galleryImages[currentImgIndex].getAttribute("src");
                
                updatePopUpImage(newImgSrc);
                updateIndicators();
            }
            return; 
        }
    }

    if (key.length === 1) {
        invalidKeyEffect();
    }
});