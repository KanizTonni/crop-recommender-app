import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import color from '../constant/color';
import normalization from '../constant/normalize';

export default function WelcomeScreen({navigation}) {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home')
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
  
    return (
        <View 
            style={{
                flex: 1,
                backgroundColor: color.background,
            }}
        >

            <LinearGradient
                colors={[color.grad_green_1, color.grad_green_2]}
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                <Icon name="leaf" size={normalization(80)} color="#fff" />
                <Text 
                    style={{
                        fontSize: normalization(22),
                        fontWeight: 'bold',
                        marginTop: normalization(10)
                    }}>
                    Welcome to Crop Recommender
                </Text>
            </LinearGradient>
        </View>
    )
}