import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import color from '../constant/color'
import normalization from '../constant/normalize'

export default function CostofProd(props) {
  const {cropDetail} = props
  const [detailsColumn, setDetailsColumn] = useState([])
  const [loading, setLoading] = useState(true)

  const setCropDetail = async () => {
    let allquantity = [];
    allquantity.push({title: "Land Preperation", Total: cropDetail.LandPreparation})
    allquantity.push({title: "Seed", Quantity: cropDetail.Seed.Quantity, UnitPrice: cropDetail.Seed.UnitPrice, Total: cropDetail.Seed.Total})
    allquantity.push({title: "Plantation", Quantity: cropDetail.Plantation.Quantity, UnitPrice: cropDetail.Plantation.UnitPrice, Total: cropDetail.Plantation.Total})
    allquantity.push({title: "Weeding", Quantity: cropDetail.Weeding.Quantity, UnitPrice: cropDetail.Weeding.UnitPrice, Total: cropDetail.Weeding.Total})
    allquantity.push({title: "Irrigation", Quantity: cropDetail.Irrigation.Quantity, UnitPrice: cropDetail.Irrigation.UnitPrice, Total: cropDetail.Irrigation.Total})
    allquantity.push({title: "Pesticides", Total: cropDetail.Pesticides})
    allquantity.push({title: "Fertilizer", Quantity: cropDetail.fertilizer.Quantity, UnitPrice: cropDetail.fertilizer.UnitPrice, Total: cropDetail.fertilizer.Total})
    allquantity.push({title: "Harvesting & Treshing", Quantity: cropDetail.HarvestingTreshing.Quantity, UnitPrice: cropDetail.HarvestingTreshing.UnitPrice, Total: cropDetail.HarvestingTreshing.Total})
    allquantity.push({title: "Transport", Quantity: cropDetail.Transport.Quantity, UnitPrice: cropDetail.Transport.UnitPrice, Total: cropDetail.Transport.Total})
    allquantity.push({title: "Over head Cost", Total: cropDetail.OverHeadCost})
    allquantity.push({title: "Others", Total: cropDetail.Others})
    allquantity.push({title: "Total", Total: cropDetail.TotalCost})
    await setDetailsColumn(allquantity)
    setLoading(false)
  }

  useEffect(() => {
    setCropDetail()
  }, []);

  return (
    loading ? <ActivityIndicator style={{marginTop: normalization(30)}} size="large" /> :
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
        
    <View style={{flexDirection: 'row', marginTop: normalization(10), borderBottomWidth: 1}}>
      <View style={{flex: 1, alignItems: 'center',}}>
        <Text style={{ fontWeight: 'bold'}}>Production ingredient</Text>
      </View>

      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{ fontWeight: 'bold'}}>Quantity (labour)</Text>
      </View>

      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{ fontWeight: 'bold'}}>Price Per unit</Text>
      </View>

      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{ fontWeight: 'bold'}}>Total cost</Text>
      </View>
    </View>

    
    <View style={{flexDirection: 'row', marginTop: normalization(10)}}>
      <FlatList
        style={{flex: 1}}
        data={detailsColumn}
        renderItem={({item, index}) => (
          <>
          <View style={{flexDirection: 'row', marginTop: normalization(10)}}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text>{item.title}</Text>
            </View>

            <View style={{flex: 1, alignItems: 'center'}}>
              <Text>{item.Quantity? item.Quantity : "-"}</Text>
            </View>

            <View style={{flex: 1, alignItems: 'center'}}>
              <Text>{item.UnitPrice? item.UnitPrice : "-"}</Text>
            </View>

            <View style={{flex: 1, alignItems: 'center'}}>
              <Text>{item.Total}</Text>
            </View>
          </View>
          </>
        )}
        keyExtractor={item => item.key}
      />
      

      
    </View>
    </View>
  )
}