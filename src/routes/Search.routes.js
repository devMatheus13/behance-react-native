import React from "react";
import { View,ScrollView } from "react-native";

// import { Container } from './styles';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Feature from "../screens/search/features";

const TopNavigator = createMaterialTopTabNavigator();

const SearchRoutes = () => {
  return (
    <TopNavigator.Navigator tabBarOptions={{
      inactiveTintColor:'#000',
      activeTintColor:'#fff',
      scrollEnabled :true,
      indicatorStyle: {
        height:40,
        borderRadius:30,
        margin:5,
        backgroundColor:'#000',
      },
      tabStyle:{
        justifyContent:"center",
        alignItems:'center',
        borderRadius:30,
      },
      labelStyle:{
        fontSize:16,
        fontWeight:"bold"
      },
    }}>
  

      <TopNavigator.Screen name="feature" component={Feature} />
      <TopNavigator.Screen name="designer" component={designer} />
      <TopNavigator.Screen name="photoshop" component={photoshop} />
      <TopNavigator.Screen name="s" component={designer} />
      <TopNavigator.Screen name="a" component={photoshop} />
     
    </TopNavigator.Navigator>

  );
};
function designer(){
  return <View style={{flex:1,background:'#ff0'}}/>
}
function photoshop(){
  return <View style={{flex:1,background:'#f50'}}/>
}

export default SearchRoutes;
