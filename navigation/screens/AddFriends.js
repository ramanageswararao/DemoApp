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
    store.dispatch(addTodo(payload));
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
          placeholder={data == undefined ? 'age' : ''}
          autoCorrect={false}
          autoCapitalize="none"
          value={data?.age.toString()}
          onChangeText={this.handleAge}
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
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    backgroundColor: '#00bfff',
    alignSelf: 'center',
    padding: 10,
    margin: 15,
    height: 40,
  },
});
