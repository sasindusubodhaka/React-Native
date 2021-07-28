const App=()=>{
    show1=()=>{
      alert("Welcome ");
    }
    show2=(num)=>{
      alert(num)
    }
    return(
      <View>
      
        <Text style={{backgroundColor:'blue',color:'white',textAlign:'center'}}>Welcome to React Native  </Text>
        <Button title="Button1" onPress={show1} style={{innerWidth:'50%'}}></Button>
        <Button title="Button2" onPress={()=>{show2("pressed")}} ></Button>
      </View>
    );

}