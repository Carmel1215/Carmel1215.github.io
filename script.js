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
});