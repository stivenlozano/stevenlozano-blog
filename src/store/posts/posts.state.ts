import { PostStateModel } from '.'

export const initialState: PostStateModel = {
  allPosts: [],
  tags: [],
  display: 'grid',
  postSelected: null,
  postComments: [],
  tagSelected: '',
  page: 0,
  postsByUser: [],
}
