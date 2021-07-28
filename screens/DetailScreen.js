import * as React from 'react';
import { View,Text,Button } from 'react-native'

const DetailScreen=({navigation})=>{
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Detail Screen</Text>
        <Button
          title="Go back"
          onPress={()=>navigation.goBack()}
        >
        </Button>
        <Button
          title="Go to first screen"
          onPress={()=>navigation.popToTop()}
        >
        </Button>
      </View>
    )
  }

  export default DetailScreen;