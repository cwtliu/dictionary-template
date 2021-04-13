import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import {Image, Input, List, Button} from 'semantic-ui-react';
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactPlayer from 'react-player';
import Autocomplete from 'react-autocomplete';

export function fakeCategorizedRequest(value, english, cb) {
  if (english) {
    setTimeout(cb, 500, value ?
      getCategorizedStates1().filter(state => matchStateToTermWithHeaders(state, value)) :
      getCategorizedStates1()
    )    
  } else {
    setTimeout(cb, 500, value ?
      getCategorizedStates().filter(state => matchStateToTermWithHeaders(state, value)) :
      getCategorizedStates()
    )      
  }

}
export function matchStateToTermWithHeaders(state, value) {
  return (
    state.header ||
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}
export function getCategorizedStates() {
  return [
{name:'arguktuk - travel into the wind'},
{name:'akalungniktuk - is fishing'},
{name:'tiguaq - adopted child'},
{name:'anayukaak - parent'},
{name:'tuttuvak - moose'},
{name:'aluutak - spoon'},
{name:'kallutaun - large spoon or ladel'},
{name:'pakittuk - finds'},
{name:'kayunnilik - bead'},
{name:'tagialanaitchuk - is hospitable (enjoyable atmosphere)'},
{name:'kimmik - dog'},
{name:'atuktuk - sings'},
{name:'iluitchuk - is sick'},
{name:'tagiuk - salt or ocean'},
{name:'itivliruk - sleepwalking'},
{name:'aularuk - dances'},
  ]
}

export function getCategorizedStates1() {
  return [
{name:'travel into the wind - arguktuk'},
{name:'is fishing - akalungniktuk'},
{name:'adopted child - tiguaq'},
{name:'parent - anayukaak'},
{name:'moose - tuttuvak'},
{name:'spoon - aluutak'},
{name:'large spoon or ladel - kallutaun'},
{name:'finds - pakittuk'},
{name:'bead - kayunnilik'},
{name:'is hospitable (enjoyable atmosphere) - tagialanaitchuk'},
{name:'dog - kimmik'},
{name:'sings - atuktuk'},
{name:'is sick - iluitchuk'},
{name:'salt or ocean - tagiuk'},
{name:'sleepwalking - itivliruk'},
{name:'dances - aularuk'},
  ]
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrySearched:false,
      search:'',
      searched:'',
      dictionary:{"hunt":["pissur-","verb","pissurtuq","she is hunting","","","","hunting.jpg","",""],"coat":["paltuuk","noun","","","paltuugia","take off your coat","atkuk","coat.jpag","",""],"boat":["angyaq","noun","","","Angyateng-llu aqvaluku cupumarian un’a kuik.","And (they) went and got their boat after the ice in that river had gone out. (ELN 1990:17)","angsaq","boat.jpg","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],"":["","","","","","","","","",""],},
      returnMessage:"",
      results:[],
      entryExists:false,
      value: '',
      unitedStates: [],
      loading: false,
      searchIn: true, //true is english, false is inupiaq
    }
    this.requestTimer = null
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
          <div className={styles.container}>
            <main className={styles.main}>
              <div style={{display:'flex','flexDirection':'row',justifyContent:'center',alignItems:'center'}}>
                <Image style={{height:'80px'}} src="https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/qayaq.png" />
                <div style={{alignItems:'center',fontSize:'36px',fontWeight:'bold'}}>Kissiaqnary</div>
              </div>
              {this.state.searched.length === 0 ?
                <div style={{textAlign:'center',fontSize:'20px',marginTop:'25px',paddingBottom:'20px'}}>
                  <span>{'Search in\xa0\xa0'}</span>
                  <span onClick={()=>{this.setState({searchIn:true})}}  style={{cursor:'pointer',textDecoration:(this.state.searchIn ? 'underline':'none'),color:(this.state.searchIn ? '#028a14':'#000000DE'), fontWeight:(this.state.searchIn ? 'bold' : 'normal')}}>English</span>
                  <span>  or  </span>
                  <span onClick={()=>{this.setState({searchIn:false})}} style={{cursor:'pointer',textDecoration:(this.state.searchIn ? 'none':'underline'),color:(this.state.searchIn ? '#000000DE': '#028a14' ),fontWeight:(this.state.searchIn ? 'normal' : 'bold')}}>Inupiaq</span>                
                </div>
                :
                null
              }
              {this.state.searched.length === 0 ?
                <div style={{fontSize:'20px'}}>
              <Autocomplete
                
                value={this.state.value}
                inputProps={{ id: 'states-autocomplete' }}
                items={this.state.unitedStates}
                getItemValue={(item) => item.name}
                onSelect={(value, state) => this.setState({ value, unitedStates: [state],searched:value }) }
                onChange={(event, value) => {
                  this.setState({ value, loading: true, unitedStates: [] })
                  clearTimeout(this.requestTimer)
                  this.requestTimer = fakeCategorizedRequest(value, this.state.searchIn, (items) => {
                    this.setState({ unitedStates: items, loading: false })
                  })
                }}
                renderItem={(item, isHighlighted) => (
                  item.header ?
                    <div
                      className="item item-header"
                      key={item.header}
                    >{item.header}</div>
                    : <div
                      className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                      key={item.abbr}
                    >{item.name}</div>
                )}
                renderMenu={(items, value) => (
                  <div className="menu">
                    {value === '' ? (
                      <div className="item"></div>
                    ) : this.state.loading ? (
                      <div className="item">Loading...</div>
                    ) : items.length === 0 ? (
                      <div className="item">No matches for {value}</div>
                    ) : items}
                  </div>
                )}
                isItemSelectable={(item) => !item.header}
              />
              </div>
                :
                <div>
                  <div style={{fontWeight:'bold',textAlign:'center',fontSize:'20px',margin:'20px'}}>{this.state.searched}</div>
                  <div style={{border: '2px solid #131313',borderRadius:'20px',fontSize:'20px',padding:'15px'}}>
                    <div style={{fontWeight:'bold',textAlign:'center',fontSize:'25px',paddingBottom:'15px'}}>Tuttuvak</div>
                    <div style={{fontWeight:'bold'}}> Tuttuvak </div>
                    <div> Moose </div>
                    <div style={{fontStyle:'italic',paddingTop:'15px'}}>
                      <span>Tuttavak</span>
                      <span>: North Slope Dialect - </span>
                      <span>moose</span>
                    </div>
                  </div>
                  <div style={{textAlign:'center'}}>
                  <Button style={{marginTop:'20px'}} onClick={()=>{this.setState({searched:'',value:'',unitedStates: [],})}}>Back</Button>
                  </div>
                </div>
              }
            </main>
            <footer className={styles.footer}>
            <List bulleted horizontal>
              <List.Item as='a'>About</List.Item>
              <List.Item as='a'>Acknowledgments</List.Item>
              <List.Item as='a'>
              <a href="mailto:s1akhawkins@gmail.com">Contact Us</a>
              </List.Item>
            </List>
            </footer>
          </div>
    )

  }
}

export default Home;