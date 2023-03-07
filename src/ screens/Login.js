import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const Login = props => {
    return (
        <View style={styles.base}>
            <Text style={styles.text}>Login</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    base: {
        flex: 1,
        alignContent: 'center',
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
    }
});

export default Login;