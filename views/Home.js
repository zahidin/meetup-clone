import {Container, Header,Body, Content, Footer, Button , FooterTab, Text, Icon, Right, Item, Card, CardItem, Left,Thumbnail} from 'native-base';
import React, {Component} from 'react'
import {Image,View,ScrollView } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'

import styles from '../assets/Styleshome'
export default class Home extends Component{
    constructor(props){
        super()
        this.state = {
            lokasi:'Jakarta',
            comunity:[
              {
               name:'Jakarta Learns Programming',
               url:'https://i.imgur.com/XcYXjNc.gif',
               desc:'Next Meetup TBD'
              },
              {
                name:'Owasp Jakarta',
                url:'https://i.imgur.com/9x5hgcA.gif',
                desc:'Next Meetup TBD'
              },
              {
                name:'Python ID',
                url:'https://i.imgur.com/hQYs9ht.gif',
                desc:'Next Meetup TBD'
              },
              {
                name:'Node Js Jakarta',
                url:'https://i.ibb.co/VJBKdy5/imageedit-4-8751081414.gif',
                desc:'Next Meetup TBD'
              }
            ],
            populer:[
              {
                name:'Journocodes Indonesia',
                url:'https://i.imgur.com/5K6WDG3.gif',
                event:'Design the look and feel of the data visualisation with D3.js',
                time:'Sabtu 15.00'
              },
              {
                name:'DevOps Indonesia',
                url:'https://i.ibb.co/1RxhsSJ/imageedit-31-8746043860.gif',
                event:'DevOps Indonesia at Shopee',
                time:'13 Des 17.30'
              },
              {
                name:'Scrum user group Jakarta',
                url:'https://i.ibb.co/b5xysxm/imageedit-35-2379508227.gif',
                event:'Understanding Learn Agile and Governance in Business',
                time:'12 Des 19.00'
              },
              {
                name:'American in Jakarta',
                url:'https://i.ibb.co/qdHKnpF/imageedit-37-2722484707.gif',
                event:'Year End Networking at New Venue',
                time:'14 Des 19.00'
              },
            ],
            explore1:[
              {
                name:'Outdoors & Adventure',
                url:'https://meetup-clone.com/static/media/outdoors.6f4bdbd1.jpeg'
              },
              {
                name:'Family',
                url:'https://meetup-clone.com/static/media/family.225d1f20.jpeg'
              },
              {
                name:'Sports & Fitness',
                url:'https://meetup-clone.com/static/media/sports.a39b146d.jpeg'
              },
              {
                name:'Beliefs',
                url:'https://meetup-clone.com/static/media/beliefs.47859aa2.jpeg'
              },
              {
                name:'Sci-Fi',
                url:'https://meetup-clone.com/static/media/scifi.f07bf090.jpeg'
              },
              {
                name:'Film',
                url:'https://meetup-clone.com/static/media/film.dec0eaf3.jpeg'
              },
              {
                name:'Sci-Fi',
                url:'https://meetup-clone.com/static/media/scifi.f07bf090.jpeg'
              },
            ],
            explore2:[
              {
                name:'Tech',
                url:'https://meetup-clone.com/static/media/learning.04fd199d.jpeg'
              },
              {
                name:'Wellness',
                url:'https://meetup-clone.com/static/media/wellness.db92acd7.jpeg'
              },
              {
                name:'Learning',
                url:'https://meetup-clone.com/static/media/language.1349f9bf.jpeg'
              },
              {
                name:'Writing',
                url:'https://meetup-clone.com/static/media/writing.0d597e45.jpeg'
              },
              {
                name:'Photography',
                url:'https://meetup-clone.com/static/media/music.d7c0cb64.jpeg'
              },
              {
                name:'Movements',
                url:'https://meetup-clone.com/static/media/movements.33a583c5.jpeg'
              },
              {
                name:'Beliefs',
                url:'https://meetup-clone.com/static/media/beliefs.47859aa2.jpeg'
              },              
            ]
        
          }
    }
    handleCardCommunity(comunity, key){
        let gambar = {'uri':comunity.url}
        return(
          <Card style={styles.card} key={key} >
            <CardItem cardBody>
            <Image source={gambar} style={styles.cardItem} />
              <View style={styles.viewItem}>
                <Text style={styles.textCard}>{comunity.name}</Text>
              </View>
            </CardItem>
            <CardItem>
                <Text style={styles.textCardDesc}>{comunity.desc}</Text>
            </CardItem>
          </Card>
        )
	  }

