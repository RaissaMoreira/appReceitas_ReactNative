import { View, Text, StyleSheet } from "react-native";

export default function Search(){
  return (
    <View style={styles.container}>
      <Text>Página Buscar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  }
})