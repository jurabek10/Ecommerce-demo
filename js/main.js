const modifiers = {
    imgThumbnailActive: "img-showcase_thumbnail--active"
};




// Shopping-cart-modal
const elSiteHeaderCartLink = document.querySelector(".js-site-header-cart-link");
const elSiteHeaderCartModal = document.querySelector(".site-header__cart-modal");


if (elSiteHeaderCartLink) {
    elSiteHeaderCartLink.addEventListener('click', function (evt) {
        evt.preventDefault();

        elSiteHeaderCartModal.classList.toggle("site-header__cart-modal--open")
    });
}


// Image showcase
const elImgShowcaseActiveImg = document.querySelector(".img-showcase__active-img");
const elsImgShowcaseThumbnailButton = document.querySelectorAll(".js-img-showcase-thumbnail-button");
const elsImgThumbnail = document.querySelectorAll(".img-showcase_thumbnail");

elsImgShowcaseThumbnailButton.forEach(function (elButton) {
    elButton.addEventListener("click", function () {
        // Remove active state from all buttons
        elsImgThumbnail.forEach(function (elImgThumbnail) {
            elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
        });

        // Add active state to click button
        elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

        // Update active img accordingly
        elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
        elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x ${elButton.dataset.imgShowcaseBigRetina}2x`;
        });
    });
