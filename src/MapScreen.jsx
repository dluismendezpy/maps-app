import * as React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Circle, Marker } from "react-native-maps";

export default function MapScreen(props) {
  let currentName = props.navigation.state.params.username;
  let currentLatitude = parseFloat(props.navigation.state.params.lat);
  let currentLongitude = parseFloat(props.navigation.state.params.long);

  const [pin, setPin] = React.useState({
    latitude: currentLatitude,
    longitude: currentLongitude,
  });
  const [region, setRegion] = React.useState({
    latitude: currentLatitude,
    longitude: currentLongitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
        mapType="standard"
        userInterfaceStyle="dark"
        showsBuildings={true}
        showsTraffic={true}
        showsScale={true}
        showsCompass={true}
        zoomEnabled={true}
        loadingEnabled={true}
        moveOnMarkerPress={true}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        />
        <Marker
          coordinate={pin}
          pinColor="red"
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag start", e.nativeEvent.coordinates);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>{currentName}, esta es tu ubicación</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={300} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
