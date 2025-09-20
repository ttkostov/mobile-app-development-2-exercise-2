import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import {Platform} from "react-native";

export const LightTheme = {
    ...MD3LightTheme,
    myOwnProperty: true,
    colors: {
        ...MD3LightTheme.colors,
        primary:
            Platform.select({
                ios: 'black',
                android: 'darkslategray',
                web: 'darkred',
                default: 'darkblue',
            }),
        background: Platform.select({
            ios: 'darkslategray',
            android: 'darkseagreen',
            web:  'chocolate',
            default:  'darkslateblue',
        }),
    },
};

export const DarkTheme = {
    ...MD3LightTheme,
    myOwnProperty: true,
    colors: {
        ...MD3DarkTheme.colors,
        primary:
            Platform.select({
                ios: 'darkslategray',
                android: 'darkseagreen',
                web:  'chocolate',
                default:  'darkslateblue',
            }),
        background: Platform.select({
            ios: 'black',
            android: 'darkslategray',
            web: 'darkred',
            default: 'darkblue',
        }),
    },
};