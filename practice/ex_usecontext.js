import React, { createContext, useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={{ padding: 20, backgroundColor: theme === 'light' ? '#fff' : '#333' }}>
      <Text style={{ color: theme === 'light' ? '#000' : '#fff' }}>Current theme: {theme}</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

const AppContext = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);

export default AppContext;
