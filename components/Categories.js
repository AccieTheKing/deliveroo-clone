import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import CategoryData from '../data/category';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const [categories] = useState(CategoryData);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {categories.map((category, index) => (
        <CategoryCard imgUrl={category.imgUrl} title={category.title} key={index} />
      ))}
    </ScrollView>
  );
};

export default Categories;
