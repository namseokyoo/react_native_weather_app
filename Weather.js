import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#108dc7", "#ef8e38"],
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#283c86", "#45a247"],
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient: ["#D3CCE3", "#E9E4F0"],
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#2BC0E4", "#EAECC6"],
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#D7DDE8", "#757F9A"],
        title: "Snow",
        subtitle: "damm",
    },
    Clear: {
        iconName: "white-balance-sunny",
        gradient: ["#F7971E", "#FFD200"],
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#3C3B3F", "#605C3C"],
        title: "fucking cloud",
        subtitle: "damm",
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#8e9eab", "#eef2f3"],
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#8e9eab", "#eef2f3"],
    },
    Dust: {
        iconName: "weather-hazy",
        gradient: ["#8e9eab", "#eef2f3"],
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#8e9eab", "#eef2f3"],
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#8e9eab", "#eef2f3"],
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#8e9eab", "#eef2f3"],
    },
    Squall: {
        iconName: "weather-windy",
        gradient: ["#acb6e5", "#86fde8"],
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#360033", "#0b8793"],
    },
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={100} name={weatherOptions[condition].iconName} color="white" />
                <Text style={styles.temp}>{temp}℃</Text>
                {/* <Text>{condition}</Text> */}
            </View>
            <View style={[styles.halfContainer, styles.textContainer]}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado"]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 40,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontWeight: "600",
        fontSize: 40,
        marginBottom: 10,
    },
    subtitle: {
        fontWeight: "300",
        color: "white",
        fontSize: 20,
    },
    textContainer: {
        paddingHorizontal: 20,
    },
});
