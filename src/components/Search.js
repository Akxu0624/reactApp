import React, { Component } from 'react';
import { NavBar, Icon, SearchBar } from 'antd-mobile';
import './Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  componentDidMount() {
  }
  onChange= (value) => {
    this.setState({ value });
  }
  render() {
    return (<div className="search">
      <NavBar
          className="nav-bar"
          mode="light"
          onLeftClick={() => this.props.history.push('/')}
          leftContent={[
            <Icon key="0" type="left"/>,
            '书城'
          ]}
        >搜索</NavBar>
      <SearchBar
        value={this.state.value}
        placeholder="输入关键词"
        showCancelButton
        onChange={this.onChange}
        ref={ref => this.autoFocusInst = ref}
      />
    </div>);
  }
}

export default Search;
