# Weather App ☀️🌧️❄️

An immersive and dynamic weather application built with React, Vite, and Material-UI. This app allows users to search for current weather conditions by city and displays a full-screen, animated weather info window with dynamic backgrounds, organized details, and smooth transitions.

---

## ✨ Features

- **Dynamic Weather Search:**  
  🔍 Enter any city name to view live weather details including temperature, humidity, latitude, longitude, and more.

- **Animated User Interface:**  
  🎨 The weather info screen adapts its style based on the current condition:
  - **Clear:** Bright background with a pulsing sun effect. ☀️
  - **Clouds:** Moody overcast theme with sliding cloud animations. ☁️
  - **Rain:** Cool, refreshing tones with falling raindrop animations. 🌧️
  - **Snow:** Frosty gradients perfect for winter weather. ❄️

- **Organized Weather Details:**  
  All the essential details are neatly organized into rows, making the UI professional and classy.

- **Full-Screen Overlay:**  
  When you search for weather, the search panel is replaced by a big, centered weather info window which is full of animations and extra details. Click the **Go Back to Search** button to try another query.

---

## 🚀 Technologies Used

- **React** for building the user interface.
- **Vite** for a fast development and build setup.
- **Material-UI (MUI)** for beautifully styled inputs and buttons.
- **OpenWeatherMap API** for fetching live weather data.

---

## 📥 Installation

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**  
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**  
   Create a `.env` file in the root directory and add your OpenWeatherMap API key:  
   ```properties
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
   *Note: Remove any quotes around the API key.*

4. **Run the Application:**  
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Project Structure

```
weather-app/
├── public/
│   └── index.html
├── src/
│   ├── SearchBox.jsx       // Main component handling weather search and display
│   ├── SearchBox.css       // Custom styles and animations for the app
│   └── App.jsx             // Root component
├── .env                    // Environment variable for API key
├── package.json
└── README.md
```

---

## 💡 Usage

1. **Search for Weather:**  
   Enter a city name using the search panel (🔎) and click **Search**.

2. **View Weather Info:**  
   The app will display a full-screen weather info window featuring:
   - **Temperature:** e.g. `25°C`
   - **Humidity:** e.g. `60%`
   - **Latitude & Longitude:** e.g. `Latitude: 40.7128` and `Longitude: -74.0060`
   - **Weather Condition:** e.g. `Clear` with corresponding animations and icons.
   
3. **Return to Search:**  
   Click the **Go Back to Search** button to return and search for another city.

---

## 🎬 Animations & Dynamic UI

- **Pulsing Sun Animation:**  
  For clear weather, the background features a pulsing sun effect.

- **Sliding Clouds Animation:**  
  For cloudy conditions, sliding clouds appear at the bottom of the weather info window.

- **Falling Raindrops Animation:**  
  For rainy weather, a texture of falling raindrops is animated over the weather info window using a live URL.
  
Customize the animations by editing the `SearchBox.css` file.

---

## Developed by- Dheer N Raijada


---

## 🙏 Acknowledgements

- [OpenWeatherMap API](https://openweathermap.org/) for providing weather data.
- [Material-UI](https://mui.com/) for the UI components.
- Special thanks to the open-source community for inspiration and resources.
