import React from "react";
import { View, ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

const CardsScrollView = () => {
  const cards = [
    {
      id: 1,
      title: "Junior React Native",
      views: "1 View",
      iconName: "md-time-outline",
    },
    {
      id: 2,
      title: "Senior React Native",
      views: "3 Views",
      iconName: "location-outline",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      views: "10 Views",
      iconName: "document-text-outline",
    },
    {
      id: 4,
      title: "Frontend Engineer",
      views: "5 Views",
      iconName: "ios-document-attach-outline",
    },
  ];

  return (
    <ScrollView style={{marginRight: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
      {cards.map((card) => (
        <Card
          key={card.id}
          containerStyle={{
            width: 150,
            height: 119,
            paddingLeft: 10,
            paddingBottom:15, 
            paddingTop: 5,
            marginLeft: 5,
            marginRight: 5,
            borderRadius: 6,
            shadowColor: "#000",
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowOpacity: 0.03,
            shadowRadius: 3,
            elevation: 4,
            backgroundColor: "white",
          }}
        >
          <Ionicons
            name={card.iconName}
            size={25}
            style={{ marginBottom: 25 }}
          />
          <View style={{ width: "100%" }}>
            <Text style={{ fontSize: 14, marginBottom: 5 }}>{card.title}</Text>
            <Text style={{ color: "#e6e6e5" }}>{card.views}</Text>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

export default CardsScrollView;
