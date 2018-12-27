import {Container, Header,Body, Content,List,ListItem, Footer, Button , FooterTab, Text, Icon, Right, Thumbnail, Left, Separator} from 'native-base';
import React, {Component} from 'react'
import {Image,View,ScrollView } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'

import styles from './../assets/Stylesprofile'

export default class Profile extends Component{
    constructor(props){
        super()
        this.state = {
            member:[
                {
                    name:'OWASP Indonesia Chapter',
                    url:'https://i.imgur.com/9x5hgcA.gif',
                    members:'806 Members'
                },
                {
                    name:'Node.js Jakarta',
                    url:'https://i.ibb.co/VJBKdy5/imageedit-4-8751081414.gif',
                    members:'1.749 nodejs farmers'
                },
                {
                    name:'Python ID',
                    url:'https://i.imgur.com/hQYs9ht.gif',
                    members:'5.829 Members'
                },
                {
                    name:'Jakarta Learns Programming',
                    url:'https://i.imgur.com/XcYXjNc.gif',
                    members:'2.919 Learnes'
                },

            ]
        }
    }
    render(){
        let members = this.state.member
        return(
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Text style={styles.textHeader}>Profile</Text>
                    </Left>
                    <Body/>
                    <Right>
                        <Icon name='md-more' style={{color:'white'}}/>
                    </Right>
                </Header>
                <Content>
                    <Grid>
                        <Row>
                            <Col style={{padding:40}}>
                                <Thumbnail large style={{marginRight:12}} source={{uri: 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-1/p160x160/13728979_1131553776917768_638538500801579548_n.jpg?_nc_cat=100&_nc_ht=scontent-sin6-2.xx&oh=a68bb0c0a6449d39c4478e712ed05b4f&oe=5C69E7D1'}} />
                            </Col>
                            <Col style={{paddingTop:40,paddingRight:60,paddingLeft:60,width:'100%'}}>
                                <View>
                                    <Text style={{fontSize:17}}>Muhammad Zahidin Noer</Text>
                                    <Text style={{color:'gray',fontSize:15,paddingBottom:5,paddingTop:5}}>Jakarta</Text>
                                    <Button light style={{backgroundColor:'white',height:'41%',width:'80%',justifyContent:'center'}}>
                                        <Text style={styles.textEditprofile}>Edit Profile</Text>
                                    </Button>
                                </View>
                                
                            </Col>
                        </Row>
                        <Separator style={{height:10,backgroundColor:'#eeeeee'}}></Separator>
                        <Row>
                            <Col>
                                <Text style={styles.textMember}>Member</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {members.map((val,key) => (
                                    <ListMember key={key} url={val.url} name={val.name} members={val.members} />
                                ))}
                            </Col>
                        </Row>
                        <Separator style={{height:10,backgroundColor:'#eeeeee'}}></Separator>
                        <Row>
                            <Col>
                                <Text style={styles.textInterests}>Interests</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{marginTop:10,marginLeft:20,marginBottom:10}}>
                                    <Button bordered light>
                                        <Text style={{color:'#c30f42'}}>Ruby</Text>
                                    </Button>
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
							<Icon name='md-notifications' style={styles.iconPutih} />
							<Text style={styles.textAbu}>Updates</Text>
						</Button>

						<Button vertical
						onPress={() => (this.props.navigation.navigate('Profile'))}>
							<Icon name='md-person' style={styles.iconActive} />
							<Text style={styles.textActive}>Profile</Text>
						</Button>

					</FooterTab>
				</Footer>
            </Container>
        )
    }
}

class ListMember extends Component{
    render(){
        let url ={uri:this.props.url}
        return(
            <List style={{margin:10}}>
                <ListItem thumbnail>
                    <Left>
                        <Thumbnail square source={url} />
                    </Left>
                    <Body>
                        <View>
                            <Text>{this.props.name}</Text>
                            <Text note numberOfLines={1}>{this.props.members}</Text>
                        </View>
                    </Body>
                    <Right/>
                </ListItem>
            </List>
        )
    }
}