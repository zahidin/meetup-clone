import {Container, Header,Body, Content, Footer, Button , FooterTab, Text, Icon, Right, Item, Card, CardItem, Left,List, Separator, ListItem} from 'native-base';
import React, {Component} from 'react'
import {Image,View,ScrollView } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'

import styles from './../assets/Stylesupdate'
export default class Update extends Component{
    constructor(props){
        super()
        this.state = {
            notif:[
                {
                    name:'Software Architect Indonesia Community just annouced a new Meetup for Desc 17',
                    url:'https://secure.meetupstatic.com/photos/event/5/5/f/4/600_469222004.jpeg',
                    date:'Kemarin'
                },
                {
                    name:'A discussion started in OWASP Indonesia Chapter : "TGIF Social Blockchain Night!" ',
                    url:'https://secure.meetupstatic.com/photos/event/d/e/c/1/600_476877025.jpeg',
                    date:'3 Hari yang lalu'
                },
                {
                    name:'This new Meetup just started',
                    url:'https://secure.meetupstatic.com/photos/event/4/7/c/f/600_476718383.jpeg',
                    date:'26 Nov'
                },
                {
                    name:'Tokopedia Tech Circle',
                    url:'https://secure.meetupstatic.com/photos/event/3/4/2/b/600_476533355.jpeg',
                    date:'17 Nov'
                },
            ]
        }
    }
    render(){
        let notifs = this.state.notif
        return(
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Text style={styles.textHeader}>Updates</Text>
                    </Left>
                    <Body/>
                    <Right>
                        <Icon name='md-chatbubbles' style={{color:'white'}}></Icon>
                    </Right>
                </Header>
                <Content>
                    <Grid>
                        <Row>
                            <Col>
                                <Text style={styles.textMessages}>Messages</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{alignItems:'center',justifyContent:'center',height:150}}>
                                <Text style={{color:'gray'}}>You don't have any messages</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <View style={{backgroundColor:'#eeeeee',height:7}}>
                                </View>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text style={styles.textNotif}>Notifications</Text>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {notifs.map((val,key)=>(
                                    <ItemNotif name={val.name} url={val.url} date={val.date} key={key} />
                                ))}
                            </Col>
                        
                        </Row>
                    </Grid>
                    
                </Content>
                <Footer>
					<FooterTab style={styles.footer}>

						<Button vertical
						onPress={() => ( this.props.navigation.navigate('Home'))}>
							<Icon name='home' style={styles.iconPutih} />
							<Text style={styles.textAbu}>Browse</Text>
						</Button>

						<Button vertical
						onPress={() => ( this.props.navigation.navigate('Find'))}>
							<Icon name='search' style={styles.iconPutih} />
							<Text style={styles.textAbu}>Find</Text>
						</Button>

						<Button vertical
						onPress={() => (this.props.navigation.navigate('Going'))}>
							<Icon name='md-checkmark-circle' style={styles.iconPutih} />
							<Text style={styles.textAbu}>Going</Text>
						</Button>

						<Button vertical
						onPress={() => (this.props.navigation.navigate('Update'))}>
							<Icon name='md-notifications' style={styles.iconActive} />
							<Text style={styles.textActive}>Updates</Text>
						</Button>

						<Button vertical
						onPress={() => (this.props.navigation.navigate('Profile'))}>
							<Icon name='md-person' style={styles.iconPutih} />
							<Text style={styles.textAbu}>Profile</Text>
						</Button>

					</FooterTab>
				</Footer>
            </Container>
        )
    }
}

class ItemNotif extends Component{
    render(){
        let url = {uri:this.props.url}
        return(
            <List>
                <ListItem>
                    
                    <Image source={url} style={styles.imageNotif} /> 
                    <View style={styles.viewNotif}>
                        <Text style={styles.textJudulNotif}>{this.props.name}</Text>
                        <Text style={styles.textDateNotif}><Icon style={styles.iconCalendar} name='md-calendar' /> {this.props.date}</Text>
                    </View>
                </ListItem>
            </List>
              
        )
    }
}