import {
  HomeSection,
  HomeWrap,
  HomeTitle,
  HomeText,
  HomeLink,
} from './HomePage.styled';

export default function HomePage() {
  return (
    <HomeSection>
      <HomeWrap>
        <HomeTitle>Camper rental in Ukraine!</HomeTitle>
        <HomeText>
          Welcome to our company specializing in camper rental services in
          Ukraine. We offer a wide range of comfortable and modern campers for
          your unforgettable vacation. With us, you can enjoy traveling
          throughout Ukraine with comfort and freedom.
        </HomeText>
        <HomeLink to="/catalog">Rent now</HomeLink>
      </HomeWrap>
    </HomeSection>
  );
}
