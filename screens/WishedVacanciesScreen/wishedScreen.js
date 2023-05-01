import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import WishedContent from "../../components/wishedContent";

const WishedScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{ display: "flex", flexDirection: "row", position: "relative" }}
      >
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            marginLeft: 18,
            marginTop: 15,
          }}
        >
          Seçilmişlər
        </Text>
      </View>
      <WishedContent />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
            backgroundColor: "#032757",
            paddingBottom: 5,
            width: "50%",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white",
              paddingTop: 5,
              paddingBottom: 3,
            }}
          >
            Vakansiya axtar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, color: "#032757" }}>
            Şəxsi hesaba daxil ol
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WishedScreen;
