import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './BookDetails.scss';

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.back = this.back.bind(this);
  }
  componentDidMount() {
  }
  back() {
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="BookDetails">
        <NavBar
          className="nav-bar"
          mode="light"
          onLeftClick={this.back}
          leftContent={[
            <Icon key="0" type="left"/>,
            '书城'
          ]}
        >简介</NavBar>
        <div>
        {this.props.match.params.id}
        </div>
      </div>
    );
  }
}

export default BookDetails;
