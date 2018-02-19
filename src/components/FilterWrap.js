import React, { Component } from 'react';
import './FilterWrap.scss';

class FilterWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.typeData&&this.getBookList(this.props.typeData[0].id);
  }
  getBookList (id, e) {
    this.props.getBookList(id);
  }
  render() {
    return (
      <div className="filter-wrap">
        <div className="filter-item-title">
          <span></span>
          <h1>{this.props.title || '默认标题'}</h1>
          <span></span>
        </div>
        <ul className="filter-item-wrap">
          {
            this.props.typeData&&this.props.typeData.map(item => (
              <li 
                key={item.id} 
                onClick={this.getBookList.bind(this, item.id)} 
                style={{ color: this.props.currentId === item.id ? '#e87646' : '#000' }}>
                {item.name}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}


export default FilterWrap;
