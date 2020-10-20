export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`
};

export const ActionCreator = {
  changeGenre: (name) => ({
    type: ActionType.CHANGE_GENRE,
    payload: name,
  }),
};
