import React,{Component} from 'react'
import {Image,Text} from 'react-native'
import {Container, Content, Button} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Video from 'react-native-video'

import styles from '../assets/Styleslogin'
export default class Login extends Component{

    render(){
        return(
			<Container>
				<Grid>
					<Col>
						<Video
							source={require('../video/meetupVideo.mp4')}
							rate={1.0}
							volume={1.0}
							muted={true}
							resizeMode={"cover"}
							repeat
							style={styles.video}
		/>
						<Row>
							<Col  style={styles.logo}>
								<Image
									style={{width: 130, height: 130}}
									source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png'}}
									/> 
								<Text style={styles.judulLogo}>
									We are what we do
							</Text>   

							</Col>
						</Row>
						<Row style={styles.signup}>
							<Col>
								<Button block light onPress={()=> this.props.navigation.navigate('Register')}>
									<Text style={styles.textSingup}>SIGN UP</Text>
								</Button>
									<Text style={styles.textAlready}  onPress={() => this.props.navigation.navigate('Home')} >ALREADY A MEMBER? LOG IN</Text>	
							</Col>
						</Row>
					</Col>
				</Grid>
			</Container>
        )
    }
}
