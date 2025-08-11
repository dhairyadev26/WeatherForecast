/**
 * Localization constants and utilities
 */

// Supported languages
export const LANGUAGES = {
  EN: 'en',
  ES: 'es',
  FR: 'fr',
  DE: 'de',
  ZH: 'zh'
};

// Language display names
export const LANGUAGE_NAMES = {
  [LANGUAGES.EN]: 'English',
  [LANGUAGES.ES]: 'Español',
  [LANGUAGES.FR]: 'Français',
  [LANGUAGES.DE]: 'Deutsch',
  [LANGUAGES.ZH]: '中文'
};

// Default language
export const DEFAULT_LANGUAGE = LANGUAGES.EN;

// Weather descriptions
export const WEATHER_DESCRIPTIONS = {
  [LANGUAGES.EN]: {
    'clear sky': 'Clear sky',
    'few clouds': 'Few clouds',
    'scattered clouds': 'Scattered clouds',
    'broken clouds': 'Broken clouds',
    'shower rain': 'Shower rain',
    'rain': 'Rain',
    'thunderstorm': 'Thunderstorm',
    'snow': 'Snow',
    'mist': 'Mist',
    'overcast clouds': 'Overcast clouds',
    'light rain': 'Light rain',
    'moderate rain': 'Moderate rain',
    'heavy intensity rain': 'Heavy rain',
    'very heavy rain': 'Very heavy rain',
    'extreme rain': 'Extreme rain',
    'freezing rain': 'Freezing rain',
    'light snow': 'Light snow',
    'heavy snow': 'Heavy snow',
    'sleet': 'Sleet',
    'shower sleet': 'Shower sleet',
    'light shower snow': 'Light shower snow',
    'heavy shower snow': 'Heavy shower snow',
    'light intensity drizzle': 'Light drizzle',
    'drizzle': 'Drizzle',
    'heavy intensity drizzle': 'Heavy drizzle',
    'light intensity shower rain': 'Light shower rain',
    'heavy intensity shower rain': 'Heavy shower rain',
    'ragged shower rain': 'Ragged shower rain',
    'light thunderstorm': 'Light thunderstorm',
    'heavy thunderstorm': 'Heavy thunderstorm',
    'ragged thunderstorm': 'Ragged thunderstorm',
    'thunderstorm with light rain': 'Thunderstorm with light rain',
    'thunderstorm with rain': 'Thunderstorm with rain',
    'thunderstorm with heavy rain': 'Thunderstorm with heavy rain'
  },
  [LANGUAGES.ES]: {
    'clear sky': 'Cielo despejado',
    'few clouds': 'Pocas nubes',
    'scattered clouds': 'Nubes dispersas',
    'broken clouds': 'Nubes rotas',
    'shower rain': 'Lluvia',
    'rain': 'Lluvia',
    'thunderstorm': 'Tormenta',
    'snow': 'Nieve',
    'mist': 'Niebla',
    'overcast clouds': 'Nublado',
    'light rain': 'Lluvia ligera',
    'moderate rain': 'Lluvia moderada',
    'heavy intensity rain': 'Lluvia intensa',
    'very heavy rain': 'Lluvia muy intensa',
    'extreme rain': 'Lluvia extrema',
    'freezing rain': 'Lluvia helada',
    'light snow': 'Nieve ligera',
    'heavy snow': 'Nieve intensa',
    'sleet': 'Aguanieve',
    'shower sleet': 'Aguanieve',
    'light shower snow': 'Nieve ligera',
    'heavy shower snow': 'Nieve intensa',
    'light intensity drizzle': 'Llovizna ligera',
    'drizzle': 'Llovizna',
    'heavy intensity drizzle': 'Llovizna intensa',
    'light intensity shower rain': 'Lluvia ligera',
    'heavy intensity shower rain': 'Lluvia intensa',
    'ragged shower rain': 'Lluvia irregular',
    'light thunderstorm': 'Tormenta ligera',
    'heavy thunderstorm': 'Tormenta intensa',
    'ragged thunderstorm': 'Tormenta irregular',
    'thunderstorm with light rain': 'Tormenta con lluvia ligera',
    'thunderstorm with rain': 'Tormenta con lluvia',
    'thunderstorm with heavy rain': 'Tormenta con lluvia intensa'
  },
  [LANGUAGES.FR]: {
    'clear sky': 'Ciel dégagé',
    'few clouds': 'Quelques nuages',
    'scattered clouds': 'Nuages épars',
    'broken clouds': 'Nuages fragmentés',
    'shower rain': 'Averse',
    'rain': 'Pluie',
    'thunderstorm': 'Orage',
    'snow': 'Neige',
    'mist': 'Brume',
    'overcast clouds': 'Ciel couvert',
    'light rain': 'Pluie légère',
    'moderate rain': 'Pluie modérée',
    'heavy intensity rain': 'Pluie forte',
    'very heavy rain': 'Pluie très forte',
    'extreme rain': 'Pluie extrême',
    'freezing rain': 'Pluie verglaçante',
    'light snow': 'Neige légère',
    'heavy snow': 'Neige forte',
    'sleet': 'Grésil',
    'shower sleet': 'Averse de grésil',
    'light shower snow': 'Légère averse de neige',
    'heavy shower snow': 'Forte averse de neige',
    'light intensity drizzle': 'Bruine légère',
    'drizzle': 'Bruine',
    'heavy intensity drizzle': 'Bruine forte',
    'light intensity shower rain': 'Averse légère',
    'heavy intensity shower rain': 'Averse forte',
    'ragged shower rain': 'Averse irrégulière',
    'light thunderstorm': 'Orage léger',
    'heavy thunderstorm': 'Orage fort',
    'ragged thunderstorm': 'Orage irrégulier',
    'thunderstorm with light rain': 'Orage avec pluie légère',
    'thunderstorm with rain': 'Orage avec pluie',
    'thunderstorm with heavy rain': 'Orage avec pluie forte'
  },
  [LANGUAGES.DE]: {
    'clear sky': 'Klarer Himmel',
    'few clouds': 'Wenige Wolken',
    'scattered clouds': 'Vereinzelte Wolken',
    'broken clouds': 'Aufgelockerte Bewölkung',
    'shower rain': 'Schauerregen',
    'rain': 'Regen',
    'thunderstorm': 'Gewitter',
    'snow': 'Schnee',
    'mist': 'Nebel',
    'overcast clouds': 'Bedeckt',
    'light rain': 'Leichter Regen',
    'moderate rain': 'Mäßiger Regen',
    'heavy intensity rain': 'Starker Regen',
    'very heavy rain': 'Sehr starker Regen',
    'extreme rain': 'Extremer Regen',
    'freezing rain': 'Gefrierender Regen',
    'light snow': 'Leichter Schneefall',
    'heavy snow': 'Starker Schneefall',
    'sleet': 'Schneeregen',
    'shower sleet': 'Schauer Schneeregen',
    'light shower snow': 'Leichte Schneeschauer',
    'heavy shower snow': 'Starke Schneeschauer',
    'light intensity drizzle': 'Leichter Nieselregen',
    'drizzle': 'Nieselregen',
    'heavy intensity drizzle': 'Starker Nieselregen',
    'light intensity shower rain': 'Leichte Regenschauer',
    'heavy intensity shower rain': 'Starke Regenschauer',
    'ragged shower rain': 'Unregelmäßige Regenschauer',
    'light thunderstorm': 'Leichtes Gewitter',
    'heavy thunderstorm': 'Starkes Gewitter',
    'ragged thunderstorm': 'Unregelmäßiges Gewitter',
    'thunderstorm with light rain': 'Gewitter mit leichtem Regen',
    'thunderstorm with rain': 'Gewitter mit Regen',
    'thunderstorm with heavy rain': 'Gewitter mit starkem Regen'
  },
  [LANGUAGES.ZH]: {
    'clear sky': '晴天',
    'few clouds': '少云',
    'scattered clouds': '疏云',
    'broken clouds': '碎云',
    'shower rain': '阵雨',
    'rain': '雨',
    'thunderstorm': '雷暴',
    'snow': '雪',
    'mist': '薄雾',
    'overcast clouds': '阴天',
    'light rain': '小雨',
    'moderate rain': '中雨',
    'heavy intensity rain': '大雨',
    'very heavy rain': '暴雨',
    'extreme rain': '特大暴雨',
    'freezing rain': '冻雨',
    'light snow': '小雪',
    'heavy snow': '大雪',
    'sleet': '雨夹雪',
    'shower sleet': '阵雨夹雪',
    'light shower snow': '小阵雪',
    'heavy shower snow': '大阵雪',
    'light intensity drizzle': '小毛毛雨',
    'drizzle': '毛毛雨',
    'heavy intensity drizzle': '强毛毛雨',
    'light intensity shower rain': '小阵雨',
    'heavy intensity shower rain': '强阵雨',
    'ragged shower rain': '不规则阵雨',
    'light thunderstorm': '小雷暴',
    'heavy thunderstorm': '强雷暴',
    'ragged thunderstorm': '不规则雷暴',
    'thunderstorm with light rain': '雷阵雨',
    'thunderstorm with rain': '雷阵雨',
    'thunderstorm with heavy rain': '强雷阵雨'
  }
};

