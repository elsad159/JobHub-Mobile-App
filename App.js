import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./components/splashScreen";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./navigator/navigation";
import { Provider } from 'react-redux'
import { store } from "./store/store";


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Что-то делаем, чтобы загрузить наше приложение
    setTimeout(() => setLoading(false), 3000); // Временное решение, чтобы увидеть экран загрузки
  }, []);

  return (
    <Provider store={store}>
      {loading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <View style={styles.container}>
            <StatusBar style="auto" />
            <MyTabs />
          </View>
        </NavigationContainer>
      )}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
