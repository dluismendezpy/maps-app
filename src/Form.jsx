import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", latitude: "", longitude: "" };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter name"
          style={styles.textInput}
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder="Enter lat"
          style={styles.textInput}
          keyboardType="numbers-and-punctuation"
          onChangeText={(latitude) => this.setState({ latitude })}
        />
        <TextInput
          placeholder="Enter log"
          style={styles.textInput}
          keyboardType="numbers-and-punctuation"
          onChangeText={(longitude) => this.setState({ longitude })}
        />
        <Button
          title="Send"
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate("MapScreen", {
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
    margin: 10,
    alignItems: "center",
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
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

export default Form;
