import React, { Component } from 'react';
import { NavBar, Icon, Carousel, Grid } from 'antd-mobile';
import Axios from 'axios';

import InfoItemList from './InfoItemList.js'
import './Bookstore.scss';

class Bookstore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgHeight: 176,
      slideIndex: 0,
      data: ['1', '2', '3'],
      tags: ['科幻', '游戏', '末世', '校花'],
      bookData: [{
        imgSrc: 'http://wfqqreader.3g.qq.com/cover/490/15313490/t3_15313490.jpg',
        title: '大主宰',
        des: '在破败中崛起，在寂灭中复苏。 沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了，一个全新的世界就此揭开神秘的一角',
        type: '希行 / 古言',
        status: 'end',
        id: '1111'
      }, {
        imgSrc: 'http://wfqqreader.3g.qq.com/cover/490/15313490/t3_15313490.jpg',
        title: '大主宰',
        des: '在破败中崛起，在寂灭中复苏。 沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了，一个全新的世界就此揭开神秘的一角',
        type: '希行 / 古言',
        status: 'end',
        id: '111212'
      }]
    };
  }
  componentDidMount() {
     setTimeout(() => {
      this.setState({
        data: ['1', '2', '3'],
      });
    }, 100);
  }
  getBookList(id, e) {
    // 处理阅读喜好的数据
    console.log(id);
    Axios.get('../../src/api/bookData.json')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    const type1 = `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='56' height='56' fill='%23F57749' rx='28'/%3E%3Cpath fill='%23FFF' d='M39.757 37.316L16.784 18.04C19.532 14.947 23.538 13 28 13c8.284 0 15 6.716 15 15 0 3.52-1.213 6.757-3.243 9.316zm-2.095 2.158C35.052 41.674 31.682 43 28 43c-8.284 0-15-6.716-15-15 -1-2.742.736-5.312 2.02-7.524l22.642 18.998z'/%3E%3Cpath fill='%23F57749' d='M30.423 25H35v3h-5v2h5v3h-5v5h-4v-5h-5v-3h5v-2h-5v-3h4.175L22 19.5l2.598-1.5 3.2 5.544L31 18l2.598 1.5-3.175 5.5z'/%3E%3C/g%3E%3C/svg%3E`;
    const type2 = `data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 56 56' version='1.1' xm…ed-Shape' fill='%23FFFFFF'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;
    const type3 = `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='56' height='56' fill='%2364A7FA' rx='28'/%3E%3Cpath fill='%23FFF' d='M32 30h6c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2v-6c0-1.105.895-2 2-2zM18 16h6c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2v-6c0-1.105.895-2 2-2zm14 0h6c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2v-6c0-1.105.895-2 2-2zM18 30h6c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2v-6c0-1.105.895-2 2-2z'/%3E%3C/g%3E%3C/svg%3E`;
    const type4 = `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='56' height='56' fill='%2360BF99' rx='28'/%3E%3Cpath fill='%23FFF' d='M19.5 15h17c1.38 0 2.5 1.12 2.5 2.5v20c0 1.38-1.12 2.5-2.5 2.5h-17c-1.38 0-2.5-1.12-2.5-2.5v-20c0-1.38 1.12-2.5 2.5-2.5zm1.5 0v8l3.5-2 3.5 2v-8h-7z`;
    const cardData = [{icon: type1, text: '免费'}, {icon: type1, text: '排行'}, {icon: type3, text: '分类'}, {icon: type3, text: '完本'}];
    const typeData = [{name: '男生小说', id: 'boy'}, {name: '女生小说', id: 'girl'}, {name: '出版书籍', id: 'publish'}]
    return (
      <div className="Bookstore">
        <NavBar
          className="nav-bar"
          mode="light"
          onLeftClick={() => console.log('onLeftClick')}
          leftContent={[
            <Icon key="0" type="left"/>,
            '书架'
          ]}
          rightContent={[
            <Icon key="0" type="search"/>
          ]}
        >书城</NavBar>
        <div className="filter-wrap">
          <div className="filter-item-title">
            <span></span><h1>选择阅读喜好</h1><span></span>
          </div>
          <ul className="filter-item-wrap">
            {
              typeData.map(item => (
                <li key={item.id} onClick={this.getBookList.bind(this, item.id)}>{item.name}</li>
              ))
            }
          </ul>
        </div>
        <Carousel
          infinite
          selectedIndex={1}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="#"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={require(`../static/img/${val}.jpg`)}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <Grid hasLine={false} data={cardData} activeStyle={false}/>
        <div className="book-list-wrap">
          <h1>精品推荐</h1>
          <ul className="b-tags">
            {this.state.tags.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <InfoItemList data={this.state.bookData}/>
        </div>
      </div>
    );
  }
}

export default Bookstore;
