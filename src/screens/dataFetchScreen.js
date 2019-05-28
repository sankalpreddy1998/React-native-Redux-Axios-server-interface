import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, ScrollView, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import { Card } from 'react-native-elements'
import axios from 'axios';
import { connect } from 'react-redux';


class dataFetchScreen extends React.Component {
  
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      const gotData = res.data;
      this.props.dispatch({type: 'INIT_DATA', data: gotData})
    })
  }
  
  render() {
    
    console.log(this.props);
    const items = this.props.list_data;
    const itemList = (items.length) ? (
      items.map(item => {
        return(
          <TouchableOpacity key={item.id} onPress={ () => 
            {
              this.props.navigation.navigate('View',{ itemId: item.id} );
            }
          }>
            <Card containerStyle={{padding: 10, height: 200, borderWidth: 0, borderColor: 'transparent', elevation: 4, borderRadius: 6}}>
              <View style={{margin: 20, flexDirection: 'row'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', margin:10}}>User Id:</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', margin:10}} onPress={() => {
                      Alert.alert('You tapped the button!');
                      }}
                >{item.userId}</Text>
              </View>
              <View style={{margin: 20, marginTop: 0}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', margin:10, marginTop: 0}}>Title:</Text>
                <Text style={{marginLeft: 10,}}>{item.title}</Text>
              </View>             
            </Card>
          </TouchableOpacity>
        )
      })
    ) : 
    (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
    )
    
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}} >
        {itemList}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) =>{
  console.log(state.data)
  return {
    list_data : state.data
  }
}


export default connect(mapStateToProps)(dataFetchScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
