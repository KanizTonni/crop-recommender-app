import firestore from '@react-native-firebase/firestore';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function DemoScreen() {

    const dataEntry = async () => {
        await 
        firestore()
        .collection('Fertilizer')
        .add({
            detail: [
                { title: "At sowing", head: "First fertilization", desc: "Apply 113kg of DAP, 100kg of MOP and 92kg of Urea" },
                { title: "Week 10", head: "Second fertilization", desc: "Apply 57kg of DAP and 85kg of Urea" },
                { title: "Week 14", head: "Third fertilization", desc: "Apply 104kg of Urea" },
            ],
            fertilizers: [
                { title: "DAP", value: "113kg" },
                { title: "MOP", value: "100kg" },
                { title: "Urea", value: "282kg" },
            ],
            name: "Potato",
        })
        .then(() => {
          console.log('User added!');
        });
    }

    useEffect(() => {
        dataEntry()
    }, []);

    return (
        <View>
        <Text>DemoScreen</Text>
        </View>
    )
}