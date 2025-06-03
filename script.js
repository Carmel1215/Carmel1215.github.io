document.addEventListener("DOMContentLoaded", () => {
    const facts = [
        "저는 C#을 제일 좋아해요!",
    ];

    let currentIndex = 0;
    const output = document.getElementById("fact-output");

    output.addEventListener("click", () => {
        output.textContent = facts[currentIndex];
        currentIndex = (currentIndex + 1) % facts.length;
        output.style.transform = "scale(1.05)";
        setTimeout(() => {
            output.style.transform = "scale(1)";
        }, 150);
    });

    // 시간대에 따른 인사말 출력
    const greetingElement = document.getElementById("greeting");
    greetingElement.style.fontWeight = "bold";
    greetingElement.style.fontSize = "1.1rem";
    greetingElement.style.marginBottom = "1rem";

    const hours = new Date().getHours();
    let greeting = "";
    if (hours >= 5 && hours < 12) {
        greeting = "좋은 아침이에요!";
    } else if (hours >= 12 && hours < 17) {
        greeting = "좋은 오후입니다!";
    } else if (hours >= 17 && hours < 21) {
        greeting = "좋은 저녁이에요!";
    } else {
        greeting = "좋은 밤이에요!";
    }

    greetingElement.textContent = greeting;

    const typingText = "Carmel's Portfolio";
    const typingTarget = document.getElementById("typing-target");
    let typingIndex = 0;

    function typeCharacter() {
        if (typingIndex < typingText.length) {
            typingTarget.textContent += typingText.charAt(typingIndex);
            typingIndex++;
            const delay = Math.random() * 100 + 50;
            setTimeout(typeCharacter, delay);
        } else {
            startBlinking();
        }
    }

    function startBlinking() {
        let blinkCount = 0;
        const totalBlinks = 16; // 4회 깜빡임 (on/off)
        let delay = 300;

        function blink() {
            if (blinkCount < 4) {
                typingTarget.classList.toggle("neon-off");
            } else {
                const isOff = typingTarget.classList.contains("neon-off");

                if (isOff) {
                    typingTarget.classList.remove("neon-off");
                    typingTarget.classList.add("neon-on");
                } else {
                    typingTarget.classList.remove("neon-on");
                    typingTarget.classList.add("neon-off");
                }
            }

            blinkCount++;

            if (blinkCount < totalBlinks) {
                delay *= 0.9;
                setTimeout(blink, delay);
            } else {
                // 마지막 네온 고정
                typingTarget.classList.remove("neon-off");
                typingTarget.classList.add("neon-on");
            }
        }

        blink();
    }

    typeCharacter();
});