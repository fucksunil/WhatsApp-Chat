import { View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import Message from '../components/Message'
import bg from "../../assets/images/BG.png"
import message from "../../assets/data/messages.json"
import InputBox from '../components/InputBox'

// console.log(useRoute)

const ChatScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name })
  }, [route.params.name])

  // console.log(route)

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={message}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1
  },
  list: {
    padding: 10
  }
})

export default ChatScreen