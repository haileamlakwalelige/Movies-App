import { View, Text , TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel-v4'
import { useNavigation } from '@react-navigation/native';

var {width, height}=Dimensions.get('window');

const TrendingMovies = ({ data }) => {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };

  return (
    <View className="mb-8 mt-8">
      <Text className="text-white text-xl mx-4 mb-5 font-bold">Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={require("../../assets/movie1.jpeg")}
        style={{ width: width * 0.6, height: height * 0.4 }}
        className="rounded-3xl"
      />
      {/* <Text className="text-white">Movies</Text> */}
    </TouchableWithoutFeedback>
  );
};

export default TrendingMovies

