import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="notification" component={NotificationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default MyDrawer;
