import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const fetchProduct = createAsyncThunk('products/fetchProduct', async (_, thunkAPI) => {
  const {rejectWithValue} =thunkAPI
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=4')
    const data = await res.json()
    return data;
  } catch (error:any) {
    return rejectWithValue(error.message);
 }
})

interface State{
  products: []
  isLoading: boolean
  error:null
}
const initialState: State = {
  products: [], 
  isLoading: false,
  error:null
 
};
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  
    extraReducers: (builder) => {
      builder.addCase(fetchProduct.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      });
      builder.addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
      });
      builder.addCase(fetchProduct.rejected, (state, action) => {
            state.isLoading = false
            state.error =action.payload
        console.log(action)
      });
  }
  })
 


export default productsSlice.reducer