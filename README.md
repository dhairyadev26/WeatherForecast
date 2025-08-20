# Weather Forecast Application

A modern, feature-rich weather forecast application built with React and Redux that provides comprehensive weather information with an intuitive user interface.

![Weather Forecast](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Redux](https://img.shields.io/badge/Redux-4.2.1-purple?logo=redux)
![License](https://img.shields.io/badge/License-MIT-green)
![Node](https://img.shields.io/badge/Node-%3E%3D14.0.0-brightgreen?logo=node.js)

## 🌟 Features

### Core Functionality
- **5-Day Weather Forecast**: Detailed weather predictions with hourly breakdowns
- **Current Weather**: Real-time weather conditions for any location
- **Location Services**: Automatic location detection via geolocation API
- **Search Functionality**: Search weather by city name with autocomplete suggestions
- **Recent Locations**: Quick access to previously searched locations

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Multiple View Modes**: Toggle between card and list view layouts
- **Temperature Units**: Switch between Celsius and Fahrenheit
- **Dark/Light Theme**: Comfortable viewing in any lighting condition
- **Loading States**: Smooth loading indicators and skeleton screens

### Accessibility & Internationalization
- **Screen Reader Support**: Full compatibility with assistive technologies
- **ARIA Labels**: Comprehensive accessibility attributes
- **Keyboard Navigation**: Complete keyboard accessibility
- **Multi-Language Support**: Available in English, Spanish, French, German, and Chinese
- **RTL Support**: Right-to-left text direction for applicable languages

### Performance & Technical
- **Optimized Performance**: Memoization, debouncing, and throttling
- **Error Handling**: Robust error management with user-friendly messages
- **Offline Support**: Basic offline functionality with cached data
- **Progressive Web App**: PWA features for mobile installation

## 🚀 Quick Start

### Prerequisites

```bash
Node.js >= 14.0.0
npm >= 6.0.0
```

### Installation

```bash
# Clone the repository
git clone https://github.com/dhairyadev26/WeatherForecast.git

# Navigate to project directory
cd WeatherForecast

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run start
```

The application will be available at `http://localhost:3000`

### Alternative Port

If port 3000 is in use:

```bash
npm run start -- --port 3001
```

## 🏗️ Project Structure

```
WeatherForecast/
├── public/                   # Static assets
│   ├── index.html           # HTML template
│   └── manifest.json        # PWA manifest
├── src/
│   ├── actions/             # Redux action creators
│   │   ├── weatherStation.js # Weather data actions
│   │   ├── alerts.js        # Alert management actions
│   │   ├── language.js      # Internationalization actions
│   │   └── theme.js         # Theme management actions
│   ├── components/          # React components
│   │   ├── Dashboard.js     # Main control panel
│   │   ├── WeatherForecast.js # Weather display component
│   │   ├── ForecastTiles.js # Forecast cards/tiles
│   │   ├── DetailedInfo.js  # Detailed weather information
│   │   ├── LanguageSelector.js # Language selection
│   │   ├── ViewToggle.js    # View mode toggle
│   │   ├── AlertBanner.js   # Weather alerts display
│   │   └── NotificationCenter.js # System notifications
│   ├── constants/           # Application constants
│   │   ├── ActionTypes.js   # Redux action types
│   │   ├── generalConstants.js # General app constants
│   │   └── localization.js  # Language translations
│   ├── reducers/            # Redux reducers
│   │   ├── index.js         # Root reducer
│   │   ├── weatherStation.js # Weather state management
│   │   ├── alerts.js        # Alert state management
│   │   ├── language.js      # Language state management
│   │   └── theme.js         # Theme state management
│   ├── styles/              # Styling
│   │   └── main.scss        # Main stylesheet
│   ├── test/                # Test files
│   │   ├── __tests__/       # Component tests
│   │   └── data/            # Test data
│   ├── utils/               # Utility functions
│   │   ├── geolocationUtils.js # Location services
│   │   └── performance.js   # Performance optimizations
│   ├── App.js               # Root component
│   ├── index.js             # Application entry point
│   └── store.js             # Redux store configuration
├── webpack.config.js         # Webpack configuration
├── package.json             # Dependencies and scripts
├── .babelrc                 # Babel configuration
└── README.md                # Project documentation
```

## 🛠️ Available Scripts

```bash
# Development
npm run start              # Start development server
npm run start:dev          # Start with development optimizations

# Building
npm run build              # Create production build
npm run build:analyze      # Build with bundle analyzer

# Testing
npm run test               # Run test suite
npm run test:watch         # Run tests in watch mode
npm run test:coverage      # Run tests with coverage report

# Linting
npm run lint               # Run ESLint
npm run lint:fix           # Fix linting issues automatically
```

## 🌍 Environment Configuration

Create a `.env` file in the root directory:

```env
# OpenWeatherMap API Configuration
REACT_APP_WEATHER_API_KEY=your_api_key_here
REACT_APP_API_BASE_URL=https://api.openweathermap.org/data/2.5

# Application Configuration
REACT_APP_DEFAULT_LOCATION=London
REACT_APP_DEFAULT_UNITS=metric
REACT_APP_CACHE_DURATION=300000

# Development Configuration
REACT_APP_DEBUG_MODE=false
REACT_APP_LOG_LEVEL=info
```

## 🔧 API Configuration

### OpenWeatherMap Setup

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Create a free account
3. Generate an API key
4. Replace the API key in `src/constants/generalConstants.js`

```javascript
export const APP_ID = "your_actual_api_key_here";
```

### API Endpoints Used

- **Current Weather**: `/weather`
- **5-Day Forecast**: `/forecast`
- **Geocoding**: `/geo/1.0/direct`

## 🎨 Customization

### Themes

The application supports multiple themes. To add a new theme:

1. Add theme constants in `src/constants/generalConstants.js`
2. Update theme reducer in `src/reducers/theme.js`
3. Add corresponding styles in `src/styles/main.scss`

### Languages

To add a new language:

1. Add translations in `src/constants/localization.js`
2. Update language constants
3. Add language option to `LanguageSelector` component

### Styling

The application uses SCSS with a modular approach:

- **Variables**: Define in SCSS variables section
- **Mixins**: Reusable style patterns
- **Components**: Component-specific styles
- **Responsive**: Mobile-first responsive design

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run specific test file
npm run test Dashboard.test.js

# Run tests with coverage
npm run test:coverage
```

### Test Structure

- **Unit Tests**: Component behavior and logic
- **Integration Tests**: Component interaction
- **Snapshot Tests**: UI consistency
- **Async Tests**: API calls and side effects

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | >= 90   |
| Firefox | >= 88   |
| Safari  | >= 14   |
| Edge    | >= 90   |
| Opera   | >= 76   |

## ♿ Accessibility Features

- **WCAG 2.1 AA Compliance**: Meets accessibility standards
- **Screen Reader Support**: Compatible with NVDA, JAWS, VoiceOver
- **Keyboard Navigation**: Full keyboard accessibility
- **High Contrast**: Supports high contrast mode
- **Focus Management**: Proper focus indicators and management
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 🚀 Performance Optimizations

- **Code Splitting**: Dynamic imports for route-based splitting
- **Memoization**: React.memo and useMemo for expensive operations
- **Debouncing**: Search input and API calls
- **Throttling**: Scroll and resize events
- **Image Optimization**: Lazy loading and responsive images
- **Bundle Optimization**: Tree shaking and minification

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
npm run start -- --port 3001
```

**API key errors:**
- Verify API key in `generalConstants.js`
- Check OpenWeatherMap account status
- Ensure API key has proper permissions

**Build failures:**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**SCSS compilation errors:**
- Check syntax in `main.scss`
- Verify SCSS loader configuration
- Clear webpack cache

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow ESLint configuration
- Write tests for new features
- Update documentation
- Follow conventional commit format
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenWeatherMap**: Weather data API
- **React Team**: Amazing framework
- **Redux Team**: State management solution
- **Webpack Team**: Build tool
- **SCSS Team**: CSS preprocessor
- **Jest Team**: Testing framework

## 📞 Support

For support and questions:

- **GitHub Issues**: [Create an issue](https://github.com/dhairyadev26/WeatherForecast/issues)
- **Email**: dhairyadev26@example.com
- **Documentation**: [Wiki](https://github.com/dhairyadev26/WeatherForecast/wiki)

---

**Made with ❤️ by [dhairyadev26](https://github.com/dhairyadev26)**
