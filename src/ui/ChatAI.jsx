import { useState } from 'react';

const ChatAI = ({ isAccelerator = false }) => {
  const [activeTab, setActiveTab] = useState('regular');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: 'user', content: input }]);
      // Simulate AI response (replace with actual API call)
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'ai',
          content: `Here's some information about ${input} from AI`
        }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="w-11/12 max-w-5xl mx-auto bg-neutral-900 shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex mb-4">
          <button
            onClick={() => setActiveTab('regular')}
            className={`flex-1 py-2 text-lg font-semibold px-4 text-center ${activeTab === 'regular' ? 'bg-teal-500/90 text-white' : 'bg-gray-200 text-gray-700'} rounded-tl-lg rounded-bl-lg`}
          >
            Regular Chat
          </button>
          <button
            onClick={() => isAccelerator && setActiveTab('ultimate')}
            className={`flex-1 py-2 text-lg font-semibold px-4 text-center ${activeTab === 'ultimate' ? 'bg-teal-500/90 text-white' : 'bg-gray-200 text-gray-700'} rounded-tr-lg rounded-br-lg ${!isAccelerator && 'opacity-50 cursor-not-allowed'}`}
            disabled={!isAccelerator}
          >
            Ultimate Chat
          </button>
        </div>

        <div className="h-96 overflow-y-auto mb-4 p-4 border border-gray-200 rounded-lg">
          {activeTab === 'ultimate' && !isAccelerator ? (
            <p className="text-center text-gray-500">Ultimate Chat is only available for Accelerator users.</p>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg font-semibold text-white ${msg.type === 'user' ? 'bg-teal-500/80' : 'bg-gray-700'
                  }`}>
                  {msg.content}
                </span>
              </div>
            ))
          )}
        </div>

        <div className="flex mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What do you want to know?"
            className="flex-grow mr-2 p-2 border border-gray-300 bg-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-sky-500/70 font-semibold text-white rounded-lg hover:bg-blue-600/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatAI;