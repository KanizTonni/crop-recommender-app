import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import color from '../constant/color';
import normalization from '../constant/normalize';

export default function CropDetailsScreen({route, navigation}) {
  const name = route.params
  const [loading, setLoading] = useState(false)

  return (
    <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <View 
          style={{
            flex: 0.1, 
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginTop: normalization(20),
            paddingHorizontal: normalization(20)
          }}>
            <View>
            <Entypo name="leaf" size={normalization(40)} color={color.grad_green_1} />
            <Text style={{fontSize: normalization(30)}}>Crop Recommender</Text>
            </View>
          
          <Entypo name="menu" size={normalization(30)} color={color.grad_green_1} />
              
        </View>
        {
          loading ? <ActivityIndicator style={{marginTop: normalization(30)}} size="large" />
          : <View>
            <Text>jsdbvkjsdbk</Text>
          </View>
        }
    </View>
  )
}