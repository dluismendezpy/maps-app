import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GetData from "./src/GetData";
import MapScreen from "./src/MapScreen";

const App = createStackNavigator({
  Datos: { screen: GetData },
  Mapa: { screen: MapScreen },
});

export default createAppContainer(App);
