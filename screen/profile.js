import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import colors from '../utils/colors'
import ContactThumbnail from '../components/contactThumanil'
import DetailsListItem from '../components/DetailsListItem'
export default function profile({name, phone, email}){
    return (
        <View style= {styles.container}>
            <View style={styles.thumbnailSection}> 
                <ContactThumbnail name= {name} phone = {phone}/>

            </View>
            <View style= {styles.detailSection}>
                <DetailsListItem icon="email" title= "Email" subTitle= {email}/>
                <DetailsListItem icon="phone" title= "work" subTitle= {phone}/>
            </View>
        </View>
   
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    thumbnailSection:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderBottomWidth :1,
        borderBottomColor:colors.secondry
    },
    detailSection:{
        paddingTop:10
    }
    
})