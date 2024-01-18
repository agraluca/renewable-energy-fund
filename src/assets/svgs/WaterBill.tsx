import { SvgXml } from "react-native-svg";

export default function WaterBill() {
  const markup = `
  <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.038208" width="40" height="40" rx="10" fill="#3629B7"/>
    <path d="M20.5116 12.2C20.3838 12.0787 20.2144 12.0111 20.0382 12.0111C19.8621 12.0111 19.6926 12.0787 19.5649 12.2C19.3396 12.4247 14.0382 17.8074 14.0382 21.3334C14.0305 22.1235 14.1804 22.9071 14.4792 23.6386C14.7779 24.3701 15.2196 25.0346 15.7783 25.5933C16.337 26.152 17.0015 26.5936 17.733 26.8924C18.4644 27.1912 19.2481 27.3411 20.0382 27.3334C20.8283 27.3411 21.612 27.1912 22.3435 26.8924C23.0749 26.5936 23.7394 26.152 24.2981 25.5933C24.8568 25.0346 25.2985 24.3701 25.5973 23.6386C25.8961 22.9071 26.046 22.1235 26.0382 21.3334C26.0382 17.8074 20.7369 12.4247 20.5116 12.2ZM20.7049 24H20.0382C19.6864 24.0059 19.337 23.9409 19.0108 23.809C18.6847 23.677 18.3883 23.4808 18.1395 23.232C17.8907 22.9832 17.6945 22.6869 17.5626 22.3607C17.4307 22.0346 17.3657 21.6852 17.3716 21.3334V20.6667H18.7049V21.3334C18.7049 21.687 18.8454 22.0261 19.0954 22.2762C19.3455 22.5262 19.6846 22.6667 20.0382 22.6667H20.7049V24Z" fill="white"/>
  </svg>
  `;
  return <SvgXml xml={markup} />;
}