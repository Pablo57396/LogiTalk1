const loginScreen = document.getElementById("loginScreen");
const app = document.getElementById("app");

const usernameInput = document.getElementById("usernameInput");
const loginButton = document.getElementById("loginButton");

const userName = document.getElementById("userName");

const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const messages = document.getElementById("messages");

const themeButton = document.getElementById("themeButton");
const settingsButton = document.getElementById("settingsButton");


loginButton.addEventListener("click", () => {
    const name = usernameInput.value.trim();

    if (name === "") {
        alert("Будь ласка, введіть ім'я!");
        return;
    }

    userName.textContent = name;

    loginScreen.style.display = "none";
    app.style.display = "flex";
});

function sendMessage() {
    const text = messageInput.value.trim();

    if (text === "") {
        return;
    }

    const message = document.createElement("div");

    message.className = "message";

    message.innerHTML = `
        <b>${userName.textContent}:</b> ${text}
    `;

    messages.appendChild(message);

    messageInput.value = "";

    messages.scrollTop = messages.scrollHeight;
}

sendButton.addEventListener("click", sendMessage);


messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});


themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


settingsButton.addEventListener("click", () => {
    alert("Налаштування LogiTalk");
});
const aiButton = document.getElementById("aiButton");
const aiWindow = document.getElementById("aiWindow");
const closeAI = document.getElementById("closeAI");

const aiInput = document.getElementById("aiInput");
const aiSend = document.getElementById("aiSend");
const aiMessages = document.getElementById("aiMessages");

aiButton.addEventListener("click", () => {
    aiWindow.style.display = "block";
});

closeAI.addEventListener("click", () => {
    aiWindow.style.display = "none";
});


function getAIResponse(text) {

    const message = text.toLowerCase();

    if (message.includes("привіт") ||
        message.includes("хай") ||
        message.includes("hello")) {

        return "Привіт! 👋 Я LogiAI — штучний інтелект LogiTalk.";
    }

    if (message.includes("як справи")) {
        return "У мене все добре 🤖 А у тебе як?";
    }

    if (message.includes("хто ти")) {
        return "Я LogiAI — вбудований штучний інтелект у LogiTalk.";
    }

    if (message.includes("що ти вмієш")) {
        return "Я можу відповідати на прості запитання, спілкуватися та допомагати з навчанням.";
    }

    if (message.includes("дякую")) {
        return "Будь ласка! 😎";
    }

    if (message.includes("математика")) {
        return "Можу допомогти з математикою. Напиши приклад.";
    }

    if (message.includes("html")) {
        return "HTML відповідає за структуру вебсторінки.";
    }

    if (message.includes("css")) {
        return "CSS відповідає за дизайн та оформлення вебсторінки.";
    }

    if (message.includes("javascript") ||
        message.includes("js")) {
        return "JavaScript додає логіку та інтерактивність сайту.";
    }

    if (message.includes("logitalk")) {
        return "LogiTalk — це твій чат із вбудованим LogiAI 🚀";
    }

    return "Цікаве питання 🤔 Я поки що працюю в демо-режимі. Спробуй запитати мене про HTML, CSS, JavaScript, математику або LogiTalk.";
}


function sendAIMessage() {

    const text = aiInput.value.trim();

    if (text === "") {
        return;
    }

    const userMessage = document.createElement("div");

    userMessage.className = "ai-message user-ai-message";
    userMessage.textContent = text;

    aiMessages.appendChild(userMessage);

    aiInput.value = "";

    
    setTimeout(() => {

        const response = getAIResponse(text);

        const aiMessage = document.createElement("div");

        aiMessage.className = "ai-message";
        aiMessage.textContent = "🤖 " + response;

        aiMessages.appendChild(aiMessage);

        aiMessages.scrollTop = aiMessages.scrollHeight;

    }, 500);
}


aiSend.addEventListener("click", sendAIMessage);


aiInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        sendAIMessage();
    }

});