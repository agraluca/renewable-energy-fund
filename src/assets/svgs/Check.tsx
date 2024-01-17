import { SvgXml } from "react-native-svg";

export default function Check() {
  const markup = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66669 9.33333L5.33335 12L12.6667 4.66666" stroke="#3629B7" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  return <SvgXml xml={markup} />;
}
