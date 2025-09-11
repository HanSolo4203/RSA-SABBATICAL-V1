# Sabbatical Travel - Website Clone

A modern recreation of the Sabbatical Travel website built with React, Vite, and Tailwind CSS. This project demonstrates how to clone and recreate a website using scraped content and modern web technologies.

## 🚀 Features

- **Modern React Architecture** - Built with React 18 and Vite for optimal performance
- **Responsive Design** - Fully responsive layout that works on all devices
- **Smooth Animations** - Framer Motion animations for enhanced user experience
- **Component-Based** - Modular React components for maintainability
- **Data-Driven** - Content sourced from scraped JSON data
- **Modern Styling** - Tailwind CSS with custom design system
- **SEO Optimized** - Proper meta tags and semantic HTML

## 📁 Project Structure

```
sabbatical-travel-clone/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Process.jsx
│   │   ├── Benefits.jsx
│   │   ├── ExperiencesGrid.jsx
│   │   └── MediaCoverage.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Experiences.jsx
│   │   ├── Journal.jsx
│   │   └── Contact.jsx
│   ├── data/              # Data management
│   │   └── sabbaticalData.js
│   ├── styles/            # Global styles
│   │   └── index.css
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── sabbatical_landing_page.md    # Scraped markdown content
├── sabbatical_summary.json       # Structured data
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sabbatical-travel-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Pages

- **Home** - Hero section, benefits, process, and featured experiences
- **Experiences** - Complete list of all transformational experiences
- **Journal** - Articles and insights from the Sabbatical Travel team
- **Contact** - Registration form and contact information

## 🎨 Design Features

- **Hero Section** - Compelling landing with animated elements
- **Process Flow** - 3-step process visualization (Examine → Experience → Evolve)
- **Experience Grid** - Filterable grid of all available experiences
- **Media Coverage** - Testimonials and press mentions
- **Responsive Navigation** - Mobile-friendly header with smooth transitions
- **Contact Form** - Interactive registration form with validation

## 📊 Data Structure

The website uses structured JSON data extracted from the original Sabbatical Travel website:

- **Company Information** - Name, tagline, description
- **Experiences** - 12 unique transformational experiences
- **Process** - 3-step methodology
- **Media Coverage** - Press quotes and publications
- **Journal Articles** - Blog posts and insights
- **Contact Information** - Email, social media, forms

## 🔧 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/styles/index.css` for global styles
- Component-specific styles use Tailwind classes

### Content
- Update `sabbatical_summary.json` to modify content
- Add new experiences, articles, or media coverage
- Modify component props to change displayed information

### Components
- All components are modular and reusable
- Easy to add new sections or modify existing ones
- Consistent design system across all components

## 📈 Performance

- **Vite** for fast development and optimized builds
- **Code splitting** with React Router
- **Optimized images** and lazy loading
- **Minimal bundle size** with tree shaking
- **Modern CSS** with Tailwind's utility classes

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is for educational purposes and demonstrates web scraping and recreation techniques. Please respect the original Sabbatical Travel website's terms of service and copyright.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Note**: This is a recreation for educational purposes. All content and branding belong to Sabbatical Travel.
