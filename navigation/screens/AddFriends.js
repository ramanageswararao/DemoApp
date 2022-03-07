import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import {store} from '../store';
import {addTodo} from '../actions';
import axios from 'axios';

class AddFriendsScreen extends Component {
  state = {
    firstName: '',
    lastName: '',
    age: '',
  };

  handleFirstName = text => {
    this.setState({firstName: text});
  };
  handleSecondName = text => {
    this.setState({lastName: text});
  };
  handleAge = text => {
    this.setState({age: text});
  };

  login = (firstName, lastName, age) => {
    // const netInfo = useNetInfo();

    const payload = [
      {
        attributes: {
          type: 'Friend__c',
        },
        Name: 'FR-00002',
        First_Name__c: firstName,
        Last_Name__c: lastName,
        Age__c: age,
      },
    ];
    //store.dispatch(addTodo(payload));
    axios.post(
      'https://rnapp-mock-developer-edition.ap24.force.com/assignment1visualforce/services/apexrest/apiservice',
      payload,
    );
    Alert.alert('Success', 'Added user successsfully');
  };

  render() {
    if (this.props.navigation.getState().routes[1].params !== undefined) {
      var data = this.props.navigation.getState().routes[1].params.data;
    } else {
      var data = undefined;
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={data == undefined ? 'First Name' : ''}
          autoCorrect={false}
          autoCapitalize="none"
          value={data?.firstName}
          onChangeText={this.handleFirstName}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={data == undefined ? 'Last Name' : ''}
          autoCorrect={false}
          autoCapitalize="none"
          value={data?.lastName}
          onChangeText={this.handleSecondName}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={data == undefined ? 'Age' : ''}
          autoCorrect={false}
          autoCapitalize="none"
          value={data?.age.toString()}
          onChangeText={this.handleAge}
          keyboardType="numeric"
        />

        <Button
          title={'Submit'}
          onPress={() =>
            this.login(
              this.state.firstName,
              this.state.lastName,
              this.state.age,
            )
          }></Button>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}
export default connect(mapStateToProps)(AddFriendsScreen);

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    marginHorizontal: 16,
  },
  input: {
    margin: 15,
    height: 50,
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 20,
  },
});
