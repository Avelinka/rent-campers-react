import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65804f3d6ae0629a3f54dfb7.mockapi.io/api/';

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('adverts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
