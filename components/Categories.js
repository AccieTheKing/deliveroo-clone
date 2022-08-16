import React from 'react';
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategoryCard imgUrl={'https://picsum.photos/200'} title={'Testing'} />
      <CategoryCard imgUrl={'https://picsum.photos/200'} title={'Testing'} />
      <CategoryCard imgUrl={'https://picsum.photos/200'} title={'Testing'} />
      <CategoryCard imgUrl={'https://picsum.photos/200'} title={'Testing'} />
      <CategoryCard imgUrl={'https://picsum.photos/200'} title={'Testing'} />
      <CategoryCard imgUrl={'https://picsum.photos/200'} title={'Testing'} />
    </ScrollView>
  );
};

export default Categories;
