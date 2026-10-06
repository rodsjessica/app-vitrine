import React from 'react';

import {
  Container,
  Input,
} from './SearchInput.styles';

type SearchInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
};

export function SearchInput({
  value,
  onChangeText,
  placeholder = 'Buscar produtos...',
}: SearchInputProps) {
  return (
    <Container>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
    </Container>
  );
}