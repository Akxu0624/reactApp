import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import Bookstore from './components/Bookstore/Bookstore.js'
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 0,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    const tabs = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ];
    return (
      <div className="App">
        <Tabs tabs={tabs}
          initalPage={'t2'}
          useOnPan={false}
          swipeable={false}
          animated={false}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
           <Bookstore/>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            Content of second tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            Content of third tab
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
