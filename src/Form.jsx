import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: "", logitude: "", name: "" };
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
          onChangeText={(latitude) => this.setState({ latitude })}
        />
        <TextInput
          placeholder="Enter log"
          style={styles.textInput}
          onChangeText={(longitude) => this.setState({ longitude })}
        />
        <Button
          title="Send"
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate(
              "MapScreen",
              {
                name: this.state.name,
              },
              { latitude: this.state.latitude },
              { longitude: this.state.logitude }
            )
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
