import React,{Component} from 'react'
import {Text} from 'react-native'
import {Container, Content, Button, Icon,Header,Left,Right,Title, Body} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Iconn from 'react-native-fa-icons';

import styles from '../assets/Stylesregister'
export default class Register extends Component{
	
    render(){
        return(
            <Container>
                <Header searchBar style={styles.header}>
                    <Left>
                        <Button transparent 
						onPress={ ()=>this.props.navigation.goBack() }>
                            <Icon name='md-arrow-back'/>
                        </Button>
                    </Left>  
					<Body style={styles.textHello}>
						<Title>Hello again!</Title>
					</Body>
                </Header>
				<Content style={styles.content}>
					<Grid>
						<Row style={styles.rowBtnAccount}>
							<Col>
								<Button block light style={styles.btnFacebook} onPress={()=>(this.props.navigation.navigate('Home'))}>
								<Iconn name="facebook-f" style={{ fontSize: 28,paddingLeft:12, color: 'white' }} />
									<Text style={styles.textFacebook}>Continue With Facebook</Text>
								</Button>
							</Col>
						</Row>
						<Row style={styles.rowBtnAccount}>
							<Col>
								<Button block bordered style={styles.btnGoogle} onPress={()=>(this.props.navigation.navigate('Home'))}>
								<Iconn name="google" style={{ fontSize: 28,paddingLeft:12, color: 'gray' }} />
									<Text style={styles.textGoogle}>Continue With Google</Text>
								</Button>
							</Col>
						</Row>
						<Row style={styles.rowBtnAccount}>
							<Col>
								<Button block  bordered style={styles.btnEmail} onPress={()=>(this.props.navigation.navigate('Home'))}>
									<Text style={styles.textEmail}>Continue With Email</Text>
								</Button>
							</Col>
						</Row>
						<Row>
							<Text>By tapping "Continue" , You agree to our Teams of Service, Privacy Policy, and Cookie Policy</Text>
						</Row>
					</Grid>
				</Content>
            </Container>
        )
    }
}