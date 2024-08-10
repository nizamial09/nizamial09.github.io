const texts = ["Software Engineer", "Passionate Coder", "Open Source Engineer", "Lead Engineer"];
const typingText = document.getElementById('typing-text');
let textIndex = 0;
let charIndex = 0;
let deleting = false;
const typingSpeed = 30; // Speed of typing in milliseconds
const deletingSpeed = 30; // Speed of deleting in milliseconds
const pauseDuration = 1000; // Pause duration between texts

function type() {
    const currentText = texts[textIndex];
    
    if (!deleting) {
        if (charIndex < currentText.length) {
            typingText.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            deleting = true;
            setTimeout(type, pauseDuration);
        }
    } else {
        if (charIndex > 0) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, deletingSpeed);
        } else {
            deleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, pauseDuration);
        }
        if (charIndex === 0) {
            typingText.textContent = ' ';
        }
    }
}

type();