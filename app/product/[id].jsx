import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import Mocha from "../../assets/Mocha.jpg";
import Americano from "../../assets/Americano.jpg";
import Latte from "../../assets/Latte.jpg";
import Esspresso from "../../assets/Esspresso.jpg";
import CappuccinoCaramel from "../../assets/CappuccinoCaramel.jpg";
import Cappuccino from "../../assets/Cappuccino.jpg";
import Icedcoffee from "../../assets/Icedcoffee.jpg";
import turkish from "../../assets/turkish.jpg";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState("M");

  const productsData = {
    "1": {
      name: "Cappuccino",
      subtitle: "With Oat Milk",
      price: 35,
      rating: 5,
      reviews: 6986,
      description:
        "A cappuccino is a coffee-based drink made primarily from espresso and milk. The perfect balance of rich espresso, steamed milk, and a thick layer of foam creates a creamy and satisfying beverage.",
      image: Cappuccino,
      roast: "Medium Roasted",
    },
    "2": {
      name: "Cappuccino Caramel",
      subtitle: "With Chocolate",
      price: 32,
      rating: 4.5,
      reviews: 5820,
      description:
        "A delicious cappuccino with rich chocolate and caramel flavor that complements the espresso perfectly. Indulge in the smooth combination of coffee and sweetness.",
      image: CappuccinoCaramel,
      roast: "Medium Roasted",
    },
    "3": {
      name: "Esspresso",
      subtitle: "Double Shot",
      price: 25,
      rating: 4.8,
      reviews: 8234,
      description:
        "A concentrated coffee brew with intense flavor and rich crema on top. Our double shot espresso delivers a powerful caffeine kick and bold taste.",
      image: Esspresso,
      roast: "Dark Roasted",
    },
    "4": {
      name: "Latte",
      subtitle: "With Vanilla",
      price: 30,
      rating: 4.6,
      reviews: 7123,
      description:
        "Smooth and creamy latte with a hint of sweet vanilla flavor. This perfectly balanced drink combines espresso with steamed milk and vanilla syrup.",
      image: Latte,
      roast: "Medium Roasted",
    },
    "5": {
      name: "Americano",
      subtitle: "Hot or Iced",
      price: 35,
      rating: 4.3,
      reviews: 5432,
      description:
        "A classic americano made with espresso and hot water for a bold taste. Simple yet sophisticated, highlighting the pure essence of coffee.",
      image: Americano,
      roast: "Medium Roasted",
    },
    "6": {
      name: "Mocha",
      subtitle: "With Cream",
      price: 40,
      rating: 4.7,
      reviews: 6543,
      description:
        "Rich mocha with chocolate and topped with whipped cream. The ultimate indulgence combining espresso, chocolate, steamed milk, and cream.",
      image: Mocha,
      roast: "Medium Roasted",
    },
    "7": {
      name: "Iced Coffee",
      subtitle: "Cold Brew and refreshing",
      price: 30,
      rating: 4.4,
      reviews: 4321,
      description:
        "Refreshing cold brew iced coffee perfect for hot days. Smooth, less acidic, and naturally sweet with a bold coffee flavor.",
      image: Icedcoffee,
      roast: "Light Roasted",
    },
    "8": {
      name: "Turkish Coffee",
      subtitle: "Traditional and Strong",
      price: 28,
      rating: 4.1,
      reviews: 3890,
      description:
        "Traditional Turkish coffee prepared with finely ground beans. Strong, rich, and aromatic with a unique brewing method passed down through generations.",
      image: turkish,
      roast: "Dark Roasted",
    },
  };

  const product = productsData[String(id)];

  if (!product) {
    return (
      <View style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Product not found!</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const handleAddToCart = () => {
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PRODUCT IMAGE */}
        <View style={styles.imageContainer}>
          <Image source={product.image} style={styles.productImage} />

          <TouchableOpacity
            style={styles.backButtonTop}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonIcon}>←</Text>
          </TouchableOpacity>
        </View>

        {/* PRODUCT INFO */}
        <View style={styles.contentContainer}>
          <View style={styles.titleRow}>
            <View style={styles.titleSection}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productSubtitle}>{product.subtitle}</Text>
            </View>
          </View>

          {/* RATING */}
          <View style={styles.ratingRow}>
            <Text style={styles.ratingText}>⭐ {product.rating}</Text>
            <Text style={styles.reviewsText}>
              ({product.reviews.toLocaleString()})
            </Text>
            <View style={styles.roastBadge}>
              <Text style={styles.roastText}>{product.roast}</Text>
            </View>
          </View>

          {/* DESCRIPTION */}
          <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>

          {/* PRICE & BUY BUTTON */}
          <View style={styles.bottomSection}>
            <View style={styles.priceSection}>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.price}>
                <Text style={styles.priceCurrency}>MAD </Text>
                {product.price.toFixed(2)}
              </Text>
            </View>

            <TouchableOpacity style={styles.buyButton} onPress={handleAddToCart}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F14",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 400,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  backButtonTop: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonIcon: {
    color: "#df884eff",
    fontSize: 30,
    fontWeight: "bold",
  },
  
  contentContainer: {
    backgroundColor: "#0c0f14ff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    padding: 20,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  titleSection: {
    flex: 1,
  },
  productName: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productSubtitle: {
    color: "#AEAEAE",
    fontSize: 14,
  },
  
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  ratingText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  reviewsText: {
    color: "#AEAEAE",
    fontSize: 14,
    marginRight: 15,
  },
  roastBadge: {
    backgroundColor: "#6c7481a8",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  roastText: {
    color: "#AEAEAE",
    fontSize: 12,
  },
  descriptionSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: "#AEAEAE",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 22,
  },
  sizeSection: {
    marginBottom: 30,
  },
  sizeRow: {
    flexDirection: "row",
    gap: 15,
  },
  sizeButtonActive: {
    borderColor: "#D17842",
    backgroundColor: "#0C0F14",
  },
  sizeText: {
    color: "#AEAEAE",
    fontSize: 16,
    fontWeight: "bold",
  },
  sizeTextActive: {
    color: "#D17842",
  },
  bottomSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginTop: 10,
  },
  priceSection: {
    flex: 1,
  },
  priceLabel: {
    color: "#AEAEAE",
    fontSize: 14,
    marginBottom: 4,
  },
  price: {
    color: "#D17842",
    fontSize: 24,
    fontWeight: "bold",
  },
  priceCurrency: {
    color: "#D17842",
    fontSize: 18,
  },
  buyButton: {
    flex: 2,
    backgroundColor: "#D17842",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  buyButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#D17842",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 12,
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});