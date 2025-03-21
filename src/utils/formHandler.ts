/**
 * Utility function to handle form submissions to the webhook
 */

/**
 * Sends form data to the webhook in JSON format
 * @param formData - FormData object containing the form data
 * @param formName - Name of the form (e.g., 'contact', 'career', 'assessment')
 * @returns Promise that resolves to the response from the webhook
 */
export const sendFormToWebhook = async (formData: FormData, formName: string): Promise<Response> => {
  // Convert FormData to a regular object
  const formObject: Record<string, string> = {};
  formData.forEach((value, key) => {
    formObject[key] = value.toString();
  });

  // Add metadata
  const payload = {
    formName,
    submittedAt: new Date().toISOString(),
    formData: formObject
  };

  // Send to webhook
  try {
    const response = await fetch('https://hook.eu2.make.com/wugr55et3usqk02bsfkwyxsxk1aixdwo', {
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
    console.error('Error submitting form to webhook:', error);
    throw error;
  }
}; 