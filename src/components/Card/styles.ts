import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  margin-right: 16px;
  padding-bottom: ${RFValue(42)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;


export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size:  ${RFValue(40)}px;
  
`;


export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size:  ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;


export const Footer = styled.View`
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size:  ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-top: 32px;
  
`;

export const LastTrasation = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size:  ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
`;
