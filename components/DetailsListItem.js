import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Colors from '../utils/colors';
import {MaterialIcons} from '@expo/vector-icons'
export default function DetailListItem({icon,title,subTitle}){
    return (
        <View >
            <View style={styles.borderContainer}>
                <View style={styles.container}>
                    <MaterialIcons name={icon} size={24} color='black' />
                    <View style={styles.cententContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subTitle}>{subTitle}</Text>
                    </View>
                </View>
            </View>
        </View>
    )

}
const styles =StyleSheet.create({
    borderContainer:{
        padding:24,
    },
    container:{
        flexDirection:'row',
        paddingVertical:16,
        borderBottomWidth:0.5,
        borderBottomColor:Colors.secondary,
    },
    cententContainer:{
        paddingLeft:20
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    subTitle:{
        fontSize:16,
        color:Colors.primary
    },
    
    
})