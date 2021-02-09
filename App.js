import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {MaterialIcons} from '@expo/vector-icons' 

const Stack = createStackNavigator();


import Contacts from './screen/Contacts';
import Profile from "./screen/profile";
import CreateContacts from "./screen/CreateContact";
import SearchScreen from './screen/searchScreen';


export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Contacts" component={Contacts}
          options={({navigation})=>({
            headerRight:()=>(
              <TouchableOpacity style={{paddingRight:20}} onPress={()=> navigation.navigate('Sreach')}>
                <Text>
                  <MaterialIcons name="search" size={24} color="black"/>
                </Text>
              </TouchableOpacity>
            )
          })} />
         <Stack.Screen name="CreateContact" component={CreateContacts} />
         <Stack.Screen name="Profile" component={Profile} />
         <Stack.Screen name="Sreach" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
