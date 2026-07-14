
const Omeka = {
    manageTheme: () => {
        const themeSelect = document.getElementById('theme-select');
        const themeSubmit = document.getElementById('theme-submit');
        const storedTheme = localStorage.getItem("__theme");

        if (storedTheme) {
            Omeka.setTheme(themeSelect, storedTheme);
            themeSelect.value = storedTheme;
        }

        themeSubmit.addEventListener('click', function() {
            const selectedTheme = themeSelect.value;
            Omeka.setTheme(themeSelect, selectedTheme);
        });
    },

    setTheme: (themeSelect, selectedTheme) => {
        const body = document.getElementsByTagName('body')[0];
        let darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

        for (const themeOption of themeSelect.options) {
            body.classList.remove(themeOption.value);
        }

        if (selectedTheme == 'system-default') {
            const systemTheme = Omeka.getSystemThemePreference(darkModePreference);
            body.classList.add(systemTheme);
            if (!body.classList.contains('theme-watch')) {
                darkModePreference.addEventListener("change", e => Omeka.setTheme(themeSelect, 'system-default'));
                body.classList.add('theme-watch');
            }
        } else {
            body.classList.add(selectedTheme);
        }

        localStorage.setItem("__theme", selectedTheme);
    },

    getSystemThemePreference: (darkModePreference) => {
        let currentTheme = '';
        if (darkModePreference.matches) {
            currentTheme = 'dark';
        } else {
            currentTheme = 'light';
        }
        return currentTheme;
    },

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
Omeka.manageTheme();