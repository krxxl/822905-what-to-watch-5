export const adaptiveFilms = (film) => {
  return Object.assign({},
      film, {
        posterImage: film.poster_image,
        previewImage: film.preview_image,
        backgroundImage: film.background_image,
        backgroundColor: film.background_color,
        videoLink: film.video_link,
        previewVideoLink: film.preview_video_link,
        scoresCount: film.scores_count,
        runTime: film.run_time,
        isFavorite: film.is_favorite
      });
};
