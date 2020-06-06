import React from "react";
import { View } from "react-native";

// import { Container } from './styles';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const TopNavigator = createMaterialTopTabNavigator();
import CardListProject from '../components/profileComponents/CardListProject'
import AboutScreen from '../components/profileComponents/About'




const ProfileRoutes = () => {
  return (
    <TopNavigator.Navigator tabBarOptions={{
      inactiveTintColor:'#f0f0f0',
      activeTintColor:'#000',
      indicatorStyle:{
        opacity:0
      },
      contentContainerStyle:{
          elevation:0
      },
      labelStyle:{
        fontSize:12,
        fontWeight:"bold"
      },
    }}>
  

      <TopNavigator.Screen name="List" options={{title:'Projetos'}} component={CardListProject} />
      <TopNavigator.Screen name="About" options={{title:'Sobre'}} component={AboutScreen} />
     
    </TopNavigator.Navigator>

  );
};
export default ProfileRoutes;
