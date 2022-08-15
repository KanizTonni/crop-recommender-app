import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BackHandler, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import color from '../constant/color';
import constants from '../constant/constants';
import normalization from '../constant/normalize';


export default function AdvanceMethodScreen({navigation}) {

    const baseUrl = 'https://crop-recommender-cluster.herokuapp.com';

    const [open3, setOpen3] = useState(false);
    const [value3, setValue3] = useState(null);
    const [items3, setItems3] = useState([
        {label: 'Sandy', value: 'Sandy'},
        {label: 'Loamy', value: 'Loamy'},
        {label: 'Clayey', value: 'Clayey'},
        {label: 'Black cotton', value: 'Black cotton'},
    ]);

    const [nitrogen, setNitrogen] = useState("")
    const [phosporus, setPhosporus] = useState("")
    const [potassium, setPotassium] = useState("")
    const [temperature, setTemperature] = useState("")
    const [humidity, setHumidity] = useState("")
    const [ph, setPh] = useState("")
    const [rainfall, setRainfall] = useState("")
    const [cluster, setCluster] = useState("")
    const [soilType, setSoilType] = useState("")

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

    const predict = async () => {
        if(soilType !== "" && nitrogen !== "" && phosporus!== "" && potassium !== "" && humidity !== "" && temperature !== "" && ph !== "" && rainfall !== "") {
            const data = {
                N: nitrogen,
                P: phosporus,
                K: potassium,
                temperature: temperature, 
                humidity: humidity, 
                ph: ph, 
                rainfall: rainfall
            }
            try {
                const response = await axios.post(`${baseUrl}/crop-predict`, data);
                console.log(response.data)
                await navigation.navigate("Seconds", {cluster: response.data, soilType: soilType})
              } catch (error) {
                ToastAndroid.show("An error occured! Please try again later.", ToastAndroid.SHORT);
              }
        } else {
            ToastAndroid.show("All field required!", ToastAndroid.SHORT);
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
                <ScrollView>
                <Text style={{fontSize: normalization(18), marginBottom: normalization(20)}}>{constants.advanceMethodText}</Text>
                <Text style={{marginBottom: normalization(5)}}>Soil Type</Text>
                <DropDownPicker
                    open={open3}
                    value={value3}
                    placeholder="Select Soil Type"
                    items={items3}
                    setOpen={setOpen3}
                    setValue={setValue3}
                    setItems={setItems3}
                    style={{marginBottom: normalization(20), borderColor: color.grad_green_1,  zIndex: 0}}
                    onChangeValue={(data) => setSoilType(data)}
                    dropDownContainerStyle={{ backgroundColor: 'white',zIndex: 999, elevation: 1, borderColor: color.grad_green_1 }}
                />
                <Text style={{marginBottom: normalization(5)}}>Nitrogen</Text>
                <TextInput 
                    placeholder='1.00'
                    onChangeText={(value) => setNitrogen(value.toString())}
                    style={{
                        borderWidth: 1,
                        borderColor: color.grad_green_1,
                        borderRadius: 8,
                        paddingLeft: normalization(15),
                        marginBottom: normalization(10)
                    }}
                    keyboardType="number-pad"
                />

                <Text style={{marginBottom: normalization(5)}}>Phosporus</Text>
                <TextInput 
                    placeholder='1.00'
                    onChangeText={(value) => setPhosporus(value.toString())}
                    style={{
                        borderWidth: 1,
                        borderColor: color.grad_green_1,
                        borderRadius: 8,
                        paddingLeft: normalization(15),
                        marginBottom: normalization(10)
                    }}
                    keyboardType="number-pad"
                />

                <Text style={{marginBottom: normalization(5)}}>Potassium</Text>
                <TextInput 
                    placeholder='1.00'
                    onChangeText={(value) => setPotassium(value.toString())}
                    style={{
                        borderWidth: 1,
                        borderColor: color.grad_green_1,
                        borderRadius: 8,
                        paddingLeft: normalization(15),
                        marginBottom: normalization(10)
                    }}
                    keyboardType="number-pad"
                />

                <Text style={{marginBottom: normalization(5)}}>Temperature</Text>
                <TextInput 
                    placeholder='1.00'
                    onChangeText={(value) => setTemperature(value.toString())}
                    style={{
                        borderWidth: 1,
                        borderColor: color.grad_green_1,
                        borderRadius: 8,
                        paddingLeft: normalization(15),
                        marginBottom: normalization(10)
                    }}
                    keyboardType="number-pad"
                />



                <Text style={{marginBottom: normalization(5)}}>Humidity in %</Text>
                <TextInput 
                    placeholder='1.00'
                    onChangeText={(value) => setHumidity(value.toString())}
                    style={{
                        borderWidth: 1,
                        borderColor: color.grad_green_1,
                        borderRadius: 8,
                        paddingLeft: normalization(15),
                        marginBottom: normalization(10)
                    }}
                    keyboardType="number-pad"
                />

                <Text style={{marginBottom: normalization(5)}}>pH</Text>
                <TextInput 
                    placeholder='1.00'
                    onChangeText={(value) => setPh(value.toString())}
                    style={{
                        borderWidth: 1,
                        borderColor: color.grad_green_1,
                        borderRadius: 8,
                        paddingLeft: normalization(15),
                        marginBottom: normalization(10)
                    }}
                    keyboardType="number-pad"
                />

                <Text style={{marginBottom: normalization(5)}}>Rainfall in mm</Text>
                <TextInput 
                    placeholder='1.00'
                    onChangeText={(value) => setRainfall(value.toString())}
                    style={{
                        borderWidth: 1,
                        borderColor: color.grad_green_1,
                        borderRadius: 8,
                        paddingLeft: normalization(15),
                        marginBottom: normalization(10)
                    }}
                    keyboardType="number-pad"
                />

                <TouchableOpacity
                    onPress={() => predict()}
                    style={{
                        backgroundColor: color.grad_green_1,
                        width: '100%',
                        paddingVertical: normalization(10),
                        alignItems: 'center',
                        borderRadius: 8,
                        marginBottom: normalization(20)
                    }}
                    >
                    <Text style={{color: color.text_white, fontSize: normalization(16)}}>Predict</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}