	handleCardPopuler(populer, key){
		let gambar = {'uri':populer.url}
		return(
		  <Card style={styles.card} key={key} >
			<CardItem cardBody>
			  <Image source={gambar} style={styles.cardItem} />
			  <View style={styles.viewItem}>
				<Text style={styles.textCard}>{populer.name}</Text>
			  </View>
			 
			</CardItem>
			<CardItem>
			  <Text numberOfLines={1} style={styles.textCardEvent}>{populer.event}</Text>
			</CardItem>
			<CardItem>
			  <Text style={styles.textCardTime}>{populer.time}</Text>
			</CardItem>
		  </Card>
		)
	}
	handleExplore1(category,key){
		let gambar = {'uri':category.url}
		return(
		  <View style={styles.viewExpoloreKiri} key={key}>
			<Image source={gambar} style={styles.imageExplore} rounded='cover'/>
			<Text style={styles.nameCategoryExplore}>{category.name}</Text>
		  </View>
		)
	  }
	  
	handleExplore2(category,key){
		let gambar = {'uri':category.url}
		return(
		  <View style={styles.viewExpoloreKanan} key={key}>
			<Image source={gambar} style={styles.imageExplore} rounded='cover'/>
			<Text style={styles.nameCategoryExplore}>{category.name}</Text>
		  </View>
		)
	}
	
    render(){
		let comunitys = this.state.comunity
		let populer = this.state.populer
		let explore1 = this.state.explore1
		let explore2 = this.state.explore2
        return(
            <Container>
                <Header style={styles.header}>

                    <Body>
                        <Item style={styles.itemFloating} onPress={()=>(this.props.navigation.navigate('Searchcities'))}>
                            <Icon name="md-pin" style={styles.pin}></Icon>
                            <Text style={styles.lokasi}>Jakarta</Text>              
                        </Item>
                    </Body>

                    <Right>
                        <Button transparent onPress={()=>(this.props.navigation.navigate('Addmeetup'))}>
                            <Icon name="md-add" style={styles.iconBold}></Icon>
                        </Button>
                        <Button transparent onPress={()=>(this.props.navigation.navigate('Searchgroup'))}>
                            <Icon name="search" style={styles.iconBold}></Icon>
                        </Button>
                    </Right>

                </Header>

                <Content>
                    <Grid>
                        <Row>
                            <Col>
                                <Text style={styles.header1}>Your Meetups</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: 'row'}}>
                                    <View style={styles.viewCard}>
                                        {comunitys.map((comunity, key) => this.handleCardCommunity(comunity, key))}
                                    </View>  
                                </ScrollView> 
                            </Col>

                        </Row>
                    <Row>
                      <Col>
                        <Text style={styles.header1}>Populer Now</Text>  
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: 'row'}}>
                        <View style={{flexDirection:'row',marginLeft:3,marginRight:17}}>
                          {populer.map((populer, key) => this.handleCardPopuler(populer, key))}
                        </View>  
                      </ScrollView> 
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <View style={styles.header2}>
                        <Text style={styles.header1}>Other</Text>
                        <Button transparent danger>
                          <Text style={styles.btnSeeall}>See all</Text>
                        </Button>
                      </View>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <View style={styles.viewOther}>
                        <Left>
                          <Card style={styles.cardOther}>
                          <CardItem cardBody style={styles.cardBodyOther}>
                            <Text style={styles.cardDescOther}>Jakarta Objective C Meetup</Text>
                          </CardItem>
                          <CardItem>
                            <Text style={styles.cardTextSmallOther}>24 interested</Text>
                          </CardItem>
                          </Card>
                        </Left>
                        <Right>
                          <Button rounded light style={styles.btnArrow}>
                            <Icon name="md-arrow-round-forward" style={styles.iconArrow}></Icon>
                          </Button>
                        </Right>
                        </View>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <View style={styles.viewExplore}>
                          <Col>
                            <Text style={styles.textExplore}>Explore</Text>
                          </Col>
                          <Row>
                          <Col>
                            {explore1.map((category,key) => this.handleExplore1(category,key))}
                          </Col>
                          <Col>
                            {explore2.map((category,key) => this.handleExplore2(category,key))}
                          </Col>
                          </Row>

                        </View>
                      </Col>
                    </Row>
                  </Grid>
                </Content>
                <Footer>
                  <FooterTab style={styles.footer}>

                    <Button vertical
                    onPress={() => ( this.props.navigation.navigate('Home'))}>
                      <Icon name='home' style={styles.iconActive} />
                      <Text style={styles.textActive}>Browse</Text>
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
                      <Icon name='md-person' style={styles.iconPutih} />
                      <Text style={styles.textAbu}>Profile</Text>
                    </Button>

                  </FooterTab>
                </Footer>
            </Container>
        )
    }
}