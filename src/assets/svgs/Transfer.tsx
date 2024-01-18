import { SvgXml } from "react-native-svg";

export default function Transfer() {
  const markup = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V4H1.33334V5.33333H12V7.33333L14.6667 4.66667L12 2ZM4 8.66667L1.33334 11.3333L4 14V12H14.6667V10.6667H4V8.66667Z" fill="#120F20"/>
  </svg>
`;
  return <SvgXml xml={markup} />;
}
