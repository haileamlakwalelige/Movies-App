import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';
import styles from '../../theme';

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import TrendingMovies from "../components/TrendingMovies";
// import { styles } from "../../theme";

const HomeScreen = () => {
  const [trending, setTrending]=useState([1,2,3,4]);

  return (
    <View className="flex w-screen bg-black min-h-screen">
      <SafeAreaView>
        <StatusBar style="light" />
        <View className="flex flex-row min-w-screen justify-between items-center mx-4">
        <FontAwesome name="bars" size={30} color="white" />
          <Text className="text-white text-3xl font-bold"><Text className="text-[#eab308]">M</Text>ovies</Text>
          <TouchableOpacity>
          <FontAwesome name="search" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:10}}
      >
{/* Trending Movies Carousel */}
<TrendingMovies data={trending} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
