import Colors from '@/constants/Colors';
import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Page = () => {
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
        backgroundColor: Colors.main.white
    }
})

export default Page;