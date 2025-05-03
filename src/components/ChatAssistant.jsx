import React, { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import './chatassistant.css';

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
    { text: "👋 Hello, I am Grab Bot. Ask me anything about Grab Hub. Type 'end' to stop the conversation.", isBot: true }
  ]);

  const handleSend = (input) => {
    const userMessage = { text: input, isBot: false };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    let botResponse = getBotResponse(input);
    const botMessage = { text: botResponse, isBot: true };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  const getBotResponse = (input) => {
    const text = input.toLowerCase();

    // Keyword matching
    if (text.includes("hi") || text.includes("hello")) return "Hi there! 👋 How can I help you today?";
    if (text.includes("how are you")) return "I'm great! 🤖 Always ready to assist you with anything about Grab Hub.";
    if (text.includes("bye") || text.includes("goodbye")) return "Goodbye! 👋 Have a great day!";
    if (text.includes("thank")) return "You're welcome! 😊";
    if (text.includes("grab hub")) return "Grab Hub is Kenya's top food e-commerce platform! 🍛";
    if (text.includes("work") || text.includes("how do i use") || text.includes("how to use")) return "Just browse meals, pick your favorite 🍽️, pay via M-Pesa 💰, and wait for delivery 🚚.";
    if (text.includes("available") || text.includes("location") || text.includes("area")) return "We are currently available in major towns across Kenya 🇰🇪 and expanding.";
    if (text.includes("meal") || text.includes("food")) return "You can find meals like Pilau, Chapati, Biryani, Ugali and many more on our homepage!";
    if (text.includes("pay") || text.includes("payment") || text.includes("m-pesa")) return "We accept secure payments via M-Pesa and debit cards 💳.";
    if (text.includes("delivery")) return "Deliveries typically take 30–45 minutes ⏱️ depending on location.";
    if (text.includes("sell") || text.includes("vendor") || text.includes("partner")) return "🧑‍🍳 To sell on Grab Hub, contact us using the form at the footer or email our admin.";
    if (text.includes("sign up") || text.includes("register") || text.includes("create account")) return "👤 Click the Sign Up button and fill in your info to create an account.";
    if (text.includes("popular") || text.includes("top") || text.includes("best")) return "🔥 Chicken Biryani 🍗 and Ugali with Beef 🥩 are trending today!";
    if (text.includes("support") || text.includes("help")) return "We offer 24/7 support 💬. You can contact us anytime.";

    return "🤖 I'm not sure I understood that. Try rephrasing or asking something else about Grab Hub.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.input.value.trim();
    if (input.toLowerCase() === "end") {
      setMessages((prevMessages) => [...prevMessages, { text: "👋 Grab Bot: Conversation ended. See you again soon!", isBot: true }]);
    } else {
      handleSend(input);
    }
    e.target.reset();
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
