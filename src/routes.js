import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

import Home from "./screens/Home";
import Accounts from "./screens/Accounts";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function goBackArrow(navigation) {
  return (
    <AntDesign
      name="arrowleft"
      style={{
        fontSize: 22,
        marginLeft: 15,
      }}
      onPress={() => navigation.goBack()}
    />
  );
}

function StackContas() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contas"
        component={Accounts}
        options={({ navigation }) => ({
          headerLeft: () => goBackArrow(navigation),
        })}
      />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Contas" component={StackContas} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
