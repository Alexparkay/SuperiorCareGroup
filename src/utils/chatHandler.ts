/**
 * Utility function to handle sending chat messages to a webhook
 */

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'system';
  timestamp: Date;
}

/**
 * Sends a chat message to the webhook in JSON format
 * @param message - The chat message to send
 * @param email - The email address of the sender
 * @returns Promise that resolves to the response from the webhook
 */
export const sendChatMessageToWebhook = async (message: Message, email: string): Promise<Response> => {
  // Create the payload with metadata
  const payload = {
    messageType: 'chat',
    submittedAt: new Date().toISOString(),
    email: email,
    message: {
      id: message.id,
      text: message.text,
      sender: message.sender,
      timestamp: message.timestamp.toISOString()
    }
  };

  // Send to webhook
  try {
    const response = await fetch('https://hook.eu2.make.com/piiazncuyibfl6lwspk69554eq876hkh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error('Webhook submission failed:', await response.text());
    }

    return response;
  } catch (error) {
    console.error('Error submitting chat message to webhook:', error);
    throw error;
  }
}; 