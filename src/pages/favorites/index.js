import { View, Text, StyleSheet } from "react-native";

export default function Favorites(){
  return (
    <View style={styles.container}>
      <Text>Página Favoritos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  }
})