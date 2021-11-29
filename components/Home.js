import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';
import Constants from 'expo-constants';

import { Searchbar } from 'react-native-paper';

const MySearch = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.search}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ height: 34, width: '80%' }}
      />
      <View style={styles.leftBox}></View>
    </View>
  );
};

const CategoryName = ({ name }) => {
  return (
    <Pressable onPress={() => console.log('pressd')}>
      <View style={{ borderWidth: 1, width: 60, height: 60, borderRadius:15, alignItems:'center', justifyContent:'center' }}>
          <Image style={styles.bottomImage} source={require('../assets/tabIcons/Heart.svg')}/>
      </View>
      <Text style={{ textAlign: 'center', fontWeight: 400 }}>{name}</Text>
    </Pressable>
  );
};

const PapularPet = () => {
return (
  <View
          style={styles.papularPetImage}>
          <Image style={styles.like} source={require('../assets/like.svg')}/>
            <View style={{flex:1}} >
            <Image  style={{width:80, height:100}}  source={require('../assets/cat.svg')}/>
                    <Text style={styles.viewAllText}>British shorthair</Text>
                            <Text style={styles.viewAllText}>$ 199</Text>


            
            </View>
          </View>
);

}




export default function Home() {
  return (
    <View style={styles.container}>
      <MySearch />
      <View>
        <Text style={styles.textCatagory}>Pets Categories</Text>

        <View style={styles.Catorgries}>
          <CategoryName name={'All'} />
          <CategoryName name={'Cat'} />
          <CategoryName name={'Dog'} />
          <CategoryName name={'Rabbit'} />
          <CategoryName name={'Birds'} />
        </View>
      </View>
      <View style={styles.papularPet}>
        <Text style={styles.textCatagory}>Papular Pets</Text>
        <Text style={styles.viewAllText}>See all</Text>
      </View>

      <View style={styles.papularPetImageContainer}>
        
        <PapularPet/>
        <PapularPet/>
      </View>

      <View style={styles.papularPet}>
        <Text style={styles.textCatagory}>Best Price</Text>
        <Text style={styles.viewAllText}>See all</Text>
      </View>

      <View style={styles.bestPriceImageContainer}>
        <View style={styles.bestPrice}></View>
        <View style={styles.bestPrice}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 8,
  },
  leftBox: {
    backgroundColor: '#D63909',

    width: 34,
    height: 34,
  },
  textCatagory: {
    fontFamily: 'Libre Baskerville',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    color: '#353434',
    margin: 8,
  },
  Catorgries: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  papularPet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  viewAllText: {
    marginHorizontal: 8,
  },
  papularPetImageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bestPriceImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  papularPetImage:{
            width: '40%',
            height: 150,
            borderWidth: 1,
            borderRadius: 15,
            overflow:"hidden"
          }
,
  bestPrice: {
    width: '90%',
    height: 80,
    marginVertical:5,
    borderWidth: 1,
    borderRadius: 15,
  },
  like:{
    position:"absolute",
    right: 0,
    

  }
});
