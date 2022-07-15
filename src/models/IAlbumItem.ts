export interface Iconurls {
  retina: string
  large: string
  medium: string
  small: string
  default: string
}

export interface Description {
  _content: string
}

export interface Permissions {
  permcomment: number
  permaddmeta: number
  permprint: number
}

export interface Publiceditability {
  cancomment: number
  canaddmeta: number
}

export interface Photo {
  id: string
  secret: string
  server: string
  farm: number
  title: string
  isprimary: string
  ispublic: number
  isfriend: number
  isfamily: number
  iconurls: Iconurls
  license: string
  safety_level: string
  needs_interstitial: number
  description: Description
  rotation: number
  dateupload: string
  datetaken: string
  datetakengranularity: number
  datetakenunknown: string
  ownername: string
  owner_datecreate: string
  realname: string
  count_views: string
  count_faves: string
  count_comments: string
  can_comment: number
  permissions: Permissions
  can_addmeta: number
  can_print: number
  can_share: number
  can_download: number
  publiceditability: Publiceditability
  media: string
  media_status: string
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
  url_o: string
  height_o: number
  width_o: number
  secret_k: string
  secret_h: string
  pathalias: string
  ispro: number
}

export interface Photoset {
  id: string
  primary: string
  owner: string
  ownername: string
  photo: Photo[]
  page: string
  per_page: string
  perpage: string
  pages: number
  title: string
  can_share: number
  can_share_deep: number
  can_download: number
  total: number
}

export interface Iconurls2 {
  retina: string
  large: string
  medium: string
  small: string
  default: string
}

export interface Gift {
  gift_eligible: boolean
  eligible_durations: string[]
  new_flow: boolean
}

export interface User {
  nsid: string
  path_alias: string
  username: string
  ispro: number
  is_ad_free: number
  is_deleted: number
  iconurls: Iconurls2
  realname: string
  datecreate: string
  gift: Gift
}

export interface IAlbumItem {
  photoset?: Photoset
  user?: User
  stat?: string
}
