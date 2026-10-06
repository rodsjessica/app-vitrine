import styled from 'styled-components/native';

type CategoryButtonProps = {
  $selected: boolean;
};

export const Container = styled.ScrollView`
  height: 40px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;
export const CategoryButton =
  styled.Pressable<CategoryButtonProps>`
    height: 40px;
    align-self: flex-start;
    align-items: center;
    justify-content: center;

    margin-right: ${({ theme }) =>
      theme.spacing.sm}px;

    padding: 0 ${({ theme }) =>
      theme.spacing.md}px;

    background-color: ${({ theme, $selected }) =>
      $selected
        ? theme.colors.primary
        : theme.colors.surface};

    border-width: 1px;

    border-color: ${({ theme, $selected }) =>
      $selected
        ? theme.colors.primary
        : theme.colors.border};

    border-radius: ${({ theme }) =>
      theme.spacing.xl}px;
  `;

export const CategoryText =
  styled.Text<CategoryButtonProps>`
    font-size: ${({ theme }) =>
      theme.typography.fontSize.sm}px;

    font-weight: ${({ theme }) =>
      theme.typography.fontWeight.semibold};

    color: ${({ theme, $selected }) =>
      $selected
        ? theme.colors.surface
        : theme.colors.textSecondary};
  `;