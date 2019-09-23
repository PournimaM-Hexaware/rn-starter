import React from 'react'
import {Text,StyleSheet,View } from 'react-native';


const ComponentScreen = () =>{
    const name="Pournima"
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React native ! </Text>
            <Text styles={styles.subHeaderStyle}>My name is {name}</Text>
        </View>

    )
};

const styles= StyleSheet.create({
    textStyle : {
        fontSize: 45
    },
    subHeaderStyle:{
        fontSize:30
    }
})


export default ComponentScreen;