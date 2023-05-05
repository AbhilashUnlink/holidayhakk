import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import color from "./config/color";
import About from "./screens/auth/About";
import Login from "./screens/auth/Login";
import Settings from "./screens/Settings";
import CustomDrawer from "./components/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import BottomTabNavigator from "./components/BottomTabNavigator";
import Register from "./screens/auth/Register";
import ForgotPassword from "./screens/auth/ForgotPassword";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          // drawerPosition: "right",
          headerStyle: { backgroundColor: color.white },
          drawerActiveTintColor: color.purple,
          drawerInactiveTintColor: color.black,
          headerShown: false,
          drawerLabelStyle: { marginLeft: -25 },
        }}
        initialRouteName="Login"
      >
        <Drawer.Screen
          name="Home !"
          component={BottomTabNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Register"
          component={Register}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Forgot"
          component={ForgotPassword}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="star-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Login"
          // initialParams={{ setRole }}
          component={Login}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="timer-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="settings-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
