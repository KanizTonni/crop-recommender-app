import React from 'react'
import { Image, Text, View } from 'react-native'
import color from '../constant/color'
import normalization from '../constant/normalize'

export default function CropListItem(props) {
    const {item, navigation} = props
  return (
    <View 
        style={{
            backgroundColor: '#fff', 
            flexDirection: 'row', 
            marginVertical: normalization(10),
            padding: normalization(10),
            borderRadius: normalization(8),
            marginHorizontal: normalization(20),
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,}}>
        <View
            onPress={() => navigation.navigate('CropDetails', item)} 
            style={{
                flex: 1,
            }}>
                <Image 
                    style={{height: 110, width: 100, borderRadius: 8}}
                    source={{
                        uri: item.photoUrl
                    }}
                />
        </View>

        <View
            style={{
                flex: 2,
            }}>
                <Text onPress={() => navigation.navigate('CropDetails', item)}  style={{fontSize: normalization(18), fontWeight: 'bold', color: color.text_green, marginBottom: normalization(10)}}>{item.name}</Text>
                <Text style={{fontSize: normalization(14)}}>Season: {item.season}</Text>
                <Text style={{fontSize: normalization(14),marginBottom: normalization(10)}}>Soil type: {item.soil}</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginBottom: normalization(10),
                        justifyContent: 'flex-start'
                    }}>
                        <Text onPress={() => navigation.navigate('CropDetails', item)} style={{fontSize: normalization(16), fontWeight: 'bold',}}>Details</Text>
                </View>
        </View>
    </View>
  )
}