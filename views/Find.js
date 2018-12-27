import {Container, Header,Body, Separator,Content, Footer, Button , FooterTab, Text, Icon, Right, Item, Card, CardItem, Left,Thumbnail, ListItem} from 'native-base';
import React, {Component} from 'react'
import {Image,View,ScrollView } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'

import styles from '../assets/Stylesfind'


export default class Find extends Component{
    constructor(props){
        super()
        this.state = {
            recommended:[
                {
                    name:'This week',
                    date:'5-9 Des',
                    url:'https://i.imgur.com/TDJDRvi.gif'
                },
                {
                    name:'Today',
                    date:'Rab, 5 Des',
                    url:'https://i.imgur.com/3yo3bCA.gif'
                },
                {
                    name:'Tommorrow',
                    date:'Kam, 6 Des',
                    url:'https://i.imgur.com/ZGXE06l.gif'
                },
                {
                    name:'This weekend',
                    date:'7-9 Des',
                    url:'https://i.imgur.com/5uN4PPr.gif'
                },
                {
                    name:'Next week',
                    date:'10-16 Des',
                    url:'https://i.imgur.com/xLLNMMU.gif'
                },
                {
                    name:'Any Day',
                    date:'',
                    url:'https://i.imgur.com/npwP6EE.gif'
                },
            ],
            keyword:['Outdoor & Adventure','Tech','Family','Health & Wellness','Sports & Fitness','Learning','Photography','Food & Drink','Writing','Language & Culture','Music','Movements','LQBTQ','Film','Sc-Fi & Games','Beliefs','Arts','Pets','Hobbies  & Beauty','Social','Career & Business']
        }
    }
    render(){
        let recommendeds = this.state.recommended
        let keywords = this.state.keyword
        return(
            <Container>
                <Header style={styles.header}>
                    <Body>
                        <Item style={styles.itemHeader} onPress={()=>(alert('Search'))}>
                            <Icon name='search' style={styles.iconSearch}/>
                            <Text style={styles.garisBawah}><Text style={styles.textSearch}>Search</Text> <Text style={styles.textLokasi}>Jakarta</Text></Text>              
                        </Item>
                    </Body>
                </Header>
                <Content>
                        <Grid>
                            <Row>
                                <Col>
                                    <Text style={styles.header1}>Recommended for you</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>

                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollViewKiri}>
                                        {recommendeds.map((val,key) =>(
                                            <CardRecommend url={val.url} name={val.name} date={val.date} key={key}/>
                                        ))}
                                    </ScrollView>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Text style={styles.header2}>From your groups</Text>   
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Item>
                                        <Button small light rounded style={{marginLeft:25}}>
                                            <Icon name='md-arrow-forward' style={styles.iconBtnSmall}/>
                                        </Button>
                                        <Button transparent light>
                                            <Text style={styles.header3}>All upcoming Meetups</Text>   
                                        </Button>                                        
                                       
                                    </Item>
                                </Col>
                            </Row>
                            <Separator bordered style={styles.separator}/>
                        
                   
                        <Row>
                            <Col>
                                <Text style={styles.header2}>Explore by category</Text>   
                                {keywords.map((val,key) =>(
                                    <ListKeyword keyword={val} key={key}/>
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
							<Icon name='search' style={styles.iconActive} />
							<Text style={styles.textActive}>Find</Text>
						</Button>

						<Button vertical
						onPress={() => ( this.props.navigation.navigate('Going'))}>
							<Icon name='md-checkmark-circle' style={styles.iconPutih} />
							<Text style={styles.textAbu}>Going</Text>
						</Button>

						<Button vertical
						onPress={() => ( this.props.navigation.navigate('Update'))}>
							<Icon name='md-notifications' style={styles.iconPutih} />
							<Text style={styles.textAbu}>Updates</Text>
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

class CardRecommend extends Component{
    render(){
        let url = {'uri':this.props.url}
        return(
            <Card style={styles.card}>
                <CardItem cardBody>
                    <Image source={url} style={styles.cardItem} />
                    <View style={styles.viewItem}>
                        <Text style={styles.textCard}>
                            <Text style={styles.textCard}>{this.props.name}</Text>
                        </Text>
                        <Text style={{marginLeft:10}}>
                            <Text style={styles.textDate}>{this.props.date}</Text>
                        </Text>
                    </View>
                </CardItem>
            </Card>
        )
    }
}

class ListKeyword extends Component{
    render(){
        return(
            <ListItem last style={{marginLeft:-2}} style={{borderBottomWidth: 0}}>
                <Button small light rounded style={styles.iconBtnSmall}>
                    <Icon name='md-search' style={styles.iconBtnSmall}/>
                </Button>
                <Text>{this.props.keyword}</Text>
            </ListItem>
        )
    }
}