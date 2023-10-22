import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useNavigation } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
const React = require('react');
const CustomHeader = require('../components/CustomHeader');
const Tab = createBottomTabNavigator();


export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: 'index',
};

export default function RootLayoutNav() {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();

    colorScheme;

    return (
        // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <NavigationContainer>
            {/* <BottomTab /> */}
            <Stack>
                <Stack.Screen name="index" options={{
                    header: () => <CustomHeader />
                }} />
            </Stack>
        </NavigationContainer>

        // </ThemeProvider>
    );
}
