import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player';

const MovieListItem = ({name, preview, id, video, onActive, onSmallCardClick}) => {
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter = {()=>onActive(id)} onClick = {()=>onSmallCardClick(id)}>
      <div className="small-movie-card__image">
        {/* <img src={preview} alt={name} width="280" height="175" /> */}
        <VideoPlayer video={video} preview={preview}/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

MovieListItem.propTypes = {
  name: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onActive: PropTypes.func.isRequired,
  onSmallCardClick: PropTypes.func.isRequired,
};

export default MovieListItem;
