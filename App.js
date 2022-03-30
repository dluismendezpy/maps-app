import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Form from "./src/Form";
import MapScreen from "./src/MapScreen";

const App = createStackNavigator({
  Form: { screen: Form },
  MapScreen: { screen: MapScreen },
});

export default createAppContainer(App);
