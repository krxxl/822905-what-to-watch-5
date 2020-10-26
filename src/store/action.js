export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  MORE_FILMS: `MORE_FILMS`,
  RESET_COUNT: `RESET_COUNT`,
};

export const ActionCreator = {
  changeGenre: (name) => ({
    type: ActionType.CHANGE_GENRE,
    payload: name,
  }),
  moreFilms: (count) => ({
    type: ActionType.MORE_FILMS,
    payload: count
  }),
  resetCount: () => ({
    type: ActionType.RESET_COUNT,
  })
};
