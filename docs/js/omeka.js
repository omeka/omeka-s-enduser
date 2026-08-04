
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
        const mobileInternalLinks = document.getElementsByClassName('internal');

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

        for (const mobileInternalLink of mobileInternalLinks) {
            mobileInternalLink.addEventListener('click', () => { mobileNavModal.close() });
        }

        Omeka.addWindowSizeEventListeners(mobileNavModal, mainNav);
    },

    setupNavToggles: () => {
        const navToggleButtons = document.getElementsByClassName('toggle-button');
        const expandAllButton = document.getElementById('expand-all');
        const collapseAllButton = document.getElementById('collapse-all');

        const expandAllAlert = expandAllButton.getAttribute('data-success-alert');
        const collapseAllAlert = collapseAllButton.getAttribute('data-success-alert');

        for (const navToggleButton of navToggleButtons) {
            navToggleButton.addEventListener('click', () => Omeka.toggleChildNav(navToggleButton));
        }

        expandAllButton.addEventListener('click', () => Omeka.clickToggleAll('expand', expandAllAlert));
        collapseAllButton.addEventListener('click', () => Omeka.clickToggleAll('collapse', collapseAllAlert));
    },

    clickToggleAll: (action, alert) => {
        const targetButtons = document.querySelectorAll('#main-nav button.' + action);
        const toggleAlerts = document.getElementById('toggle-alerts');
        for (const targetButton of targetButtons) {
            targetButton.click();
            toggleAlerts.textContent = alert;
        }
    },

    toggleChildNav: (toggleButton) => {
        if (toggleButton.classList.contains('expand')) {
            toggleButton.classList.remove('expand');
            toggleButton.classList.add('collapse');
            toggleButton.setAttribute('aria-expanded', 'true');
        } else {
            toggleButton.classList.remove('collapse');
            toggleButton.classList.add('expand');
            toggleButton.setAttribute('aria-expanded', 'false');
        }
    },

    manageMainNavDialogRole: (dialog, mainNav) => {
        if (window.innerWidth < 721) {
            dialog.append(mainNav);
        } else {
            dialog.insertAdjacentElement('afterend', mainNav);
            dialog.close();
        }
    },

    addWindowSizeEventListeners: (dialog, mainNav) => {
        window.addEventListener('load', () => Omeka.manageMainNavDialogRole(dialog, mainNav));
        window.addEventListener('resize', () => Omeka.manageMainNavDialogRole(dialog, mainNav));
    }
    
}

Omeka.setupMobileNav();
Omeka.setupNavToggles();
Omeka.manageTheme();