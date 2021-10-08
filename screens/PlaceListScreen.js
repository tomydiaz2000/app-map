import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import PlaceItem from "../components/PlaceItem";

const PlaceListScreen = ({ navigation }) => {
  const places = useSelector((state) => state.places.places);
  console.log(places);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Nueva"
            iconName="md-add"
            onPress={() => navigation.navigate("Nuevo")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <FlatList
      data={places}
      keyExtract={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.image}
          title={itemData.item.title}
          address={null}
          onSelect={() => {}}
        />
      )}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlaceListScreen;
