import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';


export default function SplashScreen() {
  return (
    <View style={styles.container}>
          <Image style={styles.topImage} source={require('../assets/splashscreenimage.svg')} />
          <Image style={styles.bottomImage} source={require('../assets/bluebg.svg')}/>
          <Image style={styles.button} source={require('../assets/buttonSplashScreen.svg')}/>
          <Text style={styles.text}>Pick Your Favourite Pet Now</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems:"center",
    flex: 1,
    backgroundColor: 'white',
  },
  topImage:{
    marginTop:20,
    width:'80vw',
    height:'58vw',
    zIndex:0, // works on ios
    
  },
  bottomImage:{
    position: 'fixed',
    bottom:0,
    height:'160vw',
    width:'100vw',
    zindex:'1',
    zIndex: 0, // works on ios
      },

  button:{
      position:"absolute",
      bottom: -300,
      zIndex: 100, // works on ios 
      "boxShadow": "5px 5px 10px rgba(0,0,0,0.3)",
      "MozBorderRadius": "190px",
      "WebkitBorderRadius": "190px",
  },

  text:{
    fontFamily:'arial',
    position: 'absolute',
    bottom:-145,
    fontSize:20,
    fontWeight:'600',
    color:'white',
    zIndex: 100, // works on ios
    elevation: 100, // works on android
  },

});
