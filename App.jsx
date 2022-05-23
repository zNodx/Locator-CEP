import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import api_client from "./src/config/api_client";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function App() {

  const [cep, setCep] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite o cep desejado</Text>
        <TextInput 
        style={styles.input}
        placeholder="Digite o cep" 
        onChangeText={(text) => setCep(text)}
        value={cep}
        keyboardType="numeric"
        
        />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.button,{backgroundColor: "#0066CC"}]}>
            <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor: "#fc3b38"}]}>
            <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.result}>
        <Text style={styles.itemText}>CEP: </Text>
        <Text style={styles.itemText}>Logradouro: </Text>
        <Text style={styles.itemText}>Bairro: </Text>
        <Text style={styles.itemText}>Cidade: </Text>
        <Text style={styles.itemText}>Estado: </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    marginTop:25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  result: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 22,
  }
});
