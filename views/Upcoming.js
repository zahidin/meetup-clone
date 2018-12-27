import { Text } from 'native-base';
import React, {Component} from 'react'
import { Grid } from 'react-native-easy-grid'
import { withNavigation } from "react-navigation";

class Upcoming extends Component{
    render(){
        return(
            <Grid style={{alignItems:'center',justifyContent:'center',height:'100%'}}>
                <Text style={{color:'gray'}}>
                    { `You're not going to any upcoming
                    Meetups
                    ` }{'\n'}
                    <Text style={{color:'#c30f42'}} onPress={() => ( this.props.navigation.navigate('Find'))} >{`               Find a Meetup`}</Text>
                </Text>
            </Grid>
        )
    }
}

export default withNavigation(Upcoming)