import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

import InterRegular from '../fonts/inter-v13-cyrillic_latin-regular.woff2';
import InterMedium from '../fonts/inter-v13-cyrillic_latin-500.woff2';
import InterSemiBold from '../fonts/inter-v13-cyrillic_latin-600.woff2';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-display: swap;
  font-family: 'Inter';
  src: local('InterRegular'),
  url(${InterRegular}) format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-display: swap; 
  font-family: 'Inter';
  src: local('InterMedium'),
  url(${InterMedium}) format('woff2');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-display: swap; 
  font-family: 'Inter';
  src: local('InterSemiBold'),
  url(${InterSemiBold}) format('woff2');
  font-weight: 600;
  font-style: normal;
}

body {
  margin: 0; 
  padding: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${(p) => p.theme.colors.black};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: 'Inter', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ol,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  /* font-family: inherit; */
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  /* object-fit: cover; */
}

button {
  font-family: inherit;
  cursor: pointer;
}
`;
