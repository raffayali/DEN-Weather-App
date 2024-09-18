import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { fetchForecast } from './api';

const ForecastScreen = () => {
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getForecast = async () => {
    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await fetchForecast(city);
      setForecast(data);
    } catch (err) {
      setError('Error fetching forecast data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>7-Day Weather Forecast</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Forecast" onPress={getForecast} />
      {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />}
      {forecast && (
        <View style={styles.forecastContainer}>
          {forecast.list.map((day, index) => (
            <View key={index} style={styles.forecastCard}>
              <Text style={styles.forecastText}>Date: {new Date(day.dt * 1000).toLocaleDateString()}</Text>
              <Text style={styles.forecastText}>Temperature: {day.temp.day}°C</Text>
              <Text style={styles.forecastText}>Weather: {day.weather[0].description}</Text>
              <Text style={styles.forecastText}>Humidity: {day.humidity}%</Text>
              <Text style={styles.forecastText}>Wind Speed: {day.speed} km/h</Text>
            </View>
          ))}
        </View>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  forecastContainer: {
    marginTop: 20,
  },
  forecastCard: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 10,
  },
  forecastText: {
    fontSize: 16,
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

export default ForecastScreen;
