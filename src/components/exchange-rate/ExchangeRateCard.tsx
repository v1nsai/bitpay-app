import React from 'react';
import styled from 'styled-components/native';
import {Caution, LightBlack, White} from '../../styles/colors';
import {BaseText} from '../styled/Text';
import {ExchangeRateProps} from './ExchangeRatesSlides';
import {ScreenGutter} from '../styled/Containers';
import {CurrencyImage} from '../currency-image/CurrencyImage';

const ExchangeRateCardContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 130px;
  height: 100px;
  border-radius: 12px;
  background-color: ${({theme: {dark}}) => (dark ? LightBlack : White)};
  left: ${ScreenGutter};
`;

const CurrencyIconContainer = styled.View`
  padding-top: 19px;
  padding-bottom: 6px;
`;

const CurrencyNameText = styled(BaseText)`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 19px;
  color: ${({theme}) => theme.colors.text};
`;

const CurrencyAverageText = styled(BaseText)<{average?: number}>`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: ${({average}) => (average && average >= 0 ? '#1E8257' : Caution)};
`;

export default ({item}: {item: ExchangeRateProps}) => {
  const {img, currencyName, average} = item;

  return (
    <ExchangeRateCardContainer
      style={[
        {
          shadowColor: '#000',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.1,
          shadowRadius: 5,
          borderRadius: 12,
          elevation: 3,
        },
      ]}>
      <CurrencyIconContainer>
        <CurrencyImage img={img} size={25} />
      </CurrencyIconContainer>
      <CurrencyNameText>{currencyName}</CurrencyNameText>
      <CurrencyAverageText average={average}>{average}%</CurrencyAverageText>
    </ExchangeRateCardContainer>
  );
};
