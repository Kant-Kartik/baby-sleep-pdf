import Razorpay from 'razorpay';

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email, amount, currency, userCountry } = req.body;

    if (!email || !amount) {
      return res.status(400).json({ error: 'Email and amount are required' });
    }

    // Check environment variables
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error('Missing Razorpay environment variables');
      return res.status(500).json({ 
        error: 'Server configuration error - missing API keys',
        debug: {
          hasKeyId: !!process.env.RAZORPAY_KEY_ID,
          hasKeySecret: !!process.env.RAZORPAY_KEY_SECRET
        }
      });
    }

    // Initialize Razorpay
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Use INR for Indian users to enable UPI/NetBanking, USD for others
    let finalCurrency, finalAmount;
    
    if (userCountry === 'IN') {
      // Indian customer - use INR to enable UPI/NetBanking
      finalCurrency = 'INR';
      const exchangeRate = 83; // 1 USD = 83 INR (so $9 = ₹747)
      finalAmount = Math.round(amount * exchangeRate * 100); // Convert to paise
    } else {
      // Global customer - use USD
      finalCurrency = 'USD';
      finalAmount = amount * 100; // Convert to cents
    }

    const order = await razorpay.orders.create({
      amount: finalAmount,
      currency: finalCurrency,
      receipt: `order_${Date.now()}`,
      notes: {
        customer_email: email,
        product: '7-Day Baby Sleep Guide',
        merchant_name: '7-Day Baby Sleep Program',
        business_name: 'Baby Sleep Guide',
        amount_usd: amount,
        user_country: userCountry,
      },
    });

    return res.status(200).json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      amount_usd: amount,
      user_country: userCountry,
      final_currency: finalCurrency,
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return res.status(500).json({ error: error.message });
  }
}
