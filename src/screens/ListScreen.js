import React from 'react';
import {Text,StyleSheet,View ,FlatList} from 'react-native';





const ListScreen = () => {
    const friends = [
        { name :'Pournima'},
        { name :'Pratibha'},
        { name :'sakshi'},
        { name :'Avika'},
        { name :'Tarun'},
        { name :'Satyam'},
    ];

    return (
    <FlatList data={friends} 
    renderItem={({item}) => {
        return <Text>{item.name}</Text>
    }}/>
    )
    // return <Text> List Screen</Text>

};


const styles =StyleSheet.create({});

export default ListScreen;
