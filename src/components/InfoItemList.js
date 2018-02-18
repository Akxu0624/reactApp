import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './InfoItemList.scss';

class InfoItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }
  render() {
    return (
      <ul className="InfoItemList b-list">
        {
          this.props.data.map(item => (
            <li key={item.id}>
              <Link to={{
                  pathname: `/details/${item.title}`
                }}>
                <div className="b-item-img">
                  <img src={item.imgSrc} alt={item.title}/>
                </div>
                <div className="b-item-right">
                  <div className="b-item-title">{item.title}</div>
                  <p style={{ WebkitBoxOrient: 'vertical'}}>{item.des}</p>
                  <div className="b-item-info">
                    <i className="icon-read"></i>
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
