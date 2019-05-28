import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';


class dataViewScreen extends React.Component {
  render() {
    const itemDetails = this.props.itemDetails;
    return (
      <View style={{}}>
        <Text style={{margin: 20, fontSize: 20, fontWeight: 'bold',}} >{itemDetails.title}</Text>
        <Text style={{margin: 20, fontSize: 20, fontWeight: 'bold',}} >user id {itemDetails.userId}</Text>
        <Text style={{margin: 20,}} >{itemDetails.body}</Text>
        <Text style={{margin: 20,}} >id {itemDetails.id}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) =>{
  const itemId = ownProps.navigation.state.params.itemId;
  return {
    itemDetails : state.data.find(item => (item.id === itemId)),
  }
}
export default connect(mapStateToProps)(dataViewScreen);


