import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons ,Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import Home from "../screens/home";
import Search from "../screens/search";
import Notification from "../screens/notification";
import Profile from "../screens/profile";


const Add = () =>{
    return <View/>
}
const Routes = () => {
  const icons = {
    home: {
      lib: MaterialIcons,
      name: "home",
    },
    search: {
      lib: MaterialIcons,
      name: "search",
    },
    notification: {
      lib: MaterialIcons,
      name: "notifications",
    },
    add: {
      lib: Ionicons,
      name: "md-add-circle",
    },
    profile: {
      lib: MaterialIcons,
      name: "person",
    },
    //add-circle
  };

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} style={{marginTop:15}} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#0059ff",
        inactiveTintColor: "#000",
        
      }}
    >
      <Tab.Screen name="home" options={{ title: "" }} component={Home} />
      <Tab.Screen name="search" options={{ title: "" }} component={Search} />
      <Tab.Screen name="add" options={{ title: "" }} component={Add} />
      <Tab.Screen
        name="notification"
        options={{ title: "" }}
        component={Notification}
      />
      <Tab.Screen name="profile" options={{ title: "" }} component={Profile} />
    </Tab.Navigator>
  );
};
export default Routes;


