import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { FoodList } from '../../components/foodList';
import api from '../../services/api';

export function Search(){
  const route = useRoute();
  const [receipes, setReceipes] = useState([]);

  useEffect(() => {
    async function fetchReceipes(){
      const response = await api.get(`/foods?name_like=${route.params?.name}`);
      setReceipes(response.data);
    }

    fetchReceipes();
  }, [route.params?.name])

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <FoodList data={item} />}
        ListEmptyComponent={() => <Text style={styles.text}>Não encontramos o que você está buscando.</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEA',
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },

  text: {
    fontSize: 16
  }
})