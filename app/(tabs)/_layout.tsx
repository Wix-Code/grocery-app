import { Tabs } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const links = [
    {
      name: 'shop',
      link: "/shop",
      title: "Shop",
      icon: <Ionicons />
    },
    {
    }
  ]
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          //tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}