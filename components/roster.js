import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DisplayRecentPic from "./display-recent-pic";

interface NavStatelessComponent extends React.StatelessComponent {
    navigationOptions?: Object
}

const RosterScreen: NavStatelessComponent = ({ navigation }) => {

    return (
        <View style={styles.container}>

            {/*List of people*/}

            <View>
                <View>
                    <TouchableOpacity style={styles.buttonContainer}
                                      onPress={() => navigation.navigate('list')}>
                        <Text style={styles.buttonText}>Add Existing Player</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}
                                      onPress={() => navigation.navigate('list')}>
                        <Text style={styles.buttonText}>Add New Player</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => navigation.navigate('list')}>
                    <Text style={styles.buttonText}>Ready!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default RosterScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'blue'
    },
    buttonContainer: {
        backgroundColor: '#3185cd',
        padding: 8,
        margin: 8,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

HomeScreen.navigationOptions = {
    title: 'Fill Your Roster',
    headerRight: <View />
};

HomeScreen.propTypes = {
    /*
    ...
    */
};



