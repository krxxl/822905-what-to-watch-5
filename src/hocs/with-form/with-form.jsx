import React from 'react';


const withForm = (Component) => {
  class WithForm extends React.PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        "rating": 3,
        "review-text": ``,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.stars = [1, 2, 3, 4, 5];
    }

    handleSubmit(evt) {
      evt.preventDefault();
    }

    handleFieldChange(evt) {
      evt.preventDefault();
      const {value, name} = evt.target;
      this.setState({
        [name]: value
      });
    }


    render() {
      return (
        <Component {...this.props}>
          <form action="#" className="add-review__form" onSubmit={this.handleSubmit}>
            <div className="rating">
              <div className="rating__stars">
                {this.stars.map((star) => {
                  const checked = this.state[`rating`] === star ? `checked` : null;
                  return (
                    <React.Fragment key={star}>
                      <input onChange={this.handleFieldChange} className="rating__input" id={`star-${star}`} type="radio" name="rating" value={star} checked={checked} />
                      <label className="rating__label" htmlFor={`star-${star}`}>Rating 1</label>
                    </React.Fragment>

                  );
                }
                )}
              </div>
            </div>

            <div className="add-review__text">
              <textarea onChange={this.handleFieldChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </Component>
      );
    }
  }
  return WithForm;
};

export default withForm;
