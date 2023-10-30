const modifiers = {
    siteHeaderCartModalOpen: "site-header__cart-modal--open",
    imgThumbnailActive: "img-showcase_thumbnail--active",
    lightboxOpen: "lightbox--open"
};




// Shopping-cart-modal
const elSiteHeaderCartLink = document.querySelector(".js-site-header-cart-link");
const elSiteHeaderCartModal = document.querySelector(".site-header__cart-modal");


if (elSiteHeaderCartLink) {
    elSiteHeaderCartLink.addEventListener('click', function (evt) {
        evt.preventDefault();
        
        elSiteHeaderCartModal.classList.toggle(modifiers.siteHeaderCartModalOpen);
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

// LIGHTBOX
const elLightboxToggler = document.querySelector(".js-lightbox-toggle");
const elLightbox = document.querySelector(".lightbox");
const elLightboxClose = document.querySelector(".js-lightbox-close");

if (elLightboxToggler) {
    elLightboxToggler.addEventListener("click", function () {
        elLightbox.classList.add(modifiers.lightboxOpen);
    });
};

if (elLightboxClose) {
    elLightboxClose.addEventListener("click", function() {
        elLightbox.classList.remove(modifiers.lightboxOpen);
    });
}

// Thumbnail click
const elImgLightboxActiveImg = elLightbox.querySelector(".img-showcase__active-img");
const elsImgLightboxThumbnailButton = elLightbox.querySelectorAll(".js-img-lightbox-thumbnail-button");
const elsLightboxImgThumbnail = elLightbox.querySelectorAll(".img-showcase_thumbnail");

elsImgLightboxThumbnailButton.forEach(function (elButton) {
    elButton.addEventListener("click", function () {
        // Remove active state from all buttons
        elsLightboxImgThumbnail.forEach(function (elImgThumbnail) {
            elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
        });
        
        // Add active state to click button
        elButton.parentElement.classList.add(modifiers.imgThumbnailActive);
        
        // Update active img accordingly
        elImgLightboxActiveImg.src = elButton.dataset.imgShowcaseBig;
        elImgLightboxActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x ${elButton.dataset.imgShowcaseBigRetina} 2x`;
    });
});
