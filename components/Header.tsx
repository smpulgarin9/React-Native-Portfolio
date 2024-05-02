import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text style={styles.navbarText}>Company</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    navbar: {
        backgroundColor: 'red',
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navbarText: {
        fontWeight: 'bold'
    }
});

export default Header;