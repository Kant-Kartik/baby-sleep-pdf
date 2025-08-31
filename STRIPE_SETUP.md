# 🔧 Stripe Payment Setup Guide

## 📋 What You Need To Do

### 1. Create Stripe Account
1. Go to [stripe.com](https://stripe.com)
2. Sign up for a free account
3. Complete account verification

### 2. Get API Keys
1. In Stripe Dashboard, go to **Developers > API Keys**
2. Copy your **Publishable Key** (starts with `pk_test_`)
3. Copy your **Secret Key** (starts with `sk_test_`)

### 3. Create Product & Price
1. In Stripe Dashboard, go to **Products**
2. Click **+ Add Product**
3. Name: "7-Day Baby Sleep Program"
4. Price: $9.00 USD
5. Type: One-time payment
6. Copy the **Price ID** (starts with `price_`)

### 4. Set Environment Variables

Create a `.env` file in your project root:

```bash
# Your Stripe keys
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# Your site URL (for redirects)
URL=http://localhost:8080
```

### 5. Update Code
In `src/pages/Checkout.tsx`, replace:
```javascript
priceId: 'price_YOUR_STRIPE_PRICE_ID'
```
With your actual Price ID from step 3.

### 6. Deploy & Test

#### Local Testing:
```bash
npm install
npm run dev
```

#### Deploy to Netlify:
1. Push code to GitHub
2. Connect to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy!

## 🔒 Security Notes

- **Never commit your Secret Key** to Git
- Use test keys for development
- Switch to live keys only when ready for production
- Test with Stripe's test card numbers first

## 💳 Test Cards

Use these for testing:
- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002

## ✅ Once Setup:

1. Customer clicks "Complete Purchase"
2. Redirected to Stripe Checkout
3. Enters real payment info
4. After payment, redirected to success page
5. PDF download available

## 🆘 Need Help?

Check Stripe's documentation: [stripe.com/docs](https://stripe.com/docs)
