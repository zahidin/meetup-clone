import React,{Component} from 'react'
import {Text} from 'react-native'
import {Container, Content, Button, Icon,Header,Item,ListItem,List, Body, Input} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Iconn from 'react-native-fa-icons';

import styles from '../assets/Stylessearchgroup'
import { TextInput } from 'react-native-gesture-handler';

export default class Searchgroup extends Component{
    constructor(){
		super()
		this.state ={
            textSearch:'Search Group',
            group:['node js jakarta','devops indonesia','javascript indonesia','jakarta learns programming','python id']
            
		}
	}
    render(){
        return(
            <Container>
               <Header searchBar style={styles.header}>
                <Item style={styles.header}>
                    <Button transparent onPress={()=> this.props.navigation.navigate('Home')}>
                        <Icon name='arrow-back' style={styles.iconSearch}/>
                    </Button>
                    <Input style={styles.textSearch} placeholder='Search Group' />
                </Item>
               </Header>
                <Content>
                    <List>
                        {this.state.group.map((groups,key)=>(
                            <ListItem key={key} style={styles.listGroup}>
                                <Text>{groups}</Text>
                            </ListItem>
                        ))}
                        
                    </List>
                </Content>
            </Container>
        )
    }
}
