import { SvgXml } from "react-native-svg";

export default function Person() {
  const markup = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 15.1667C17.8605 15.1667 21 12.0272 21 8.16667V7C21 3.1395 17.8605 0 14 0C10.1395 0 7 3.1395 7 7V8.16667C7 12.0272 10.1395 15.1667 14 15.1667Z" fill="white"/>
  <path d="M22.5423 18.6445C17.0543 17.1243 10.9468 17.1243 5.45766 18.6445C2.93182 19.3445 1.16666 21.658 1.16666 24.2725V28H26.8333V24.2725C26.8333 21.658 25.0682 19.3445 22.5423 18.6445Z" fill="white"/>
  </svg>
  `;
  return <SvgXml xml={markup} />;
}
