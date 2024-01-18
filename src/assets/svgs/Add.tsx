import { SvgXml } from "react-native-svg";

export default function Add() {
  const markup = `
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="30" fill="#F2F1F9"/>
    <path d="M40 29H31V20C31 19.4 30.6 19 30 19C29.4 19 29 19.4 29 20V29H20C19.4 29 19 29.4 19 30C19 30.6 19.4 31 20 31H29V40C29 40.6 29.4 41 30 41C30.6 41 31 40.6 31 40V31H40C40.6 31 41 30.6 41 30C41 29.4 40.6 29 40 29Z" fill="white"/>
  </svg>
  `;
  return <SvgXml xml={markup} />;
}
