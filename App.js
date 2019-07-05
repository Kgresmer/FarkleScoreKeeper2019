import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from "./components/home";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Store>
                <AppContainer/>
            </Store>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        existing: { screen: ExistingPlayersScreen},
        home: { screen: HomeScreen},
        roster: { screen: RosterScreen},
        order: { screen: PlayerOrderScreen},
        scoreboard: { screen: ScoreboardScreen}
    },
    {
        initialRouteName: "home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#3185cd'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                textAlign: 'center',
                flex: 1
            }
        }
    }
);

const AppContainer = createAppContainer(AppNavigator);
