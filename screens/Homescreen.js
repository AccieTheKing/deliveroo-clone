import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, SafeAreaView, Platform, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import FeatureData from '../data/featured';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories] = useState(FeatureData);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className={`${Platform.OS === 'ios' ? '' : 'mt-[30px]'} bg-white pt-5`}>
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={{ uri: 'https://links.papareact.com/wru' }} className="h-7 w-7 bg-grey-300 p-4 rounded-full" />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row items-center flex-1 space-x-2 bg-gray-200 p-3 ">
          <SearchIcon color="gray" size={20} />
          <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-grey-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured */}
        {featuredCategories.map((category) => (
          <FeaturedRow
            key={category.id}
            id={category.id}
            title={category.title}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
