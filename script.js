// Function to redirect to Decidueye's page
function goToDecidueye() {
    window.location.href = 'decidueye.html';
}

// Function to redirect to Noibat's page
function goToNoibat() {
    window.location.href = 'noibat.html';
}

// Function to redirect to Lunala's page
function goToLunala() {
    window.location.href = 'lunala.html';
}

// Noibat image click counter for special effect
let noibatClickCount = 0;
const noibatImg = document.getElementById('noibat-img');
const noibatCircle = document.getElementById('noibat-circle');
const noibatBtn = document.getElementById('noibat-btn');

// Store reference to the click handler for removal later
const noibatClickHandler = function() {
    noibatClickCount++;
    
    if (noibatClickCount === 3) {
        // Show white circle
        noibatCircle.classList.add('active');
        
        // After 1 second, change image to Noivern and button to noivern.html
        setTimeout(function() {
            noibatImg.src = 'assets/sprites/noivern.png';
            noibatImg.alt = 'Noivern';
            noibatImg.id = 'noivern-img'; // Change ID to prevent further triggering
            noibatCircle.classList.remove('active');
            
            // Remove the click event listener so Noivern doesn't trigger the effect again
            noibatImg.removeEventListener('click', noibatClickHandler);
            
            // Change button to redirect to noivern.html
            noibatBtn.setAttribute('onclick', 'goToNoivern()');
            noibatBtn.textContent = 'Noivern';
            
            noibatClickCount = 0; // Reset counter
        }, 1000);
    }
};

if (noibatImg) {
    noibatImg.addEventListener('click', noibatClickHandler);
}

// Function to redirect to Noivern's page
function goToNoivern() {
    window.location.href = 'noivern.html';
}