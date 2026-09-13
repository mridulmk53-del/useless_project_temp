let clickCount = 0;
const MAX_CLICKS = 20; // Adjust this for difficulty

const doorElement = document.getElementById('door');
const messageElement = document.getElementById('message');

const messages = [
    'You opened a door...',
    'Another door appears.',
    'And another one.',
    'How many doors are there?',
    'This is getting repetitive.',
    'Are you having fun?',
    'Really?',
    'Keep going...',
    'Almost there...',
    'One more...'
];

doorElement.addEventListener('click', () => {
    clickCount++;
    doorElement.classList.add('open');
    
    // Display message
    if (clickCount <= MAX_CLICKS) {
        messageElement.textContent = messages[clickCount - 1] || `Click #${clickCount}`;
    } else {
        messageElement.textContent = '🎉 Congratulations. You have achieved nothing. 🎉, Please play to achieve nothing again';
        messageElement.classList.add('celebration');
        doorElement.style.pointerEvents = 'none';
        return;
    }
    
    // Reset door animation
    setTimeout(() => {
        doorElement.classList.remove('open');
    }, 600);
});

// Initial message
messageElement.textContent = 'Click the door...';
