// src/utility/parsianNum.js
const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

export const toPersianNum = (num) => {
  if (num === undefined || num === null) return '';
  const numStr = String(num);
  return numStr.replace(/\d/g, d => persianDigits[parseInt(d)]);
};