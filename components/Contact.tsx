import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const Contact: React.FC = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.content}>Contact</Text>
            <Text style={styles.content}>
                {/* add a simple form */}
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Message:
                        <input type="text" name="message" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        textAlign: 'center',
        padding: 10,
    }
});

export default Contact;