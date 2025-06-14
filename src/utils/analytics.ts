// Google Analytics event tracking utility

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: {
        page_path?: string;
        page_title?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

// Track page views
export const trackPageView = (path: string, title: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-RQB76FH0BF', {
      page_path: path,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label: string,
  value?: number
) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submission', 'Form', formName);
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  trackEvent('button_click', 'Button', buttonName);
};

// Track outbound links
export const trackOutboundLink = (url: string) => {
  trackEvent('outbound_link', 'Link', url);
}; 