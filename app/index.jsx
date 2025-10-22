import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';


export default function Home() {
  const router = useRouter();


  // useEffect to log when screen loads
  useEffect(() => {
    console.log('Home screen loaded!');
  }, []);
  {/* Function to handle navigation to Menu screen */}
  const handleViewMenu = () => {
    router.push('/menu');
  };


  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200' }}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>


          {/* Cafe Name */}
          <Text style={styles.cafeName}>Local Café</Text>
          <Text style={styles.tagline}>Premium Coffee Experience</Text>


          {/* Welcome Message */}
          <Text style={styles.welcomeText}>
            Discover the finest selection of{'\n'}handcrafted coffee drinks
          </Text>


          {/* View Menu Button */}
          <TouchableOpacity style={styles.menuButton} onPress={handleViewMenu}>
            <Text style={styles.menuButtonText}>Check the Menu</Text>
            <Text style={styles.menuButtonIcon}>:</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1.2,
  },
  backgroundImageStyle: {
    opacity: 0.3,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(12, 15, 20, 0.85)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  cafeName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffffcc',
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 16,
    color: '#D17842',
    fontWeight: '600',
    marginBottom: 40,
    letterSpacing: 1,
  },
  welcomeText: {
    fontSize: 16,
    color: '#AEAEAE',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 60,
  },
  menuButton: {
    backgroundColor: '#a86840ff',
    paddingVertical: 18,
    paddingHorizontal: 60,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowColor: '#D17842',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
   
  },
  menuButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  menuButtonIcon: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

