import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Image,
  Pressable,
  ScrollView
} from 'react-native';
import Constants from 'expo-constants';

const getprofileData = () => [
  { name: 'Profile', icon: '../assets/catsdogs/cat1.jpg' },
  { name: 'Notification', icon: '../assets/catsdogs/cat1.jpg' },
  { name: 'My Order', icon: '../assets/catsdogs/cat1.jpg' },
  { name: 'Payment', icon: '../assets/catsdogs/cat1.jpg' },
  { name: 'Address', icon: '../assets/catsdogs/cat1.jpg' },
  { name: 'Favourite', icon: '../assets/catsdogs/cat1.jpg' },
  { name: 'Language', icon: '../assets/catsdogs/cat1.jpg' },
  { name: 'Setting', icon: '../assets/catsdogs/cat1.jpg' },
];

function Renderlist({ item }) {
  return (
    <Pressable>
      <View
        style={{
          flexDirection: 'row',
          paddingBottom: 10,
          paddingLeft: 10,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'left',
            alignItems: 'Center',
          }}>
          <Image
            style={{ height: 40, width: 40 }}
            source={require('../assets/Myaccount/Frame47.png')}
          />
          <Text style={{ fontFamily: 'arial', fontSize: 17, paddingLeft: 15 }}>
            {item.name}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'Left' }}>
          <Image
            style={{ height: 12, width: 12, left: 120, alignItems: 'Center' }}
            source={require('../assets/Myaccount/arrow.svg')}
          />
        </View>
      </View>
    </Pressable>
  );
}

export default function Myaccount() {
  const myData = getprofileData();
  return (
     <ScrollView>
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
          position: 'absolute',
          top: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius:1
        }}>
        <View>
          {' '}
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'arial',
              paddingBottom: 10,
            }}>
            My Account
          </Text>
        </View>
        <View>
          {' '}
          <Image
            style={{ height: 70, width: 70 }}
            source={require('../assets/Myaccount/Profileimage.png')}
          />
        </View>
        <View>
          {' '}
          <Text style={{ color: 'white', fontSize: 15, fontFamily: 'arial' }}>
            {' '}
            Hammad Shahzad
          </Text>
        </View>
        <View>
          {' '}
          <Text style={{ color: 'white', fontSize: 15, fontFamily: 'arial' }}>
            {' '}
            hammadbiz@gmail.com{' '}
          </Text>
        </View>
      </View>
      <ImageBackground
        style={styles.bottomimage}
        source={require('../assets/Myaccount/bottom.svg')}>
        <View
          style={{
            position: 'absolute',
            top: 230,
            left: 0,
            bottom: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'left',
          }}>
          <FlatList
            data={myData}
            renderItem={({ item }) => <Renderlist item={item} />}
            keyExtractor={(item, index) => index}
            style={{ padding: 5 }}
          />
        </View>
      </ImageBackground>
    </View>
     </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0092F9',
  },

  bottomimage: {
    marginTop:20,
    height: '200vw',
    width: '100%',
  },
});
