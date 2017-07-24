import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Row></Row>
          <Row>
        <Text>Welcome to Our App</Text>
        <Text>Create your to-do list to generate points</Text>
        <Text>Use your points to defeat the monster!</Text>
        </Row>
        <Row>
          <Row>
        <Button onPress={()=>{}} title="Sign Up" />
          </Row>
          <Row>
        <Button style={styles.buttons} onPress={()=>{}} title="Sign In" />
          </Row>
          </Row>
          </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10'
  }
});
