import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import UserActivity from "../../components/userActivity";
import Modal from "../../components/ModalFilter";
import RecentCard from "../../components/recentsCard";
import RecVacancies from "../../components/RecVacancies";

const SearchScreen = () => {
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <SafeAreaView
      style={{
        width: "95%",
        marginLeft: 15,
        marginTop: 35,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TextInput
          style={{
            paddingLeft: 40,
            borderRadius: 5,
            width: "85%",
            height: 38,
            backgroundColor: "#d7dade",
            fontSize: 16,
          }}
          value={text}
          onChangeText={handleTextChange}
          placeholder="Axtardığınız vakansiyanı yazın"
        />
        <AntDesign
          name="search1"
          size={20}
          color="#666"
          style={{ position: "absolute", left: 12, top: 9 }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#d7dade",
            borderRadius: 5,
            width: "10%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginLeft: 5,
          }}
          onPress={handleModalOpen}
        >
          <Entypo name="sound-mix" size={20} color="#666" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10, marginBottom: 50 }}>
        <UserActivity />
        <RecentCard />
        <RecVacancies />
      </ScrollView>
      {showModal && <Modal visible={showModal} onClose={handleModalClose} />}
    </SafeAreaView>
  );
};

export default SearchScreen;
