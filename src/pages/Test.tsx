import { useState } from 'react';
import { sendFormToWebhook } from '../utils/formHandler';
import { sendChatMessageToWebhook } from '../utils/chatHandler';

const Test = () => {
  const [formResult, setFormResult] = useState<string>('');
  const [chatResult, setChatResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const testFormWebhook = async () => {
    setLoading(true);
    try {
      const testData = {
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        phone: '07123456789',
        careType: 'Home Care',
        message: 'This is a test message from the test page.'
      };
      
      const response = await sendFormToWebhook(testData);
      setFormResult(`Form submission ${response.ok ? 'succeeded' : 'failed'} with status: ${response.status}`);
    } catch (error) {
      console.error('Form test error:', error);
      setFormResult(`Form test error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setLoading(false);
    }
  };

  const testChatWebhook = async () => {
    setLoading(true);
    try {
      const testMessage = {
        id: 1,
        text: 'This is a test message from the test page.',
        sender: 'user' as const,
        timestamp: new Date()
      };
      
      const response = await sendChatMessageToWebhook(testMessage, 'test@example.com');
      setChatResult(`Chat submission ${response.ok ? 'succeeded' : 'failed'} with status: ${response.status}`);
    } catch (error) {
      console.error('Chat test error:', error);
      setChatResult(`Chat test error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Webhook Test Page</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Test Form Webhook</h2>
          <button 
            onClick={testFormWebhook}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mb-4 disabled:opacity-50"
          >
            {loading ? 'Testing...' : 'Test Form Webhook'}
          </button>
          
          {formResult && (
            <div className={`mt-4 p-4 rounded-md ${formResult.includes('succeeded') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {formResult}
            </div>
          )}
        </div>
        
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Test Chat Webhook</h2>
          <button 
            onClick={testChatWebhook}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mb-4 disabled:opacity-50"
          >
            {loading ? 'Testing...' : 'Test Chat Webhook'}
          </button>
          
          {chatResult && (
            <div className={`mt-4 p-4 rounded-md ${chatResult.includes('succeeded') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {chatResult}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Test; 