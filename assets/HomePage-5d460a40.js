import{s as n,N as a,j as t}from"./index-acf54825.js";const i="/rent-campers-react/assets/camper-homedesk-bg-1x-42a683aa.jpg",r="/rent-campers-react/assets/camper-homedesk-bg-2x-449a182d.jpg",o="/rent-campers-react/assets/camper-hometab-bg-1x-d5c660b5.jpg",s="/rent-campers-react/assets/camper-hometab-bg-2x-116d3f8e.jpg",m="/rent-campers-react/assets/camper-homemob-bg-1x-e3f3390f.jpg",d="/rent-campers-react/assets/camper-homemob-bg-2x-4f0b94bc.jpg",c=n.section`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: image-set(url(${o}) 1x, url(${s}) 2x);

  @media screen and (max-width: 375px) {
    background-image: image-set(url(${m}) 1x, url(${d}) 2x);
  }

  @media screen and (min-width: 768px) {
    background-image: image-set(url(${i}) 1x, url(${r}) 2x);
  }
`,p=n.div`
  position: absolute;
  top: 50%;
  right: 20px;
  max-width: 200px;
  width: 100%;
  transform: translateY(-50%);
  padding: 12px;
  border: 1px solid ${e=>e.theme.colors.red};
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
`,x=n.h1`
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
`,g=n.p`
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
`,h=n(a)`
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.black};
  padding: 8px 16px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;

  transition: border-color linear 0.3s;

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.colors.red};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 1.5;
  }
`;function l(){return t.jsx(c,{children:t.jsxs(p,{children:[t.jsx(x,{children:"Camper rental in Ukraine!"}),t.jsx(g,{children:"Welcome to our company specializing in camper rental services in Ukraine. We offer a wide range of comfortable and modern campers for your unforgettable vacation. With us, you can enjoy traveling throughout Ukraine with comfort and freedom."}),t.jsx(h,{to:"/catalog",children:"Rent now"})]})})}export{l as default};
