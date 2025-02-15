import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { checkAuthAdmin } from "../services/adminservices/AdminLoginService";

// Async thunk to check admin authentication
export const checkAdminAuth = createAsyncThunk(
  "admin/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const res = await checkAuthAdmin();
      return res.data.admin; // Returns admin data if authenticated
    } catch (error) {
      return rejectWithValue(error.response?.data || "Unauthorized");
    }
  }
);

const initialState = {
  admin: JSON.parse(localStorage.getItem("admin")) || null,
  isAuth: false, 
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    loginAdmin: (state, action) => {
      state.admin = action.payload;
      state.isAuth = true;
      localStorage.setItem("admin", JSON.stringify(action.payload));
    },
    logoutAdmin: (state) => {
      state.admin = null;
      state.isAuth = false;
      localStorage.removeItem("admin");
      console.log('after logout admin',state.admin)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAdminAuth.fulfilled, (state, action) => {
        state.admin = action.payload;
        state.isAuth = true;
      })
      .addCase(checkAdminAuth.rejected, (state) => {
        state.admin = null;
        state.isAuth = false;
        localStorage.removeItem("admin");
      });
  },
});

export const { loginAdmin, logoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
