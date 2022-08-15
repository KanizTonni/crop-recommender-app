import React, { useEffect, useState } from 'react';
import { BackHandler, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import color from '../constant/color';
import constants from '../constant/constants';
import normalization from '../constant/normalize';

export default function BasicMethodScreen({navigation}) {
  const [values, setValues] = useState({
    duration: '',
    season: '',
    soil: '',
  })
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items1, setItems1] = useState([
    {label: 'Short Time', value: 'short'},
    {label: 'Long Time', value: 'long'}
  ]);
  const [items2, setItems2] = useState([
    {label: 'Rabi', value: 'Rabi'},
    {label: 'Kharif 1', value: 'Kharif 1'},
    {label: 'Kharif 2', value: 'Kharif 2'},
    {label: 'All year round', value: 'All Year Round'}
  ]);
  const [items3, setItems3] = useState([
    {label: 'Sandy', value: 'Sandy'},
    {label: 'Loamy', value: 'Loamy'},
    {label: 'Clayey', value: 'Clayey'},
    {label: 'Black cotton', value: 'Black cotton'},
    {label: 'Alluvial', value: 'Alluvial'},
  ]);

  useEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("Home")
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const recommend = () => {
    if(values.duration === '' && values.season === '' && values.soil === '') {
      ToastAndroid.show("Select at least one option!", ToastAndroid.SHORT);
    } else {
      navigation.navigate("CropList", {values})
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: '#F9F9F9',}}>
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
            <Text style={{fontSize: normalization(18), marginBottom: normalization(20)}}>{constants.text}</Text>
            <DropDownPicker
                open={open1}
                value={value1}
                placeholder="Select Time Period"
                items={items1}
                setOpen={setOpen1}
                setValue={setValue1}
                setItems={setItems1}
                style={{marginBottom: normalization(20), borderColor: color.grad_green_1}}
                onChangeValue={(data) => setValues({...values, duration: data})}
                dropDownContainerStyle={{ backgroundColor: 'white',zIndex: 999, elevation: 1, borderColor: color.grad_green_1 }}
              />

            <DropDownPicker
              open={open2}
              value={value2}
              placeholder="Select Cropping Season"
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
              style={{marginBottom: normalization(20), borderColor: color.grad_green_1, zIndex: 0}}
              onChangeValue={(data) => setValues({...values, season: data})}
              dropDownContainerStyle={{ backgroundColor: 'white',zIndex: 999, elevation: 1, borderColor: color.grad_green_1 }}
            />

            <DropDownPicker
              open={open3}
              value={value3}
              placeholder="Select Soil Type"
              items={items3}
              setOpen={setOpen3}
              setValue={setValue3}
              setItems={setItems3}
              style={{marginBottom: normalization(20), borderColor: color.grad_green_1,  zIndex: 0}}
              onChangeValue={(data) => setValues({...values, soil: data})}
              dropDownContainerStyle={{ backgroundColor: 'white',zIndex: 999, elevation: 1, borderColor: color.grad_green_1 }}
            />

            <TouchableOpacity
              onPress={() => recommend()}
              style={{
                backgroundColor: color.grad_green_1,
                width: '100%',
                paddingVertical: normalization(10),
                alignItems: 'center',
                borderRadius: 8,
                marginBottom: normalization(20)
              }}
            >
              <Text style={{color: color.text_white, fontSize: normalization(16)}}>Continue</Text>
            </TouchableOpacity>

          </View>
          
    </View>
  )
}