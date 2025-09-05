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
  wishlist: Item[];
}

const initialState: CounterState = {
  wishlist: [
    {
      id: 1,
      title: "کیف دستی زنانه",
      image:
        process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
      imageTwo:
        process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
      newPrice: 5000,
      oldPrice: 7000,
      date: "",
      rating: 3,
      status: "در دسترس",
      waight: "1 بسته",
      location: "انلاین",
      brand: "بهیسما ارگانیس",
      sku: 55555,
      category: "",
      quantity: 1,
    },
    {
      id: 2,
      title: "گوشواره رزگلد",
      date: "",
      image:
        process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      imageTwo:
        process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      rating: 4,
      newPrice: 6000,
      oldPrice: 8000,
      status: "ناموجود",
      waight: "200 گرم",
      location: "انلاین",
      brand: "بهشما ارگانیک",
      sku: 65055,
      category: "",
      quantity: 1,
    },
    {
      id: 3,
      title: "اپل",
      image:
        process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/21_1.jpg",
      imageTwo:
        process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/21_1.jpg",
      newPrice: 1000,
      oldPrice: 1200,
      date: "",
      waight: "5 بسته",
      rating: 2,
      status: "موجود",
      location: "Online",
      brand: "بهشما ارگانیک",
      sku: 24355,
      category: "",
      quantity: 1,
    },
  ],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist(state, action: PayloadAction<Item>) {
      state.wishlist.push(action.payload);
    },
    removeWishlist(state, action: PayloadAction<number>) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addWishlist, removeWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
