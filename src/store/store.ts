import { combineReducers, configureStore } from "@reduxjs/toolkit"

import albumItemReducer from "./reducers/AlbumItemSlice"
import albumReducer from "./reducers/AlbumsSlice"
import userReducer from "./reducers/UserSlice"

const rootReducer = combineReducers({
  userReducer,
  albumReducer,
  albumItemReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
