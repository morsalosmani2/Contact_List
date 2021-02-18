import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Colors from '../utils/colors';
import ContactListItem from '../components/contactListItem'
import { Feather } from "@expo/vector-icons";
import {  } from "module";



const contacts = [
    { id: '1', name: 'Morsal', phone: '11111111', email: 'morsalosmani2@gmail.com'},
    { id: '2', name: 'Marwa', phone: '2222222', email: 'marwa@gmail.com'},
    { id: '3', name: 'Avina', phone: '33333333', email: 'avina1@gmail.com'},
    { id: '4', name: 'Shagofah', phone: '44444444', email: 'sh_osmani@gmail.com'},
    { id: '5', name: 'Fatemah', phone: '55555555', email: 'fatema@gmail.com'},
    { id: '6', name: 'sodabah', phone: '66666666', email: 'sodabashirzad@gmail.com'},
    { id: '7', name: 'Jamshid', phone: '777777777', email: 'habibi@gmail.com'},

]
export default function Contacts({navigation}){
  return (
    <View>
      <FlatList 
        data={contacts}
        keyExtractor={(item)=>{item.id}}
        renderItem={({item}) =>{
            return <ContactListItem name={item.name} phone={item.phone }  onPress={()=> navigation.navigate('Profile',{item:item})}/>
        }}
      />
      <TouchableOpacity style={styles.floatButton} onPress={()=> navigation.navigate('CreateContact')}>
        <Text>
          <Feather name="plus" size={28} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
    

  )

}
const styles =StyleSheet.create({
  
  floatButton:{
    backgroundColor:'orange',
    padding:20,
    borderRadius:'50%',
    position:'absolute',
    bottom:40,
    right:40
  }
})

