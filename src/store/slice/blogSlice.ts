import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BlogState {
  title: string;
  img: string;
  slug: string;
  readTime: number;
  date: string;
}

const initialState: BlogState = {
  title: "",
  img: "",
  slug: "",
  readTime: 4,
  date: "",
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogData: (state, action: PayloadAction<BlogState>) => {
      state.title = action.payload.title;
      state.img = action.payload.img;
      state.slug = action.payload.slug;
      state.readTime = action.payload.readTime;
      state.date = action.payload.date;
    },
  },
});

export const { setBlogData } = blogSlice.actions;
export default blogSlice.reducer;
