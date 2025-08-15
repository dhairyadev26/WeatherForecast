# 5-Day Weather Forecast

A modern, responsive application to display 5-day weather forecasts using the OpenWeatherMap API. This project provides an intuitive interface for viewing weather forecasts with multiple features including dark mode, language localization, and accessibility support.

![Weather Forecast App Screenshot](https://image.ibb.co/g69ZDx/682111_cloud_512x512.png)

## Features

- 📱 Responsive design that works on all screen sizes
- 🌓 Dark mode support for comfortable viewing
- 🌍 Localization support (English, Spanish, French, German, Chinese)
- ♿ Accessibility optimized for screen readers
- 📍 Geolocation to automatically detect user location
- 🔍 Search functionality with recent location history
- 📊 Detailed hourly forecast information
- 🔄 Weather alerts and notifications
- 🔁 Unit toggle between Celsius and Fahrenheit
- ⚡ Performance optimized with memoization and debouncing

## Live Demo

Visit the live demo at: https://www.gigacore.in/demos/react-weather-forecast/

## Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher

## Installation

```bash
# Clone the repository
git clone https://github.com/dhairyadev26/WeatherForecast.git

# Navigate to the project directory
cd WeatherForecast

# Install dependencies
npm install
```

## Development

```bash
# Start the development server
npm run start:dev
```

The application will be available at `http://localhost:8080` by default.

## Building for Production

```bash
# Create a production build
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage
```

## Project Structure

```
WeatherForecast/
├── src/                  # Source files
│   ├── actions/          # Redux actions
│   ├── components/       # React components
│   ├── constants/        # Constants and configuration
│   ├── reducers/         # Redux reducers
│   ├── styles/           # SCSS stylesheets
│   ├── test/             # Test files
│   ├── utils/            # Utility functions
│   ├── App.js            # Main App component
│   ├── index.js          # Entry point
│   └── store.js          # Redux store configuration
├── dist/                 # Compiled files
├── webpack.config.js     # Webpack configuration
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## Technologies

- **Frontend Framework**: React.js
- **State Management**: Redux
- **Styling**: SCSS/SASS
- **Build Tool**: Webpack
- **Testing**: Jest & Enzyme
- **Language**: JavaScript (ES6+)

## Accessibility

This application follows WCAG 2.1 guidelines for accessibility:

- Proper semantic HTML structure
- ARIA attributes for interactive elements
- Keyboard navigation support
- Screen reader friendly content
- Color contrast compliance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenWeatherMap API for weather data
- Icons provided by [Weather Icons](https://erikflowers.github.io/weather-icons/)
- Original starter kit by [Gigacore](https://github.com/Gigacore)
