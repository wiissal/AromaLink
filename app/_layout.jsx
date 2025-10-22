// ============================================
// APP LAYOUT - NAVIGATION CONFIGURATION
// This file sets up the navigation structure
// for the entire app using Expo Router
// ============================================

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        // Hide the default header for all screens
        headerShown: false,
        
        // Set background color for all screens
        contentStyle: { backgroundColor: '#0C0F14' },
        
        // Animation when navigating between screens
        animation: 'slide_from_right',
      }}
    >
      {/* ============================================ */}
      {/* HOME SCREEN */}
      {/* Route: / */}
      {/* ============================================ */}
      <Stack.Screen 
        name="index" 
        options={{
          title: 'Home'
        }}
      />

      {/* ============================================ */}
      {/* MENU SCREEN */}
      {/* Route: /menu */}
      {/* ============================================ */}
      <Stack.Screen 
        name="menu" 
        options={{
          title: 'Menu'
        }}
      />

      {/* ============================================ */}
      {/* PRODUCT DETAIL SCREEN */}
      {/* Route: /product/[id] */}
      {/* Dynamic route with ID parameter */}
      {/* ============================================ */}
      <Stack.Screen 
        name="product/[id]" 
        options={{
          title: 'Product Detail'
        }}
      />
    </Stack>
  );
}