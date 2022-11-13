import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Message = ({ message }) => {
    const isMyMessage = () => {
        return message.user.id === 'u1'
    }


    return (
        <View style={[styles.container, {
            backgroundColor: isMyMessage() ? "#DCF8C5" : "white",
            alignSelf: isMyMessage() ? "flex-end" : "flex-start"
        }
        ]}
        >
            <Text>{message.text}</Text>
            <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        padding: 10,
        margin: 5,
        borderRadius: 10,
        maxWidth: "80%"
    },
    time: {
        alignSelf: 'flex-end',
        color: 'gray'
    }
})

export default Message;