/*
 * @Author: Code4GL 
 * @Date: 2018-12-17 15:24:19 
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-17 19:14:31
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList ,TouchableOpacity} from 'react-native';
import {ComponentList} from './../../data/ComponentList'; 

class ComponentCell extends Component{

    constructor(props){
        super(props);
        this.state={
            viewDescription: false
        }
    }

    render(){
        return(
            <View>
                <TouchableOpacity onPress={()=>{this.setState({viewDescription: !this.state.viewDescription})}}>
                    <Text>{this.props.data.item.key}</Text>
                    <Text>{this.props.data.item.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={}>
                    <Text>更多</Text>
                </TouchableOpacity>
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

export default class Index extends Component {
    constructor(props){
        super(props)
    }

    renderItems (data){
        return(
            <ComponentCell data={data}>
            </ComponentCell>
        )
    }

    render() {
        return (
            <FlatList
            data={ComponentList} 
            renderItem={this.renderItems}>
            </FlatList>
        );
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