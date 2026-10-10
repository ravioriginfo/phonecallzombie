# PhoneCallZombie Vue.js Marketing Site

A modern, professional marketing website for your PhoneCallZombie Android dialer app, built with Vue.js 3, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
PhoneCallZombie/
├── src/
│   ├── components/
│   │   ├── Navigation.vue       # Top navigation with mobile menu
│   │   ├── Hero.vue             # Hero section with animations
│   │   ├── FeatureCard.vue      # Expandable feature cards
│   │   └── Footer.vue           # Footer with links
│   ├── pages/
│   │   ├── Home.vue             # Landing page with features overview
│   │   ├── Features.vue         # Detailed features page
│   │   ├── InteractiveDemo.vue  # Interactive phone mockup demo
│   │   ├── HowTo.vue            # How-to guides and FAQ
│   │   └── 404.vue              # 404 error page
│   ├── App.vue                  # Root component
│   ├── main.js                  # App entry point
│   ├── router.js                # Vue Router configuration
│   └── style.css                # Global styles and Tailwind CSS
├── public/                       # Static assets
├── index-vue.html               # HTML entry point (created by Vite)
├── package.json                 # Dependencies
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
└── assets/                       # Your screenshots and videos
    ├── DefaultTab.png
    ├── RecentSearches.png
    ├── AutoReplies.png
    ├── CallHandle.png
    ├── ImportExport.png
    ├── RecycleBin.png
    └── CallHandle.mp4
```

## 🎨 Features

### Pages

1. **Home Page** (`/`)
   - Full-screen hero with animations
   - Feature highlights with expandable cards
   - Call-to-action buttons linking to Play Store
   - Responsive statistics display

2. **Features Page** (`/features`)
   - Detailed breakdown of all 6 features
   - Full descriptions with screenshots
   - Use case examples
   - Professional layout with alternating content

3. **Interactive Demo** (`/demo`)
   - CSS-styled phone mockup with realistic bezels
   - Interactive tab switching (Contacts, Recent, Bin, Settings)
   - Animated transitions between views
   - Mobile-responsive design

4. **How-To Guides** (`/how-to`)
   - Step-by-step guides for each feature
   - FAQ section with collapsible questions
   - Helpful tips and tricks

5. **Navigation**
   - Sticky header that stays on top while scrolling
   - Mobile hamburger menu
   - Active link highlighting
   - Brand logo and branding

## 🎯 Design System

### Color Palette
- **Primary Light:** `#0A9654` (Green)
- **Primary Dark:** `#2CCB7B` (Light Green)
- **Background Light:** `#F1F5F2`
- **Background Dark:** `#0B110E`
- **Text Light:** `#0F1B16`
- **Text Dark:** `#E7EFEA`

### Typography
- **Display (Headlines):** Bricolage Grotesque
- **Body:** Figtree
- **Code/Mono:** JetBrains Mono

### Components
- Reusable button styles (`.btn-primary`, `.btn-secondary`)
- Card components with hover effects
- Gradient text utilities
- Glass morphism effects
- Smooth transitions and animations

## 🔧 Configuration

### Vite Configuration
- Fast hot module replacement (HMR)
- Optimized production builds
- Vue 3 support out of the box

### Tailwind CSS
- Customized color theme
- Extended animations
- Dark mode support (class-based)
- Responsive design defaults

### Vue Router
- Client-side routing
- Route-based title management
- Smooth scroll behavior
- 404 page handling

## 📱 Responsive Design

The site is fully responsive across all devices:
- **Mobile:** Single column layout, mobile menu
- **Tablet:** 2-column grid for content
- **Desktop:** Full 3-column or multi-column layouts
- **Large screens:** Optimized spacing and typography

## 🎬 Animations & Interactions

### Scroll Animations
- Fade-in and slide-up effects
- Staggered animations for lists
- GPU-accelerated transforms

### Micro-interactions
- Button hover and click effects
- Smooth color transitions
- Scale and transform effects
- Bounce animations on scroll indicators

### Transitions
- Page transitions with Vue Router
- Component state changes
- Menu open/close animations
- Accordion expand/collapse effects

## 🚀 Deployment

### Build for Production
```bash
npm run build
```
This creates an optimized `dist/` folder ready to deploy.

### Hosting Options
- **Vercel:** Zero-config deployment (recommended)
  ```bash
  npm i -g vercel
  vercel
  ```

- **Netlify:** Drag-and-drop deployment
  - Connect your git repository
  - Set build command: `npm run build`
  - Set publish directory: `dist`

- **GitHub Pages:** Static hosting
  ```bash
  npm run build
  # Deploy dist/ folder
  ```

- **Traditional Hosting:** Upload `dist/` folder via FTP/SCP

## 📦 Dependencies

- **vue@^3.5.10** - Progressive JavaScript framework
- **vue-router@^4.4.5** - Official router for Vue
- **tailwindcss@^4.0.0** - Utility-first CSS framework
- **aos@^2.3.4** - Animate on Scroll library
- **swiper@^11.1.14** - Modern carousel library
- **axios@^1.7.7** - HTTP client (optional)

## 🛠️ Development

### Adding New Pages
1. Create a new `.vue` file in `src/pages/`
2. Add route to `src/router.js`
3. Add navigation link in `src/components/Navigation.vue`

### Adding New Components
1. Create component in `src/components/`
2. Import and use in your page

### Styling
- Use Tailwind utility classes
- Add custom styles in `<style scoped>` blocks
- Import fonts and global styles in `src/style.css`

### Testing
```bash
# Development with hot reload
npm run dev

# Production preview
npm run build
npm run preview
```

## 📊 Performance Optimization

- Lazy loading images and videos
- Code splitting for routes
- Minified production builds
- Optimized CSS with Tailwind
- GPU-accelerated animations
- Responsive image sizes

### Lighthouse Targets
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

## 🔐 Security

- No sensitive data in client code
- Safe external links with `rel="noopener noreferrer"`
- Content Security Policy ready
- XSS protection via Vue's default escaping

## 📝 SEO

- Dynamic page titles
- Meta descriptions
- Open Graph tags ready (add in index.html)
- Semantic HTML structure
- Mobile-friendly responsive design
- Fast load times

## 🤝 Integration with Existing Assets

Your existing assets are preserved:
- Screenshots in `/assets/` directory
- Video files for feature demonstrations
- Branding and color scheme maintained
- Content from README.md can be adapted

## 🐛 Troubleshooting

### Port already in use
```bash
# Use different port
npm run dev -- --port 3000
```

### Build errors
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
npm run build
```

### Styling not applying
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check that class names match Tailwind utilities

## 📞 Support & Resources

- **Vue 3 Docs:** https://vuejs.org
- **Vite Docs:** https://vitejs.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Vue Router:** https://router.vuejs.org

## 📄 Next Steps

1. ✅ Project initialized with Vue 3 + Vite
2. ✅ All pages and components created
3. ✅ Responsive design implemented
4. ✅ Animations and interactions added
5. **TODO:** Test all pages in browser
6. **TODO:** Optimize images and videos
7. **TODO:** Add Google Analytics
8. **TODO:** Deploy to hosting platform
9. **TODO:** Set up custom domain
10. **TODO:** Configure email for contact forms

## 🎉 You're All Set!

Your professional Vue.js marketing site is ready. Start the dev server with `npm run dev` and explore your new site at `http://localhost:5173`. Customize colors, content, and features as needed!

---

Built with ❤️ using Vue.js 3, Vite, and Tailwind CSS
