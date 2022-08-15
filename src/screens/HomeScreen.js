import React, { useEffect, useState } from 'react';
import {
  BackHandler, Text, TouchableOpacity, View
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import color from '../constant/color';
import constants from '../constant/constants';
import normalization from '../constant/normalize';

function HomeScreen({navigation}){

  const [text, setText] = useState("Crop recommendation is one of the most important aspects of precision agriculture. Crop recommendations are based on a number of factors. Precision agriculture seeks to define these criteria on a site-by-site basis in order to address crop selection issues. While the 'site-specific' methodology has improved performance, there is still a need to monitor the systems' outcomes.Precision agriculture systems aren't all created equal. However, in agriculture, it is critical that the recommendations made are correct and precise, as errors can result in significant material and capital loss.")

    useEffect(
      React.useCallback(() => {
        const onBackPress = () => {
          return true;
        };

        BackHandler.addEventListener('hardwareBackPress', onBackPress);

        return () =>
          BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      }, [])
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

          <View style={{flex: 0.9, marginTop: normalization(20),paddingHorizontal: normalization(20)}}>
            <Text style={{fontSize: normalization(18)}}>{constants.text}</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('BasicMethod')}
              style={{
                backgroundColor: color.grad_green_1,
                width: '100%',
                paddingVertical: normalization(10),
                alignItems: 'center',
                borderRadius: 8,
                marginTop: normalization(20)
              }}
            >
              <Text style={{color: color.text_white, fontSize: normalization(16)}}>Basic method</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('AdvanceMethod')}
              style={{
                backgroundColor: color.grad_green_1,
                width: '100%',
                paddingVertical: normalization(10),
                alignItems: 'center',
                borderRadius: 8,
                marginTop: normalization(15)
              }}
            >
              <Text style={{color: color.text_white, fontSize: normalization(16)}}>Advanced method</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
}

export default HomeScreen