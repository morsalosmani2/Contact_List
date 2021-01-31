import React from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'

import colors from '../utils/colors'
import ContactListItem from '../components/ContactListItem'
const contacts = [
    { id: '1', name: 'Morsal', phone: '11111111', email: 'morsalosmani2@gmail.com'},
    { id: '2', name: 'Marwa', phone: '2222222', email: 'marwa@gmail.com'},
    { id: '3', name: 'Avina', phone: '33333333', email: 'avina1@gmail.com'},
    { id: '4', name: 'Shagofah', phone: '44444444', email: 'sh_osmani@gmail.com'},
    { id: '5', name: 'Fatemah', phone: '55555555', email: 'fatema@gmail.com'},
    { id: '6', name: 'sodabah', phone: '66666666', email: 'sodabashirzad@gmail.com'},
    { id: '7', name: 'Jamshid', phone: '777777777', email: 'habibi@gmail.com'},

]
export default function Contacts(){
   return (
    <FlatList
    data={contacts}
    keyExtractor={(item)=>item.id}
    renderItem={({item}) => {
        return <ContactListItem name={item.name} phone={item.phone} />
    }}
    />
   )

}
const styles = StyleSheet.create({

})