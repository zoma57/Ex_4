function openPopUp () {
    popupEle.classList.add("active");
        
        setTimeout (function () {
            popupEle.classList.add("show");
        }, 1);
}

function closePopUp () {
    popupEle.classList.remove("show")
    setTimeout (function () {
            popupEle.classList.remove("active");
        }, 1000);
}

function updatePopUpImage (imgSrc) {
    popUpImgEle.setAttribute("src" , imgSrc);
}

function updateIndicators () {
    let newIndicator = popUpIndicators[currentImgIndex],
        oldIndicator = document.querySelector(".indicators li.active"); 
        oldIndicator.classList.remove("active");
        newIndicator.classList.add("active");
}

function invalidKeyEffect() {
    popUpImgEle.classList.add("error-shake");
    setTimeout(function () {
        popUpImgEle.classList.remove("error-shake");
    }, 400); 
}

function sameImageEffect() {
    popUpImgEle.classList.add("same-image-bounce");
    setTimeout(function () {
        popUpImgEle.classList.remove("same-image-bounce");
    }, 400);
}