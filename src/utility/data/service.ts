interface Service {
  name: string;
  icon: string;
  title: string;
}

const service: Service[] = [
  {
    icon: "fi fi-ts-truck-moving",
    name: "ارسال رایگان",
    title: "ارسال رایگان برای تمام سفارش های تهران یا سفارش های بالای 1000000 تومان ",
  },
  {
    icon: "fi fi-ts-hand-holding-seeding",
    name: "پشتیبانی ",
    title: "24 ساعت شبانه روز و 7 روز هفته با ما تماس بگیرید",
  },
  {
    icon: "fi fi-ts-badge-percent",
    name: "30 روز بازگشت",
    title: "به سادگی آن را ظرف 30 روز برای تعویض برگردانید",
  },
  {
    icon: "fi fi-ts-donate",
    name: "پرداخت امن",
    title: "24 ساعت شبانه روز و 7 روز هفته با ما تماس بگیرید",
  },
];
export default service