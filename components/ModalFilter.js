import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal as RNModal,
  Switch,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useState } from "react";

const Modal = ({ visible, onClose }) => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [selected, setSelected] = useState(1);
  const [valyuta, setValyuta] = useState(1);
  const [exper, setExper] = useState(1);
  const [typeJob, setTypeJob] = useState(1);
  const [shareTime, setShareTime] = useState(1);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [cashShow, setCashShow] = useState(false);
  const toggleSwitchCash = () => setCashShow((previousState) => !previousState);

  const handlePositionChange = (newText) => {
    setPosition(newText);
  };

  const handleCompanyChange = (newText) => {
    setCompany(newText);
  };

  const handlePress = (num) => {
    setSelected(num);
  };

  const handleCheckValyuta = (num) => {
    setValyuta(num);
  };

  const handleCheckExper = (num) => {
    setExper(num);
  };

  const handleCheckTypeJob = (num) => {
    setTypeJob(num);
  };

  const handleCheckShareTime = (num) => {
    setShareTime(num);
  };

  return (
    <RNModal visible={visible} animationType="slide" transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 15,
          paddingBottom: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ margin: 16 }} onPress={onClose}>
            <AntDesign name="close" size={25} />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Filtr</Text>
          <TouchableOpacity style={{ margin: 16 }} onPress={onClose}>
            <Text style={{ color: "#0fb3d0", fontSize: 17 }}>Sıfırla</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ position: "relative" }} verticalScroll={true}>
          <View
            style={{ width: "92%", marginHorizontal: 15, marginBottom: 90 }}
          >
            <View>
              <TextInput
                value={position}
                onChangeText={handlePositionChange}
                placeholder="Axtardıqınz peşə, açar sözlər"
                placeholderTextColor="#ccc"
                underlineColorAndroid="#ccc"
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  fontSize: 16,
                  paddingLeft: 5,
                  paddingBottom: 12,
                  marginTop: 15,
                }}
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  color: "#d7dade",
                  marginBottom: 15,
                  fontSize: 17,
                  marginLeft: 5,
                }}
              >
                Axtarış ancaq
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => handlePress(1)}
                  style={{
                    borderRadius: 25,
                    backgroundColor: selected === 1 ? "#d7dade" : "#fff",
                    marginRight: 10,
                    borderWidth: 1,
                    borderColor: "#d7dade",
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                  }}
                >
                  <Text
                    style={{
                      color: selected === 1 ? "black" : "black",
                    }}
                  >
                    Vakansiya ilə
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handlePress(2)}
                  style={{
                    borderRadius: 25,
                    backgroundColor: selected === 2 ? "#d7dade" : "#fff",
                    marginRight: 10,
                    borderWidth: 1,
                    borderColor: "#d7dade",
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                  }}
                >
                  <Text style={{ color: selected === 2 ? "black" : "black" }}>
                    Şirkət ilə
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handlePress(3)}
                  style={{
                    borderRadius: 25,
                    backgroundColor: selected === 3 ? "#d7dade" : "#fff",
                    marginRight: 10,
                    borderWidth: 1,
                    borderColor: "#d7dade",
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                  }}
                >
                  <Text style={{ color: selected === 3 ? "black" : "black" }}>
                    Şirkət üzərində
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <TextInput
                value={company}
                onChangeText={handleCompanyChange}
                placeholder="Şirkətin adı"
                placeholderTextColor="#ccc"
                underlineColorAndroid="#ccc"
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  fontSize: 16,
                  paddingLeft: 5,
                  paddingBottom: 12,
                  marginTop: 15,
                }}
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <TextInput
                value={company}
                onChangeText={handleCompanyChange}
                placeholder="Gəlir istəyi"
                placeholderTextColor="#ccc"
                underlineColorAndroid="#ccc"
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  fontSize: 16,
                  paddingLeft: 5,
                  paddingBottom: 12,
                  marginTop: 15,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <TouchableOpacity
                  onPress={() => handleCheckValyuta(1)}
                  style={{
                    borderRadius: 25,
                    backgroundColor: valyuta === 1 ? "#d7dade" : "#fff",
                    marginRight: 10,
                    borderWidth: 1,
                    borderColor: "#d7dade",
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                  }}
                >
                  <Text
                    style={{
                      color: valyuta === 1 ? "black" : "black",
                    }}
                  >
                    AZN
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleCheckValyuta(2)}
                  style={{
                    borderRadius: 25,
                    backgroundColor: valyuta === 2 ? "#d7dade" : "#fff",
                    marginRight: 10,
                    borderWidth: 1,
                    borderColor: "#d7dade",
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                  }}
                >
                  <Text style={{ color: valyuta === 2 ? "black" : "black" }}>
                    USD
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleCheckValyuta(3)}
                  style={{
                    borderRadius: 25,
                    backgroundColor: valyuta === 3 ? "#d7dade" : "#fff",
                    marginRight: 10,
                    borderWidth: 1,
                    borderColor: "#d7dade",
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                  }}
                >
                  <Text style={{ color: valyuta === 3 ? "black" : "black" }}>
                    EUR
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  color: "black",
                  marginBottom: 15,
                  fontSize: 18,
                  marginLeft: 5,
                  fontWeight: "500",
                }}
              >
                Tələb olunan təcrübə aralıqı
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() => handleCheckExper(1)}
                    style={{
                      borderRadius: 25,
                      backgroundColor: exper === 1 ? "#d7dade" : "#fff",
                      marginRight: 10,
                      borderWidth: 1,
                      borderColor: "#d7dade",
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: exper === 1 ? "black" : "black",
                      }}
                    >
                      Təcrübəsiz
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleCheckExper(2)}
                    style={{
                      borderRadius: 25,
                      backgroundColor: exper === 2 ? "#d7dade" : "#fff",
                      marginRight: 10,
                      borderWidth: 1,
                      borderColor: "#d7dade",
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                    }}
                  >
                    <Text style={{ color: exper === 2 ? "black" : "black" }}>
                      1 ildən 3 ilə qədər
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleCheckExper(3)}
                    style={{
                      borderRadius: 25,
                      backgroundColor: exper === 3 ? "#d7dade" : "#fff",
                      marginRight: 10,
                      borderWidth: 1,
                      borderColor: "#d7dade",
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                    }}
                  >
                    <Text style={{ color: exper === 3 ? "black" : "black" }}>
                      3 ildən 6 ilə qədər
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleCheckExper(4)}
                    style={{
                      borderRadius: 25,
                      backgroundColor: exper === 4 ? "#d7dade" : "#fff",
                      marginRight: 10,
                      borderWidth: 1,
                      borderColor: "#d7dade",
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                    }}
                  >
                    <Text style={{ color: exper === 4 ? "black" : "black" }}>
                      6 ildən chox
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  color: "black",
                  marginBottom: 15,
                  fontSize: 18,
                  marginLeft: 5,
                  fontWeight: "500",
                }}
              >
                İş növü
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() => handleCheckTypeJob(1)}
                    style={{
                      borderRadius: 25,
                      backgroundColor: typeJob === 1 ? "#d7dade" : "#fff",
                      marginRight: 10,
                      borderWidth: 1,
                      borderColor: "#d7dade",
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: typeJob === 1 ? "black" : "black",
                      }}
                    >
                      Tam ştat
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleCheckTypeJob(2)}
                    style={{
                      borderRadius: 25,
                      backgroundColor: typeJob === 2 ? "#d7dade" : "#fff",
                      marginRight: 10,
                      borderWidth: 1,
                      borderColor: "#d7dade",
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                    }}
                  >
                    <Text style={{ color: typeJob === 2 ? "black" : "black" }}>
                      Yarım ştat
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleCheckTypeJob(3)}
                    style={{
                      borderRadius: 25,
                      backgroundColor: typeJob === 3 ? "#d7dade" : "#fff",
                      marginRight: 10,
                      borderWidth: 1,
                      borderColor: "#d7dade",
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                    }}
                  >
                    <Text style={{ color: typeJob === 3 ? "black" : "black" }}>
                      Proyekt işi
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleCheckTypeJob(4)}
                    style={{
                      borderRadius: 25,
                      backgroundColor: typeJob === 4 ? "#d7dade" : "#fff",
                      marginRight: 10,
                      borderWidth: 1,
                      borderColor: "#d7dade",
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                    }}
                  >
                    <Text style={{ color: typeJob === 4 ? "black" : "black" }}>
                      Təcrübə Programı
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  color: "black",
                  marginBottom: 15,
                  fontSize: 18,
                  marginLeft: 5,
                  fontWeight: "500",
                }}
              >
                Elanın paylaşıldıqı vaxt
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() => handleCheckShareTime(1)}
                    style={{
                      borderRadius: 25,
                      backgroundColor: shareTime === 1 ? "#d7dade" : "#fff",
                      marginRight: 10,
                      borderWidth: 1,
                      borderColor: "#d7dade",
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: shareTime === 1 ? "black" : "black",
                      }}
                    >
                      Bu ay ərzində
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleCheckShareTime(2)}
                    style={{
                      borderRadius: 25,
                      backgroundColor: shareTime === 2 ? "#d7dade" : "#fff",
                      marginRight: 10,
                      borderWidth: 1,
                      borderColor: "#d7dade",
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                    }}
                  >
                    <Text
                      style={{ color: shareTime === 2 ? "black" : "black" }}
                    >
                      Axırıncı hefte ərzində
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleCheckShareTime(3)}
                    style={{
                      borderRadius: 25,
                      backgroundColor: shareTime === 3 ? "#d7dade" : "#fff",
                      marginRight: 10,
                      borderWidth: 1,
                      borderColor: "#d7dade",
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                    }}
                  >
                    <Text
                      style={{ color: shareTime === 3 ? "black" : "black" }}
                    >
                      Son üç gün ərzində
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleCheckShareTime(4)}
                    style={{
                      borderRadius: 25,
                      backgroundColor: shareTime === 4 ? "#d7dade" : "#fff",
                      marginRight: 10,
                      borderWidth: 1,
                      borderColor: "#d7dade",
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                    }}
                  >
                    <Text
                      style={{ color: shareTime === 4 ? "black" : "black" }}
                    >
                      Bu günün elanları
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>

            <View style={{ marginTop: 25 }}>
              <Text
                style={{
                  color: "black",
                  fontSize: 18,
                  marginLeft: 5,
                  fontWeight: "500",
                }}
              >
                Axtardiqınız vakansiya tipleri
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                  paddingLeft: 8,
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "300" }}>
                  Daha chox məlumatlı vakansiyalar
                </Text>
                <Switch
                  trackColor={{ false: "blue", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "blue" : "grey"}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                  paddingLeft: 8,
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "300" }}>
                  Yalnız göstərilən gəlir ilə
                </Text>
                <Switch
                  trackColor={{ false: "blue", true: "#81b0ff" }}
                  thumbColor={cashShow ? "blue" : "grey"}
                  onValueChange={toggleSwitchCash}
                  value={cashShow}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: "#4267b2",
            paddingVertical: 15,
            width: "90 %",
            position: "absolute",
            bottom: 20,
            alignSelf: "center",
            borderRadius: 7,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 17, color: "white" }}>
            Vakansiyaları görsət
          </Text>
        </TouchableOpacity>
      </View>
    </RNModal>
  );
};

export default Modal;
