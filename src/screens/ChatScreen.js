import { View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Message from '../components/Message'
import bg from "../../assets/images/BG.png"
import message from "../../assets/data/messages.json"
import InputBox from '../components/InputBox'

// console.log(message)

const ChatScreen = () => {

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.bg}
  >
    <ImageBackground source={bg} style= {styles.bg}>
      <FlatList 
      data={message} 
      renderItem={({item}) => <Message message={item}/>}
      style={styles.list}
      inverted
      />
      <InputBox />
    </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    bg:{
        flex: 1
    },
    list:{
        padding: 10
    }
})

export default ChatScreen