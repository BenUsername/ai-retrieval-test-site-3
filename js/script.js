// Credit: Thanks to Martin Mustermann for pointing out that the content should be truly JavaScript-dependent,
// not just visually hidden in the HTML source.

// Content data - this will be loaded via fetch to ensure it's not in the source
let contentData = null;

// Fetch the content from a separate JSON file
fetch('js/content.json')
    .then(response => response.json())
    .then(data => {
        contentData = data;
        initializeContent();
    })
    .catch(error => console.error('Error loading content:', error));

// Initialize content when data is loaded
function initializeContent() {
    if (!contentData) return;
    
    // Load main marker content
    document.getElementById('main-marker').innerHTML = contentData.mainMarker.content;

    // Load tab content
    document.getElementById('tab1').innerHTML = contentData.tabs.tab1.content;
    document.getElementById('tab2').innerHTML = contentData.tabs.tab2.content;
    document.getElementById('tab3').innerHTML = contentData.tabs.tab3.content;

    // Load accordion content
    const accordionPanels = document.querySelectorAll('.panel');
    accordionPanels[0].innerHTML = contentData.accordions.education.content;
    accordionPanels[1].innerHTML = contentData.accordions.architecture.content;
    accordionPanels[2].innerHTML = contentData.accordions.library.content;

    // Set up dynamic content
    document.getElementById('dynamic-content').innerHTML = contentData.dynamic.content;
}

// Tab functionality
function openTab(evt, tabName) {
    // Get all tab content elements
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Get all tab buttons
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(' active', '');
    }

    // Show the selected tab and mark its button as active
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

// Accordion functionality
function toggleAccordion(element) {
    element.classList.toggle('active');
    const panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
}

// Dynamic content loading
function loadDynamicContent() {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.style.display = 'block';
}
