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
const elProductPageGallery = document.querySelector(".product-page__gallery");
const elImgShowcaseActiveImg = elProductPageGallery.querySelector(".img-showcase__active-img");
const elsImgShowcaseThumbnailButton = elProductPageGallery.querySelectorAll(".js-img-showcase-thumbnail-button");
const elsImgThumbnail = elProductPageGallery.querySelectorAll(".img-showcase_thumbnail");

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


// Lightbox control
const elLightboxControlPrev = elLightbox.querySelector(".js-lightbox-control-prev");
const elLightboxControlNext = elLightbox.querySelector(".js-lightbox-control-next");


if (elLightboxControlNext) {
    elLightboxControlNext.addEventListener("click", function () {
        // Find active li element
        const elActiveItem = elLightbox.querySelector(".img-showcase_thumbnail--active")

        // Remove active li element
        elActiveItem.classList.remove(modifiers.imgThumbnailActive);

        let elNextActiveItem;

        // Check if there are any elemetns after this element
        if (elActiveItem.nextElementSibling === null) {
             // Make next element active
        elNextActiveItem = elsLightboxImgThumbnail[0];
        } else {
            elNextActiveItem = elActiveItem.nextElementSibling;
        }

        elNextActiveItem.classList.add(modifiers.imgThumbnailActive);

        // Update active img accordingly
        elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
        elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x ${elNextActiveItem.children[0].dataset.imgShowcaseBigRetina} 2x`;
    });
}


if (elLightboxControlPrev) {
    elLightboxControlPrev.addEventListener("click", function () {
        // Find active li element
        const elActiveItem = elLightbox.querySelector(".img-showcase_thumbnail--active")

        // Remove active li element
        elActiveItem.classList.remove(modifiers.imgThumbnailActive);

        let elNextActiveItem;

        // Check if there are any elemetns after this element
        if (elActiveItem.previousElementSibling === null) {
             // Make next element active
        elNextActiveItem = elsLightboxImgThumbnail[elsLightboxImgThumbnail.length - 1];
        } else {
            elNextActiveItem = elActiveItem.previousElementSibling;
        }

        elNextActiveItem.classList.add(modifiers.imgThumbnailActive);

        // Update active img accordingly
        elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
        elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x ${elNextActiveItem.children[0].dataset.imgShowcaseBigRetina} 2x`;
    });
}


// PRODUCT COUNT
const elProductQtyIncrementButton = document.querySelector(".js-product-quantity-increment-button");
const elProductDecrementQtyButton = document.querySelector(".js-product-quantity-decrement-button");
const elProductInfoQty = document.querySelector(".product-info__quantity");

if (elProductQtyIncrementButton) {
    elProductQtyIncrementButton.addEventListener("click", function () {
        elProductInfoQty.textContent = parseInt(elProductInfoQty.textContent, 10) + 1;
    });
}

if (elProductDecrementQtyButton) {
    elProductDecrementQtyButton.addEventListener("click", function () {
        const qty = parseInt(elProductInfoQty.textContent, 10);

        if (qty > 0) {
            elProductInfoQty.textContent = qty - 1;
        }
    });
}