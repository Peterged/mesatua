import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useNavigation } from 'expo-router';
import { useColorScheme } from 'react-native';
import React from 'react';
import CustomHeader from '@/components/CustomHeader';


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
        <Stack>
            <Stack.Screen name="index" options={{
                header: () => <CustomHeader />
            }} />
        </Stack>
        // </ThemeProvider>
    );
}
