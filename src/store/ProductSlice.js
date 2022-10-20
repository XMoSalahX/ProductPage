import * as toolkitRaw from "@reduxjs/toolkit";
import MainPoster from "../assets/mainPoster.png";
import SubPoster1 from "../assets/subPoster1.png";
import SubPoster2 from "../assets/subPoster2.png";
import SubPoster3 from "../assets/subPoster3.png";
import BalckMob from "../assets/blackMob.png";
import RedMob from "../assets/RedMob.png";
import GreenMob from "../assets/GreenMob.png";

const { createSlice } = toolkitRaw;

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    mainImg: {
      Poster: MainPoster,
      subPoster: [SubPoster1, SubPoster2, SubPoster3],
    },
    title:
      "Single SIM 11 Pro Max Phone Gold 512GB6.5 Inch Hot Selling Phone Wholesale ",
    productCode: " 578902-00",
    rate: 4.6,
    customerRateNumber: 200,
    packages: [
      { from: 0, to: 20, price: 2000 },
      { from: 21, to: 50, price: 1500 },
      { from: 50, price: 1000 },
    ],
    color: [
      { img: BalckMob, title: "Black" },
      { img: RedMob, title: "Red" },
      { img: GreenMob, title: "Green" },
    ],
    storage: [128, 256, 512],
    shippingPlan: [
      { title: "Free", desc: "Estimated 15 - 30 days", price: 0 },
      { title: "Fast", desc: "Estimated 5 - 7 days", price: 100 },
      { title: "Rocket", desc: "Estimated 2 - 5 days", price: 150 },
    ],
    selectedItem: {
      color: "Black",
      storage: 512,
      deviceCost: 2000,
      numberOFItems: 1,
      costPerOneItem: 2000,
      shippingCost: { title: "Fast", price: 100 },
    },
  },
  reducers: {
    setColor: (state, action) => {
      state.selectedItem.color = action.payload;
    },
    setStorage: (state, action) => {
      state.selectedItem.storage = action.payload;
      if (action.payload === 512) {
        state.packages[0].price = 2000;
        state.packages[1].price = 1500;
        state.packages[2].price = 1000;

        const numofItem = state.selectedItem.numberOFItems;
        let cost;
        if (numofItem > 0 && numofItem <= 20) {
          cost = 2000;
        } else if (numofItem > 20 && numofItem <= 50) {
          cost = 1500;
        } else {
          cost = 1000;
        }

        state.selectedItem.costPerOneItem = state.packages;

        state.selectedItem.deviceCost = cost * numofItem;
      } else if (action.payload === 256) {
        state.packages[0].price = 1800;
        state.packages[1].price = 1300;
        state.packages[2].price = 800;

        const numofItem = state.selectedItem.numberOFItems;
        let cost;
        if (numofItem > 0 && numofItem <= 20) {
          cost = 1800;
        } else if (numofItem > 20 && numofItem <= 50) {
          cost = 1300;
        } else {
          cost = 800;
        }
        state.selectedItem.costPerOneItem = cost;
        state.selectedItem.deviceCost = cost * numofItem;
      } else {
        state.packages[0].price = 1500;
        state.packages[1].price = 1000;
        state.packages[2].price = 500;

        const numofItem = state.selectedItem.numberOFItems;
        let cost;
        if (numofItem > 0 && numofItem <= 20) {
          cost = 1500;
        } else if (numofItem > 20 && numofItem <= 50) {
          cost = 1000;
        } else {
          cost = 500;
        }

        state.selectedItem.costPerOneItem = cost;

        state.selectedItem.deviceCost = cost * numofItem;
      }
    },
    decrement: (state) => {
      if (state.selectedItem.numberOFItems > 1) {
        state.selectedItem.numberOFItems--;
        const numofItem = state.selectedItem.numberOFItems;
        let cost;
        if (numofItem > 0 && numofItem <= 20) {
          cost = state.packages[0].price;
        } else if (numofItem > 20 && numofItem <= 50) {
          cost = state.packages[1].price;
        } else {
          cost = state.packages[2].price;
        }
        state.selectedItem.deviceCost = cost * state.selectedItem.numberOFItems;
      }
    },
    increment: (state) => {
      state.selectedItem.numberOFItems++;
      const numofItem = state.selectedItem.numberOFItems;
      let cost;
      if (numofItem > 0 && numofItem <= 20) {
        cost = state.packages[0].price;
      } else if (numofItem > 20 && numofItem <= 50) {
        cost = state.packages[1].price;
      } else {
        cost = state.packages[2].price;
      }
      state.selectedItem.deviceCost = cost * state.selectedItem.numberOFItems;
    },
    setShippinPlan: (state, action) => {
      if (action.payload.title === "Free") {
        state.selectedItem.shippingCost.title = "Free";
        state.selectedItem.shippingCost.price = 0;
      } else if (action.payload.title === "Fast") {
        state.selectedItem.shippingCost.title = "Fast";
        state.selectedItem.shippingCost.price = 100;
      } else {
        state.selectedItem.shippingCost.title = "Rocket";
        state.selectedItem.shippingCost.price = 150;
      }
    },
  },
});

export const { setColor, setStorage, decrement, increment, setShippinPlan } =
  ProductSlice.actions;

export default ProductSlice.reducer;
