import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Icon } from "react-native-elements";

const ScreenList = ({ menuOptions, navigation }) => {
  return (
    <View style={styles.container}>
      {menuOptions.map(({ title, routeName, icon }, index) => {
        return (
          <ListItem
            key={index}
            onPress={() => navigation.navigate(routeName)}
            containerStyle={styles.listItemContainer}
            bottomDivider
          >
            <Icon
              containerStyle={styles.iconContainer}
              name={icon.name}
              type={icon.type}
            />
            <ListItem.Content>
              <ListItem.Title style={styles.listItemTitle}>
                {title}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItemContainer: {
    padding: "3%",
  },
  listItemTitle: {
    fontFamily: "GothamBook",
  },
  gothamBookFont: {
    fontFamily: "GothamBook",
  },
  iconContainer: {
    width: 30,
  },
});

export default ScreenList;
