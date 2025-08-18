# 🧙‍♂️ Hogwarts School of Witchcraft and Wizardry - Digital Experience

A modern, interactive Harry Potter website built with Next.js, React, and Tailwind CSS. Experience the magic of the wizarding world through an immersive digital journey.

![Hogwarts Digital Experience](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🏰 30+ Magical Pages** - Explore houses, characters, spells, locations, and more
- **🎭 Interactive Animations** - Floating icons, scroll effects, and magical transitions
- **📱 Responsive Design** - Beautiful experience on all devices
- **🎨 Modern UI/UX** - Professional design with Harry Potter theming
- **⚡ Fast Performance** - Built with Next.js 15 and optimized for speed
- **🔍 SEO Optimized** - Proper metadata and structured content

## 🚀 Live Demo

[View Live Website](https://your-deployment-url.com)

## 📋 Table of Contents

- [Features](#-features)
- [Pages](#-pages)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Development](#-development)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

## 📄 Pages

### Main Pages
- **🏠 Home** - Welcome to Hogwarts with interactive hero section
- **🏰 Houses** - Explore Gryffindor, Slytherin, Ravenclaw, and Hufflepuff
- **👥 Characters** - Meet your favorite wizards and witches
- **⚡ Spells** - Learn powerful magical incantations
- **📍 Locations** - Discover magical places around the world
- **🐉 Creatures** - Encounter fantastic beasts and beings
- **🧪 Potions** - Brew magical concoctions and elixirs
- **🏆 Quidditch** - Experience the wizarding sport

### Additional Pages
- **📚 History** - Key events in the wizarding world
- **🔮 Magical Items** - Artifacts and enchanted objects
- **📖 Books** - Harry Potter book series
- **🎬 Movies** - Film adaptations
- **🧠 Quiz** - Test your wizarding knowledge
- **🛍️ Shop** - Magical merchandise
- **💬 Forum** - Community discussions
- **📰 News** - Latest wizarding world updates
- **❓ Help** - Support and FAQs
- **📄 About** - About Hogwarts Digital Experience
- **📞 Contact** - Get in touch
- **🖼️ Gallery** - Magical moments
- **🎉 Events** - Magical celebrations

## 🛠️ Technologies

- **Framework:** Next.js 15.4.6 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4.0
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Cinzel, Crimson Text)
- **Build Tool:** Turbopack
- **Package Manager:** npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/harry-potter-magic.git
   cd harry-potter-magic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Project Structure

```
harry-potter-magic/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── houses/            # Houses pages
│   │   ├── characters/        # Characters pages
│   │   ├── spells/            # Spells pages
│   │   └── ...                # Other page directories
│   └── components/            # Reusable components
│       ├── Navigation.tsx     # Navigation bar
│       ├── FloatingIcons.tsx  # Animated floating icons
│       └── ScrollAnimation.tsx # Scroll animations
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
├── next.config.js            # Next.js configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy

### Other Platforms

- **Netlify:** Connect GitHub repository
- **Railway:** Push to GitHub and connect
- **Heroku:** `git push heroku main`

## 🎨 Customization

### Colors
The project uses a magical color palette defined in `tailwind.config.js`:

```javascript
colors: {
  'primary-gold': '#d4af37',
  'secondary-gold': '#ffd700',
  'gryffindor-red': '#740001',
  'slytherin-green': '#1a472a',
  'ravenclaw-blue': '#0e1a40',
  'hufflepuff-yellow': '#ecb939',
  // ... more colors
}
```

### Animations
Custom animations are defined in the Tailwind config and can be used with classes like:
- `animate-float`
- `animate-sparkle`
- `animate-magical-glow`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **J.K. Rowling** - For creating the magical world of Harry Potter
- **Warner Bros.** - For the visual inspiration
- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For the smooth animations

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact us.

---

**⚡ Made with magic and Next.js ⚡**

*"It does not do to dwell on dreams and forget to live." - Albus Dumbledore*
