import React from 'react';
import './articles.css';

export default class Articles extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    props.onLoad(true);
  }
  render() {
    return (
      <div class="articles-container m-3">
        <div class="p-5">
          <div class="d-flex justify-content-between header">
            <h1 class="header-text">All Articles</h1>
            <div class="search-container">
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div class="article-cards d-flex flex-wrap justify-content-between">
            {/* card1 */}
            <div class="article-card  d-flex flex-column justify-content-around p-4 m-2">
              <h3>Contrary to popular belief</h3>
              <p>
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical Latin literature from 45 BC, making it over 2000
                years old.
              </p>
              <button class="btn btn-read-more align-self-center">
                Read More
              </button>
            </div>
            {/* card2 */}
            <div class="article-card  d-flex flex-column justify-content-around p-4 m-2">
              <h3>Lorem Ipsum</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
              <button class="btn btn-read-more align-self-center">
                Read More
              </button>
            </div>
            {/* card3 */}
            <div class="article-card  d-flex flex-column justify-content-around p-4 m-2">
              <h3>Contrary to popular belief</h3>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <button class="btn btn-read-more align-self-center">
                Read More
              </button>
            </div>
            {/* card4 */}
            <div class="article-card  d-flex flex-column justify-content-around p-4 m-2">
              <h3>Contrary to popular belief</h3>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text.
              </p>
              <button class="btn btn-read-more align-self-center">
                Read More
              </button>
            </div>
            {/* card5 */}
            <div class="article-card  d-flex flex-column justify-content-around p-4 m-2">
              <h3>Where does it come from?</h3>
              <p>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model.
              </p>
              <button class="btn btn-read-more align-self-center">
                Read More
              </button>
            </div>
            {/* card6 */}
            <div class="article-card  d-flex flex-column justify-content-around p-4 m-2">
              <h3>Contrary to popular belief</h3>
              <p>
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical Latin literature from 45 BC, making it over 2000
                years old.
              </p>
              <button class="btn btn-read-more align-self-center">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
