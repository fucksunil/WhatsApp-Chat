import { View, Text, Image, StyleSheet, Pressable } from 'react-native'

import { useNavigation } from '@react-navigation/native';


import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ContactsListItem = ({ user }) => {
  const navigation = useNavigation()
  // console.log(navigation)
  return (
    <Pressable onPress={() => { }} style={styles.container}>
      {/* User Avatar */}
      <Image source={{ uri: user.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {user.name}
        </Text>

        <Text style={styles.subTitle} numberOfLines={2}>
            {user.status}
          </Text>
      </View>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "stretch",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    alignItems: 'center'
  },
  image: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomColor: "lightgray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  name: {
    fontWeight: "bold",
  },
  content:{},
  subTitle:{
    color: 'gray'
  }
});

export default ContactsListItem;