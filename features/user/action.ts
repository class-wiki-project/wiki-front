import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI, registerAPI } from './api';
import { RegisterFormData } from './type';

const NAME = 'user';

export const login = createAsyncThunk(
  `${NAME}/login`, // 액션 이름 정의
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      return await loginAPI(email, password);
    } catch (e) {
      return thunkAPI.rejectWithValue(await e.response.data);
    }
  }
);

export const register = createAsyncThunk(
  `${NAME}/register`, // 액션 이름 정의
  async (formData: RegisterFormData, thunkAPI) => {
    try {
      return await registerAPI(formData);
    } catch (e) {
      return thunkAPI.rejectWithValue(await e.response.data);
    }
  }
);