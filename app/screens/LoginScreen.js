import * as React from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

let Image_Http_URL = { uri: 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-9/512/Login-icon.png' };

import LoginForm from './LoginForm'

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.logoContainer}>
                            <Image style={styles.logo} source={Image_Http_URL} />
                            <Text style={styles.title}>Please inter your email and password to login</Text>
                        </View>
                        <View style={styles.formContainer}>
                            <LoginForm />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

            <View>
                <Text style={styles.createByText}>Create By Foad Haydari</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    logoContainer: {
        padding: 24,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    formContainer: {
        flexGrow: 1,

    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        color: "#FFF",
        textAlign: 'center',
        opacity: 0.7,
        marginTop: 9,
        width: 170
    },
    createByText: {
        textAlign: 'center',
        paddingVertical: 8,
    }
});
