
const Omeka = {
    setupMobileNav: () => {
        const mainNavToggleButton = document.getElementById('main-nav-toggle');
        const mainNav = document.getElementById('main-nav');
        const mobileNavModal = document.getElementById('mobile-nav-modal');
        const mobileNavModalClose = document.getElementById('mobile-nav-modal-close');

        mainNavToggleButton.addEventListener('click', function() {
            mobileNavModal.showModal();
            mainNavToggleButton.setAttribute('aria-expanded', 'true');
            mobileNavModalClose.focus();
        });

        mobileNavModalClose.addEventListener('click', function() {
            mobileNavModal.close();
            mainNavToggleButton.setAttribute('aria-expanded', 'false');
            mainNavToggleButton.focus();
        });

        Omeka.addWindowSizeEventListeners(mobileNavModal, mainNav);
    },

    manageMainNavDialogRole: (dialog, mainNav) => {
        if (window.innerWidth < 481) {
            dialog.append(mainNav);
        } else {
            dialog.insertAdjacentElement('afterend', mainNav);
        }
    },

    addWindowSizeEventListeners: (dialog, mainNav) => {
        window.addEventListener('load', () => Omeka.manageMainNavDialogRole(dialog, mainNav));
        window.addEventListener('resize', () => Omeka.manageMainNavDialogRole(dialog, mainNav));
    }
}

Omeka.setupMobileNav();