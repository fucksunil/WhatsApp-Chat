import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Message from '../components/Message'
import bg from "../../assets/images/BG.png"
import message from "../../assets/data/messages.json"

// console.log(message)

const ChatScreen = () => {
  return (
    <ImageBackground source={bg} style= {styles.bg}>
      <FlatList 
      data={message} 
      renderItem={({item}) => <Message message={item}/>}
      style={styles.list}
      inverted
      />
    </ImageBackground>
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