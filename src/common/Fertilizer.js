import React, { useState } from 'react'
import { Text, View } from 'react-native'
import color from '../constant/color'
import normalization from '../constant/normalize'

export default function Fertilizer(props) {
  const {fertilizerDetail} = props

  const [fertilizerNameArr, setFertilizerNameArr] = useState([])
  const [loading, setLoading] = useState(true)

  // const setFertilizerDetail = async () => {
  //   let allquantity = [];
  //   fertilizerDetail.fertilizers.map(({item})=> {
  //     allquantity.push({title: item})
  //   })
  //   await setFertilizerNameArr(allquantity)
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   setFertilizerDetail()
  // }, []);

  return (
    <View style={{marginTop: normalization(10)}}>
      <View 
        style={{
          backgroundColor: color.background_white, 
          marginVertical: normalization(10),
          padding: normalization(10),
          borderRadius: normalization(8),
          shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
        }}>
        <View style={{flexDirection: 'row', marginLeft: normalization(10), marginBottom: normalization(10)}}>
          {fertilizerDetail.fertilizers.map((item, i)=> (
            <Text style={{fontWeight: 'bold', fontSize: normalization(15)}}>{item.title}{i === fertilizerDetail.fertilizers.length-1 ? "" : " / "}</Text>
          ))}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          {fertilizerDetail.fertilizers.map((item, i)=> (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.value} kg</Text>
            </View>
            
          ))}
        </View>
      </View>

      <View
        style={{
          backgroundColor: color.background_white, 
          marginVertical: normalization(10),
          padding: normalization(10),
          borderRadius: normalization(8),
          shadowColor: "#000",
          shadowOffset: {width: 0,height: 5,},
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
        }}>
        {fertilizerDetail.detail.map((item, i)=> (
          <View style={{marginBottom: normalization(10)}}>
            <Text style={{fontWeight: 'bold', fontSize: normalization(15)}}>{item.title}</Text>
            <Text style={{fontWeight: 'bold',  marginBottom: normalization(8)}}>{item.head}</Text>
            <Text>{item.desc}.</Text>
          </View>
          
        ))}
      </View>
    </View>
  )
}