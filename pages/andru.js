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
      andrudictionary:{"house":["un edificio para habitación humana, especialmente uno en el que vive una familia o un pequeño grupo de personas","noun","casa","I live in my house","Mientras salía de la casa, olvidé mis llaves","As I walked out of the house I forgot my keyes","none ","","",""],"you":["se utiliza para referirse a la persona o personas a las que se dirige el hablante.","pronoun","usted","I remember you","Hola creo que me acuerdo de la fiesta de ayer","Hello I think I remember from the party yesterday.","ellas, nosotras, nosotros ","","",""],"food":["cualquier sustancia nutritiva que las personas o los animales coman o beban o que las plantas absorban para mantener la vida y el crecimiento.","noun ","comida","I love to eat food ","Hoy no he comido, vamos a comer algo","I have not eaten today, let's go eat some food","none","","",""],"hungry":["sentir o mostrar la necesidad de comer","adjective ","hambrienta","I have not eaten today therefore I am hungry ","Tengo hambre, vayamos a buscar buena comida.","I'm hungry, let's go get some good food.","none","","",""],"run":["moverse a una velocidad más rápida que una caminata, sin tener nunca ambos o todos los pies en el suelo al mismo tiempo","verb","correr","That person had to run from the dog to not get bitten","Tuve que correr para el equipo de atletismo","I had to run for the track team","corrió","","",""],"hello":["utilizado como saludo o para iniciar una conversación.","noun ","hola ","hello, have I met ou before? ","hola me preguntaba si sabías la hora","hello I was wondering if you knew the time","none","","",""],"mammal":["un animal vertebrado de sangre caliente de una clase que se distingue por la posesión de pelo o piel, la secreción de leche de las hembras para la alimentación de las crías y (típicamente) el nacimiento de crías vivas.","noun ","mamífero","what animals are mammals? ","las ballenas son un tipo de mamífero marino","whales are a type of marine mammal","animal","","",""],"restaurant":["un lugar donde la gente paga para sentarse y comer comidas que se cocinan y sirven en el local.","noun","restaurante","I did not have any food at home so I decided to go out to the restaurant  ","Quería impresionar a mi cita, así que fuimos a un restaurante elegante","I wanted to impress my date, so we went to a fancy restaurant.","cena","","",""],"game":["una forma de juego o deporte, especialmente uno competitivo jugado de acuerdo con reglas y decidido por habilidad, fuerza o suerte.","verb","juego","lets go check out what games are on","salgamos y juguemos algunos juegos","let's go out and play some games","","","",""],"joke":["algo que alguien dice para causar diversión o risa, especialmente una historia con un chiste divertido.","noun","broma","I made a joke in class and everyone was laughing","A veces se puede contar un chiste en un mal momento","Sometimes a joke can be told at a bad time","none ","","",""],"television":["un sistema de transmisión de imágenes visuales y de sonido que se reproducen en pantallas, utilizado principalmente para transmitir programas de entretenimiento, información y educación.","noun","televisión","watching tv can help people relax","Veía televisión en lugar de jugar juegos","I watched television instead of playing games","none ","","",""],"computer":["un dispositivo electrónico para almacenar y procesar datos, típicamente en forma binaria, de acuerdo con las instrucciones que se le dan en un programa variable.","noun","ordenador","my computer helps me do research for school","Puedo usar mi computadora para jugar a ciertos juegos","I can use my computer to play certain games","none ","","",""],"microphone":["un instrumento para convertir ondas sonoras en variaciones de energía eléctrica que luego pueden amplificarse, transmitirse o registrarse.","noun","micrófono","the microphone only works after it charges","El micrófono me permite ser escuchado a través de la computadora.","The microphone allows me to be heard through the computer ","none ","","",""],"help ":["facilitar que (alguien) haga algo ofreciendo los servicios o recursos propios.","verb","ayuda","I needed help on my homework","Puedo obtener ayuda de mis amigos cuando los necesito","I am able to get help from my friends when I need them","","","",""],"clean":["libre de suciedad, marcas o manchas.","verb","limpiar","I had to help my family clean house after the party","Tuve que limpiar mi casa por compañía","I had to clean my house for company","limpia, limpio, asear, hacer una limpieza","","",""],"loss":["el hecho o proceso de perder algo o alguien.","noun","pérdida","I had to take a loss on my homework as it had been past due. ","Gané una derrota durante la temporada deportiva.","I earned a loss during the sports season","la pérdida, el extravío, la calamidad","","",""],},
    }
    this.requestTimer = null
  }

  inputClicked(event,data) {
    // console.log('you clicked the button!')
    // console.log(data)
    this.setState({entrySearched:true})

    if (this.state.search in this.state.andrudictionary) {
      this.setState({entriesExist:true})
    } else {
      this.setState({entriesExist:false})      
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
    // let value=""
   
    // let entry2=['tuntuvak','moose (alces alces)','noun','Piqerluni aatiin tuntuvinrarnek tumnek apertuulluku, tua-i-llu unuakurpak maliggluki tamakut tumet.','Then her father pointed out to her the moose tracks, and they followed those tracks all morning.']
    // let entry=[['nulirta','bull (caribou, moose, cattle)','noun','...malruk-was nulirtek, ...elliitnguarkat','...two bulls, ...for an offering'],['tuntuvak','moose (alces alces)','noun','Piqerluni aatiin tuntuvinrarnek tumnek apertuulluku, tua-i-llu unuakurpak maliggluki tamakut tumet.','Then her father pointed out to her the moose tracks, and they followed those tracks all morning.']]
    console.log(this.state)
    return (
        <div>
        {this.state.entrySearched ?
          <div style={{padding:'10px',fontSize:'25px',lineHeight:'normal'}}>
            <Button onClick={()=>{this.setState({entrySearched:false})}}>{'Return'}</Button>
            <div>
              <span>You searched "</span>
              <span>{this.state.search}</span>
              <span>" here are the results!!</span>
            </div>
            {this.state.entriesExist ?
              <div>
              <div style={{paddingTop:'30px',fontWeight:'bold',fontSize:'45px'}}>{this.state.andrudictionary[this.state.search][2]}</div>
              <div style={{paddingTop:'20px',paddingBottom:'20px'}}>{this.state.andrudictionary[this.state.search][1]}</div>
              <div>{this.state.andrudictionary[this.state.search][0]}</div>
              <div style={{paddingTop:'20px',paddingBottom:'20px',textDecoration:'underline'}}>Example English Sentence:</div>
              <div>{this.state.andrudictionary[this.state.search][3]}</div>
              <div style={{paddingTop:'20px',paddingBottom:'20px',textDecoration:'underline'}}>Example Sentence:</div>
              <div>{this.state.andrudictionary[this.state.search][4]}</div>
              <div>{this.state.andrudictionary[this.state.search][5]}</div>
              <div style={{paddingTop:'20px',paddingBottom:'20px',textDecoration:'underline'}}>Related Terms:</div>
              <div>{this.state.andrudictionary[this.state.search][6]}</div>              
              </div>
              :
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Image src="https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/penguinmessage.png" />
                <Image src="https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/penguin.png" />
              </div>
            }
          </div>
          :
          <div>
          <div style={{fontSize:'30px',padding:'20px',fontWeight:'bold',fontFamily:'serif'}}> My Spanish Dictionary </div>
          <div style={{display:'flex',flexDirection:'row'}}>
            <Image style={{maxWidth:'250px',padding:'20px'}} src="https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/englisharrow.png" />
            <div style={{flex:2,paddingTop:'47px'}}>
              <Input 
                fluid 
                size='huge'
                placeholder="Enter your word here..."
                action={{ icon:'search', transparent:true,size:'huge', onClick: () => this.inputClicked()}}
                iconPosition='right'
                onChange={e => this.onChangeSearch(e.target.value)}
                />
            </div>
            <div style={{flex:1}} />
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
            <Image style={{height:'150px',marginLeft:'25px'}} src="https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/bookworm.jpg"/>
            <Image style={{width:'300px',height:'90px',marginTop:'27px'}} src="https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/linktocommonwords.png"/>
          </div>
          </div>
        }
        </div>
    )

  }
}

export default Home;