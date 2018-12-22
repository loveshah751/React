import React from "react";

import Title from "./Sub-Components/Title";

class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default Header;
