export interface IAlbums {
  photosets?: Photosets
  stat?: string
}

export interface Title {
  _content: string
}

export interface Description {
  _content: string
}

export interface PrimaryPhotoExtras {
  needs_interstitial: number
  ownername: string
  realname: string
  url_sq: string
  height_sq: number
  width_sq: number
  url_q: string
  height_q: number
  width_q: number
  url_t: string
  height_t: number
  width_t: number
  url_s: string
  height_s: number
  width_s: number
  url_n: string
  height_n: number
  width_n: number
  url_w: string
  height_w: number
  width_w: number
  url_m: string
  height_m: number
  width_m: number
  url_z: string
  height_z: number
  width_z: number
  url_c: string
  height_c: number
  width_c: number
  url_l: string
  height_l: number
  width_l: number
  url_h: string
  height_h: number
  width_h: number
  url_k: string
  height_k: number
  width_k: number
  pathalias: string
  sizes: string
}

export interface Photoset {
  id: string
  owner: string
  username: string
  primary: string
  secret: string
  server: string
  farm: number
  count_views: string
  count_comments: string
  count_photos: number
  count_videos: number
  title: Title
  description: Description
  can_comment: number
  date_create: string
  date_update: string
  photos: number
  videos: number
  can_download: number
  can_share: number
  can_share_deep: number
  visibility_can_see_set: number
  needs_interstitial: number
  primary_photo_extras: PrimaryPhotoExtras
}

export interface Photosets {
  page: number
  pages: number
  perpage: number
  total: number
  photoset: Photoset[]
}
