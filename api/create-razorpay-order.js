const Razorpay = require('razorpay');

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
    const { email, amount } = req.body;

    if (!email || !amount) {
      return res.status(400).json({ error: 'Email and amount are required' });
    }

    // Initialize Razorpay
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Convert USD to INR (approximate rate: 1 USD = 83 INR)
    const amountInINR = Math.round(amount * 83);

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: amountInINR * 100, // Convert to paise (₹747 = 74700 paise for $9)
      currency: 'INR', // Indian Rupees
      receipt: `order_${Date.now()}`,
      notes: {
        customer_email: email,
        product: '7-Day Baby Sleep Program',
        original_amount_usd: amount,
      },
    });

    return res.status(200).json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      amount_usd: amount,
      amount_inr: amountInINR,
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return res.status(500).json({ error: error.message });
  }
}
