import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import {Image, Input, List, Button, Icon} from 'semantic-ui-react';
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

export function matchStateToTerm(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
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
      expand:false,
      wordSearched:false,
      entriesExist:false,
    }
    this.requestTimer = null
  }

  inputClicked(event,data) {
    // console.log('you clicked the button!')
    // console.log(data)
    this.setState({entrySearched:true})

    if (this.state.search === 'moose') {
      this.setState({entriesExist:true})
    }

    if (this.state.search in this.state.dictionary) {
      this.setState({entryExists:true,returnMessage:'',results:this.state.dictionary[this.state.search]})
    } else {
      this.setState({returnMessage:'No results. :('})
    }
  }


  onChangeSearch(data) {
    console.log(data)
    this.setState({search:data});      
  }

  render() {
    let value=""
    let entry2=['tuntuvak','moose (alces alces)','noun','Piqerluni aatiin tuntuvinrarnek tumnek apertuulluku, tua-i-llu unuakurpak maliggluki tamakut tumet.','Then her father pointed out to her the moose tracks, and they followed those tracks all morning.']
    let entry=[['nulirta','bull (caribou, moose, cattle)','noun','...malruk-was nulirtek, ...elliitnguarkat','...two bulls, ...for an offering'],['tuntuvak','moose (alces alces)','noun','Piqerluni aatiin tuntuvinrarnek tumnek apertuulluku, tua-i-llu unuakurpak maliggluki tamakut tumet.','Then her father pointed out to her the moose tracks, and they followed those tracks all morning.']]
    console.log(this.state)
    return (
        <div>
          <div style={{display:'flex',padding:'20px'}}>

            <div style={{width:'90px',fontFamily:'serif',paddingTop:'5px'}}>
              <div style={{fontSize:'27px',fontWeight:'500'}}>Yup'ik</div>
              <div style={{fontSize:'17px',fontWeight:'400',paddingTop:'5px'}}>Dictionary</div>
            </div>
            <div style={{flex:5}}>
            <Input 
              fluid 
              size='huge'
              placeholder="Search in Yupik or English"
              action={{ icon:'search', transparent:true,size:'huge', onClick: () => this.inputClicked()}}
              iconPosition='right'
              onChange={e => this.onChangeSearch(e.target.value)}
              />
            </div>
          </div>

          {this.state.entriesExist ?
            (entry.map((p,pindex) =>
            <div style={{position:'relative',left:'50%',marginLeft:'-220px',width:'440px',border:'1px solid #929292',borderRadius:'10px',padding:'13px',marginBottom:'10px'}}>
              <div onClick={()=>{this.setState({expand:!this.state.expand})}} style={{cursor:'pointer',fontWeight:'bold',textDecoration:'underline',fontSize:'20px',paddingTop:'3px'}}>{p[0]}</div>
              <div style={{fontSize:'20px',paddingTop:'10px'}}>{p[1]}</div>
              {this.state.starclick ?
                <Icon onClick={()=>{this.setState({starclick:!this.state.starclick})}} style={{cursor:'pointer',position:'absolute',fontSize:'20px',top:29,right:17,color:'gold'}} name='star' />
                :
                <Icon onClick={()=>{this.setState({starclick:!this.state.starclick})}} style={{cursor:'pointer',position:'absolute',fontSize:'20px',top:29,right:17,color:'#afadad'}} name='star outline' />
              }
              {this.state.expand ?
                <div>
                  <div style={{color:'#1212ff',paddingTop:'30px',fontSize:'20px'}}>{p[2]}</div>
                  <div style={{paddingTop:'30px',fontSize:'20px',paddingBottom:'5px',fontStyle:'italic'}}>example sentence:</div>
                  <div style={{fontSize:'20px',lineHeight:'normal'}}>{p[3]}</div>
                  <div style={{paddingTop:'30px',fontSize:'20px',lineHeight:'normal'}}>{p[4]}</div>
                </div>
                :
                null
              }
            </div>
            ))
            :
            null
          }



          <div style={{position:'fixed',bottom:10,left:'50%',marginLeft:'-122px'}}>
            <List divided horizontal>
              <List.Item style={{color:'grey',fontSize:'20px',cursor:'pointer'}} as='a'>Favorites</List.Item>
              <List.Item style={{color:'grey',fontSize:'20px',cursor:'pointer'}} as='a'>About</List.Item>
              <List.Item as='a'>
              <a style={{color:'grey',fontSize:'20px',cursor:'pointer'}} href="mailto:chelseyzaukar@gmail.com">Contact</a>
              </List.Item>
            </List>
          </div>
        </div>
    )

  }
}

export default Home;