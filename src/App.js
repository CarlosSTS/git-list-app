import React from 'react';
import {LogBox, StatusBar} from "react-native"
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./routes"
import "./Config/ReactotronConfig";
LogBox.ignoreLogs([
"Failed child context type: Invalid child context `virtualizedCell.cellKey` of type `number` supplied to `CellRenderer`, expected `string`."
]);

const App = () => {
  return(
<NavigationContainer>
<Routes />
<StatusBar barStyle="light-content" backgroundColor="#7157c1" translucent={false}/>
</NavigationContainer>
  ) 
}

export default App;