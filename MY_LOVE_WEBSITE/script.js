const button = document.getElementById("startButton");
const music = document.getElementById("bgMusic");

button.addEventListener("click", function () {

    // Play background music
    if (music) {
        music.play().catch(function(error){
            console.log(error);
        });
    }

    document.querySelector(".container").innerHTML = `
        <h1>Just For You ❤️</h1>

        <img id="slideshow" src="images/photo1.jpg">

        <p id="loveMessage"></p>
    `;

    const images = [
        "images/photo1.jpg",
        "images/photo2.jpg",
        "images/photo3.jpg",
        "images/photo4.jpg",
        "images/photo5.jpg",
        "images/photo6.jpg"
    ];

    const messages = [
        "Your smile is my favorite thing in the whole world ❤️",
        "I'm so proud of how hard you've worked.",
        "Even on difficult days, you've stayed strong.",
        "I love your cute voice.",
        "Congratulations in advance, Babe. 🎓❤️",
        "I love everything about you. ❤️"
    ];

    let index = 0;

    const image = document.getElementById("slideshow");
    const message = document.getElementById("loveMessage");

    image.src = images[index];
    message.innerHTML = messages[index];

    const slideshow = setInterval(function () {

        index++;

        if (index >= images.length) {

            clearInterval(slideshow);

            document.querySelector(".container").innerHTML = `
                <h1>Congratulations, Babe 🎓❤️</h1>

                <p class="message">

                    I know this journey wasn't always easy.

                    <br><br>

                    But you made it.

                    <br><br>

                    I'm so proud of the woman you're becoming.

                    <br><br>

                    No matter where life takes you next,
                    I'll always be cheering you on.

                    <br><br>

                    Please don't forget to smile.

                    <br><br>

                    It's still my favorite thing in the whole world. ❤️

                </p>

                <button id="finalButton">
                    One Final Message ❤️
                </button>
            `;

            document.getElementById("finalButton").addEventListener("click", function () {

                document.querySelector(".container").innerHTML = `
                    <h1>I Love You, Babe ❤️</h1>

                    <p class="message">

                        Before you close this page...

                        <br><br>

                        I just want you to know how proud I am of you.

                        <br><br>

                        Watching you work hard for your graduation has made me admire you even more.

                        <br><br>

                        Thank you for your beautiful smile.

                        <br><br>

                        Thank you for your cute voice.

                        <br><br>

                        Thank you for being the amazing person that you are.

                        <br><br>

                        Congratulations, my love.

                        <br><br>

                        Keep believing in yourself.

                        <br><br>

                        Remember...

                        <br><br>

                        You are loved.

                        <br>

                        You are appreciated.

                        <br>

                        And I'll always be cheering you on.

                        <br><br>

                        ❤️ I Love You ❤️

                        <br><br>

                        <small>Made with love by Great.</small>

                    </p>
                `;
            });

            return;
        }

        image.src = images[index];
        message.innerHTML = messages[index];

    }, 3000);

});
// ❤️ Floating Hearts ❤️

const emojis = ["❤️", "💖", "💕", "💗", "💓", "💞", "🌸", "🌹", "✨"];

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 300);
