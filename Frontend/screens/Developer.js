import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Developer = ({navigation}) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Header}>Developers</Text>
            <Text style={styles.Development}>Frontend</Text>
            <Text style={styles.Details}>Shahiru Roshen - Infromatics Institue of Technology</Text>
            <Text style={styles.Development}>Backend</Text>
            <Text style={styles.Details}>Sithija Nimsara - Infromatics Institue of Technology</Text>
            <Text style={styles.Details}>Shane Pramod - Infromatics Institue of Technology</Text>
            <Text style={styles.Development}>Data Science</Text>
            <Text style={styles.Details}>Sandukith Amantha - Infromatics Institue of Technology</Text>
            <Text style={styles.Details}>Gayantha Chamith - Infromatics Institue of Technology</Text>
            <Text style={styles.Team}>©TEXIX</Text>
        </View>
    )
}

export default Developer;

const styles = StyleSheet.create ({

    Container: {
        backgroundColor: '#edc7b7',
        flex: 1,
        padding: 20,
    },

    Header: {
        fontSize: 26,
        fontWeight: 'bold',
    },

    Development: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    Details: {
        fontSize: 14,
    },

    Team: {
        fontSize: 15,
        fontWeight: '900',
        textAlign: 'center',
        marginTop: 20
    },


})