// ============================================
// APP LAYOUT - NAVIGATION CONFIGURATION
// ============================================

import * as SystemUI from 'expo-system-ui';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { Platform } from 'react-native';

export default function Layout() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync('#0C0F14'); // match your app’s theme
  }, []);

  return (
    <>
      {/* ✅ Control status bar look */}
      <StatusBar
        style="light"
        backgroundColor="#0C0F14"
        translucent={false} // ensure solid background
      />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#0C0F14' },
          animation: 'slide_from_right',
        }}
      >
        {/* HOME SCREEN */}
        <Stack.Screen name="index" options={{ title: 'Home' }} />

        {/* MENU SCREEN */}
        <Stack.Screen name="menu" options={{ title: 'Menu' }} />

        {/* PRODUCT DETAIL SCREEN */}
        <Stack.Screen name="product/[id]" options={{ title: 'Product Detail' }} />
      </Stack>
    </>
  );
}
