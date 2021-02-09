import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import colors from '../utils/colors'

export default function SearchScreen(){
    return (

        <View style={styles.SearchContainer}>

            <TextInput placeholder="Search..."  style={styles.searchInput}/>
            

        </View>


       
    )
}
const styles = StyleSheet.create({

    SearchContainer:{

        backgroundColor: colors.secondry,
    },

    searchInput:{

        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical: 10,
        margin: 20,
        backgroundColor: colors.white


    }
    

    
})