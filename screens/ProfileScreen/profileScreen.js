import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Modal,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import ProfileContent from "../../components/profileContent";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import registerUser from "../../store/userSlice/userSlice";
import { addUser } from "../../store/userSlice/userSlice";

const ProfileScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(registerUser({ email, password, confirmPassword }));
    closeModal();
  };

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const [isJobHubRegister, setIsJobHubRegister] = useState(false);

  const toggleJobHubModal = () => {
    setIsJobHubRegister(!isJobHubRegister);
  };

  const closeJobHubModal = () => {
    setIsJobHubRegister(false);
  };

  const [registerModal, setRegisterModal] = useState(false);

  const toggleRegisterModal = () => {
    setRegisterModal(!registerModal);
  };
  const closeRegisterHubModal = () => {
    setRegisterModal(false);
  };

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
          Profil
        </Text>
        <FontAwesome
          style={{ position: "absolute", right: 20, top: 10 }}
          name="bars"
          size={20}
        />
      </View>
      <ProfileContent />

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={toggleModal}
          style={{
            paddingHorizontal: 45,
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
            Resume yarat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal} style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, color: "#032757" }}>
            Şəxsi hesaba daxil ol
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
        style={{ position: "relative" }}
      >
        <AntDesign
          name="close"
          size={30}
          color={"black"}
          style={{ position: "absolute", right: 15, bottom: 373, zIndex: 999 }}
          onPress={closeModal}
        />

        <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              backgroundColor: "white",
              padding: 35,
              alignItems: "center",
              elevation: 5,
              alignSelf: "center",
              borderTopEndRadius: 15,
              borderTopStartRadius: 15,
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: 600, marginBottom: 15 }}>
                Giriş və Reqistrasiya
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: 200,
                  marginBottom: 15,
                }}
              >
                Google, Facebook və ayrı platformalar ilə giriş edə bilərsiz!
              </Text>
              <View style={styles.container}>
                <View style={{ backgroundColor: "#032757", borderRadius: 5 }}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={toggleJobHubModal}
                  >
                    <Image
                      source={require("../../assets/buttonİcon.png")}
                      style={{ width: 25, height: 25, marginRight: 10 }}
                    />
                    <Text
                      style={{ color: "white", fontSize: 18, fontWeight: 600 }}
                    >
                      JobHub-la giriş et
                    </Text>
                    <AntDesign
                      name="google"
                      size={25}
                      color={"transparent"}
                      style={{ marginLeft: 10 }}
                    />
                  </TouchableOpacity>
                  <Modal
                    style={{ position: "relative" }}
                    animationType="slide"
                    transparent={true}
                    visible={isJobHubRegister}
                  >
                    <AntDesign
                      name="close"
                      size={30}
                      color={"black"}
                      style={{
                        position: "absolute",
                        right: 9,
                        top: 280,
                        zIndex: 998,
                      }}
                      onPress={closeJobHubModal}
                    />
                    <View style={styles.modal}>
                      <Text
                        style={{
                          fontSize: 38,
                          paddingLeft: 20,
                          paddingBottom: 35,
                        }}
                      >
                        Giriş və registrasiya
                      </Text>

                      <View style={styles.inputContainer}>
                        <Text style={styles.label}>
                          Elektron poçtunuzu daxil edin :
                        </Text>
                        <TextInput
                          style={styles.input}
                          placeholder="E-mail adresivizi yazin"
                        />
                      </View>
                      <View style={styles.inputContainer}>
                        <Text style={styles.label}>
                          Parolunuzu daxil edin :
                        </Text>
                        <TextInput
                          style={styles.input}
                          placeholder="********"
                          secureTextEntry={true}
                        />
                      </View>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#032757",
                          padding: 10,
                          borderRadius: 5,
                          alignItems: "center",
                          width: "85%",
                          alignSelf: "center",
                          marginTop: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 18,
                          }}
                        >
                          Girish et
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          color: "black",
                          fontSize: 14,
                          textAlign: "center",
                          marginTop: 15,
                        }}
                      >
                        Qeydiyyatdan keçməmisiniz? Qeydiyyatdan keçin
                      </Text>
                      <View>
                        <TouchableOpacity
                          style={{
                            backgroundColor: "green",
                            padding: 10,
                            borderRadius: 5,
                            alignItems: "center",
                            width: "85%",
                            alignSelf: "center",
                            marginTop: 10,
                          }}
                          onPress={() => {
                            toggleRegisterModal();
                          }}
                        >
                          <Text style={{ fontSize: 18, color: "white" }}>
                            Qeydiyyatdan keç
                          </Text>
                        </TouchableOpacity>

                        <Modal
                          style={{ position: "relative" }}
                          animationType="slide"
                          transparent={true}
                          visible={registerModal}
                        >
                          <AntDesign
                            name="close"
                            size={30}
                            color={"black"}
                            style={{
                              position: "absolute",
                              right: 9,
                              top: 280,
                              zIndex: 998,
                            }}
                            onPress={closeRegisterHubModal}
                          />
                          <View style={styles.modal}>
                            <Text
                              style={{
                                fontSize: 38,
                                paddingLeft: 20,
                                paddingBottom: 35,
                              }}
                            >
                              Registrasiya
                            </Text>

                            <View style={styles.inputContainer}>
                              <Text style={styles.label}>
                                Elektron poçtunuzu daxil edin :
                              </Text>
                              <TextInput
                                style={styles.input}
                                placeholder="E-mail adresivizi yazin"
                                value={email}
                                onChangeText={(value) => setEmail(value)}
                              />
                            </View>
                            <View style={styles.inputContainer}>
                              <Text style={styles.label}>
                                Parolunuzu daxil edin :
                              </Text>
                              <TextInput
                                style={styles.input}
                                placeholder="********"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(value) => setPassword(value)}
                              />
                            </View>
                            <View style={styles.inputContainer}>
                              <Text style={styles.label}>
                                Parolunuzu tekrar edin :
                              </Text>
                              <TextInput
                                style={styles.input}
                                placeholder="********"
                                secureTextEntry={true}
                                value={confirmPassword}
                                onChangeText={(value) =>
                                  setConfirmPassword(value)
                                }
                              />
                            </View>
                            <TouchableOpacity
                              style={{
                                backgroundColor: "green",
                                padding: 10,
                                borderRadius: 5,
                                alignItems: "center",
                                width: "85%",
                                alignSelf: "center",
                                marginTop: 10,
                              }}
                              onPress={handleRegister}
                            >
                              <Text
                                style={{
                                  color: "white",
                                  fontSize: 18,
                                }}
                              >
                                Təstiq et
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </Modal>
                      </View>
                    </View>
                  </Modal>
                </View>
              </View>
              <View style={styles.container}>
                <LinearGradient
                  colors={["#4285f4", "#34a853", "#fbbc05", "#ea4335"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradient}
                >
                  <TouchableOpacity style={styles.button}>
                    <AntDesign
                      name="google"
                      size={25}
                      color={"white"}
                      style={{ marginRight: 10 }}
                    />
                    <Text
                      style={{ color: "white", fontSize: 18, fontWeight: 600 }}
                    >
                      Google ilə giriş et
                    </Text>
                    <AntDesign
                      name="google"
                      size={25}
                      color={"transparent"}
                      style={{ marginLeft: 10 }}
                    />
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View style={styles.container}>
                <View style={{ backgroundColor: "black", borderRadius: 5 }}>
                  <TouchableOpacity style={styles.button}>
                    <FontAwesome
                      name="github"
                      size={24}
                      color={"white"}
                      style={{ marginRight: 10 }}
                    />
                    <Text
                      style={{ color: "white", fontSize: 18, fontWeight: 600 }}
                    >
                      GitHub ilə giriş et
                    </Text>
                    <AntDesign
                      name="google"
                      size={25}
                      color={"transparent"}
                      style={{ marginLeft: 10 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.container}>
                <View style={{ backgroundColor: "#5890FF", borderRadius: 5 }}>
                  <TouchableOpacity style={styles.button}>
                    <FontAwesome
                      name="facebook"
                      size={24}
                      color={"white"}
                      style={{ marginRight: 10 }}
                    />
                    <Text
                      style={{ color: "white", fontSize: 18, fontWeight: 600 }}
                    >
                      Facebook ilə giriş et
                    </Text>
                    <AntDesign
                      name="google"
                      size={25}
                      color={"transparent"}
                      style={{ marginLeft: 10 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Text
              style={{ fontSize: 11, textAlign: "center", fontWeight: 200 }}
            >
              Tətbiqi istifadə etməyə davam edərək siz razılaşmış olursunuz.
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  gradient: {
    flex: 1,
    borderRadius: 6,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    width: 330,
    justifyContent: "space-between",
  },
  modal: {
    flex: 1,
    marginTop: 265,
    backgroundColor: "white",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    paddingTop: 35,
  },
  input: {
    backgroundColor: "#032757",
    borderRadius: 5,
    padding: 10,
    width: "85%",
    alignSelf: "center",
    marginBottom: 5,
    color: "white",
  },
  inputContainer: {
    alignItems: "start",
    justifyContent: "center",
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 32,
    color: "black",
  },
});

export default ProfileScreen;
