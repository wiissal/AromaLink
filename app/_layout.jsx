// app/_layout.jsx  (or wherever your Layout component lives)
// ============================================
// APP LAYOUT - NAVIGATION CONFIGURATION (improved)
// ============================================

import React, { useEffect } from 'react';
import * as SystemUI from 'expo-system-ui';
import { StatusBar } from 'expo-status-bar';
import { Platform, View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const APP_BG = '#0C0F14';
const NAVBAR_COLOR = '#0C0F14'; // change to your coffee brown if you prefer '#4E342E'

function BottomNavFiller() {
  const insets = useSafeAreaInsets();
  // Provide a min height so it still looks good on devices with small insets
  const height = Math.max(16, insets.bottom || 0);
  return <View pointerEvents="none" style={[styles.filler, { height }]} />;
}

export default function Layout() {
  useEffect(() => {
    // perform any native system UI changes only on Android
    async function applySystemUI() {
      try {
        if (Platform.OS === 'android') {
          // Try to set the status / splash background (expo-system-ui)
          await SystemUI.setBackgroundColorAsync(APP_BG);

          // Try to set navigation bar color + button style (best-effort)
          // On many devices / Expo Go this may throw or be a no-op when edge-to-edge is enabled.
          try {
            await NavigationBar.setBackgroundColorAsync(NAVBAR_COLOR);
            await NavigationBar.setButtonStyleAsync('light'); // or 'dark'
          } catch (navErr) {
            // Not supported on this device or mode (edge-to-edge / Expo Go).
            // We swallow the error because we still render the bottom filler as fallback.
            // console.log('NavigationBar not supported in this environment', navErr);
          }
        }
      } catch (err) {
        // console.warn('SystemUI changes failed (non-fatal)', err);
      }
    }

    applySystemUI();
  }, []);

  return (
    <SafeAreaProvider>
      <>
        <StatusBar style="light" backgroundColor={APP_BG} translucent={false} />

        <View style={styles.container}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: APP_BG },
              animation: 'slide_from_right',
            }}
          >
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="menu" options={{ title: 'Menu' }} />
            <Stack.Screen name="product/[id]" options={{ title: 'Product Detail' }} />
          </Stack>

          {/* Always render the visual nav-bar filler so it looks consistent in Expo Go */}
          <BottomNavFiller />
        </View>
      </>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: APP_BG },
  filler: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: NAVBAR_COLOR,
    zIndex: 999, // ensure it's above background but non-interactive
  },
});
