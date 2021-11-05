import React, { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import EventItemDeleteAction from '../components/EventItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/ProfilePic.png'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/ProfilePic.png'),
  },
]

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter(m => m.id !== message.id);
    setMessages(newMessages);
  }

  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={ ({ item }) =>
          <ListItem
            title={ item.title }
            subtitle={ item.description }
            image={ item.image}
            onPress={() => console.log('Message Selected: ', item)}
            renderRightActions={ () =>
              <EventItemDeleteAction  onPress={() => handleDelete(item)}/> }
            refreshing={refreshing}
            onRefresh={() => {
              setMessages(
                [
                  {
                    id: 2,
                    title: 'T2',
                    description: 'D2',
                    image: require('../assets/ProfilePic.png'),
                  },
                ]
              )
            }}
          />
        }
        ItemSeparatorComponent={ ListItemSeperator }
      />
    </SafeAreaView>
  );
}

export default MessagesScreen;