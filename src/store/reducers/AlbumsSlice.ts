import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { IAlbums } from "../../models/IAlbums"
import { IUser } from "../../models/IUser"
import { fetchAlbums } from "./ActionCreators"

interface AlbumState {
  albums: IAlbums
  isLoading: boolean
  error: string
}

const initialState: AlbumState = {
  albums: {},
  isLoading: false,
  error: "",
}

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAlbums.fulfilled.type]: (state, action: PayloadAction<IAlbums>) => {
      state.isLoading = false
      state.error = ""
      state.albums = action.payload
    },
    [fetchAlbums.pending.type]: state => {
      state.isLoading = true
    },
    [fetchAlbums.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default albumsSlice.reducer
