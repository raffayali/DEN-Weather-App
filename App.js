

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import WeatherScreen from './src/WeatherScreen';
// import ForecastScreen from './src/ForecastScreen';
// import SplashScreen from './src/SplashScreen';
// import WeatherScreen from './src/WeatherScreen';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="SplashScreen" component={SplashScreen} />
//         <Stack.Screen name="Weather" component={WeatherScreen} />
//         <Stack.Screen name="Forecast" component={ForecastScreen} />
//         <Stack.Screen name="CurrentWeather" component={CurrentWeatherScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CurrentWeatherScreen from './src/CurrentWeatherScreen';
import ForecastScreen from './src/ForecastScreen';
import SplashScreen from './src/SplashScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="CurrentWeather" component={CurrentWeatherScreen} />
        <Stack.Screen name="Forecast" component={ForecastScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
