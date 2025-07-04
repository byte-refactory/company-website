// Tab functionality
function switchTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    // Deactivate all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active', 'tab-active');
        button.classList.add('tab-inactive');
    });

    // Show selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
        selectedTab.classList.add('active');
    }

    // Activate selected tab button
    const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active', 'tab-active');
        selectedButton.classList.remove('tab-inactive');
    }
}

// Handle fragment-based navigation
function handleFragmentNavigation() {
    const hash = window.location.hash.substring(1);
    
    if (hash === 'references') {
        switchTab('references-tab');
        // Scroll to contact section since references is part of it
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const targetPosition = contactSection.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    } else if (hash === 'contact') {
        switchTab('contact-tab');
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const targetPosition = contactSection.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    } else {
        // Default to contact tab for any other navigation to the contact section
        if (hash === 'contact' || document.getElementById(hash) === document.getElementById('contact')) {
            switchTab('contact-tab');
        }
    }
}

// Initialize tab functionality
function initializeTabs() {
    // Handle initial page load with fragments
    handleFragmentNavigation();

    // Add tab button event listeners
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
            
            // Update URL hash
            if (tabId === 'references-tab') {
                window.history.pushState(null, null, '#references');
            } else if (tabId === 'contact-tab') {
                window.history.pushState(null, null, '#contact');
            }
        });
    });

    // Listen for hash changes (back/forward browser navigation)
    window.addEventListener('hashchange', handleFragmentNavigation);
}

// Enhanced navigation handling
function initializeNavigation() {
    // Add event listeners for navigation
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Handle references navigation
            if (targetId === 'references') {
                switchTab('references-tab');
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    const targetPosition = contactSection.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
                window.history.pushState(null, null, '#references');
                return;
            }
            
            // Handle contact navigation
            if (targetId === 'contact') {
                switchTab('contact-tab');
            }
            
            const target = document.getElementById(targetId);
            if (target) {
                // Use custom scrolling instead of fragment navigation
                const targetPosition = target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);

                // Don't update the URL hash to avoid fragment navigation entirely
                // This prevents the iframe shifting issue in Google Sites
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
