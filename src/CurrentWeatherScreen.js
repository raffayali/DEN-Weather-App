import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Make sure you've installed expo-linear-gradient
import { fetchWeather } from './api';

const WeatherScreen = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError('Error fetching weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#4facfe', '#00f2fe']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Weather App</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          value={city}
          onChangeText={setCity}
        />
        <Button title="Get Weather" onPress={getWeather} color="blue" />
        {loading && <ActivityIndicator size="large" color="#fff" style={styles.loader} />}
        
        {weather && (
          <View style={styles.weatherContainer}>
            <Text style={styles.weatherText}>City: {weather.name}</Text>
            <Text style={styles.weatherText}>Temperature: {weather.main.temp}°C</Text>
            <Text style={styles.weatherText}>Weather: {weather.weather[0].description}</Text>
            <Text style={styles.weatherText}>Humidity: {weather.main.humidity}%</Text>
            <Text style={styles.weatherText}>Wind Speed: {weather.wind.speed} km/h</Text>
          </View>
        )}
        
        {error && <Text style={styles.error}>{error}</Text>}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  weatherContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  weatherText: {
    fontSize: 18,
    marginVertical: 5,
    color: '#333',
  },
  error: {
    color: 'red',
    marginTop: 20,
    textAlign: 'center',
  },
  loader: {
    marginVertical: 20,
  },
});

export default WeatherScreen;
