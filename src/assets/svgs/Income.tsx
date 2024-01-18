import { SvgXml } from "react-native-svg";

export default function Income() {
  const markup = `
  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.190979" y="0.442169" width="40" height="40" rx="10" fill="#FF4267"/>
    <g clip-path="url(#clip0_2047_358)">
    <path d="M20.5583 22.1242V23.4208C21.0303 23.3408 21.2663 23.1362 21.2663 22.8062C21.2663 22.4548 20.8797 22.2715 20.5583 22.1242Z" fill="white"/>
    <path d="M19.173 19.6455C19.173 20.0135 19.5056 20.1782 19.845 20.3275V19.1035C19.397 19.1695 19.173 19.3502 19.173 19.6455Z" fill="white"/>
    <path d="M24.191 14.4422L22.191 12.4422L20.191 14.4422L18.191 12.4422L16.191 14.4422L13.5243 12.4422V27.7755C13.5243 28.1442 13.823 28.4422 14.191 28.4422H26.191C26.559 28.4422 26.8577 28.1442 26.8577 27.7755V12.4422L24.191 14.4422ZM20.5583 24.6608V25.7288H19.845V24.6822C18.9977 24.6648 18.2543 24.5155 17.6157 24.2342V22.8595C18.2157 23.1562 19.1677 23.4162 19.845 23.4582V21.8435C18.6523 21.3808 17.6057 20.9322 17.6057 19.6455C17.6057 18.4768 18.6777 17.9275 19.845 17.8122V17.0148H20.5583V17.7908C21.353 17.8255 22.0723 17.9855 22.7143 18.2702L22.225 19.4888C21.6837 19.2668 21.1277 19.1315 20.5583 19.0828V20.6195C21.8237 21.1062 22.8343 21.5495 22.8343 22.7288C22.8343 23.9722 21.8017 24.5468 20.5583 24.6608Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_2047_358">
    <rect width="16" height="16" fill="white" transform="translate(12.191 12.4422)"/>
    </clipPath>
    </defs>
  </svg>
`;
  return <SvgXml xml={markup} />;
}
