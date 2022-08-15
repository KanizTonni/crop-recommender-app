import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import CostofProd from '../common/CostofProd.js';
import Fertilizer from '../common/Fertilizer';
import color from '../constant/color';
import constants from '../constant/constants';
import normalization from '../constant/normalize';

export default function CropDetailsScreen({route, navigation}) {
  const item = route.params
  const [loading, setLoading] = useState(true)
  const [pageName, setPageName] = useState("Cost of Production")
  const [cropDetail, setCropDetail] = useState([])
  const [fertilizerDetail, setFertilizerDetail] = useState([])
  const [seasonNames, setSeasonNames] = useState("")
  const tabs = {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 2,
    borderColor: color.grad_green_1,
  };
  const bidTab  ={
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 4,
  };
  const bidText = {
    fontSize: 16,
  };

  const getCropDetail = async () => {
    await 
    firestore()
    .collection('CropDetails')
    .where('name', '==', item.name)
    .get()
    .then(snapshot => {
      let allcrops = [];
        snapshot.forEach((doc) => {
          allcrops.push({ ...doc.data() });
        });
        setCropDetail(allcrops)
    });
  }

  const getFertilizerDetail = async () => {
    await 
    firestore()
    .collection('Fertilizer')
    .where('name', '==', item.name)
    .get()
    .then(snapshot => {
      let allcrops = [];
        snapshot.forEach((doc) => {
          allcrops.push({ ...doc.data() });
        });
        setFertilizerDetail(allcrops)
        setLoading(false)
    });
  }
  
  const formateSeasonName = async () => {
    let name = ""
    await item.season.map((i, index) => {
      name = index === item.season.length-1 ? name.concat(i) : name.concat(i + ", ")
    })
    setSeasonNames(name)
  }

  useEffect(() => {
    formateSeasonName()
  }, []);

  useEffect(() => {
    getCropDetail()
  }, []);

  useEffect(() => {
    getFertilizerDetail()
  }, []);

  
  const TabHead = ({page,title,active}) => (
    <TouchableOpacity
      onPress={() => setPageName(page)}
      activeOpacity={0.8}
      style={{width:'33.3%'}}
    >
      <View style={{ ...bidTab,borderColor: title === pageName  ? color.grad_green_1 : "#fff",}}>
        <Text style={{...bidText, color: active ? color.grad_green_1 : 'gray',}}>{title}</Text>
      </View>
    </TouchableOpacity>
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
          : <View style={{ flex: 0.9, marginTop: normalization(30),paddingHorizontal: normalization(20)}}>
            <View style={{flexDirection: 'row'}}>
              <Image 
                style={{
                  height: constants.windowWidth*.4, 
                  width: constants.windowWidth*.4, 
                  borderRadius: 8,
                  marginRight: normalization(20)}} 
                source={{uri: item.photoUrl}} 
              />
              <View style={{ width: constants.windowWidth*.4, marginRight: normalization(20)}}>
                <Text style={{fontSize: normalization(20), fontWeight: 'bold'}}>{item.name}</Text>
                <Text style={{fontSize: normalization(15)}}>Soil type: {item.soil}</Text>
                <Text style={{fontSize: normalization(15)}}>Season: {seasonNames}</Text>
                <Text style={{fontSize: normalization(15)}}>Time to grow: 90-160 days</Text>
              </View>
            </View>

            <View>
              <View style={tabs}>
                <TabHead page="Cost of Production" title="Cost of Production" />
                <TabHead page="Fertilizer" title="Fertilizer" />
              </View> 

              <View>
                  {
                    pageName === 'Cost of Production' ?
                    <CostofProd cropDetail={cropDetail[0]} /> : 
                    <Fertilizer fertilizerDetail={fertilizerDetail[0]} /> 
                  }
              </View>

            </View>
          </View>
        }
    </View>
  )
}