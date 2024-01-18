import { SvgXml } from "react-native-svg";

export default function LeftArrow() {
  const markup = `
  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.343199 7.99725C0.343199 7.71059 0.447064 7.42397 0.654359 7.20542L7.18076 0.328115C7.59592 -0.109372 8.26903 -0.109372 8.68403 0.328115C9.09902 0.765425 9.09902 1.47459 8.68403 1.91212L2.9091 7.99725L8.68382 14.0824C9.09882 14.5199 9.09882 15.229 8.68382 15.6663C8.26883 16.104 7.59572 16.104 7.18056 15.6663L0.654158 8.78907C0.446829 8.57042 0.343199 8.2838 0.343199 7.99725Z" fill="#343434"/>
  </svg>
  `;
  return <SvgXml xml={markup} />;
}
