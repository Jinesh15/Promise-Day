let clickCount = 0;

function noFunc() {
    const messages = [
        "You can't say no to me",
        "Just Click the Yes Button",
        "Are you sure you want to say No?",
        "Think again, its very important",
        "You are stubborn just click YES!!",
        "Why are you saying No, please think of me",
        "You won't get this opportunity again",
        "I am giving you a last chance, Say YES!!!",
        "Okay fine, now you have no option, you're stuck"
    ];

    if (clickCount < messages.length - 1) {
        const selectedMessage = messages[clickCount];
        document.getElementById("text").innerText = selectedMessage;
        const currentSize = window.getComputedStyle(document.getElementById("yesButton")).getPropertyValue('font-size');
        const newSize = parseFloat(currentSize)*1.5;
        document.getElementById("yesButton").style.fontSize = newSize+"px"
    }
    else {
        const selectedMessage = messages[clickCount];
        document.getElementById("text").innerText = selectedMessage;
        document.getElementById("noButton").remove();
        const currentSize = window.getComputedStyle(document.getElementById("yesButton")).getPropertyValue('font-size');
        const newSize = parseFloat(currentSize)*1.5;
        document.getElementById("yesButton").style.fontSize = newSize+"px"
    }
    clickCount++;
}

function yesFunc() {
    document.getElementById("text").innerText = "Thank You for finally agreeing with Me\n I Love you too❤️";
    document.getElementById("buttons").remove();
    document.getElementById("image").classList.remove("image");    
}
