import React, { Component } from 'react';
import './InfoItemList.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
class InfoItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: this.props.data
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <ul className="InfoItemList b-list">
        {
          this.state.dataList.map(item => (
            <li key={item.id}>
              <Link to='/details'>
                <div className="b-item-img">
                  <img src={item.imgSrc}/>
                </div>
                <div className="b-item-right">
                  <div className="b-item-title">{item.title}</div>
                  <p style={{ WebkitBoxOrient: 'vertical'}}>{item.des}</p>
                  <div className="b-item-info">
                    <span className="b-item-type">{item.type}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))
        }
        <div className="b-view-more">更多...</div>
      </ul>
    );
  }
}

export default InfoItemList;
