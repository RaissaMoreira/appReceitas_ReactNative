import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { Routes } from "./src/routes";

export default function App(){
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}