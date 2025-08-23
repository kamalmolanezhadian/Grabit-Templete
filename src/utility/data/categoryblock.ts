interface Service {
  name: string;
  icon: string;
  title: string;
  num: number;
}

const service: Service[] = [
  {
    icon: "fi-rr-shop",
    name: "پیراهن | تی شرت",
    title: "لباس",
    num: 36,
  },
  {
    icon: "fi fi-ts-hand-holding-seeding",
    name: "پشتیبانی 24 ساعته",
    title: "لباس زنانه",
    num: 65,
  },
  {
    icon: "fi fi-ts-badge-percent",
    name: "مرجوعی 30 روزه",
    title: "تا 30 روز امکان تعویض کالا وجود دارد",
    num: 65,
  },
  {
    icon: "fi fi-ts-donate",
    name: "پرداخت امن",
    title: "24 ساعت شبانه روز و 7 روز هفته پاسخگوی شما هستیم",
    num: 65,
  },
];
export default service;
