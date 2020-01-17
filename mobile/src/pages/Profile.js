import React from 'react';
import {WebView} from 'react-native-webview';

function Profile({ navigation }){
  const github_user = navigation.getParam('github_user');
  return <WebView style={{flex:1}} source={{uri:`https://github.com/${github_user}`}} />;
}

export default Profile;