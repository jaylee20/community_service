import React from 'react';
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
import colors from '../reusable_styles/colors';
import Icon from '../components/Icon';
import ListItemSeperator from '../components/ListItemSeperator';

const menuItems = [
  { title: 'My Events',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.lightYellow,
    }
  },
  { title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    }
  },
  { title: 'Log Out',
    icon: {
      name: 'logout',
      backgroundColor: colors.primary
    }
  }
];

function AccountScreen(props) {
  return (
    <SafeAreaView style={ styles.screen }>
      <View style={ styles.container }>
        <ListItem
          title='Thanks for listening!'
          image={require('../assets/ProfilePic.png')}
        />
      </View>
      <View style={ styles.container }>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ ListItemSeperator }
          renderItem={({ item }) =>
            <ListItem
            title={ item.title }
            IconComponent={
              <Icon
                name={item.icon.name}
                backgroundColor={ item.icon.backgroundColor }
              />
            }
            />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 10,
  },
});

export default AccountScreen;