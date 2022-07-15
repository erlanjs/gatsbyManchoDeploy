import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { IAlbumItem } from "../../models/IAlbumItem"
import { IAlbums } from "../../models/IAlbums"
import { fetchAlbumItem, fetchAlbums } from "./ActionCreators"

interface AlbumItemState {
  item: IAlbumItem
  isLoading: boolean
  error: string
}

const initialState: AlbumItemState = {
  item: {},
  isLoading: true,
  error: "",
}

export const albumItemSlice = createSlice({
  name: "albumItem",
  initialState,
  reducers: {
    itemsFetching: state => {
      state.isLoading = true
    },
    itemsFetchingSuccess: (state, action: PayloadAction<IAlbumItem>) => {
      state.isLoading = false
      state.error = ""
      state.item = action.payload
    },
    itemsFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default albumItemSlice.reducer
