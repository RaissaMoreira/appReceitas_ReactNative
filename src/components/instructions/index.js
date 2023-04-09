import { Text, View, StyleSheet } from "react-native";

export function Instructions({ data, index }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{index + 1} - </Text>
      <Text style={styles.text}>{data.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    flexDirection: "row",
    padding: 8,
  },

  name: {
    color: '#a953fc',
    fontWeight: 'bold',
    fontSize: 18,
  },

  text: {
    lineHeight: 20,
  }
})