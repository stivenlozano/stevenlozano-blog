export interface IUser {
  id: string,
  title: string,
  firstName: string,
  lastName: string,
  picture: string,
}

export interface IPost {
  id: string,
  image: string,
  likes: number,
  tags: string[],
  text: string,
  publishDate: string,
  owner: IUser,
}

export interface IComment {
  id: string,
  message: string,
  post: string,
  publishDate: string,
  owner: IUser,
}

export interface IComment {
  id: string,
  message: string,
  post: string,
  publishDate: string,
  owner: IUser,
}

export interface IPosts {
  page: number,
  data: IPost[],
}

export interface PostStateModel{
  display: string,
  allPosts: IPosts[],
  postSelected: IPost | null,
  postComments: IComment[],
}
