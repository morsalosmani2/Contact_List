import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Colors from '../utils/colors';
import Avatar from './avatar';

export default function ContactThumbnail({name,phone}){
    return (
        <View style={styles.thumailContainer}>
            <Avatar name={name} size={90}/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.phone}>{phone}</Text>
        </View>
    )

}
const styles =StyleSheet.create({
    thumailContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    name:{
        color:Colors.white,
        fontSize:16,
        fontWeight:'bold'
    },
    phone:{
        color:Colors.white,
        fontSize:16,
    }
    
})