import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import {Image, Input, List} from 'semantic-ui-react';
import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactPlayer from 'react-player';
import Autocomplete from 'react-autocomplete';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrySearched:false,
      search:'',
      dictionary:{"hunt":["pissur-","verb","pissurtuq","she is hunting","","","","hunting.jpg","",""],"coat":["paltuuk","noun","","","paltuugia","take off your coat","atkuk","coat.jpag","",""],"boat":["angyaq","noun","","","Angyateng-llu aqvaluku cupumarian un’a kuik.","And (they) went and got their boat after the ice in that river had gone out. (ELN 1990:17)","angsaq","boat.jpg","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],},
      returnMessage:"",
      results:[],
      entryExists:false,

    }
  }

  inputClicked(event,data) {
    // console.log('you clicked the button!')
    this.setState({entrySearched:true})

    if (this.state.search in this.state.dictionary) {
      this.setState({entryExists:true,returnMessage:'',results:this.state.dictionary[this.state.search]})
    } else {
      this.setState({returnMessage:'No results. :('})
    }
  }

  onChangeSearch(event,data) {
    this.setState({search:data.value})
  }

  render() {
    let value=""
    console.log(this.state)
    return (
          <div>
            <div style={{color:'#a3bfff', textAlign: 'center', fontSize: '24px', paddingTop: '32px'}}>Tlingit Language Resource Interactive Dictionary</div>

            <div style={{display:'flex',flexDirection:'row',paddingTop:'30px'}}>
              <div style={{flex:1,color:'#a3bfff',padding:'10px'}}>Welcome to the Tlingit Language Resource Interactive Dictionary. Utilize the alphabet Rolodex or use the search bar for a direct search.</div>
              <Image src="https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/eagle.png" style={{flex:1,height:'150px',maxWidth:'150px'}}/>
              <div style={{flex:1,display:'flex',flexDirection:'row',justifyContent:'center',paddingTop:'30px'}}>
                <span style={{paddingLeft:'10px', paddingRight:'10px', color:'#a3bfff'}}>Search / Shee</span>
                <Autocomplete
                  getItemValue={(item) => item.label}
                  items={[
                    { label: 'happy' },
                    { label: 'watch' },
                    { label: 'pear' }
                  ]}
                  renderItem={(item, isHighlighted) =>
                    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                      {item.label}
                    </div>
                  }
                  value={value}
                  onChange={(e) => value = e.target.value}
                  onSelect={(val) => value = val}
                />
              </div>

            </div>



              <div style={{paddingTop:'20px'}}>
                <Carousel centerMode>
                    <div>
                      <ReactPlayer url="https://www.youtube.com/watch?v=Eg8_9Lv4lxM&feature=youtu.be" />
                      <p className="legend">{'Tlingit: Yeil toowú s-góo\xa0\xa0-\xa0\xa0English: for Raven to be happy, glad'}</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/id/1018/1000/600/" />
                        <p className="legend">
                        {'Tlingit: Nancy toowú s-góo\xa0\xa0\xa0\xa0English: for Nancy to be happy, glad'}
                        </p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/id/1018/1000/600/" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/id/1018/1000/600/" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
              </div>


          </div>
    )

  }
}

export default Home;