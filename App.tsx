import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from './src/styles/colors';
import Button from './src/componets/Button';
import MyKeyboard from './src/componets/MyKeyboard';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value = {theme} >
      <StatusBar backgroundColor = "#00BCD4" translucent = {true}/>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor : '#000'}]}>
        <StatusBar style={'dark'}/>
        <Switch
          value = {theme === 'light'}
          onChange={() => setTheme(theme ==='light' ? 'dark': 'light')}
        />
        <MyKeyboard/>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
