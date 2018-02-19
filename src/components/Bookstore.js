import React, { Component } from 'react';
import { NavBar, Icon, Carousel, Grid, Toast } from 'antd-mobile';
import Api from '../api/Api.js';
import InfoItemList from './InfoItemList.js';
import FilterWrap from './FilterWrap.js';
import './Bookstore.scss';

const type1 = `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='56' height='56' fill='%23F57749' rx='28'/%3E%3Cpath fill='%23FFF' d='M39.757 37.316L16.784 18.04C19.532 14.947 23.538 13 28 13c8.284 0 15 6.716 15 15 0 3.52-1.213 6.757-3.243 9.316zm-2.095 2.158C35.052 41.674 31.682 43 28 43c-8.284 0-15-6.716-15-15 -1-2.742.736-5.312 2.02-7.524l22.642 18.998z'/%3E%3Cpath fill='%23F57749' d='M30.423 25H35v3h-5v2h5v3h-5v5h-4v-5h-5v-3h5v-2h-5v-3h4.175L22 19.5l2.598-1.5 3.2 5.544L31 18l2.598 1.5-3.175 5.5z'/%3E%3C/g%3E%3C/svg%3E`;
const type3 = `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='56' height='56' fill='%2364A7FA' rx='28'/%3E%3Cpath fill='%23FFF' d='M32 30h6c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2v-6c0-1.105.895-2 2-2zM18 16h6c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2v-6c0-1.105.895-2 2-2zm14 0h6c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2v-6c0-1.105.895-2 2-2zM18 30h6c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2v-6c0-1.105.895-2 2-2z'/%3E%3C/g%3E%3C/svg%3E`;
const type4 = `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='56' height='56' fill='%2360BF99' rx='28'/%3E%3Cpath fill='%23FFF' d='M19.5 15h17c1.38 0 2.5 1.12 2.5 2.5v20c0 1.38-1.12 2.5-2.5 2.5h-17c-1.38 0-2.5-1.12-2.5-2.5v-20c0-1.38 1.12-2.5 2.5-2.5zm1.5 0v8l3.5-2 3.5 2v-8h-7z'/%3E%3C/g%3E%3C/svg%3E`;
const cardData = [{icon: type1, text: '免费'}, {icon: type4, text: '排行'}, {icon: type3, text: '分类'}, {icon: type4, text: '完本'}];
const typeData = [{name: '男生小说', id: 'boy'}, {name: '女生小说', id: 'girl'}, {name: '出版书籍', id: 'pub'}]

function BookTags (props) {
  return (
    <ul className="b-tags">
      {
        props.tags.map(item => (
          <li key={item}>{item}</li>
        ))
      }
    </ul>
  );
}

function BookListWrap (props) {
  return (
    <div className="book-list-wrap">
      <h1>{props.title || '默认标题'}</h1>
      {props.children}
    </div>
  );
}

class Bookstore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgHeight: 176,
      slideIndex: 0,
      data: ['1', '2', '3'],
      tags: ['科幻', '游戏', '末世', '校花'],
      bookData: [],
      currentId: 'boy'
    };
  }
  componentDidMount() {
  }
  getBookList (id) {
    // 请求阅读喜好类型的数据
    Api.get(`/${id}`)
    .then(response => {
      this.setState({
        bookData: response.data.data,
        currentId: id
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
  goToSearch () {
    this.props.history.push('/search');
  }
  failToast (text, e) {
    Toast.fail(text, 1);
  }
  render() {
    return (
      <div className="Bookstore">
        <NavBar
          className="nav-bar"
          mode="light"
          leftContent={[
            <Icon key="0" type="left"/>,
            '书架'
          ]}
          rightContent={[
            <Icon key="0" type="search" onClick={this.goToSearch.bind(this)}/>
          ]}
        >书城</NavBar>
        <FilterWrap 
          title="选择阅读喜好" 
          typeData={typeData}
          currentId={this.state.currentId}
          getBookList={this.getBookList.bind(this)}/>
        <Carousel
          infinite
          selectedIndex={1}
        >
          {
            this.state.data.map(val => (
              <a
                key={val}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={require(`../static/img/${val}.jpg`)}
                  alt={`${val}.jpg`}
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))
          }
        </Carousel>
        <Grid hasLine={false} data={cardData} activeStyle={false} onClick={this.failToast.bind(this, '暂未开放')}/>
        <BookListWrap 
          title="精品推荐" 
          children={
            [<BookTags key="0" tags={this.state.tags}/>,
            <InfoItemList key="1" data={this.state.bookData}/>]
          }
        />
      </div>
    );
  }
}

export default Bookstore;
