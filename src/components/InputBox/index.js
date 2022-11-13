import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {useState} from "react"

const InputBox = () => {
    const [message, setMessage] = useState("")
    const onSend = () => {
        console.warn("Sending a Message" , message)
        setMessage('');
    }

  
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput value={message} onChangeText={setMessage} style={styles.input} />
      <MaterialIcons onPress={onSend} style={styles.send} name="send" size={24} color="white" />
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "whitesmoke",
      padding: 5,
      alignItems: "center",
    },
    input: {
      fontSize: 18,
      flex: 1,
      backgroundColor: "white",
      padding: 6,
      paddingHorizontal: 10,
      marginHorizontal: 10,

      borderRadius: 50,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "lightgray",
    },
    send: {
      backgroundColor: "royalblue",
      padding: 7,
      borderRadius: 20,
      overflow: "hidden",
    },
  });
export default InputBox;