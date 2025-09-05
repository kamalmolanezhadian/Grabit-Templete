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
  compare: Item[];
}

const initialState: CounterState = {
  compare: [
    {
      id: 63,
      title: "عطر ماندگار",
      image:
        process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
      imageTwo:
        process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
      category: "عطر",
      newPrice: 2500,
      oldPrice: 3000,
      rating: 4,
      date: "",
      waight: "5 بسته",
      location: "در فروشگاه",
      brand: "بهشما ارگانیک",
      sku: 55555,
      status: "ناموجود",
      quantity: 1,
    },
    {
      id: 2,
      title: "پیراهن شیک با چاپ مردانه",
      date: "",
      image:
        process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
      imageTwo:
        process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_2.jpg",
      category: "لباس مردانه",
      newPrice: 5900,
      oldPrice: 8700,
      location: "آنلاین",
      waight: "1 بسته",
      brand: "بهشما ارگانیک",
      sku: 24433,
      rating: 4,
      status: "در دسترس",
      quantity: 1,
    },
    {
      id: 1831,
      title: "توت آبی",
      date: "",
      image:
        process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/23_1.jpg",
      imageTwo:
        process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/23_1.jpg",
      category: "میوه های تازه",
      newPrice: 1100,
      oldPrice: 1200,
      location: "انلاین",
      brand: "بهشما ارگانیک",
      sku: 23456,
      waight: "500 گرم",
      rating: 3,
      status: "ناموجود",
      quantity: 1,
    },
  ],
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addCompare(state, action: PayloadAction<Item>) {
      state.compare.push(action.payload);
    },
    removeCompareItem(state, action: PayloadAction<number>) {
      state.compare = state.compare.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addCompare, removeCompareItem } = compareSlice.actions;

export default compareSlice.reducer;
