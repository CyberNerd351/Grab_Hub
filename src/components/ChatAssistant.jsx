import React, { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import './chatassistant.css';

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
    { text: "Hello, I am Grab Bot. Type 'end' to stop the conversation.", isBot: true }
  ]);

  const handleSend = (input) => {
    const userMessage = { text: input, isBot: false };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Simulate chatbot response with basic hardcoded pairs
    let botResponse = getBotResponse(input);
    if (botResponse) {
      const botMessage = { text: botResponse, isBot: true };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  const getBotResponse = (input) => {
    const responses = {
      "What is Grab Hub?": "🥘 Grab Hub is a food e-commerce platform that connects you with local food vendors and kitchens. Order fresh meals anytime, anywhere – quickly and affordably. 🚀",
      "How does Grab Hub work?": "🔍 Simply search for a meal, choose your favorite dish 🍛, and pay directly via M-Pesa 💰. Your food will be delivered right to your door 🚪.",
      "Where is Grab Hub available?": "📍 We currently serve several towns across Kenya 🇰🇪 and are expanding into more areas soon!",
      "What meals are available today?": "🍽️ You can browse all available meals on our homepage or use the search bar 🔎 to find something.",
      "How do I pay for food?": "💳 Payments are made easily and securely using M-Pesa at Checkout ✅.",
      "How long does delivery take?": "⏱️ Most deliveries are made within 30–45 minutes, depending on your location and order size. 🚚",
      "What do I do when I want to sell on Grab Hub?": "🧑‍🍳 Great! Please contact our admin team through the contact details found at the footer 📞. We'll guide you through the process.",
      "How do I create a customer account?": "👤 Click on the Sign Up button 🔘. It will take you to the sign-up page where you will be required to fill in the necessary details ✍️, then click the Sign Up button again to create your account.",
      "What's the most popular meal today?": "🔥 Chicken Biryani 🍗 and Ugali with Beef 🥩 are top-rated today! Would you like to try one? 😋",
    };

    for (let key in responses) {
      if (input.toLowerCase().includes(key.toLowerCase())) {
        return responses[key];
      }
    }
    return "🤖 Sorry, I didn't understand that. Can you rephrase your question?";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.input.value;
    if (input.toLowerCase() !== "end") {
      handleSend(input);
      e.target.input.value = "";
    } else {
      setMessages([...messages, { text: "Grab Bot: Goodbye! Have a nice day.", isBot: true }]);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="chat-header">
          <h4>Grab Hub Chat Assistant</h4>
        </div>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={msg.isBot ? "message bot" : "message user"}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="chat-input">
            <input type="text" name="input" placeholder="Ask me anything..." required />
            <button type="submit">
              <FaRegPaperPlane />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatAssistant;
