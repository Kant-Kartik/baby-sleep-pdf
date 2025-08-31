# 🚀 Vercel Deployment Guide

## 🎯 Why Vercel?
- ✅ **Free hosting** for personal projects
- ✅ **Automatic deployments** from GitHub
- ✅ **Serverless functions** for Razorpay API
- ✅ **Global CDN** - Fast worldwide
- ✅ **Custom domains** supported

## 📋 Deployment Steps

### 1. Push to GitHub (If not already done)

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Baby Sleep PDF website with Razorpay integration"

# Create repo on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/baby-sleep-pdf.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Using Vercel Website
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"

#### Option B: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name? baby-sleep-pdf
# - Directory? ./
# - Auto-detected settings? Y
```

### 3. Add Environment Variables

In Vercel Dashboard:
1. Go to **Project Settings**
2. Click **Environment Variables**
3. Add these variables:

```
RAZORPAY_KEY_ID=rzp_test_your_key_here
RAZORPAY_KEY_SECRET=your_secret_key_here
VITE_RAZORPAY_KEY_ID=rzp_test_your_key_here
```

### 4. Update Razorpay Website

After deployment:
1. Copy your Vercel URL (e.g., `https://baby-sleep-pdf.vercel.app`)
2. Go to Razorpay Dashboard
3. Add website link for verification
4. Wait for approval (usually instant)

### 5. Test Payment

1. Visit your deployed site
2. Click "Get Your Guide Now"
3. Enter email and click "Complete Purchase"
4. Test with Razorpay test cards:
   - **Success**: 4111 1111 1111 1111
   - **Failure**: 4000 0000 0000 0002

## 🔧 Project Structure for Vercel

```
BabySleepPDF/
├── api/                          # Serverless functions
│   └── create-razorpay-order.js  # Razorpay API
├── src/                          # React app
├── vercel.json                   # Vercel config
└── package.json                  # Dependencies
```

## ⚡ Auto-Deploy Setup

Once connected to GitHub:
- **Every push** triggers new deployment
- **Preview deployments** for branches
- **Production** deploys from main branch

## 🌐 Custom Domain (Optional)

1. In Vercel Dashboard → **Domains**
2. Add your custom domain
3. Update DNS records as shown
4. SSL certificate auto-generated

## 🔍 Monitoring

Vercel provides:
- 📊 **Analytics** - Page views, performance
- 🐛 **Error tracking** - Runtime errors
- 📈 **Performance insights**
- 📱 **Mobile optimization**

## 🆘 Troubleshooting

### Common Issues:

**Build fails?**
- Check `package.json` scripts
- Ensure all dependencies listed
- Check for TypeScript errors

**API not working?**
- Verify environment variables
- Check function logs in Vercel
- Ensure Razorpay keys are correct

**Payment not working?**
- Check browser console for errors
- Verify Razorpay key in frontend
- Test with different cards

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added
- [ ] Website deploys successfully
- [ ] Razorpay website verified
- [ ] Payment flow tested
- [ ] Custom domain added (optional)

Your baby sleep website will be live and accepting payments! 🎉
