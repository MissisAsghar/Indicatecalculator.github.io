<script>
    const display = document.getElementById('display');
    const indicator = document.getElementById('indicator');
    const buttonSound = document.getElementById('buttonSound');
    const errorSound = document.getElementById('errorSound');

    function playSound(sound) {
        sound.currentTime = 0; // Restart sound
        sound.play();
    }

    function appendToDisplay(value) {
        display.value += value;
        playSound(buttonSound); // Play click sound
        checkInput();
    }

    function clearDisplay() {
        display.value = '';
        indicator.style.backgroundColor = 'gray';
        playSound(buttonSound); // Play click sound when cleared
    }

    function calculateResult() {
        try {
            const result = new Function('return ' + display.value)();
            display.value = result;
            indicator.style.backgroundColor = 'green';
            playSound(buttonSound); // Play click sound
        } catch (error) {
            display.value = 'Error';
            indicator.style.backgroundColor = 'red';
            playSound(errorSound); // Play error sound
            indicator.style.animation = 'blink 0.5s infinite'; // Start blinking
        }
    }

    function calculateTrigonometric(func) {
        try {
            const angleInDegrees = parseFloat(display.value);
            if (!isNaN(angleInDegrees)) {
                const angleInRadians = angleInDegrees * (Math.PI / 180);
                let result;
                switch(func) {
                    case 'sin':
                        result = Math.sin(angleInRadians);
                        break;
                    case 'cos':
                        result = Math.cos(angleInRadians);
                        break;
                    case 'tan':
                        result = Math.tan(angleInRadians);
                        break;
                }
                display.value = result;
                indicator.style.backgroundColor = 'green';
                playSound(buttonSound); // Play click sound
            } else {
                display.value = 'Error';
                indicator.style.backgroundColor = 'red';
                playSound(errorSound); // Play error sound
                indicator.style.animation = 'blink 0.5s infinite'; // Start blinking
            }
        } catch (error) {
            display.value = 'Error';
            indicator.style.backgroundColor = 'red';
            playSound(errorSound); // Play error sound
            indicator.style.animation = 'blink 0.5s infinite'; // Start blinking
        }
    }

    function calculateSquareRoot() {
        try {
            const number = parseFloat(display.value);
            if (!isNaN(number) && number >= 0) {
                display.value = Math.sqrt(number);
                indicator.style.backgroundColor = 'green';
                playSound(buttonSound); // Play click sound
            } else {
                display.value = 'Error';
                indicator.style.backgroundColor = 'red';
                playSound(errorSound); // Play error sound
                indicator.style.animation = 'blink 0.5s infinite'; // Start blinking
            }
        } catch (error) {
            display.value = 'Error';
            indicator.style.backgroundColor = 'red';
            playSound(errorSound); // Play error sound
            indicator.style.animation = 'blink 0.5s infinite'; // Start blinking
        }
    }

    function checkInput() {
        const currentExpression = display.value;
        if (currentExpression.length === 0 || /[\+\-\*\/]$/.test(currentExpression)) {
            indicator.style.backgroundColor = 'gray';
            indicator.style.animation = 'none'; // Stop blinking
        } else {
            try {
                new Function('return ' + currentExpression)();
                indicator.style.backgroundColor = 'green';
                indicator.style.animation = 'none'; // Stop blinking
            } catch (error) {
                indicator.style.backgroundColor = 'red';
                playSound(errorSound); // Play error sound
                indicator.style.animation = 'blink 0.5s infinite'; // Start blinking
            }
        }
    }

    // CSS for blinking effect
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes blink {
            0% { background-color: red; }
            50% { background-color: transparent; }
            100% { background-color: red; }
        }
    `;
    document.head.appendChild(style);
</script>
              
