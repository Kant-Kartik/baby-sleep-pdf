import crypto from 'crypto';
import sgMail from '@sendgrid/mail';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Razorpay-Signature');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, customer_email } = req.body;

    // Verify payment signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return res.status(400).json({ error: 'Invalid payment signature' });
    }

    // Payment is verified, send email with eBook using SendGrid
    await sendEmailWithPDF(customer_email, razorpay_payment_id);

    return res.status(200).json({ 
      success: true, 
      message: 'Payment verified and eBook sent successfully' 
    });

  } catch (error) {
    console.error('Error verifying payment:', error);
    return res.status(500).json({ error: error.message });
  }
}

async function sendEmailWithPDF(customerEmail, paymentId) {
  // Set SendGrid API key
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // Read eBook file and convert to base64
  const pdfPath = path.join(process.cwd(), 'public', '7-Day-Baby-Sleep-Guide.pdf');
  const pdfContent = fs.readFileSync(pdfPath);
  const pdfBase64 = pdfContent.toString('base64');

  const msg = {
    to: customerEmail,
    from: {
      email: 'kartikkeyankant@gmail.com',
      name: 'Baby Sleep eBook'
    },
    subject: '🌙 Your 7-Day Baby Sleep Program eBook is Here!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">🌙 Welcome to Better Sleep!</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Your 7-Day Baby Sleep Program is ready</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-top: 0;">🎉 Thank you for your purchase!</h2>
          
          <p style="color: #666; line-height: 1.6;">
            Congratulations on taking the first step towards better sleep for your baby! 
            Your comprehensive 7-Day Baby Sleep Program eBook is attached to this email.
          </p>
          
          <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196F3;">
            <h3 style="color: #1976D2; margin-top: 0;">📋 What's Inside Your Program:</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li>Complete 7-day step-by-step action plan</li>
              <li>Age-specific sleep strategies</li>
              <li>Gentle sleep training methods</li>
              <li>Daily troubleshooting guides</li>
              <li>Sleep environment optimization checklist</li>
              <li>Progress tracking sheets</li>
            </ul>
          </div>
          
          <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin-top: 0;">💡 Quick Start Tips:</h3>
            <ol style="color: #555; line-height: 1.8;">
              <li><strong>Save the eBook</strong> to your device immediately</li>
              <li><strong>Start with Day 1</strong> - don't skip ahead</li>
              <li><strong>Follow each step</strong> consistently for best results</li>
              <li><strong>Track progress</strong> using the included sheets</li>
            </ol>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; display: inline-block;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong>Payment ID:</strong> ${paymentId}<br>
                <strong>Date:</strong> ${new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
          
          <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
            <p style="color: #155724; margin: 0; text-align: center;">
              <strong>🚀 Ready to transform your baby's sleep in just 7 days?</strong><br>
              <em>Better nights start tonight!</em>
            </p>
          </div>
          
          <hr style="border: none; height: 1px; background: #eee; margin: 30px 0;">
          
          <p style="color: #999; font-size: 12px; text-align: center; margin: 0;">
            This email was sent automatically after your successful purchase. 
            Please save this email and the attached eBook for your records.
          </p>
        </div>
      </div>
    `,
    attachments: [
      {
        content: pdfBase64,
        filename: '7-Day-Baby-Sleep-Guide.pdf',
        type: 'application/pdf',
        disposition: 'attachment'
      }
    ]
  };

  // Send email
  await sgMail.send(msg);
  console.log(`eBook sent successfully to ${customerEmail} via SendGrid`);
}
