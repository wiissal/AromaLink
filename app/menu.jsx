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