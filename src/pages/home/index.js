import { View, TextInput, TouchableOpacity, Text, StyleSheet, SafeAreaView } from "react-native";
import Logo from "../../components/logo";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function Home(){
  const [inputValue, setInputValue] = useState("");

  function handleSearch() {
    console.log(inputValue);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo/>
      <Text style={styles.title}>Encontre a receita</Text>
      <Text style={styles.title}>que combina com você</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome da comida..."
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#4cbe6c" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f9ff',
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14
  },
  
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0e0e0e"
  },

  form: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#fff",
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    width: "90%",
    maxWidth: "90%",
    height: 54
  }
})