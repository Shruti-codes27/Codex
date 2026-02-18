# Ayurvedic Diet Planner - HTML/CSS/JavaScript Version

A pure web implementation of the Ayurvedic Diet Planning and Food Recognition App using only HTML, CSS, and JavaScript. No build tools or frameworks required!

## Features

### 🧘‍♀️ Prakriti Assessment
- Interactive 10-question assessment to determine your Ayurvedic constitution
- Visual progress tracking
- Real-time calculation of Vata, Pitta, and Kapha percentages
- Detailed results with personalized recommendations

### 🍲 Food Recognition
- Drag-and-drop image upload
- Click to upload functionality
- Mock food recognition with realistic results
- Detailed nutritional analysis
- Dosha-specific effects for each food item
- Visual indicators for dosha impacts

### 🎨 Responsive Design
- Mobile-first responsive design
- Ayurvedic-themed color palette
- Smooth animations and transitions
- Accessible UI components

## Quick Start

1. **Download or clone** this repository
2. **Open `index.html`** in your web browser
3. **No installation required!** - Everything runs in the browser

### File Structure
```
html-css-js-version/
├── index.html          # Main HTML file
├── styles.css          # All styling with Tailwind-inspired classes
├── script.js           # Complete application logic
└── README.md           # This file
```

## How to Use

### Prakriti Assessment
1. Click "Start Assessment" from the welcome screen
2. Answer 10 questions about your body type, habits, and personality
3. View your detailed Prakriti analysis with:
   - Dosha percentages with visual bars
   - Primary and secondary dosha identification
   - Personalized characteristics, diet, and lifestyle recommendations

### Food Recognition
1. Click "Analyze Food" from the welcome screen
2. Upload an image by:
   - Dragging and dropping onto the upload area
   - Clicking the upload area and selecting a file
3. Click "Analyze Food" to process the image
4. View results including:
   - Identified food items with calories
   - Nutritional breakdown (protein, carbs, fat, fiber)
   - Dosha effects (increases/decreases/neutral)
   - Ayurvedic properties (taste, energy, post-digestive effect)

## Technology Used

- **HTML5** - Semantic markup and modern features
- **CSS3** - Flexbox, Grid, animations, and custom properties
- **Vanilla JavaScript** - ES6+ features, no dependencies
- **Responsive Design** - Mobile-first approach
- **Accessibility** - Semantic HTML and keyboard navigation

## Key Features

### Assessment Engine
- Rule-based algorithm calculating dosha scores
- Weighted question responses
- Percentage-based results
- Comprehensive dosha descriptions

### Food Recognition System
- File API for image handling
- FileReader API for preview
- Mock recognition with realistic food database
- Detailed nutritional and Ayurvedic analysis

### UI/UX Design
- Smooth screen transitions
- Progress indicators
- Hover effects and micro-interactions
- Mobile-responsive layout
- Ayurvedic color scheme

## Browser Compatibility

This app works in all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Customization

### Adding New Questions
Edit the `prakritiQuestions` array in `script.js`:

```javascript
{
    id: 'new_question',
    text: 'Your question here?',
    options: [
        {
            id: 'option1',
            text: 'Option text',
            doshaImpact: { vata: 3, pitta: 1, kapha: 0 }
        }
        // Add more options...
    ]
}
```

### Adding New Foods
Edit the `mockFoodDatabase` array in `script.js`:

```javascript
{
    id: 'unique_id',
    name: 'Food Name',
    category: 'Category',
    doshaEffect: {
        vata: 'increases|decreases|neutral',
        pitta: 'increases|decreases|neutral',
        kapha: 'increases|decreases|neutral'
    },
    calories: 100,
    nutrients: {
        protein: 10,
        carbs: 20,
        fat: 5,
        fiber: 3
    },
    ayurvedicProperties: {
        taste: 'Sweet',
        energy: 'heating|cooling|neutral',
        postDigestiveEffect: 'Sweet'
    }
}
```

### Customizing Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --ayurveda-green-600: #2d7a4f;
    --ayurveda-gold-500: #fcc840;
    --dosha-vata: #8B7355;
    --dosha-pitta: #FF6B35;
    --dosha-kapha: #4A90A4;
}
```

## Future Enhancements

- [ ] Real food recognition API integration
- [ ] Local storage for user preferences
- [ ] Meal planning features
- [ ] Progress tracking
- [ ] Recipe database
- [ ] Print-friendly results
- [ ] Dark mode support

## Deployment

This app can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any web server

Simply upload the files and open `index.html`!

## License

MIT License - feel free to use and modify for your projects.

---

**Note**: This is a demonstration version with mock food recognition. For production use, integrate with actual computer vision APIs and nutrition databases.
