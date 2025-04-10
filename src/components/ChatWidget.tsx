
import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Bonjour ! Comment allez vous ? Dites moi tout et je me ferai un plaisir vous aider",
      isUser: false
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    setMessages([...messages, { text: inputValue, isUser: true }]);
    setInputValue('');

    // Simulate AI response after a delay
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Merci pour votre message ! Notre équipe vous répondra rapidement. En attendant, vous pourriez consulter notre guide d'implémentation IA.",
        isUser: false
      }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        <button 
          onClick={toggleChat}
          className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition"
          aria-label="Ouvrir le chat"
        >
          <Bot className="h-7 w-7 text-white" />
        </button>
        
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">Assistant IA EGOIA</h3>
                <button 
                  onClick={toggleChat}
                  className="text-white hover:text-gray-200"
                  aria-label="Fermer le chat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="p-4 h-60 overflow-y-auto">
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.isUser ? 'text-right' : ''}`}>
                  <div className={`p-3 inline-block max-w-xs ${
                    message.isUser 
                      ? 'user-chat-bubble bg-primary text-white' 
                      : 'ai-chat-bubble bg-gray-100'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="border-t border-gray-200 p-4">
              <div className="flex">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-primary text-sm" 
                  placeholder="Tapez votre message..."
                />
                <button 
                  onClick={handleSendMessage}
                  className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition"
                  aria-label="Envoyer le message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatWidget;
