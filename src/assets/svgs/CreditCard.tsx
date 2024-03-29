import { SvgXml } from "react-native-svg";

export default function CreditCard() {
  const markup = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M28 9.33218V4.66668C28 3.37751 26.9558 2.33334 25.6667 2.33334H2.33333C1.04417 2.33334 0 3.37751 0 4.66668V9.33218H28V9.33218Z" fill="white"/>
  <path d="M0 12.8333V23.3333C0 24.6225 1.04417 25.6667 2.33333 25.6667H25.6667C26.9558 25.6667 28 24.6225 28 23.3333V12.8333H0ZM12.8333 19.8333H4.66667V17.5H12.8333V19.8333ZM23.3333 19.8333H18.6667V17.5H23.3333V19.8333Z" fill="white"/>
  </svg>
  `;
  return <SvgXml xml={markup} />;
}
