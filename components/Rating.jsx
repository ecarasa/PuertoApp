import React from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";

const Star = ({ containerStyle, label, enabled, size = 35, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={containerStyle}>
      <Icon
        name={enabled ? "ios-star" : "ios-star-outline"}
        color="#FFCC00"
        type="ionicon"
        size={size}
      />
      <Text style={{ fontFamily: "GothamBook", paddingVertical: 10, textAlign: "center", fontSize: 12 }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Rating = ({ containerStyle, labels, rating, onChangeRating}) => {
  return (
    <View style={containerStyle}>
      <View style={styles.ratingContainer}>
        {labels.map((label, index) => {
          return (
            <Star
              key={index}
              enabled={index + 1 <= rating}
              label={label}
              onClick={() => onChangeRating(index+1)}
              containerStyle={{  width: "20%"  }}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Rating;
