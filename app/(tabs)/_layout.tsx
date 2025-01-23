import {  Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import React from 'react';
import FontAwesome from "@expo/vector-icons/FontAwesome"

export default function TabsLayout() {

  return (
    <>
      <Tabs screenOptions={{ header: () => null }} >
        <Tabs.Screen name="index" 
                      options={{ 
                        headerShown: false, 
                        title: 'Users',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                      }}/>
        <Tabs.Screen name="repository"
                      options={{ 
                        headerShown: false, 
                        title: 'Repositories',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="github" color={color} />, 
                      }} />
      </Tabs>
      <StatusBar style="auto" />
      </>

  );
}
