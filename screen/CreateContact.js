import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import colors from '../utils/colors'

export default function CreateContact(){
    return (

        <View style={styles.formContainer}>

            <TextInput placeholder="Name" style={styles.input}/>
            <TextInput placeholder="Email" keyboardType="email-address" style={styles.input}/>
            <TextInput placeholder="Phone" keyboardType="numeric" style={styles.input}/>
            <TouchableOpacity style={[styles.button , {backgroundColor:colors.primary}]}>
                <Text style={styles.buttonTxt}>
                    Save
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button , {backgroundColor:'red'}]}>
                <Text style={styles.buttonTxt}>
                    Cancel
                </Text>
            </TouchableOpacity>


        </View>
       
    )
}
const styles = StyleSheet.create({
    formContainer:{
        borderRadius:30,
        marginTop:60,
        paddingVertical:20,
        paddingHorizontal:40,
        backgroundColor: colors.white

    },
    input:{
        paddingBottom:10,
        marginBottom:10,
        borderBottomColor: colors.secondry,
        borderBottomWidth:1
    },
    button:{
        padding:20,
        marginTop:20,
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center'
    },

    buttonTxt:{
        color: colors.white
    }


    
})