// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "e98ea2051553e4a8f33f31218a26dede";

// export default function App() {
//     return <Loading />;
// }

export default class extends React.Component {
    state = {
        isLoading: true,
    };
    getWeather = async (latitude, longitude) => {
        const {
            data: {
                main: { temp },
                weather,
            },
        } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        this.setState({ isLoading: false, condition: weather[0].main, temp });
        // console.log(weather[0].main);
    };
    getLocation = async () => {
        try {
            // throw Error();
            await Location.requestPermissionsAsync();
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
            // this.setState({ isLoading: false });???????????????????????????????????
            //Send to API and get Weather
            // console.log(location);
        } catch (error) {
            Alert.alert("Can't find your position.", "So sad");
        }
    };
    componentDidMount() {
        this.getLocation();
    }
    render() {
        const { isLoading, temp, condition } = this.state;
        return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
    }
}
