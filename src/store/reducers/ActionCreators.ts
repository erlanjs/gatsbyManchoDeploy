import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { IAlbumItem } from "../../models/IAlbumItem"
import { IAlbums } from "../../models/IAlbums"
import { IUser } from "../../models/IUser"
import { AppDispatch } from "../store"
import { albumItemSlice } from "./AlbumItemSlice"
import { userSlice } from "./UserSlice"

export const fetchAlbumItem =
  (id: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      dispatch(albumItemSlice.actions.itemsFetching())
      const response = await axios.get<IAlbumItem>(
        `https://api.flickr.com/services/rest?extras=can_addmeta%2Ccan_comment%2Ccan_download%2Ccan_print%2Ccan_share%2Ccontact%2Ccount_comments%2Ccount_faves%2Ccount_views%2Cdate_taken%2Cdate_upload%2Cdescription%2Cicon_urls_deep%2Cisfavorite%2Cispro%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cowner_datecreate%2Cpath_alias%2Cperm_print%2Crealname%2Crotation%2Csafety_level%2Csecret_k%2Csecret_h%2Curl_sq%2Curl_q%2Curl_t%2Curl_s%2Curl_n%2Curl_w%2Curl_m%2Curl_z%2Curl_c%2Curl_l%2Curl_h%2Curl_k%2Curl_3k%2Curl_4k%2Curl_f%2Curl_5k%2Curl_6k%2Curl_o%2Cvisibility%2Cvisibility_source%2Co_dims%2Cpubliceditability%2Csystem_moderation&per_page=25&page=1&get_user_info=1&primary_photo_extras=url_c%2C%20url_h%2C%20url_k%2C%20url_l%2C%20url_m%2C%20url_n%2C%20url_o%2C%20url_q%2C%20url_s%2C%20url_sq%2C%20url_t%2C%20url_z%2C%20needs_interstitial%2C%20can_share&jump_to=&photoset_id=${id}&viewerNSID=&method=flickr.photosets.getPhotos&csrf=&api_key=25accdc58fd799ef149db4f321bf4bcd&format=json&hermes=1&hermesClient=1&reqId=65d194d3-90a7-45c8-be4e-22be2efbaef4&nojsoncallback=1`
      )
      dispatch(albumItemSlice.actions.itemsFetchingSuccess(response.data))
    } catch (e: any) {
      dispatch(albumItemSlice.actions.itemsFetchingError(e.message))
    }
  }

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/userss"
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("errorrrs")
    }
  }
)

export const fetchAlbums = createAsyncThunk(
  "albums/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IAlbums>(
        "https://api.flickr.com/services/rest?primary_photo_extras=owner_name%2Cpath_alias%2Crealname%2Csizes%2Curl_sq%2Curl_q%2Curl_t%2Curl_s%2Curl_n%2Curl_w%2Curl_m%2Curl_z%2Curl_c%2Curl_l%2Curl_h%2Curl_k%2Curl_3k%2Curl_4k%2Curl_5k%2Curl_6k%2Cneeds_interstitial&per_page=25&get_user_info=1&extras=can_share%2Ccan_download&user_id=193653472%40N05&viewerNSID=&method=flickr.photosets.getList&csrf=&api_key=25accdc58fd799ef149db4f321bf4bcd&format=json&hermes=1&hermesClient=1&reqId=65d194d3-90a7-45c8-be4e-22be2efbaef4&nojsoncallback=1"
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("errorrrs")
    }
  }
)

//
