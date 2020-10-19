export const ActionType = {
  CHANGE_GENRE: 'CHANGE_GENRE'
}

export const ActionCreator = {
  changeGenre: (name) => ({
    type: CHANGE_GENRE,
    payload: name,
  }),
};