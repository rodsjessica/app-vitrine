import React from 'react';

import {
  Container,
  CategoryButton,
  CategoryText,
} from './CategoryFilter.styles';

type CategoryFilterProps = {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
};

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const allCategories = ['Todos', ...categories];

  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 16,
      }}>
      {allCategories.map(category => {
        const isSelected = selectedCategory === category;

        return (
          <CategoryButton
            key={category}
            $selected={isSelected}
            onPress={() => onSelectCategory(category)}
            accessibilityRole="button"
            accessibilityState={{
              selected: isSelected,
            }}>
            <CategoryText $selected={isSelected}>
              {category}
            </CategoryText>
          </CategoryButton>
        );
      })}
    </Container>
  );
}