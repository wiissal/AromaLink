import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
export default function AromaLinkScreen(){
const router = useRouter ();


const { width, height } = Dimensions.get('window');
const back = 'https://i.postimg.cc/zvNw0YjN/home.jpg';

  useEffect(() => {
    console.log('Home screen loaded!');
  }, []);
  {/* Function to handle navigation to Menu screen */}
  const handleViewMenu = () => {
    router.push('/menu');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={{ uri: back }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.title}>AromaLink</Text>
            
            <Text style={styles.subtitle}>At Aroma Coffee, the day begins slow,</Text>
            <Text style={styles.subtitle}>With every sip, your worries go,</Text>
            <Text style={styles.subtitle}>And peace finds a place to flow.</Text>
            
            <View style={styles.spacer} />
            
            
            <View style={styles.pagination}>
            </View>
            
            <TouchableOpacity style={styles.button} onPress={handleViewMenu} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Check The Menu →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 1,
  },
  title: {
    fontSize: 48,
    fontWeight: '300',
    color: '#FFFFFF',
    letterSpacing: 1,
    marginBottom: 20,
    fontFamily: 'System',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
    letterSpacing: 0.5,
    marginBottom: 4,
    fontFamily: 'System',
  },
  spacer: {
    height: 509,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#E89B6D',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