// UI text translations
export const UI_TEXT = {
  [LANGUAGES.EN]: {
    searchPlaceholder: 'Enter city name',
    searchButton: 'Search',
    recentLocations: 'Recent locations',
    useCurrentLocation: 'Use my location',
    loading: 'Loading...',
    error: 'Error',
    networkError: 'Network error. Please check your connection.',
    locationNotFound: 'Location not found. Please try another search.',
    permissionDenied: 'Location permission denied.',
    temperatureUnit: 'Temperature unit',
    celsius: 'Celsius',
    fahrenheit: 'Fahrenheit',
    humidity: 'Humidity',
    pressure: 'Pressure',
    windSpeed: 'Wind speed',
    sunrise: 'Sunrise',
    sunset: 'Sunset',
    feelsLike: 'Feels like',
    language: 'Language',
    theme: 'Theme',
    lightTheme: 'Light',
    darkTheme: 'Dark',
    day: 'Day',
    time: 'Time',
    description: 'Description',
    temperature: 'Temperature',
    min: 'Min',
    max: 'Max',
    alerts: 'Weather Alerts',
    dismiss: 'Dismiss',
    notification: 'Notification'
  },
  [LANGUAGES.ES]: {
    searchPlaceholder: 'Ingrese nombre de la ciudad',
    searchButton: 'Buscar',
    recentLocations: 'Ubicaciones recientes',
    useCurrentLocation: 'Usar mi ubicación',
    loading: 'Cargando...',
    error: 'Error',
    networkError: 'Error de red. Verifique su conexión.',
    locationNotFound: 'Ubicación no encontrada. Intente otra búsqueda.',
    permissionDenied: 'Permiso de ubicación denegado.',
    temperatureUnit: 'Unidad de temperatura',
    celsius: 'Celsius',
    fahrenheit: 'Fahrenheit',
    humidity: 'Humedad',
    pressure: 'Presión',
    windSpeed: 'Velocidad del viento',
    sunrise: 'Amanecer',
    sunset: 'Atardecer',
    feelsLike: 'Sensación térmica',
    language: 'Idioma',
    theme: 'Tema',
    lightTheme: 'Claro',
    darkTheme: 'Oscuro',
    day: 'Día',
    time: 'Hora',
    description: 'Descripción',
    temperature: 'Temperatura',
    min: 'Mín',
    max: 'Máx',
    alerts: 'Alertas Meteorológicas',
    dismiss: 'Descartar',
    notification: 'Notificación'
  },
  [LANGUAGES.FR]: {
    searchPlaceholder: 'Entrez le nom de la ville',
    searchButton: 'Rechercher',
    recentLocations: 'Emplacements récents',
    useCurrentLocation: 'Utiliser ma position',
    loading: 'Chargement...',
    error: 'Erreur',
    networkError: 'Erreur réseau. Veuillez vérifier votre connexion.',
    locationNotFound: 'Emplacement non trouvé. Veuillez essayer une autre recherche.',
    permissionDenied: 'Permission de localisation refusée.',
    temperatureUnit: 'Unité de température',
    celsius: 'Celsius',
    fahrenheit: 'Fahrenheit',
    humidity: 'Humidité',
    pressure: 'Pression',
    windSpeed: 'Vitesse du vent',
    sunrise: 'Lever du soleil',
    sunset: 'Coucher du soleil',
    feelsLike: 'Ressenti',
    language: 'Langue',
    theme: 'Thème',
    lightTheme: 'Clair',
    darkTheme: 'Sombre',
    day: 'Jour',
    time: 'Heure',
    description: 'Description',
    temperature: 'Température',
    min: 'Min',
    max: 'Max',
    alerts: 'Alertes Météo',
    dismiss: 'Fermer',
    notification: 'Notification'
  },
  [LANGUAGES.DE]: {
    searchPlaceholder: 'Stadtname eingeben',
    searchButton: 'Suchen',
    recentLocations: 'Letzte Standorte',
    useCurrentLocation: 'Meinen Standort verwenden',
    loading: 'Laden...',
    error: 'Fehler',
    networkError: 'Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.',
    locationNotFound: 'Standort nicht gefunden. Bitte versuchen Sie eine andere Suche.',
    permissionDenied: 'Standortberechtigung verweigert.',
    temperatureUnit: 'Temperatureinheit',
    celsius: 'Celsius',
    fahrenheit: 'Fahrenheit',
    humidity: 'Luftfeuchtigkeit',
    pressure: 'Luftdruck',
    windSpeed: 'Windgeschwindigkeit',
    sunrise: 'Sonnenaufgang',
    sunset: 'Sonnenuntergang',
    feelsLike: 'Gefühlt',
    language: 'Sprache',
    theme: 'Thema',
    lightTheme: 'Hell',
    darkTheme: 'Dunkel',
    day: 'Tag',
    time: 'Zeit',
    description: 'Beschreibung',
    temperature: 'Temperatur',
    min: 'Min',
    max: 'Max',
    alerts: 'Wetterwarnungen',
    dismiss: 'Schließen',
    notification: 'Benachrichtigung'
  },
  [LANGUAGES.ZH]: {
    searchPlaceholder: '输入城市名称',
    searchButton: '搜索',
    recentLocations: '最近位置',
    useCurrentLocation: '使用我的位置',
    loading: '加载中...',
    error: '错误',
    networkError: '网络错误。请检查您的连接。',
    locationNotFound: '找不到位置。请尝试其他搜索。',
    permissionDenied: '位置权限被拒绝。',
    temperatureUnit: '温度单位',
    celsius: '摄氏度',
    fahrenheit: '华氏度',
    humidity: '湿度',
    pressure: '气压',
    windSpeed: '风速',
    sunrise: '日出',
    sunset: '日落',
    feelsLike: '体感温度',
    language: '语言',
    theme: '主题',
    lightTheme: '浅色',
    darkTheme: '深色',
    day: '日期',
    time: '时间',
    description: '描述',
    temperature: '温度',
    min: '最低',
    max: '最高',
    alerts: '天气预警',
    dismiss: '关闭',
    notification: '通知'
  }
};

