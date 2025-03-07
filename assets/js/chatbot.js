// Toggle chat display
function toggleChat() {
    var chatBox = document.getElementById("chatBox");
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
}

// Function to handle user input and display response
function handleUserInput(userInput) {
    displayMessage(userInput, "userMessage");

    // Display 'thinking' indicator
    displayMessage("Thinking...", "botThinking");

    // Improved keyword and response mapping with more specific categories and comprehensive responses
    const keywords = [
        { keyword: ["morning", "afternoon", "evening", "hi", "hello", "hey", "greetings"], response: "Hello there! Welcome to Mach Management Solutions (Pty). I'm your friendly chatbot guide. What exactly can I assist you with today?" },
        { keyword: ["find", "reach","contact", "reach", "communicate", "how", "email"], response: "You can reach us at machconsults@gmail.com. Also, check out our social media pages. Anything else I can help with?" },
        { keyword: ["do", "about", "mach", "mach management", "mach management solutions"], response: "At Mach Management Solutions (Pty), we offer cutting-edge AI, project management, and chemical engineering solutions. Whether you’re looking to innovate or streamline operations, we've got you covered! What would you specifically like to know more about?" },
        { keyword: ["location", "where", "located", "address"], response: "We're headquartered in the vibrant city of Johannesburg, Gauteng, South Africa. Fancy a visit or want to know more?" },
        { keyword: ["services", "offerings", "offer", "provide", "service", "offer", "specialties"], response: "We specialize in AI solutions, project management, and chemical engineering. Curious about how we can help your business thrive? Which services are you intrested in specifically?" },
        { keyword: ["artificial", "ai", "ai solutions", "artificial intelligence"], response: "Our AI solutions include advanced algorithms, predictive analytics, customer service chatbots, and more. We help businesses unlock valuable insights and optimize processes. Intrigued? Let's dive deeper!" },
        { keyword: ["machine learning"], response: "Machine learning, a subset of AI, enables us to create predictive models and analyze data for valuable insights. Want to learn how this can benefit your business?" },
        { keyword: ["project management", "project", "projects", "management"], response: "Our project management services include project planning, task scheduling, risk management, and AI-driven tools. Ready to take your projects to the next level?" },
        { keyword: ["engineering", "engineer", "chemical", "chemicals", "chemical engineering","processes", "process", "optimize", "optimization", "quality control", "sustainability initiatives", "product development"], response: "We excel in process optimization, quality control, sustainability initiatives, and product development. Our chemical engineering expertise will assist your business?" },
        { keyword: ["more info", "info", "information", "learn more", "tell me more"], response: "Mach Management Solutions (Pty) is a leader in data-driven innovations, offering AI, machine learning, chemical engineering, and project management solutions tailored for small to medium-sized businesses. What would you like to explore next?" },
        { keyword: ["consulting", "business", "business consulting"], response: "We provide bespoke business consulting solutions to help you navigate challenges, scale operations, and achieve sustainable growth. How can we assist your business today?" },
        { keyword: ["data", "analysis", "data analysis", "analyse", "understand"], response: "Our data analysis services help you uncover valuable insights, optimize processes, and make informed decisions. Interested in learning more about how we can help you harness the power of data?" },
        { keyword: ["process improvement"], response: "We offer comprehensive process improvement services to streamline your operations and increase efficiency. Curious about how we can help optimize your processes?" },
        { keyword: ["smmes", "smme", "small business", "small", "startup", "startups"], response: "We specialize in empowering small businesses and startups with accessible solutions tailored to their needs. Looking for ways to grow your small business? Let's chat!" },
        { keyword: ["pricing", "how much", "cost", "price", "fees", "rate"], response: "Our pricing varies depending on the specific services and solutions you need. I'd recommend contacting us at machconsults@gmail.com or calling 0780927119 for a detailed quote. Interested in learning more about our services?" },
        { keyword: ["testimonials", "reviews", "feedback"], response: "We have a lot of happy clients! Vist our LinkedIn page to hear some of their success stories & read testimonials" },
        { keyword: ["case study", "case studies", "examples", "portfolio"], response: "We Sign non didclosure agreements (NDAs) with companies due to us working with their proprietary data, sorry for the secrecy. We have a list of companies we have worked with on our LinkedIn page. Check It Out" },
        { keyword: ["support", "help", "assistance"], response: "Need support? Our team is here to help! You can email us at machconsults@gmail.com or call us at 0780927119. What specific issue are you facing?" },
        { keyword: ["navigate", "navigation", "website", "site"], response: "Looking for something specific on our website? I can help you find it! Just let me know what you need." }
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
            // If user input doesn't match any keywords, provide a detailed fallback response
            const fallbackResponse = "Oops, it seems like I'm not sure how to respond to that. But don't worry, you can always email us at machconsults@gmail.com or call us at 0780927119 for more information. Let's try something else – maybe ask about our AI solutions or project management services!";
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
