const Colors = require('../constants/Colors');
const React = require('react');
import { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Page = () => {
    const [historyExists, setHistoryExists] = useState<string>('');

    useEffect(() => {
        
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text>Development</Text>
            <Text>Development</Text>
            <Text>Development</Text>
            <Text>Development</Text>
            <Text>Development</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 50,
        backgroundColor: Colors.Colors.main.white
    }
})

export default Page;
