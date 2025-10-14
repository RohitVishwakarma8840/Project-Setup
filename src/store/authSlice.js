import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axiosInstance from '../../api/axiosInstance';
// import { LOGIN_API, LOGOUT_API } from '../../constants/api';

const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      localStorage.setItem('token', '');
      const response = await axiosInstance.post(LOGIN_API, credentials);
      
      // store token 
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      
      // Return the relevant user data
      return response.data;
    } catch (err) {
      console.log("err : ", err)
      return rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);

const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axiosInstance.post(LOGOUT_API);
      localStorage.removeItem('token');
      return true;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Logout failed');
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: Boolean(localStorage.getItem('token')),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;