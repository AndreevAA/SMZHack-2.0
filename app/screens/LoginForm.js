import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';


export default function LoginForm() {
    return (
        <View behavior="padding" style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TextInput
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255,0.8)"
                keyboardType="email-address"
                style={styles.input}
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.8)"
                style={styles.input}
                secureTextEntry
                returnKeyType="login"
                ref={(input) => this.passwordInput = input}
            />
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.button}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.linksContainer}>
                <Text style={styles.links}>Create account</Text>
                <Text style={styles.links}> | </Text>
                <Text style={styles.links}>Forget password</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        backgroundColor: "rgba(255,255,255,0.3)",
        color: 'rgba(255,255,255,0.8)',
        marginBottom: 5,
        height: 50,
        paddingHorizontal: 8,
        borderRadius: 4
    },
    buttonContainer: {
        backgroundColor: "#1f3a93",
        paddingVertical: 18,
        borderRadius: 4

    },
    button: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
    },
    linksContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 5
    },
    links: {
        color: '#FFF',
    }
});
