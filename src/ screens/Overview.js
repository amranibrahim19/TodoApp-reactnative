import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const Overview = props => {
    return (
        <View style={styles.base}>
            <Text style={styles.text}>Overview</Text>
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

export default Overview;