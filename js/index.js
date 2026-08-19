let popupKeys = document.querySelectorAll("#Gallery .popupKey");
popupEle = document.querySelector(".popup");

popupKeys.forEach(function (popupKey) {
    popupKey.addEventListener("click", function () {
        popupEle.classList.add("active");
        
        setTimeout (function () {
            popupEle.classList.add("show");
        }, 100);

    });
});