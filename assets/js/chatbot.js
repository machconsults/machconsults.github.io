// Toggle chat display
function toggleChat() {
    var chatBox = document.getElementById("chatBox");
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
}

// Function to handle user input and display response
function handleUserInput(userInput) {
    displayMessage(userInput, "userMessage");

    // Display 'thinking' indicator
    displayMessage("...", "botThinking");

    // Keywords and their corresponding responses
    const keywords = [
        { keyword: ["hi", "hello", "hey", "greetings"], response: "Hello! Welcome to Mach Management Solutions (Pty). How may I assist you today?" },
        {keyword: ["find", "find out", "out", "contact", "how"], response: "Mach Management Solutions (Pty). can be better communicated with on email: machconsults@gmail.com or vist our Social media. Anything I assist you today?" },
        { keyword: ["mach", "mach management", "mach management solutions", ], response: "Mach Management Solutions (Pty) offers artificial intelligence, project management, and chemical engineering solutions for small to medium-sized businesses. How can I assist you further?" },
        { keyword: ["locate", "where", "find", "located", "about"], response: "Mach Management Solutions (Pty) is in Business Consulting and IT Services. We have a company size of 20-50 employees, headquartered in Johannesburg, Gauteng, and founded in 2022. Is there anything else I can assist you with today?" },
        { keyword: ["company", "services", "offerings", "offer", "provide", "on offer"], response: "Mach Management Solutions (Pty) offers artificial intelligence, project management, and chemical engineering solutions for small to medium-sized businesses. How can I assist you further with our services?" },
        { keyword: ["ai", "artificial intelligence"], response: "Artificial intelligence (AI) refers to the development of computer systems that can perform tasks that typically require human intelligence, such as learning, problem-solving, and decision-making. We employ advanced algorithms and predictive analytics to unlock valuable insights from your data reservoirs. Whether it's optimizing processes, predicting market trends, or enhancing customer experiences, our AI solutions are tailored to drive tangible results for your business." },
        { keyword: ["machine learning"], response: "Machine learning, a subset of AI, allows us to develop advanced algorithms and predictive models to analyze data and provide valuable insights for your business." },
        { keyword: ["project management"], response: "Project management is crucial for successful endeavors. We excel in delivering projects on time and within budget, integrating industry best practices with AI-driven tools. How may I assist you with project management?" },
        { keyword: ["chemical engineering"], response: "Our expertise in chemical engineering enables us to offer unique perspectives on process optimization, quality control, and sustainability initiatives. How can we apply chemical engineering principles to benefit your business?" },
        { keyword: ["more info", "info", "information", "learn more", "tell me more"], response: "Certainly! Mach Management Solutions (Pty) is at the forefront of Data Driven Innovations in Johannesburg, Gauteng, South Africa. We specialize in business consulting and services, integrating cutting-edge AI, machine learning, chemical engineering, and project management solutions. Our commitment lies in empowering Small, Medium, and Micro Enterprises (SMMEs) with bespoke solutions crafted for sustainable growth. If you have any specific questions or areas of interest, feel free to ask!" }
    ];

    // Convert user input to lowercase for case-insensitive matching
    const userInputLC = userInput.toLowerCase();

    // Check if user input contains any keywords
    const matchedKeyword = keywords.find(item => item.keyword.some(kw => userInputLC.includes(kw.toLowerCase())));

    setTimeout(() => {
        // Remove 'thinking' indicator
        let chatMessages = document.getElementById("chatMessages");
        let thinkingElement = document.querySelector(".botThinking");
        if (thinkingElement) {
            chatMessages.removeChild(thinkingElement);
        }

        if (matchedKeyword) {
            displayMessage(matchedKeyword.response, "botMessage");
        } else {
            // If user input doesn't match any keywords, prompt to contact or visit social media
            const fallbackResponse = "I'm sorry, I use Natural Language Processing (NLP) to understand & respond but I am only trained on domain-specific information. Please feel free to email us at machconsults@gmail.com (speak to humans) or visit our social media pages (the buttons on my left) for more information.";
            displayMessage(fallbackResponse, "botMessage");
        }
    }, 2000); // Simulate a 2-second delay for "thinking"
}

// Function to display message in chat interface
function displayMessage(message, className) {
    let chatMessages = document.getElementById("chatMessages");
    let messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add("chatMessage", className);
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Example HTML5 template interaction
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("chatInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            let userInput = this.value;
            this.value = "";
            handleUserInput(userInput);
        }
    });
});
