import { View, TextInput, TouchableOpacity, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import {Logo} from "../../components/logo";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import api from '../../services/api';
import {FoodList} from '../../components/foodList';
import { useNavigation } from "@react-navigation/native";
import { Text as MotiText } from 'moti';

export function Home(){
  const [inputValue, setInputValue] = useState("");
  const [foods, setFoods] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function fetchApi(){
      const response = await api.get('/foods');
      setFoods(response.data);
    }

    fetchApi();
  }, [])

  function handleSearch() {
    if(!inputValue) return;

    let input = inputValue;
    setInputValue("");
    navigation.navigate("Search", {name: input});
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo/>
      <MotiText 
        style={styles.title}
        from={{
          opacity: 0,
          translateY: 15
        }}
        animate={{
          opacity: 1,
          translateY: 0
        }}
        transition={{
          delay: 100,
          type: 'timing',
          duration: 650
        }}
      >Encontre a receita</MotiText>

      <MotiText 
        style={styles.title}
        from={{
          opacity: 0,
          translateY: 18
        }}
        animate={{
          opacity: 1,
          translateY: 0
        }}
        transition={{
          delay: 200,
          type: 'timing',
          duration: 850
        }}
      >que combina com você</MotiText>

      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome da comida..."
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#a953fc" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={foods}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <FoodList data={item}/>}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEA',
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14
  },
  
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2F3A4C"
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