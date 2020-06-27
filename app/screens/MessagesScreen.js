import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/charutha.jpeg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/charutha.jpeg')
  },

]

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // Delete message from messages array
    setMessages(messages.filter(m => m.id !== message.id));
    // Call the server to delete message from backend

  }
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() =>
              <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />)}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: 'T3',
              description: 'D3',
              image: require('../assets/charutha.jpeg')
            },
          ])
        }}
      />
    </Screen >
  )
}

const styles = StyleSheet.create({
})

export default MessagesScreen;
