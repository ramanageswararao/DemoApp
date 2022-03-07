import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {getUsers} from '../actions';

const FriendsScreen = ({users, getUsers, navigation}) => {
  useEffect(() => {
    getUsers();
  }, [users]);

  if (users === undefined) {
    return (
      <ActivityIndicator
        style={styles.activityIndicator}
        color={'blue'}
        size="large"
      />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.Id}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddFriends', {data: item})}>
              <View style={styles.container1}>
                <Image
                  source={{
                    url: 'https://randomuser.me/api/portraits/men/10.jpg',
                  }}
                  style={styles.image}
                />
                <View style={styles.infoStyle}>
                  <Text style={styles.titleStyle}>
                    {item.firstName} {item.lastName}
                  </Text>
                  <Text style={styles.bodyTextStyle}>
                    {'Age:'}
                    {item.age}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={[
                styles.viewStyleForLine,
                {borderBottomColor: 'black' + '75'},
              ]}
            />
          </View>
        )}
        style={styles.list}
      />

      <Button
        title={'Add New Friend'}
        onPress={() => navigation.navigate('AddFriends')}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    padding: 10,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginLeft: 25,
    marginTop: 25,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 35,
    marginRight: 10,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  activityIndicator: {
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewStyleForLine: {
    marginVertical: 10,
    marginHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  titleStyle: {
    color: 'black',
    fontSize: 20,
  },
  bodyTextStyle: {
    color: 'black',
    fontSize: 14,
  },
  infoStyle: {
    marginHorizontal: 50,
    marginVertical: 1,
  },
  submitButton: {
    padding: 10,
    marginVertical: 30,
    height: 40,
  },
});

const mapStateToProps = ({users}) => ({users});

export default connect(mapStateToProps, {getUsers})(FriendsScreen);
