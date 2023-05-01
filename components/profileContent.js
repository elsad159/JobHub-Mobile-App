import React from "react";
import { View, Text } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

function ProfileContent() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75%",
        width: "60%",
        alignSelf: "center",
      }}
    >
      <Ionicons name="document-text-outline" size={100} />
      <Text style={{ fontSize: 23, fontWeight: "700", marginTop: 25 }}>
        Özüvə resume yarat
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontWeight: "200",
          textAlign: "center",
          marginBottom: 15,
        }}
      >
        Özünüz və bacarıqlarınızla haqqında ətraflı məlumatlar verin ki,
        işəgötürən sizi daha sürətli tapa biləsin
      </Text>
    </View>
  );
}

export default ProfileContent;
