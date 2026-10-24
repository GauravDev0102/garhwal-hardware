# Garhwal Hardware Store - Optimized for Mobile & All Platforms

A high-performance hardware store website built with **Vite**, **GSAP**, and **Three.js**, fully optimized for mobile devices and all operating systems (Windows, macOS, Linux, iOS, Android).

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser. Hot reload enabled for instant updates.

### Production Build
```bash
npm run build
```
Creates optimized, minified bundle in `dist/` with gzip & brotli compression.

### Preview Built Site
```bash
npm run preview
```

---

## ⚡ Performance Optimizations

### 1. **Bundle Optimization**
- **Code Splitting**: Separate chunks for GSAP, Three.js, and vendor libraries
- **Minification**: Terser with dead code elimination & console log removal
- **Compression**: Gzip & Brotli compression for 60-70% reduction
- **CSS Splitting**: Separate CSS files per component

### 2. **Mobile-First Design**
- Responsive grid layouts (1-2-3 columns based on screen size)
- Touch-friendly buttons (min 44px height on mobile)
- Optimized spacing and typography for small screens
- Viewport scaling disabled to prevent zoom issues

### 3. **Image Optimization**
- WebP format with PNG fallbacks for older browsers
- Lazy loading with `loading="lazy"` attribute
- Responsive images with `srcset` for different screen sizes
- Images optimized to <100KB each for fast loading

### 4. **Service Worker & PWA**
- Offline-first strategy with intelligent caching
- **Install app on home screen** on iOS/Android
- Background sync for fast repeated visits
- Update notifications for new versions
- Works completely offline after first load

### 5. **Performance Metrics**
- **LCP (Largest Contentful Paint)**: <2.5s on mobile
- **FID (First Input Delay)**: <100ms
- **CLS (Cumulative Layout Shift)**: <0.1
- **Initial Bundle**: ~150KB (gzipped)

### 6. **CSS Optimizations**
- Reduced animations on low-end devices
- `prefers-reduced-motion` support
- Hardware acceleration with `will-change`
- Font display swap to prevent layout shift
- Removed expensive pseudo-elements on mobile

### 7. **Network Optimizations**
- Font preloading & font-display: swap
- Preconnect to external domains
- DNS prefetching
- Resource hints (preload, prefetch)
- Min/max CSS sizes

---

## 📱 Cross-Platform Compatibility

### Desktop (Windows, macOS, Linux)
- Full animations and effects
- Hover states and transitions
- Desktop navigation

### Mobile (iOS, Android)
- Touch-optimized interface
- Reduced animations
- System-level font rendering
- Installable as PWA app

### Tablets
- Optimized grid (2-3 columns)
- Touch + mouse support
- Hybrid navigation (drawer + nav links)

---

## 🛠 Development Setup

### Environment Variables
Create `.env` in project root:
```
GEMINI_API_KEY=your_api_key_here
```

### Folder Structure
```
.
├── index.html              # Main HTML (PWA meta tags)
├── app.js                  # Main app entry (Service Worker registration)
├── style.css               # Global styles (mobile optimized)
├── vite.config.js          # Vite build configuration
├── package.json            # Dependencies & scripts
├── public/
│   ├── service-worker.js   # PWA offline support
│   ├── manifest.json       # PWA app manifest
│   └── images/             # Optimized WebP images
└── dist/                   # Production build (created after npm run build)
```

---

## 📊 Performance Tips

### For Developers
1. **Import selectively**: Only import used functions from GSAP
   ```js
   import { gsap } from 'gsap';
   ```

2. **Defer non-critical JS**: Use `requestIdleCallback()` for polish effects
   ```js
   requestIdleCallback(() => {
     // Non-critical initialization
   });
   ```

3. **Image format**: Use WebP for modern browsers, PNG fallback for IE
   ```html
   <picture>
     <source srcset="image.webp" type="image/webp">
     <img src="image.png" alt="...">
   </picture>
   ```

4. **CSS over JS**: Use CSS animations when possible (better performance)

### Testing Performance
1. **Chrome DevTools**:
   - Lighthouse audit (Desktop & Mobile tabs)
   - Network tab to check bundle sizes
   - Performance tab to record runtime performance

2. **Mobile Testing**:
   - Test on actual devices (iOS/Android)
   - Test on 4G/3G networks
   - Use Chrome DevTools device emulation

3. **Bundle Analysis**:
   ```bash
   npm run analyze
   ```
   Opens `stats.html` showing bundle breakdown

---

## 🔧 Customization

### Change Theme Colors
Edit `style.css` CSS variables:
```css
:root {
  --neon-cyan: #06b6d4;
  --neon-gold: #ffb703;
  --neon-green: #10b981;
  /* ... */
}
```

### Add New Products
Edit `app.js` PRODUCTS array:
```js
{
  id: 'new-product',
  name: 'Product Name',
  category: 'category-name',
  price: '₹1,999',
  desc: 'Product description',
  specs: { ...details }
}
```

### Modify Service Worker Cache
Edit `public/service-worker.js` urlsToCache array:
```js
const urlsToCache = [
  '/',
  '/index.html',
  // Add more URLs...
];
```

---

## 🌐 Deployment

### Netlify / Vercel
1. Push code to GitHub
2. Connect repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy automatically on every push

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your server
```

---

## 📈 Monitoring

### Google Lighthouse
Regular audits ensure performance stays optimal:
- Desktop: Target 90+ score
- Mobile: Target 80+ score

### Crash Monitoring
Use Sentry or similar to track production errors.

### Metrics
- Monitor Core Web Vitals in Google Search Console
- Track conversion rates
- Analyze user behavior with Google Analytics

---

## 🆘 Troubleshooting

### Service Worker Not Working?
- Clear browser cache (Ctrl+Shift+Delete)
- Check DevTools > Application > Service Workers
- Verify `service-worker.js` is in `public/` folder

### Images Not Loading?
- Check `public/images/` folder exists
- Verify WebP + PNG files are present
- Check network tab in DevTools

### Build Errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📝 License
Created for Garhwal Hardware Store. All rights reserved.

## 🤝 Support
Contact: +919682558068
WhatsApp: https://wa.me/919682558068
Email: taraknathsingh688@gmail.com
