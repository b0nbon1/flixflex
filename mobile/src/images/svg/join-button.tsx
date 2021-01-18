import React from 'react';

import { SvgXml } from 'react-native-svg';

export default function JoinButton(): JSX.Element {
  const button = `<svg width="47" height="50" viewBox="0 0 47 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="47" height="50" rx="20" fill="#4F4F4F"/>
    <path d="M23 11C14.7157 11 8 17.4919 8 25.5C8 33.5081 14.7157 40 23 40C31.2843 40 38 33.5081 38 25.5C38 17.4919 31.2843 11 23 11ZM17.8053 19.2855H28.1929C28.892 19.3312 29.4195 19.823 29.4288 20.4466V30.5216C29.3793 31.2238 28.8508 31.706 28.1929 31.7146H17.8053C17.0793 31.6667 16.58 31.1569 16.5712 30.5216V20.4466C16.6112 19.774 17.1904 19.2934 17.8053 19.2855ZM19.5539 21.5723C19.1812 21.5813 18.9408 21.8586 18.9369 22.1706V28.7975C18.9466 29.1573 19.2321 29.392 19.5539 29.3958H26.4442C26.8172 29.3865 27.0592 29.1094 27.0631 28.7975V22.1706C27.054 21.8094 26.7677 21.576 26.4442 21.5723H19.5539V21.5723Z" fill="white"/>
    </svg>`;
  const ButtonSvg = () => <SvgXml width="50" height="53" xml={button} />;
  return <ButtonSvg />;
}
