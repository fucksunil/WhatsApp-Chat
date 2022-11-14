import { View, Text, FlatList } from 'react-native'
import chats from "../../assets/data/chats.json"
import ContactsListItem from '../components/ContactsListItem';

const ContactsScreen = () => {
    return (
        <FlatList
            data={chats}
            renderItem={({ item }) => <ContactsListItem user={item.user} />}
            style={{ backgroundColor: 'white' }}
        />
    )
}

export default ContactsScreen