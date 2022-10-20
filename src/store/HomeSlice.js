import * as toolkitRaw from "@reduxjs/toolkit";
const { createSlice } = toolkitRaw;

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    routes: {
      name: [
        "Home",
        "All Industries",
        "Consumer Electronics",
        "Mobile Phone",
        "Accessories",
        "Mobile Phones",
      ],
      path: ["/"],
    },
    numberOFItemInCard: 0,
    homeNav: false,
  },
  reducers: {
    toggleMobileNav: (state, action) => {
      state.homeNav = action.payload;
    },
    addtoCard: (state, action) => {
      state.numberOFItemInCard += action.payload;
    },
  },
});

export const { toggleMobileNav, addtoCard } = HomeSlice.actions;

export default HomeSlice.reducer;
