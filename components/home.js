import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from "./common/button";
import {Image} from "react-native-elements";

interface NavStatelessComponent extends React.StatelessComponent {
  navigationOptions?: Object
}

const HomeScreen: NavStatelessComponent = ({navigation}) => {

  const displayPlayerStats = () => {
    console.log('display stats modal')
  };

  const displayRules = () => {
    console.log('display rules modal')
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image ource={require('../images/home_screen_logo.png')}/>
      </View>

      <View>
        <View>
          <Button disabled={false}
                  onClick={() => navigation.navigate('roster')}
                  styles={{backgroundColor: '#ea651d'}}
                  fontSize={20}
                  text={'Score A Game!'}
                  type={'primary'}/>
        </View>
        <View>
          <Button disabled={false}
                  onClick={displayPlayerStats}
                  styles={{}}
                  fontSize={16}
                  text={'Player Stats'}
                  type={'primary'}/>
          <Button disabled={false}
                  onClick={displayRules}
                  styles={{}}
                  fontSize={16}
                  text={'Rules'}
                  type={'primary'}/>
        </View>
      </View>
    </View>
  )
};

export default HomeScreen;

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
  }
});

HomeScreen.navigationOptions = {};

HomeScreen.propTypes = {
  /*
  ...
  */
};
