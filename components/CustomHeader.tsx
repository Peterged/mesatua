const React = require('react');
import { Ionicons } from '@expo/vector-icons';


import {
    Text,
    Image,
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';

const CustomHeader = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image style={styles.headerLogo} source={require('../assets/images/black-zow-logo.png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons name='notifications' size={25} color={Colors.main.black} />
                </TouchableOpacity>
            </View>
            <StatusBar  />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: 20
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerLogo: {
        width: 90,
        height: 25
    },
})

export default CustomHeader;
