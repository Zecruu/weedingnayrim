# Steven & Nayrim Wedding Website 💕

An elegant, bilingual wedding website built with React, TypeScript, and Tailwind CSS, featuring smooth animations and a romantic design aesthetic.

## 🌟 Features

- **Bilingual Support**: Spanish-first design with elegant typography
- **Responsive Design**: Optimized for mobile and desktop viewing
- **Smooth Animations**: Framer Motion scroll animations and transitions
- **Elegant Styling**: Soft, romantic color palette with custom fonts
- **Complete Wedding Info**: All essential details for guests

## 🎨 Design

### Color Palette
- **Background**: #FAF6F2 (blush)
- **Text**: #2F2F2F (deep charcoal)
- **Accents**: #E2CFC3 (rose)
- **Secondary**: #9CAF88 (sage green)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Lato (sans-serif)

## 📱 Sections

1. **Hero** - Main title with wedding date and location
2. **Welcome** - Personal message to guests
3. **Hotels** - Accommodation recommendations
4. **Flights** - Travel information and flight options
5. **Dress Code** - Style guidelines and color palette
6. **Itinerary** - Complete event schedule (March 13-14)
7. **Recommendations** - Local attractions, restaurants, and tips
8. **Footer** - Contact information and final message

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd weedingnay
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
weedingnay/
├── public/
│   └── images/
│       └── hero-bg.jpg (add your hero image here)
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Welcome.tsx
│   │   ├── Hotels.tsx
│   │   ├── Flights.tsx
│   │   ├── DressCode.tsx
│   │   ├── Itinerary.tsx
│   │   ├── Recommendations.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## 🖼️ Adding Images

1. Add your hero background image to `public/images/hero-bg.jpg`
2. Recommended size: 1920x1080px or larger
3. Use romantic, elegant imagery that fits the color palette

## 🎯 Customization

### Content Updates
- Edit component files in `src/components/` to update text, dates, and information
- Modify contact information in `Footer.tsx`
- Update hotel and flight details in respective components

### Styling
- Colors are defined in `tailwind.config.js`
- Custom CSS classes in `src/index.css`
- Component-specific styling using Tailwind classes

### Animations
- Framer Motion animations are configured in each component
- Scroll-triggered animations with `whileInView` prop
- Customizable timing and easing in transition objects

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects if needed

## 📝 TODO

- [ ] Add actual wedding photos
- [ ] Implement language toggle (Spanish/English)
- [ ] Add RSVP functionality
- [ ] Integrate with Google Maps for locations
- [ ] Add photo gallery section
- [ ] Implement contact form

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Google Fonts** - Playfair Display & Lato

## 📞 Support

For questions or customization requests, contact the development team.

---

Made with 💖 for Steven & Nayrim's special day
