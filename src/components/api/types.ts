export interface User {
  id: number,
  name: string
}

export interface Post {
  id: number,
  title: string,
  body: string,
  userId: number,
  userData?: User
}

export interface Photo {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}