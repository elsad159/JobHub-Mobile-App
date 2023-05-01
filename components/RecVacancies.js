import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";

const RecVacancies = () => {
  const recVacancies = [
    {
      id: 1,
      vacancyName: "React Developer",
      located: "Bakı",
      companyName: "B2BBroker",
      publishTime: "Bugün",
    },
    {
      id: 2,
      vacancyName: "Angular Developer",
      located: "Bakı",
      companyName: "Tesla",
      publishTime: "2 gün əvvəl",
    },
    {
      id: 3,
      vacancyName: "Vue Developer",
      located: "Bakı",
      companyName: "QWErty Company",
      publishTime: "Dünən",
    },
    {
      id: 4,
      vacancyName: "Backend Developer",
      located: "Bakı",
      companyName: "Qmeter Company",
      publishTime: "Dünən",
    },
  ];

  return (
    <View>
      <Text
        style={{
          marginTop: 25,
          marginLeft: 10,
          fontSize: 20,
          fontWeight: "600",
          width: "80%",
        }}
      >
        Əvvəl axtardiqıvız vakansiyalara oxşar{" "}
      </Text>
      {recVacancies.map((recVacany) => (
        <TouchableOpacity key={recVacany.id}>
          <Card
            containerStyle={{
              width: "95%",
              height: 190,
              paddingLeft: 10,
              paddingTop: 5,
              marginLeft: 5,
              marginRight: 5,
              borderRadius: 7,
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
            <View style={{ width: "100%", padding: 4 }}>
              <Text style={{ fontSize: 20, marginBottom: 5 }}>
                {recVacany.vacancyName}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 2 }}>
                {recVacany.companyName}
                <Entypo name="check" size={15} />
              </Text>
              <View
                style={{
                  marginTop: 8,
                  fontSize: 16,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Entypo name="location-pin" size={15} />
                <Text style={{ marginLeft: 5 }}>{recVacany.located}</Text>
              </View>
              <View
                style={{ marginTop: 5, display: "flex", flexDirection: "row" }}
              >
                <Entypo name="calendar" size={15} />
                <Text style={{ marginLeft: 5 }}>{recVacany.publishTime}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: "95%",
                backgroundColor: "blue",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10,
                marginTop: 14,
                borderRadius: 25,
                paddingVertical: 12,
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Muraciyet et
              </Text>
            </TouchableOpacity>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RecVacancies;
