import ProfileScreen from "../screens/ProfileScreen/profileScreen";
import WishedScreen from "../screens/WishedVacanciesScreen/wishedScreen";
import ChatScreen from "../screens/ChatScreen/chatScreen";
import SearchScreen from "../screens/SeacrhScreen/searchScreen";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Axtar"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Seçilmişlər"
        component={WishedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SMS"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbox-outline" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
