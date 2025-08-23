import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  title: string;
  oldPrice: number;
  waight: string;
  image: string;
  imageTwo: string;
  date: string;
  status: string;
  rating: number;
  newPrice: number;
  location: string;
  brand: string;
  sku: number;
  category: string;
  quantity: number;
}

export interface CounterState {
  items: Item[];
  orders: object[];
  isSwitchOn: boolean;
}

const defaultItems: Item[] = [
  {
    id: 1,
    title: "کیف زنانه دستی",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    newPrice: 50000,
    oldPrice: 70000,
    date: "",
    rating: 3,
    status: "موجود",
    waight: "1 عدد",
    location: "در فروشگاه",
    brand: "دارش مارت",
    sku: 12332,
    category: "",
    quantity: 1,
  },
  {
    id: 2,
    title: "گوشواره رز گلد",
    date: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    rating: 4,
    newPrice: 60000,
    oldPrice: 80000,
    status: "ناموجود",
    waight: "بسته 200 گرمی",
    location: "آنلاین",
    brand: "بیسمه ارگانیک",
    sku: 64532,
    category: "",
    quantity: 1,
  },
  {
    id: 161,
    title: "سیب",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/21_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/21_1.jpg",
    newPrice: 10000,
    oldPrice: 12000,
    date: "",
    waight: "5 عدد",
    rating: 2,
    status: "موجود",
    location: "در فروشگاه, آنلاین",
    brand: "پیپلز استور",
    sku: 23445,
    category: "",
    quantity: 1,
  },
];

const defaultOrders: object[] = [
  {
    orderId: "65820",
    date: "2024-08-23T06:45:41.989Z",
    shippingMethod: "رایگان",
    totalItems: 3,
    totalPrice: 19404,
    status: "تکمیل شد",
    products: [
      {
        id: 1,
        title: "کیف پول زنانه دستی",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
        imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
        newPrice: 50000,
        oldPrice: 70000,
        date: "",
        rating: 3,
        status: "موجود",
        waight: "1 عدد",
        location: "در فروشگاه",
        brand: "دارش مارت",
        sku: 12332,
        category: "",
        quantity: 1,
      },
      {
        id: 2,
        title: "گوشواره رز گلد",
        date: "",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
        imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
        rating: 4,
        newPrice: 60000,
        oldPrice: 80000,
        status: "ناموجود",
        waight: "بسته 200 گرمی",
        location: "آنلاین",
        brand: "بیسمه ارگانیک",
        sku: 64532,
        category: "",
        quantity: 1,
      },
      {
        id: 3,
        title: "سیب",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/21_1.jpg",
        imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/21_1.jpg",
        newPrice: 10000,
        oldPrice: 12000,
        date: "",
        waight: "5 عدد",
        rating: 2,
        status: "موجود",
        location: "در فروشگاه، آنلاین",
        brand: "فروشگاه پیپلز",
        sku: 23445,
        category: "",
        quantity: 1,
      },
    ],
    address: {
      id: "1724395538835",
      firstName: "فاطمه",
      lastName: "کوشکی",
      address: "لرستان کوهدشت -شهرک رجایی",
      city: "کوهدشت",
      postalCode: "395004",
      country: "AM",
      state: "SU",
      countryName: "ایران",
      stateName: "لرستان",
    },
  },
  {
    orderId: "31264",
    date: "2024-08-23T07:00:36.339Z",
    shippingMethod: "رایگان",
    totalItems: 3,
    totalPrice: 181.2,
    status: "تکمیل شد",
    products: [
      {
        title: "کلوچه چند غله ترکیبی",
        sale: "حراج",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/3_1.jpg",
        imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/3_1.jpg",
        category: "کلوچه",
        waight: "10کیلوگرم",
        newPrice: 250000,
        oldPrice: 300000,
        location: "آنلاین",
        brand: "بیسمه ارگانیک",
        sku: 23122,
        id: 52,
        quantity: 1,
        rating: 3,
        status: "موجود",
      },
      {
        title: "بسته آبمیوه انبه تازه",
        sale: "",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_1.jpg",
        imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_2.jpg",
        category: "مواد غذایی",
        newPrice: 460000,
        oldPrice: 650000,
        location: "آنلاین",
        brand: "بیسمه ارگانیک",
        sku: 23122,
        id: 53,
        quantity: 1,
        waight: "",
        rating: 2,
        status: "موجود",
      },
      {
        title: "بسته مخلوط آجیل و میوه خشک",
        sale: "حراج",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/6_1.jpg",
        imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/6_2.jpg",
        category: "میوه خشک",
        newPrice: 450000,
        oldPrice: 560000,
        location: "آنلاین",
        brand: "بیسمه ارگانیک",
        sku: 23122,
        id: 51,
        quantity: 1,
        waight: "",
        rating: 4,
        status: "موجود",
      },
    ],
    address: {
      id: "1724395538835",
      firstName: "حسین",
      lastName: "طباطبایی",
      address: "تهران - سهروردی شمالی",
      city: "تهران",
      postalCode: "395004",
      country: "AM",
      state: "SU",
      countryName: "ایران",
      stateName: "تهران",
    },
  },
  {
    orderId: "47394",
    date: "2024-08-23T07:01:13.747Z",
    shippingMethod: "رایگان",
    totalItems: 3,
    totalPrice: 10608,
    status: "در انتظار",
    products: [
      {
        title: "بسته زنجبیل ارگانیک تازه",
        sale: "",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/17_1.jpg",
        imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/17_1.jpg",
        category: "ریشه گیاهی",
        newPrice: 20000,
        oldPrice: 30000,
        href: "",
        location: "آنلاین",
        brand: "بیسمه ارگانیک",
        sku: 23456,
        id: 58,
        quantity: 1,
        waight: "100 گرم",
        rating: 2,
        status: "موجود",
      },
      {
        title: "کاروندای طبیعی هاب چری",
        sale: "جدید",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/4_1.jpg",
        imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/4_2.jpg",
        category: "مواد غذایی",
        newPrice: 490000,
        oldPrice: 650000,
        href: "",
        location: "آنلاین",
        brand: "بیسمه ارگانیک",
        sku: 23456,
        id: 56,
        quantity: 1,
        waight: "1کیلوگرم",
        rating: 4,
        status: "موجود",
      },
      {
        title: "بسته آب انبه تازه",
        sale: "",
        image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/25_1.jpg",
        imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/25_1.jpg",
        category: "میوه تازه",
        newPrice: 200000,
        oldPrice: 210000,
        href: "",
        location: "آنلاین",
        brand: "بیسمه ارگانیک",
        sku: 23456,
        id: 53,
        quantity: 1,
        waight: "",
        rating: 3,
        status: "موجود",
      },
    ],
    address: {
      id: "1724395538835",
      firstName: "معصوم",
      lastName: "گراوند",
      address: "شیراز - شهرک نادی",
      city: "شیراز",
      postalCode: "395004",
      country: "AM",
      state: "SU",
      countryName: "ایران",
      stateName: "شیراز",
    },
  },
];

