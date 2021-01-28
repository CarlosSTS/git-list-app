import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import User from "./pages/User"
import Main from "./pages/Main";
import Star from "./pages/Star";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign: "center",
      headerBackTitleVisible: false,

      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#7159c1",
      },
      headerTitleStyle: {
        fontFamily: "Quicksand-Bold"
      },
    }}
    >
      
      <Stack.Screen name="Main" component={Main}
        options={{ title: "Usuário" }}
      />
      <Stack.Screen name="User" component={User}
        options={({ route }) => ({ title: route.params.user.name })}
      />
      <Stack.Screen name="Star" component={Star}
        options={({ route }) => ({ title: route.params.stars.name })}
      />

    </Stack.Navigator>

  )
}

export default Routes;