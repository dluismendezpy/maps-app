import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", latitude: "", longitude: "" };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Nombre..."
          style={styles.textInput}
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder="Latitud..."
          style={styles.textInput}
          keyboardType="numbers-and-punctuation"
          onChangeText={(latitude) => this.setState({ latitude })}
        />
        <TextInput
          placeholder="Longitud..."
          style={styles.textInput}
          keyboardType="numbers-and-punctuation"
          onChangeText={(longitude) => this.setState({ longitude })}
        />
        <Button
          title="Enviar"
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate("Map", {
              username: this.state.name,
              lat: this.state.latitude,
              long: this.state.longitude,
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  textInput: {
    margin: 20,
    alignItems: "center",
    height: 40,
    borderBottomWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
});
