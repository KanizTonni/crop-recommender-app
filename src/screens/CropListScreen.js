import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, BackHandler, FlatList, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import CropListItem from '../common/CropListItem';
import color from '../constant/color';
import normalization from '../constant/normalize';

export default function CropListScreen({route, navigation}) {

  const data = route.params
  const {cluster, soilType} = route.params ?? ''
  const {duration, season, soil} = data.values ?? ''

  const [crops, setCrops] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("There is no match for your search!")
  
  console.log(route.params.soilType)
  useEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("BasicMethod")
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const getCrops = async() => {
    await setLoading(true)
    if(duration !== '' && season === '' && soil === ''){
      await 
      firestore()
      .collection('CropList')
      .where('duration', '==', duration)
      .get()
      .then(snapshot => {
        let allcrops = [];
        snapshot.forEach((doc) => {
          allcrops.push({ ...doc.data() });
        });
        setCrops(allcrops)
        setLoading(false)
      });
    } else if(duration === '' && season !== '' && soil === '') {
      await 
      firestore()
      .collection('CropList')
      .where('season', 'array-contains', season)
      .get()
      .then(snapshot => {
        let allcrops = [];
        snapshot.forEach((doc) => {
          allcrops.push({ ...doc.data() });
        });
        setCrops(allcrops)
        setLoading(false)
      });
    } else if(duration === '' && season === '' && soil !== '') {
      await 
      firestore()
      .collection('CropList')
      .where('soil', '==', soil)
      .get()
      .then(snapshot => {
        let allcrops = [];
        snapshot.forEach((doc) => {
          allcrops.push({ ...doc.data() });
        });
        setCrops(allcrops)
        setLoading(false)
      });
    } else if(duration !== '' && season !== '' && soil === '') {
      await 
      firestore()
      .collection('CropList')
      .where('duration', '==', duration)
      .where('season', 'array-contains', season)
      .get()
      .then(snapshot => {
        let allcrops = [];
        snapshot.forEach((doc) => {
          allcrops.push({ ...doc.data() });
        });
        setCrops(allcrops)
        setLoading(false)
      });
    } else if(duration !== '' && season === '' && soil !== '') {
      await 
      firestore()
      .collection('CropList')
      .where('duration', '==', duration)
      .where('soil', '==', soil)
      .get()
      .then(snapshot => {
        let allcrops = [];
        snapshot.forEach((doc) => {
          allcrops.push({ ...doc.data() });
        });
        setCrops(allcrops)
        setLoading(false)
      });
    } else if(duration === '' && season !== '' && soil !== '') {
      await 
      firestore()
      .collection('CropList')
      .where('season', 'array-contains', season)
      .where('soil', '==', soil)
      .get()
      .then(snapshot => {
        let allcrops = [];
        snapshot.forEach((doc) => {
          allcrops.push({ ...doc.data() });
        });
        setCrops(allcrops)
        setLoading(false)
      });
    } else if(duration !== '' && season !== '' && soil !== '') {
      await 
      firestore()
      .collection('CropList')
      .where('season', 'array-contains', season)
      .where('soil', '==', soil)
      .where('duration', '==', duration)
      .get()
      .then(snapshot => {
        let allcrops = [];
        snapshot.forEach((doc) => {
          allcrops.push({ ...doc.data() });
        });
        setCrops(allcrops)
        setLoading(false)
      });
    } else {
      await setCrops([])
      setLoading(false)
    }
  }

  const getClusterCrops = async() => {
    await setLoading(true)
    await 
    firestore()
    .collection('CropList')
    .where('cluster', 'array-contains', cluster)
    .get()
    .then(snapshot => {
      let allcrops = [];
      snapshot.forEach((doc) => {
        allcrops.push({ ...doc.data() });
      });
      setCrops(allcrops)
      setLoading(false)
    });

  }

  useEffect(() => {
      getCrops()

  }, []);
  
  const renderItem = ({ item }) => (
    <CropListItem item={item} navigation={navigation} />
  );

  return (
    <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <View 
            style={{
              flex: 0.1, 
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginTop: normalization(20),
              paddingHorizontal: normalization(20)
            }}>
              <Entypo name="leaf" size={normalization(40)} color={color.grad_green_1} />
              <Text style={{fontSize: normalization(30)}}>Crop Recommender</Text>
            
          </View>
      {
        loading ? <ActivityIndicator style={{marginTop: normalization(30)}} size="large" />
        :
          crops.length > 0 ? 
          <>
          <View style={{ marginTop: normalization(30),paddingHorizontal: normalization(20)}}>
            {/* <Text style={{fontSize: normalization(15)}}>
              Showing results for {duration === "short" ? "Short term," : duration === "long" ? "Long term," : ""} {season ? season : ""}{season ? "," : ""} {soil ? soil : ""}{soil ? "," : ""}
            </Text> */}
          </View>

          <FlatList
            data={crops}
            style={{flex: 0.9, marginTop: normalization(20)}}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          </>
          : <View style={{ marginTop: normalization(30),paddingHorizontal: normalization(20)}}>
              <Text style={{fontSize: normalization(15), color: color.error_red}}>
                {message}
              </Text>
            </View>
      }
        
            
    </View>
  )
}