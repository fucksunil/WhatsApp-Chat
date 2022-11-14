import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView  } from 'react-native';
import Navigator from './src/navigation';

// import ChatScreen from './src/screens/ChatScreen';
// import ChatsScreen from './src/screens/ChatsScreen';

export default function App() {

  return (
    <View style={styles.container}>
      {/* <ChatsScreen/> */}
      {/* <ChatScreen/> */}
      <Navigator/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
