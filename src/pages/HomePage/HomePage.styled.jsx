import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import bg_desk_1x from '../../images/camper-homedesk-bg-1x.jpg';
import bg_desk_2x from '../../images/camper-homedesk-bg-2x.jpg';
import bg_tab_1x from '../../images/camper-hometab-bg-1x.jpg';
import bg_tab_2x from '../../images/camper-hometab-bg-2x.jpg';
import bg_mob_1x from '../../images/camper-homemob-bg-1x.jpg';
import bg_mob_2x from '../../images/camper-homemob-bg-2x.jpg';

export const HomeSection = styled.section`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: image-set(url(${bg_tab_1x}) 1x, url(${bg_tab_2x}) 2x);

  @media screen and (max-width: 375px) {
    background-image: image-set(url(${bg_mob_1x}) 1x, url(${bg_mob_2x}) 2x);
  }

  @media screen and (min-width: 768px) {
    background-image: image-set(url(${bg_desk_1x}) 1x, url(${bg_desk_2x}) 2x);
  }
`;

export const HomeWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  max-width: 200px;
  width: 100%;
  transform: translateY(-50%);
  padding: 12px;
  border: 1px solid ${(p) => p.theme.colors.red};
  border-radius: 10px;
  background-color: #f7f7f77b;

  @media screen and (min-width: 768px) {
    max-width: 280px;
    right: 32px;
    padding: 16px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 400px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 520px;
    right: 52px;
    padding: 24px;
  }
`;

export const HomeTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
    margin-bottom: 36px;
  }
`;

export const HomeText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 28px;
    margin-bottom: 36px;
  }
`;

export const HomeLink = styled(NavLink)`
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.black};
  padding: 8px 16px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;

  transition: border-color linear 0.3s;

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.red};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 1.5;
  }
`;
