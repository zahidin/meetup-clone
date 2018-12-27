import React ,{Component} from 'react'
import { Container, Header, Content, Tab, Tabs, Left, Text, Footer,FooterTab,Button,Icon, Body, Right } from 'native-base';

import styles from '../assets/Stylesgoing'
import Upcoming from './Upcoming'
import Past from './Past'

export default class Going extends Component{
    render(){
        return(
            <Container>
                <Header hashtab style={styles.header}>
                    <Left>
                        <Text style={styles.textHeader}>You're going</Text>
                    </Left>
                    <Body/>
                    <Right/>
                </Header>
                    
                    <Tabs>

                    <Tab tabStyle={{backgroundColor:'#c30f42'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} activeTabStyle={{backgroundColor:'#c30f42'}} heading="UPCOMING">
						<Upcoming/>
                    </Tab>

                    <Tab tabStyle={{backgroundColor:'#c30f42'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} activeTabStyle={{backgroundColor:'#c30f42'}} heading="PAST">
						<Past/>
                    </Tab>
                
                    </Tabs>
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
						onPress={() => ( this.props.navigation.navigate('Going'))}>
							<Icon name='md-checkmark-circle' style={styles.iconActive} />
							<Text style={styles.textActive}>Going</Text>
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