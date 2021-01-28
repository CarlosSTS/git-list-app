import React from 'react';
import { useRoute } from '@react-navigation/native';

import {WebView} from "react-native-webview"

const Star = () => {
  const route = useRoute();
  const stars = route.params.stars;

  return (
<>
  <WebView style={{ flex : 1}}
  source={{uri: `https://github.com/${stars.owner.login}/${stars.name}`}}/>
  </>
  )
}

export default Star;