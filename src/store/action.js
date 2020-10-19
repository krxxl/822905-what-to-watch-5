export const ActionType = {
  CHANGE_GENRE: 'CHANGE_GENRE'
}

export const ActionCreator = {
  changeGenre: () => ({
    type: CHANGE_GENRE,
    payload: 1,
  }),
};