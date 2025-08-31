import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
  }
}

interface MetaPixelProps {
  pixelId: string;
}

export const MetaPixel = ({ pixelId }: MetaPixelProps) => {
  useEffect(() => {
    // Load Facebook Pixel
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1" />`;
    document.head.appendChild(noscript);
  }, [pixelId]);

  return null;
};

// Helper functions for tracking events
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

export const trackViewContent = (contentName: string, value?: number) => {
  trackEvent('ViewContent', {
    content_name: contentName,
    content_type: 'product',
    value: value,
    currency: 'USD'
  });
};

export const trackInitiateCheckout = (value: number) => {
  trackEvent('InitiateCheckout', {
    content_type: 'product',
    value: value,
    currency: 'USD'
  });
};

export const trackPurchase = (value: number, orderId?: string) => {
  trackEvent('Purchase', {
    content_type: 'product',
    value: value,
    currency: 'USD',
    transaction_id: orderId
  });
};
