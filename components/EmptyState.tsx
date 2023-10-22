const React = require('react');

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

type EmptyStateType = {
    type: 'history' | 'session' | 'commands',
    margin: number,
    position: 'bottom' | 'top'
}

const EmptyState: React.FC<EmptyStateType> = ({ type, margin, position }) => {
    return (
        <View style={[styles.container, { margin: margin, }]}>
            <Image source={{ uri:  }} alt={type} />
            {/* Message Text */}
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0
    }
})

export default EmptyState;