const initialState: CounterState = {
  items: defaultItems,
  orders: defaultOrders,
  isSwitchOn:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("switch") || "false")
      : false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
    addItem(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("products", JSON.stringify(state.items));
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("products", JSON.stringify(state.items));
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        if (typeof window !== "undefined") {
          localStorage.setItem("products", JSON.stringify(state.items));
        }
      }
    },
    addOrder(state, action: PayloadAction<any>) {
      const newOrder = action.payload;
      const loginUser =
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("login_user") || "{}")
          : {};
      const loginUserID = loginUser?.uid ?? "NOLOGIN";
      if (loginUserID) {
        const storedOrders = JSON.parse(localStorage.getItem("orders") || "{}");
        let userOrders = storedOrders[loginUserID] || defaultOrders;

        if (newOrder) {
          userOrders = [...userOrders, newOrder];
          storedOrders[loginUserID] = userOrders;
          localStorage.setItem("orders", JSON.stringify(storedOrders));
        }
        state.orders = userOrders;
      }
    },
    setOrders(state, action: PayloadAction<any[]>) {
      state.orders = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      if (typeof window !== "undefined") {
        localStorage.setItem("products", JSON.stringify(state.items));
      }
    },
    toggleSwitch: (state) => {
      state.isSwitchOn = !state.isSwitchOn;
      if (typeof window !== "undefined") {
        localStorage.setItem("switch", JSON.stringify(state.isSwitchOn));
      }
    },
    updateItemQuantity: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const {
  setItems,
  addItem,
  removeItem,
  updateQuantity,
  addOrder,
  setOrders,
  clearCart,
  toggleSwitch,
  updateItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
