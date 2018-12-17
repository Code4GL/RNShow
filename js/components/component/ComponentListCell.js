/*
 * @Author: Code4GL 
 * @Date: 2018-12-17 19:39:47 
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-17 19:44:25
 */
'use strict';

import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class ComponentListCell extends Component{

    constructor(props){
        super(props);
        this.state={
            viewDescription: false
        }
    }

    render(){
        return(
            <View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{this.setState({viewDescription: !this.state.viewDescription})}}>
                        <Text>{this.props.data.item.key}</Text>
                        <Text>{this.props.data.item.name}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>更多</Text>
                    </TouchableOpacity>
                </View>
                {this.state.viewDescription
                ?<View>
                    <Text>{this.props.data.item.description}</Text>
                    <Text>{this.props.data.item.descriptionCN}</Text>
                </View>
                :null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });