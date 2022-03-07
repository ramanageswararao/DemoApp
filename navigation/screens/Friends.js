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
//import UserIcon from 'react-native-vector-icons/dist/FontAwesome';

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
          <TouchableOpacity
            onPress={() => navigation.navigate('AddFriends', {data: item})}>
            <View style={styles.container1}>
              <Image
                source={{url: 'https://randomuser.me/api/portraits/men/10.jpg'}}
                style={styles.image}
              />
              {/* <UserIcon name={'user'} size={26} color={'black'}></UserIcon> */}
              {/* //hello */}
              <View>
                <Text style={styles.heading}>
                  {item.firstName} {item.lastName}
                </Text>
                <Text></Text>
                <Text>
                  {'Age:'}
                  {item.age}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
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
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  actionableContainerDivider: {
    borderTopWidth: 0.5,
    marginRight: -20,
    marginLeft: -20,
    marginBottom: 10,
    marginTop: -15,
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
});

const mapStateToProps = ({users}) => ({users});

export default connect(mapStateToProps, {getUsers})(FriendsScreen);
