// Login.js

import React from 'react';
import { View, StyleSheet, StatusBar, Modal, Text } from 'react-native';
import {
    Headline,
    Paragraph,
    TextInput,
    Button,
    Snackbar,
    Portal,
} from 'react-native-paper';
import UserModel from '../app/models/UserModel';

const Login = props => {

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    const validateInput = () => {
        let errors = false;

        if (!email || email.length === 0) {
            errors = true;
        }

        if (!password || password.length === 0) {
            errors = true;
        }

        return !errors;
    };

    const authenticateUser = async () => {
        if (validateInput()) {
            setLoading(true);
            const user = new UserModel(email , password);

            try {
                await user.login();
            } catch (errors) {
                setError(errors.message);
                setVisible(true);
                setLoading(false);
                return;
            }
        } else {
            setError('Please fill out all *required fields');
            setVisible(true);
            setLoading(false);
        }
    };

    return (
        <View style={styles.base}>
            <>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            </>

            <View style={styles.header}>
                <Headline style={styles.appTitle}>TodoApp</Headline>
                <Paragraph style={styles.appDesc}>
                    Authenticate with Strapi to access the TodoApp.
                </Paragraph>
            </View>

            <>
                <View style={styles.divider} />
                <TextInput
                    onChangeText={text => setEmail(text)}
                    label="*Username or email"
                    placeholder="*Username or email"
                    value={email}
                >
                </TextInput>
            </>

            <>
                <View style={styles.divider} />
                <TextInput
                    onChangeText={text => setPassword(text)}
                    label="*Password"
                    placeholder="*Password"
                    secureTextEntry
                    value={password}
                >
                </TextInput>
            </>

            <>
                <View style={styles.divider} />
                <Button
                    loading={loading}
                    disabled={loading}
                    style={styles.btn}
                    onPress={() => authenticateUser()}
                    mode="contained">
                    Login
                </Button>
                <View style={styles.divider} />
                <View style={styles.divider} />
            </>

            <>
                {/**
             * We use a portal component to render
             * the snackbar on top of everything else
             * */}
                <Portal>
                    <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
                        {error}
                    </Snackbar>
                </Portal>
            </>
        </View>
    );
};

const styles = StyleSheet.create({
    base: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    divider: {
        height: 16,
    },
    headline: {
        fontSize: 30,
    },
    appDesc: {
        textAlign: 'center',
    },
    header: {
        padding: 32,
    },
    appTitle: {
        textAlign: 'center',
        fontSize: 35,
        lineHeight: 35,
        fontWeight: '700',
    },
    btn: {
        height: 50,
        paddingTop: 6,
    },
});

export default Login;