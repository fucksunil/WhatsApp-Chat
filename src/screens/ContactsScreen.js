import { useState, useEffect } from 'react';
import {FlatList } from 'react-native'
// import chats from "../../assets/data/chats.json"
import ContactsListItem from '../components/ContactsListItem';
import {API, graphqlOperation} from 'aws-amplify';
import {listUsers} from "../graphql/queries";

const ContactsScreen = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.graphql(graphqlOperation(listUsers)).then((result)=> {
            console.log(result)
            setUsers(result?.data?.listUsers?.items);
        })
    }, [])

    return (
        <FlatList
            data={users}
            renderItem={({ item }) => <ContactsListItem user={item} />}
            style={{ backgroundColor: 'white' }}
        />
    )
}

export default ContactsScreen