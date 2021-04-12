import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import {Image, Input, List} from 'semantic-ui-react';
import React, {Component} from 'react';

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
		console.log(this.state)
	  return (
	    <div className={styles.container}>
	      <Head>
	        <title>Yugcetun</title>
	        <link rel="icon" href="https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/drum.jpg" />
	      </Head>

	      <main className={styles.main}>
	      	<div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
	      	<div style={{flex:2}}>
	      		<Image src={'https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/drum.jpg'} />
	      	</div>
	        <h1 style={{flex:3, fontSize: '45px',paddingLeft:'10px'}} className={styles.title}>
	          {'Yugcetun'}
	        </h1>
	        </div>
	        <div style={{width:'100%'}}>
	        	<Input 
	        		fluid 
	        		action={{ icon: 'search', onClick:()=>this.inputClicked()}} 
	        		value={this.state.search}
	        		onChange={this.onChangeSearch.bind(this)}
	        		placeholder="Type in Yugcestun or English..."
	        		/>
	       	</div>

	      	{this.state.entrySearched ?
	      	  <div> {this.state.returnMessage}</div>
	      	:
	      	  null
	      	}

	      	{this.state.entryExists ?
	      		<div>
	      		<div style={{fontSize:'30px',paddingBottom:'20px',paddingTop:'35px'}}>{this.state.results[0]}</div>
	      		<div style={{color:'#1010f7',paddingBottom:'5px',fontStyle:'italic'}}>{this.state.results[1]}</div>
	      		<div style={{fontSize:'20px',paddingLeft:'15px',paddingBottom:'10px'}}>{this.state.search}</div>
	      		<div style={{fontWeight:'bold',paddingTop:'20px'}}>{this.state.results[2]}</div>
	      		<div>{this.state.results[3]}</div>
	      		<div style={{fontWeight:'bold',paddingTop:'20px'}}>{this.state.results[4]}</div>
	      		<div>{this.state.results[5]}</div>
	      		<div style={{paddingTop:'20px'}}>{'Synonyms: '+this.state.results[6]}</div>
	      		<div style={{display:'flex',justifyContent:'center',paddingTop:'10px',height:'300px'}} >
	      		<Image src={'https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/'+this.state.results[7]} />
	      		</div>
	      		</div>
	      		:
	      		null
	      	}

	      </main>

	      {this.state.entrySearched ?
	      	  null
	      	:
		      <div style={{width:'150px',paddingBottom:'10px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
		      <a href="https://www.uaf.edu/pe/materials/">
		        <Image style={{marginLeft:'20px',borderWidth:'2px',borderStyle:'solid',borderColor:'#fbd9eb',borderRadius:'5px'}} src={'https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/title.jpg'} />
		      </a>
		      <div style={{width:'200px',paddingTop:'5px',fontStyle:'italic'}}>Click here to read online books!</div>
		      </div>
	  		}

	      <footer className={styles.footer}>
			  <List bulleted horizontal>
			    <List.Item as='a'>About</List.Item>
			    <List.Item as='a'>
			    <a href="mailto:cwliu2@alaska.edu">Contact</a>
			    </List.Item>
			  </List>
	      </footer>
	    </div>
	  )

	}
}

export default Home;