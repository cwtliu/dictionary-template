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

export function matchStateToTerm(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

export function getStates() {
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

      wordSearched:false,
    }
    this.requestTimer = null
  }

  inputClicked(event,data) {
    // console.log('you clicked the button!')
    // console.log(data)
    this.setState({entrySearched:true})

    if (this.state.search in this.state.dictionary) {
      this.setState({entryExists:true,returnMessage:'',results:this.state.dictionary[this.state.search]})
    } else {
      this.setState({returnMessage:'No results. :('})
    }
  }


  onChangeSearch(event,data) {
    console.log(data.value)
    // this.setState({search:data.value});      
  }

  render() {
    let value=""
    console.log(this.state)
    return (
          <div style={{fontFamily:'serif'}}>
            <div style={{textAlign:'center',fontSize:'45px',paddingTop:'50px',paddingBottom:'20px'}}> Ahtna Kenaege'</div>

            {this.state.entrySearched ?
              <div>
                <div style={{width:'80%',paddingLeft:'20%'}}>
                <Input
                  ref={this.handleRef}
                  placeholder='Search in Ahtna or English '
                  action={{ icon:'search', transparent:true,size:'huge', onClick: () => this.inputClicked()}}
                  // icon={<Icon name='search' onClick={console.log('hi')} link />}
                  iconPosition='right'
                  size='huge'
                  fluid  />
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}> 
                  <div style={{marginTop:'50px',height:'80px',width:'400px',border:'1px solid #dadada',borderRadius:'3px'}}>
                    <div style={{paddingTop:'20px',paddingLeft:'20px',fontSize:'23px'}}>Deniigi (noun) /moose/</div>
                    <div style={{paddingLeft:'20px',paddingTop:'10px'}}>click for more details/</div>
                  </div>
                  <div style={{marginTop:'20px',height:'80px',width:'400px',border:'1px solid #dadada',borderRadius:'3px'}}>
                    <div style={{paddingTop:'20px',paddingLeft:'20px',fontSize:'23px'}}>Nicuuni (noun) /bull moose/</div>
                    <div style={{paddingLeft:'20px',paddingTop:'10px'}}>click for more details/</div>
                  </div>
                  <div style={{marginTop:'20px',height:'80px',width:'400px',border:'1px solid #dadada',borderRadius:'3px'}}>
                    <div style={{paddingTop:'20px',paddingLeft:'20px',fontSize:'23px'}}>Caltaey (noun) /yearling cow moose/</div>
                    <div style={{paddingLeft:'20px',paddingTop:'10px'}}>click for more details/</div>
                  </div>                            
                </div>
              </div>
              : 
              <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{flex:2,height:'80%',flexDirection:'column',}}>

                  <div style={{display:'flex',marginLeft:'20px',marginTop:'30px'}}>
                  <Image style={{height:'70px'}} src='https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/sidebutton1.png' />
                  <div style={{position:'absolute',fontSize:17,paddingTop:'20px',paddingLeft:'8px'}}>{'About Ahtna'}</div>
                  <div style={{position:'absolute',fontSize:17,paddingTop:'39px',paddingLeft:'8px'}}>{"Kenaege'"}</div>
                  </div>

                  <div style={{display:'flex',marginLeft:'20px',marginTop:'30px'}}>
                  <Image style={{height:'70px',filter:'brightness(0.9) contrast(1.5)'}} src='https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/sidebutton1.png' />
                  <div style={{position:'absolute',fontSize:17,paddingTop:'29px',paddingLeft:'8px'}}>{'Giligak Stsesi'}</div>
                  </div>

                  <div style={{display:'flex',marginLeft:'20px',marginTop:'30px'}}>
                  <Image style={{height:'70px',filter:'brightness(0.8) contrast(1.5)'}} src='https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/sidebutton1.png' />
                  <div style={{position:'absolute',fontSize:17,paddingTop:'20px',paddingLeft:'8px'}}>{'1990 Ahtna'}</div>
                  <div style={{position:'absolute',fontSize:17,paddingTop:'39px',paddingLeft:'8px'}}>{"Dictionary"}</div>
                  </div>

                </div>
                <div style={{flex:3,paddingTop:'120px',paddingRight:'40px'}}>
                    <Input
                      ref={this.handleRef}
                      placeholder='Search in Ahtna or English '
                      action={{ icon:'search', transparent:true,size:'huge', onClick: () => this.inputClicked()}}
                      // icon={<Icon name='search' onClick={console.log('hi')} link />}
                      iconPosition='right'
                      size='huge'
                      fluid  />
                </div>
              </div>
            }

            {this.state.entrySearched ?
              <div style={{display:'flex',position:'fixed',justifyContent:'center',alignItems:'center',fontSize:'18px',height:'60px',width:'135px',bottom:'15px',left:'20px'}}>   
                <Image style={{height:'60px'}} src='https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/bottombutton.png' />
                <div style={{position:'absolute'}}>back a page</div>
              </div>     
              :
              null
            }


            {this.state.entrySearched ?
              <div onClick={()=>this.setState({entrySearched:false})} style={{cursor:'pointer',display:'flex',position:'fixed',justifyContent:'center',alignItems:'center',fontSize:'18px',height:'60px',width:'135px',bottom:'15px',right:'20px'}}>   
                <Image style={{height:'60px'}} src='https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/bottombutton.png' />
                <div style={{position:'absolute'}}>homepage</div>
              </div>     
              :
              null
            }
          </div>
    )

  }
}

export default Home;