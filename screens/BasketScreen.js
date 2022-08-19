import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { selectRestaurant } from '../features/restaurantSlice';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();

  const groupedItems = useMemo(() => {
    return items.reduce((basketItems, item) => {
      (basketItems[item.id] || (basketItems[item.id] = [])).push(item);
      return basketItems;
    }, {});
  }, [items]);

  return (
    <SafeAreaView className={`flex-1 bg-white ${Platform.OS === 'ios' ? '' : 'mt-[35px]'}`}>
      <View className="flex-1 bg-gray-100">
        <View className="bg-white shadow-xs p-5 border-b border-[#00CCBB]">
          <View>
            <Text className="text-lg font-bold text-center">Basket </Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack} className="rounded-full absolute top-3 right-5">
            <XCircleIcon color={'#00CCBB'} height={50} width={60} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image source={{ uri: 'https://links.papareact.com/wru' }} className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
          <Text className="flex-1">Deliver in 50-75 min</Text>

          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-300">
          {Object.entries(groupedItems).map(([key, items]) => (
            <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image source={{ uri: items[0]?.image }} className="h-12 w-12 rounded-full" />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text>&euro; {items[0]?.price}</Text>

              <TouchableOpacity>
                <Text
                  onPress={() => dispatch(removeFromBasket({ id: parseInt(key) }))}
                  className="text-[#00CCBB] text-xs"
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="bg-white p-5 mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">SubTotal</Text>
            <Text className="text-gray-400">&euro;{basketTotal.toFixed(2)}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">&euro;{2.99}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="">Order Total</Text>
            <Text className="font-extrabold">&euro;{(basketTotal + 2.99).toFixed(2)}</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('PreparingOrderScreen')}
            className="bg-[#00CCBB] rounded-lg p-4"
          >
            <Text className="text-white text-center text-lg font-bold">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
