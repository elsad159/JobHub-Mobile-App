import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function WishedContent() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75%",
        width: "60%",
        alignSelf: "center"
      }}
    >
      <FontAwesome name="heart-o" size={100} />
      <Text style={{ fontSize: 23, fontWeight: "700", marginTop: 25, textAlign: "center", marginBottom: 15 }}>
        Vakansiyanı seçilmişlərə əlavə et
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontWeight: "200",
          textAlign: "center",
        }}
      >
        Siz daha sonra geri qayıda bilərsiz və vakansiyaya müraciyət edə bilərsiniz
      </Text>
    </View>
  );
}

export default WishedContent;
