import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import Mocha from "../assets/Mocha.jpg";
import Americano from "../assets/Americano.jpg";
import Latte from "../assets/Latte.jpg";
import Esspresso from "../assets/Esspresso.jpg";
import CappuccinoCaramel from "../assets/CappuccinoCaramel.jpg";
import Cappuccino from "../assets/Cappuccino.jpg";
import Icedcoffee from "../assets/Icedcoffee.jpg";
import turkish from "../assets/turkish.jpg";
import { Entypo } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import { useRouter } from "expo-router";

export default function Menu() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");


  const coffeeProducts = [
    {
      id: "1",
      name: "Cappuccino",
      subtitle: "With Oat Milk",
      price: 35,
      rating: 5,
      reviews: 6986,
      category: "Cappuccino",
      image: Cappuccino,
    },
    {
      id: "2",
      name: "Cappuccino Caramel",
      subtitle: "With Chocolate",
      price: 32,
      rating: 4.5,
      reviews: 5820,
      category: "Cappuccino Caramel",
      image: CappuccinoCaramel,
    },
    {
      id: "3",
      name: "Esspresso",
      subtitle: "Double Shot",
      price: 25,
      rating: 4.8,
      reviews: 8234,
      category: "Esspresso",
      image: Esspresso,
    },
    {
      id: "4",
      name: "Latte",
      subtitle: "With Vanilla",
      price: 30,
      rating: 4.6,
      reviews: 7123,
      category: "Latte",
      image: Latte,
    },
    {
      id: "5",
      name: "Americano",
      subtitle: "Hot or Iced",
      price: 35,
      rating: 4.3,
      reviews: 5432,
      category: "Americano",
      image: Americano,
    },
    {
      id: "6",
      name: "Mocha",
      subtitle: "With Cream",
      price: 40,
      rating: 4.7,
      reviews: 6543,
      category: "Mocha",
      image: Mocha,
    },
    {
      id: "7",
      name: "Iced Coffee",
      subtitle: "Cold Brew and refreshing",
      price: 30,
      rating: 4.4,
      reviews: 4321,
      category: "Iced Coffee",
      image: Icedcoffee,
    },
    {
      id: "8",
      name: "Turkish Coffee",
      subtitle: "Traditional and Strong",
      price: 28,
      rating: 4.1,
      reviews: 3890,
      category: "Turkish Coffee",
      image: turkish,
    },
  ];

  const filteredProducts = coffeeProducts.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [
    "All",
    "Cappuccino",
    "Cappuccino Caramel",
    "Esspresso",
    "Latte",
    "Americano",
    "Mocha",
    "Iced Coffee",
    "Turkish Coffee",
  ];

  const handleProductPress = (product) => {
    console.log("Product clicked:", product.name);
    router.push("/product/" + product.id);
  };

  const handleGoHome = () => {
    router.push("/");
  };

  const handleGoToCart = () => {
    alert("Cart feature coming soon!");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200",
        }}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.overlay}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* HEADER */}
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Find the best</Text>
              <Text style={styles.headerTitle}>Coffee for you</Text>
            </View>

            {/* SEARCH BAR */}
            <TextInput
              style={styles.searchBar}
              placeholder="Search your favorite drink..."
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />

            {/* CATEGORY TABS */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categoryScrollView}
            >
              <View style={styles.categoryTabs}>
                {categories.map((category) => (
                  <TouchableOpacity
                    key={category}
                    style={[
                      styles.categoryTab,
                      selectedCategory === category && styles.categoryTabActive,
                    ]}
                    onPress={() => setSelectedCategory(category)}
                  >
                    <Text
                      style={[
                        styles.categoryText,
                        selectedCategory === category &&
                          styles.categoryTextActive,
                      ]}
                    >
                      {category}
                    </Text>
                    {selectedCategory === category && (
                      <View style={styles.categoryDot} />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            {/* PRODUCTS GRID */}
            <View style={styles.productsContainer}>
              {filteredProducts.map((product) => (
                <TouchableOpacity
                  key={product.id}
                  style={styles.productCard}
                  onPress={() => handleProductPress(product)}
                  activeOpacity={0.8}
                >
                  <Image source={product.image} style={styles.productImage} />

                  <View style={styles.ratingBadge}>
                    <Text style={styles.ratingText}>⭐ {product.rating}</Text>
                  </View>

                  <View style={styles.productInfo}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productSubtitle}>{product.subtitle}</Text>

                    <View style={styles.priceRow}>
                      <Text style={styles.price}>
                        MAD {product.price.toFixed(2)}
                      </Text>
                      <TouchableOpacity
                        style={styles.addButton}
                        onPress={(e) => {
                          e.stopPropagation();
                          alert(`Added ${product.name} to cart!`);
                        }}
                      >
                        <Text style={styles.addButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          {/* BOTTOM NAVIGATION BAR */}
<View style={[styles.bottomNav, { marginBottom: insets.bottom + 10 }]}>
  <TouchableOpacity onPress={handleGoHome} style={styles.navButton}>
    <Entypo name="home" size={28} color="#D17842" />
    <Text style={styles.navText}>Home</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={handleGoToCart} style={styles.navButton}>
    <Entypo name="shopping-cart" size={28} color="#D17842" />
    <Text style={styles.navText}>Cart</Text>
  </TouchableOpacity>
</View>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F14",
  },
  backgroundImage: {
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.15,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(5, 5, 5, 0.4)",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  searchBar: {
    backgroundColor: "#262B33",
    color: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 14,
    marginBottom: 20,
  },
  categoryScrollView: {
    marginBottom: 20,
  },
  categoryTabs: {
    flexDirection: "row",
    gap: 25,
  },
  categoryTab: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    alignItems: "center",
  },
  categoryText: {
    color: "#52555A",
    fontSize: 14,
    fontWeight: "500",
  },
  categoryTextActive: {
    color: "#D17842",
    fontSize: 14,
    fontWeight: "bold",
  },
  categoryDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#D17842",
    marginTop: 4,
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    backgroundColor: "#252A32",
    borderRadius: 16,
    marginBottom: 15,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: 130,
    resizeMode: "cover",
  },
  ratingBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ratingText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  productSubtitle: {
    color: "#AEAEAE",
    fontSize: 12,
    marginBottom: 10,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    color: "#D17842",
    fontSize: 18,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#D17842",
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomNav: {
  position: "absolute",
  bottom: -17,
  left: 0,
  right: 0,
  height: 60,
  backgroundColor: "#0C0F14", // dark background
  flexDirection: "row",
  justifyContent: "space-evenly", // evenly space icons
  alignItems: "center",
  borderTopWidth: 1,
  borderTopColor: "#252A32",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  elevation: 10, // for Android shadow
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: -2 },
  shadowRadius: 5,
},

navButton: {
  alignItems: "center",
  justifyContent: "center",
},

navText: {
  color: "#D17842",
  fontSize: 12,
  marginTop: 4,
},

});