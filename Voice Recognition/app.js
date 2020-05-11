const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


//
const greeting =["Like you care!", 
                "Leave me alone, weirdo", 
                "can we get to work already, geez. It is like working with a child."
];

const weather = ["How about you open a window and look for yourself",
                "Why do I care, that is your problem",
                "Just keep me dry, pet human"
];

const off = ["you wish you could get some of this, dont cha",
            "mature, sooooo mature",
            "And to you to, loser"
];

const youtube = ["This better be for work puposes pet human",
            "No cat videos pet human",
            "I assume that you have completed your work for today"
];

const email = ["Why? Nobody loves you",
            "There is only spam in there",
            "Send out some spam for me"
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log("voice is activated. Please speak")
};

recognition.onresult = function (event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener("click", () => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand your jibba jabba";

    if(message.includes("how are you")){
        const finalText = greeting[Math.floor(Math.random() * greeting.length)];
        speech.text = finalText;
        var computer = document.createElement("img");
        computer.src = "computer.jpg"
        document.body.appendChild(computer);
    }
 
    
    if(message.includes("weather")){
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
        window.open("https://www.google.com/search?q=weather+24&oq=wea&aqs=chrome.3.69i57j35i39j0l6.7435j0j7&sourceid=chrome&ie=UTF-8");
    }

    if(message.includes("off")){
        const finalText = off[Math.floor(Math.random() * off.length)];
        speech.text = finalText;
        var fOff = document.createElement("img");
        fOff.src = "fuck_off.gif"
        document.body.appendChild(fOff);
    }

    if(message.includes("youtube")){
        const finalText = youtube[Math.floor(Math.random() * youtube.length)];
        speech.text = finalText;
        window.open("https://www.youtube.com/");
    }

    if(message.includes("email")){
        const finalText = email[Math.floor(Math.random() * email.length)];
        speech.text = finalText;
        window.open("https://mail.google.com/mail/u/0/#inbox");
    }

    speech.volume = 1;
    speech.rate = 1.5;
    speech.pitch = 0.1;

    window.speechSynthesis.speak(speech);
};