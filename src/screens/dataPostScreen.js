import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TextInput, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

class dataPostScreen extends React.Component {

  render() {

    var textData = this.props.post_text 
    if(this.props.upload_status === false){
      return (
        <View style={styles.container}> 
          <TextInput 
            placeholder = 'Enter Text Here'
            style = {{width: 300,}}
            onChangeText = { (text) => this.props.dispatch({type: 'UPDATE_TEXT', text: text})}
          />
          <Button
            title = 'Post'
            onPress = { () => {
                //paste the url in axios.post webhook is a good site for testing
                axios.post('https://webhook.site/b75bfbe8-9bdf-4923-9b34-f5a869152409',{data: textData})
                .then( this.props.dispatch({type: 'UPLOAD_TEXT_ONGOING'}) )
                .then(res => {
                  this.props.dispatch({type: 'UPLOAD_TEXT_DONE'})
                  alert('Message has been delivered')
                })
              } 
            }
          />
        </View>
      );
    }
    else{
      return (
        <View style={styles.container}> 
          <TextInput 
            placeholder = 'Enter Text Here'
            style = {{width: 300,}}
            onChangeText = { (text) => this.props.dispatch({type: 'UPDATE_TEXT', text: text})}
          />
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );

    }
    
  }
}

const mapStateToProps = (state) =>{
  return {
    post_text : state.text,
    upload_status : state.textUpload, 
  }
}

export default connect(mapStateToProps)(dataPostScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