// Days of week
export const DAYS_OF_WEEK = {
  [LANGUAGES.EN]: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  [LANGUAGES.ES]: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  [LANGUAGES.FR]: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  [LANGUAGES.DE]: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  [LANGUAGES.ZH]: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
};

/**
 * Translates a weather description to the current language
 * @param {string} description - The weather description to translate
 * @param {string} lang - The language code to translate to
 * @returns {string} - The translated description
 */
export const translateWeatherDescription = (description, lang = DEFAULT_LANGUAGE) => {
  if (!description) return '';
  
  const lowercased = description.toLowerCase();
  const translations = WEATHER_DESCRIPTIONS[lang] || WEATHER_DESCRIPTIONS[DEFAULT_LANGUAGE];
  
  return translations[lowercased] || description;
};

/**
 * Gets UI text for the current language
 * @param {string} key - The UI text key
 * @param {string} lang - The language code
 * @returns {string} - The translated text
 */
export const getText = (key, lang = DEFAULT_LANGUAGE) => {
  if (!key) return '';
  
  const texts = UI_TEXT[lang] || UI_TEXT[DEFAULT_LANGUAGE];
  return texts[key] || key;
};

/**
 * Gets the day name for the given date
 * @param {Date|number} date - The date or timestamp
 * @param {string} lang - The language code
 * @returns {string} - The translated day name
 */
export const getDayName = (date, lang = DEFAULT_LANGUAGE) => {
  const dayIndex = typeof date === 'number' ? 
    new Date(date * 1000).getDay() : date.getDay();
  
  const days = DAYS_OF_WEEK[lang] || DAYS_OF_WEEK[DEFAULT_LANGUAGE];
  return days[dayIndex];
};
