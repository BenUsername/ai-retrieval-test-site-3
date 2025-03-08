// Function to handle tab switching
function openTab(evt, tabId) {
    // Hide all tab content
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Remove "active" class from all tab buttons
    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    // Show the current tab and add "active" class to the button
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " active";
}

// Function to handle accordions
function setupAccordions() {
    const accordions = document.getElementsByClassName("accordion");
    
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            // Toggle active class
            this.classList.toggle("active");
            
            // Toggle panel visibility
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

// Function to handle dynamic content loading
function setupDynamicContent() {
    const loadButton = document.getElementById("load-content-button");
    const dynamicContent = document.getElementById("dynamic-content");
    
    loadButton.addEventListener("click", function() {
        // Simulate loading delay
        loadButton.textContent = "Loading...";
        loadButton.disabled = true;
        
        setTimeout(function() {
            dynamicContent.style.display = "block";
            loadButton.textContent = "Content Loaded";
        }, 1000);
    });
}

// Initialize everything when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Set the first tab as active by default
    document.getElementsByClassName("tab-button")[0].click();
    
    // Setup accordions
    setupAccordions();
    
    // Setup dynamic content loading
    setupDynamicContent();
}); 