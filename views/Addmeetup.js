import {Container, Header,Body, H2,Content, Toast,Form,Label, Button , FooterTab, Text, Icon, Right, Item, Picker, CardItem, Left,Thumbnail, ListItem,List, InputGroup, Input} from 'native-base';
import React, {Component} from 'react'
import {Image,View,ScrollView } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'

import styles from '../assets/Stylesaddmeetup'

export default class Addmeetup extends Component{
    constructor(props){
        super(props)
        this.state = {
            selected:"Key1",
            showToast: false
        }
    }

    onValueChange = (value) => {
        this.setState({
            selected:value
        })
     }

    render(){
        return(
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Icon name='md-close' style={{color:'white'}} onPress={() => (this.props.navigation.navigate('Home'))}/>
                    </Left>
                    <Body>
                        <Text style={{color:'white'}}>Start a Meetup</Text>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Grid style={styles.grid}>
                        <Row style={styles.rowHeader}>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Thumbnail large style={{marginBottom:10}} source={{uri: 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-1/p160x160/13728979_1131553776917768_638538500801579548_n.jpg?_nc_cat=100&_nc_ht=scontent-sin6-2.xx&oh=a68bb0c0a6449d39c4478e712ed05b4f&oe=5C69E7D1'}}></Thumbnail>
                                <H2>Start a new Meetup in Jakarta</H2>
                                <Text style={{paddingTop:5}}>Find your people, achieve something,</Text>
                                <Text>learn something, do something.</Text>
                            </View>
                        </Row>
                    </Grid>
                    <Grid style={styles.grid}>
                        <Row style={styles.row}>
                            <View style={{width:'100%'}}>
                                <Text>Give youtr Meetup a name and a brief description:</Text>
                                    <Item floatingLabel style={{marginTop:15}}>
                                        <Label style={{fontSize:12}}>Meetup name</Label>
                                        <Input/>
                                    </Item>
                                    <Item floatingLabel style={{marginTop:15}}>
                                        <Label style={{fontSize:12}}>Description</Label>
                                        <Input />
                                    </Item>
                            </View>
                        </Row>
                    </Grid>
                    <Grid style={styles.grid}>
                        <Row style={styles.row}>
                            <View>
                                <Text style={{marginBottom:8}}>Location</Text>
                                <Text><Icon name='md-pin' style={{color:'#eeeeee'}}/> Jakarta</Text>
                            </View>
                        </Row>
                    </Grid>
                    <Grid style={styles.grid}>
                        <Row style={styles.row}>
                            <View>
                                <Text style={{marginBottom:8}}>For people interested in</Text>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Select your SIM"
                                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                                    style={{ width: undefined }}
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChange}
                                    >

                                        <Picker.Item label="Ruby" value="Ruby" />
                                        <Picker.Item label="Computer Programming" value="Computer Programming" />
                                        <Picker.Item label="Web Development" value="Web Development" />
                                        <Picker.Item label="Software Development" value="Software Development" />
                                        <Picker.Item label="Javascript" value="Javascript" />
                                </Picker>
                            </View>
                        </Row>
                    </Grid>
                    <Grid style={styles.grid}>
                        <Row style={styles.row}>
                            <Button block light style={{backgroundColor:'#c30f42',width:'100%'}} onPress={()=>Toast.show({text:'Submitted', buttonText: "Okay",type: "success",duration: 3000})}>
                                <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>Continue</Text>
                            </Button>
                        </Row>
                    </Grid>
                   
                                        
                </Content>
            </Container>
        )
    }
}