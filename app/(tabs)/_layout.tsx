import { Tabs } from 'expo-router';
import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Image } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import cart from "@expo/vector-icons"

export default function TabLayout() {

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#53B175',
      tabBarStyle: {
        backgroundColor: 'white',
        //paddingTop: ,
        height: 70,
      }
    }}>
      <Tabs.Screen
        name="shop"
        options={{
          headerShown: false,
          title: 'Shop',
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontWeight: 700,
                fontSize: 12,
                color: focused ? "#53B175" : "#181725",
              }}
            >
              Shop
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => <Entypo name="shop" size={24} color={ focused ? "#53B175" : "#181725"} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontWeight: 700,
                fontSize: 12,
                color: focused ? "#53B175" : "#181725",
              }}
            >
              Explore
            </Text>
          ),
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name="clipboard-text-search-outline" size={24} color={ focused ? "#53B175" : "#181725"} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontWeight:700,
                fontSize: 12,
                color: focused ? "#53B175" : "#181725",
              }}
            >
              Cart
            </Text>
          ),
          title: 'Cart',
          tabBarIcon: ({ color, focused }) => <Ionicons name="cart-outline" size={24} color={ focused ? "#53B175" : "#181725"} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontWeight: 700,
                fontSize: 12,
                color: focused ? "#53B175" : "#181725",
              }}
            >
              Favorites
            </Text>
          ),
          title: 'Favorite',
          tabBarIcon: ({ color, focused }) => <AntDesign name="hearto" size={24} color={ focused ? "#53B175" : "#181725"} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontWeight: 700,
                fontSize: 12,
                color: focused ? "#53B175" : "#181725",
              }}
            >
              Account
            </Text>
          ),
          title: 'Account',
          tabBarIcon: ({ color, focused }) => <MaterialIcons name="manage-accounts" size={24} color={ focused ? "#53B175" : "#181725"} />,
        }}
      />
    </Tabs>
  );
}