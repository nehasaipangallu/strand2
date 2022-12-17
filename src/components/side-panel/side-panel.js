import React, { useEffect } from 'react';
import './side-panel.css';

export default class Sidepanel extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      isPanelOpen: props.open,
      closeCallback: props.onCloseCallback,
    };
  }

  closePanel = () => {
    this.setState({ isPanelOpen: false });
    this.state.closeCallback();
  };

  render() {
    return (
      <div
        class="side-panel"
        style={{ display: this.state.isPanelOpen ? 'block' : 'none' }}
      >
        <div class="d-flex align-items-center flex-column m-4">
          <img
            class="close-image align-self-start"
            src="https://github.com/nehasaipangallu/strand2/blob/main/public/close.svg?raw=true"
            onClick={this.closePanel}
          />

          <h3 class="side-panel-heading">Know your Report</h3>
          <input type="text" class="search-text m-3" />
          <h2 class="heading m-3">BRCA1</h2>
          <p class="m-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy take a
            type specimen book.
          </p>
          <h2 class="heading-2 m-3">Articles</h2>
          <p class=" m-3">
            BRCA1 Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    );
  }
}
