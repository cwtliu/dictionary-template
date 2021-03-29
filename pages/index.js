import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import {Image, Input, List} from 'semantic-ui-react';

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Sugcestun</title>
        <link rel="icon" href="https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/drum.jpg" />
      </Head>

      <main className={styles.main}>
      	<div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      	<div style={{flex:2}}>
      		<Image src={'https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/drum.jpg'} />
      	</div>
        <h1 style={{flex:3, fontSize: '45px',paddingLeft:'10px'}} className={styles.title}>
          {'Sugcestun'}
        </h1>
        </div>
        <div style={{width:'100%'}}>
        	<Input fluid action={{ icon: 'search' }} placeholder="Type in Sugcestun or English..."/>
       	</div>
      </main>

      <div style={{width:'150px',paddingBottom:'10px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
      <Image style={{marginLeft:'20px',borderWidth:'2px',borderStyle:'solid',borderColor:'#fbd9eb',borderRadius:'5px'}} src={'https://yupikmodulesweb.s3.amazonaws.com/static/exercise1/title.jpg'} />
      <div style={{width:'200px',paddingTop:'5px',fontStyle:'italic'}}>Click here to read online books!</div>
      </div>

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
