import { createSlice } from '@reduxjs/toolkit';
import { routes } from '../utils/variables';

const initialState: { currentRoute: routes } = {
  currentRoute: routes.home,
}

const globalSlice = createSlice({
  initialState,
  name: 'global',
  reducers: {
    setType: (state, action: { payload: routes, type: string }) => {
      state.currentRoute = action.payload
    }
  }
});

export const { setType } = globalSlice.actions;
export default globalSlice.reducer;
