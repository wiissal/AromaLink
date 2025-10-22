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
import CappuccinoCaramel from "../assets/Cappuccino Caramel.jpg";
import Cappuccino from "../assets/Cappuccino.jpg";
import Icedcoffee from "../assets/Icedcoffee.jpg";
import turkish from "../assets/turkish.jpg";

import { useRouter } from "expo-router";

export default function Menu() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All"); // State for selected category
  const [searchQuery, setSearchQuery] = useState(""); // State for search query (search bar)
  // Coffee products data
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
  // Filter products based on selected category
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
    console.log("Product ID:", product.id);
    console.log("Navigating to: /product/" + product.id);
    router.push("/product/" + product.id);
  };
return (
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
          showsVerticalScrollIndicator={true}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Find the best</Text>
            <Text style={styles.headerTitle}>Coffee for you</Text>
          </View>

          {/* Search Bar */}
          <TextInput
            style={styles.searchBar}
            placeholder="Search your favorite drink..."
            placeholderTextColor="#fffdfdff"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {/* Category Tabs Clickable */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScrollView}
          >
            {/* Category Tabs */}
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
          {/* Products Grid */}
          <View style={styles.productsContainer}>
            {filteredProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productCard}
                onPress={() => handleProductPress(product)}
                activeOpacity={1}
              >
                <Image source={product.image} style={styles.productImage} />

                {/* Rating Badge */}
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingText}>⭐ {product.rating}</Text>
                </View>

                {/* Product Info */}
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
          {/* Special Section */}
          <View style={styles.specialSection}>
            <Text style={styles.specialTitle}>Special Only For You</Text>
            <View style={styles.specialCard}>
              <Text style={styles.specialText}>
                5 Coffee Beans You {"\n"}Must Try!
              </Text>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400",
                }}
                style={styles.specialImage}
              />
            </View>
          </View>

          <View style={styles.bottomPadding} />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.15,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(5, 5, 5, 0.41)",
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  bottomPadding: {
    height: 30,
  },
  header: {
    marginTop: 60,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    fontStyle: "italic",
  },
  searchBar: {
    backgroundColor: "#847d78ff",
    opacity: 0.9,
    color: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 15,
  },
  categoryScrollView: {
    marginBottom: 10,
  },
  categoryTabs: {
    flexDirection: "row",
    gap: 25,
    paddingRight: 20,
  },
  categoryTab: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    alignItems: "center",
  },
  categoryTabActive: {
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  categoryText: {
    color: "#52555A",
    fontSize: 14,
    fontWeight: "500",
  },
  categoryTextActive: {
    color: "#7a4b2eff",
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