import React from 'react';

export const ICONS = {
  Logo: ({ size = 32, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M75 68C75 75.1797 69.1797 81 62 81H38C24.7452 81 14 70.2548 14 57C14 43.7452 24.7452 33 38 33C45 33 51 35.5 55 40"
        stroke="#333"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M14 57C14 57 14 57 14 57C14 48 20 42 28 42H58C68 42 75 49 75 58V60"
        fill="#63d6a0"
      />
      <path
        d="M38 81H62C69.1797 81 75 75.1797 75 68V58C75 49 68 42 58 42H28C20 42 14 48 14 57C14 70.2548 24.7452 81 38 81Z"
        stroke="#333"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <circle cx="58" cy="40" r="14" fill="white" stroke="#333" strokeWidth="4" />
      <rect x="54" y="36" width="8" height="8" transform="rotate(45 58 40)" fill="#333" />
      <circle cx="32" cy="55" r="8" fill="white" stroke="#333" strokeWidth="4" />
      <path d="M32 51V55L34 57" stroke="#333" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};
