import {Container, Header,Body, Content, Footer, Button , FooterTab, Text, Icon, Right, Item, Card, CardItem, Left,List, Separator, ListItem, Input} from 'native-base';
import React, {Component} from 'react'
import {Image,View,ScrollView } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'

import styles from './../assets/Stylesearchcities'
export default class Searchcities extends Component{
    constructor(props){
        super()
        this.state = {
            cities:['Pondok Aren,ID','Serpong ID','Ciputat, ID','Sawangan ,ID','Parung,ID','Ciawi,ID','Cisarua,ID','Cicuruk,ID']
        }
    }

    render(){
        return(
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Icon name='arrow-back' style={styles.iconSearch} onPress={() => (this.props.navigation.navigate('Home'))}/>
                    </Left>
                    <Body>
                        <Input placeholder='Search cities' style={{color:'white'}} />
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Grid>
                        <Row>
                            <Col>
                            {this.state.cities.map((val,key) => (
                                <List key={key}>
                                    <ListItem style={styles.listGroup}>
                                        <Text>{val}</Text>
                                    </ListItem>
                                </List>
                            ))}
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        )
    }
}
