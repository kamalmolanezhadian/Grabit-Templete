

  /**
 * فرمت‌دهی عدد با سه‌رقم‌سه‌رقم و تبدیل به ارقام فارسی
 */
export function formatNumber(number: number | string, toPersian = true): string {
    // تبدیل ورودی به رشته و حذف تمام چیزهای غیرعددی
    const digitsOnly = number.toString().replace(/[^0-9.]/g, '');
  
    // جداکردن اعشار
    const [integerPart, decimalPart] = digitsOnly.split('.');
  
    // فرمت سه‌رقم‌سه‌رقم
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // اضافه کردن اعشار در صورت وجود
    let result = decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
  
    // تبدیل به ارقام فارسی (اختیاری)
    if (toPersian) {
      const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
      result = result.replace(/[0-9]/g, (digit) => persianDigits[parseInt(digit)]);
    }
  
    return result;
  }