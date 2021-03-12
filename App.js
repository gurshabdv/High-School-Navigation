import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
// used to switch between screens
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Picker } from '@react-native-community/picker';// importing dropdown menu
import Svg, { Circle, Image, Polyline, Text } from 'react-native-svg';//import tools to draw line
import { CardViewWithImage } from 'react-native-simple-card-view' // importing cards to show the teacher and class taught
import { render } from 'react-dom';

// screen from which you can select the floor you want
class FloorPickerScreen extends React.Component{
  
  render(){
    // function to create space between butons
    const Break = () => (
      <View style={styles.break} />
    );
    return(
      <View style = {styles.container}>
        <TouchableOpacity>
          {/* Button for first floor*/} 
          <Button
            style = {styles.floorBtn}
            title = "Floor 1"
            color = "#246eb9"
            onPress = {() => this.props.navigation.navigate('RoomPick1')}
            //if button selected go to screen to choose which class to travek from 
          />
          <Break/>{/*space between buttons*/}
          {/* Button for first floor*/}
          <Button
            style = {styles.floorBtn}
            title = "Floor 2"
            color = "#f06543"
            onPress = {() => this.props.navigation.navigate('RoomPick2')}
            //if button selected go to screen to choose which class to travek from
          />
        </TouchableOpacity>
      </View>
    )
  }
}

// screen to pick which room to go to
class RoomPickerScreen1 extends React.Component{
  constructor(props){
      super(props);
      this.state = { selectedClassFrom: '0', selectedClassTo: '0' };// state variables to determine which class to start from and which class to end at
  }
 
  render(){
    
      return(
          <View>
            {/*all drop down options. if the option is selected set the corrsponding state variable to that option*/}
              <Picker selectedValue = {this.state.selectedClassFrom} onValueChange = {(value) => {this.setState({selectedClassFrom: value})}}>
                  <Picker.item label = 'From' value = '0' color='#246eb9'></Picker.item>
                  <Picker.item label = 'Main Enterance' value = '1' color='#f06543'></Picker.item>
                  <Picker.item label = '114' value = '2' color='#f06543'></Picker.item>
                  <Picker.item label = 'Student Services' value = '3' color='#f06543'></Picker.item>
                  <Picker.item label = '170/Staff Room' value = '4' color='#f06543'></Picker.item>
                  <Picker.item label = '119/120' value = '5' color='#f06543'></Picker.item>
                  <Picker.item label = '121/122' value = '6' color='#f06543'></Picker.item>
                  <Picker.item label = '123/124' value = '7' color='#f06543'></Picker.item>
                  <Picker.item label = '125/126' value = '8' color='#f06543'></Picker.item>
                  <Picker.item label = '162B' value = '10' color='#f06543'></Picker.item>
                  <Picker.item label = '162A' value = '11' color='#f06543'></Picker.item>
                  <Picker.item label = '161' value = '13' color='#f06543'></Picker.item>
                  <Picker.item label = '161A' value = '14' color='#f06543'></Picker.item>
                  <Picker.item label = '163' value = '15' color='#f06543'></Picker.item>
                  <Picker.item label = '167' value = '16' color='#f06543'></Picker.item>
                  <Picker.item label = '164A' value = '17' color='#f06543'></Picker.item>
                  <Picker.item label = '164B/166A' value = '18' color='#f06543'></Picker.item>
                  <Picker.item label = '156' value = '21' color='#f06543'></Picker.item>
                  <Picker.item label = '155/154' value = '22' color='#f06543'></Picker.item>
                  <Picker.item label = '151/152' value = '23' color='#f06543'></Picker.item>
                  <Picker.item label = '149/150' value = '24' color='#f06543'></Picker.item>
                  <Picker.item label = '148' value = '25' color='#f06543'></Picker.item>
                  <Picker.item label = '146' value = '27' color='#f06543'></Picker.item>
                  <Picker.item label = '142/143' value = '28' color='#f06543'></Picker.item>
                  <Picker.item label = '140/141' value = '29' color='#f06543'></Picker.item>
                  <Picker.item label = '112/Main Office' value = '30' color='#f06543'></Picker.item>
                  <Picker.item label = '110/Attendance Office' value = '31' color='#f06543'></Picker.item>
                  <Picker.item label = '108/105' value = '32' color='#f06543'></Picker.item>
                  <Picker.item label = '106/103' value = '33' color='#f06543'></Picker.item>
                  <Picker.item label = '104/101' value = '34' color='#f06543'></Picker.item>
                  <Picker.item label = '102' value = '35' color='#f06543'></Picker.item>
                  <Picker.item label = '137' value = '37' color='#f06543'></Picker.item>
                  <Picker.item label = '136' value = '38' color='#f06543'></Picker.item>
                  <Picker.item label = '135A' value = '39' color='#f06543'></Picker.item>
                  <Picker.item label = '135B' value = '40' color='#f06543'></Picker.item>
                  <Picker.item label = '134' value = '41' color='#f06543'></Picker.item>
                  <Picker.item label = '130' value = '43' color='#f06543'></Picker.item>
                  <Picker.item label = '132' value = '44' color='#f06543'></Picker.item>
                  <Picker.item label = '133' value = '45' color='#f06543'></Picker.item>
                  <Picker.item label = 'Cafeteria' value = '46' color='#f06543'></Picker.item>
                  <Picker.item label = '180' value = '50' color='#f06543'></Picker.item>
                  <Picker.item label = '181' value = '51' color='#f06543'></Picker.item>
                  <Picker.item label = '182/183' value = '52' color='#f06543'></Picker.item>
                  <Picker.item label = '184' value = '53' color='#f06543'></Picker.item>
                  <Picker.item label = '185' value = '54' color='#f06543'></Picker.item>
              </Picker>
              <Picker selectedValue = {this.state.selectedClassTo} onValueChange = {(value) => {this.setState({selectedClassTo: value})}}>
                  <Picker.item label = 'To' value = '0' color='#246eb9'></Picker.item>
                  <Picker.item label = 'Main Enterance' value = '1' color='#f06543'></Picker.item>
                  <Picker.item label = '114' value = '2' color='#f06543'></Picker.item>
                  <Picker.item label = 'Student Services' value = '3' color='#f06543'></Picker.item>
                  <Picker.item label = '170/Staff Room' value = '4' color='#f06543'></Picker.item>
                  <Picker.item label = '119/120' value = '5' color='#f06543'></Picker.item>
                  <Picker.item label = '121/122' value = '6' color='#f06543'></Picker.item>
                  <Picker.item label = '123/124' value = '7' color='#f06543'></Picker.item>
                  <Picker.item label = '125/126' value = '8' color='#f06543'></Picker.item>
                  <Picker.item label = '162B' value = '10' color='#f06543'></Picker.item>
                  <Picker.item label = '162A' value = '11' color='#f06543'></Picker.item>
                  <Picker.item label = '161' value = '13' color='#f06543'></Picker.item>
                  <Picker.item label = '161A' value = '14' color='#f06543'></Picker.item>
                  <Picker.item label = '163' value = '15' color='#f06543'></Picker.item>
                  <Picker.item label = '167' value = '16' color='#f06543'></Picker.item>
                  <Picker.item label = '164A' value = '17' color='#f06543'></Picker.item>
                  <Picker.item label = '164B/166A' value = '18' color='#f06543'></Picker.item>
                  <Picker.item label = '156' value = '21' color='#f06543'></Picker.item>
                  <Picker.item label = '155/154' value = '22' color='#f06543'></Picker.item>
                  <Picker.item label = '151/152' value = '23' color='#f06543'></Picker.item>
                  <Picker.item label = '149/150' value = '24' color='#f06543'></Picker.item>
                  <Picker.item label = '148' value = '25' color='#f06543'></Picker.item>
                  <Picker.item label = '146' value = '27' color='#f06543'></Picker.item>
                  <Picker.item label = '142/143' value = '28' color='#f06543'></Picker.item>
                  <Picker.item label = '140/141' value = '29' color='#f06543'></Picker.item>
                  <Picker.item label = '112/Main Office' value = '30' color='#f06543'></Picker.item>
                  <Picker.item label = '110/Attendance Office' value = '31' color='#f06543'></Picker.item>
                  <Picker.item label = '108/105' value = '32' color='#f06543'></Picker.item>
                  <Picker.item label = '106/103' value = '33' color='#f06543'></Picker.item>
                  <Picker.item label = '104/101' value = '34' color='#f06543'></Picker.item>
                  <Picker.item label = '102' value = '35' color='#f06543'></Picker.item>
                  <Picker.item label = '137' value = '37' color='#f06543'></Picker.item>
                  <Picker.item label = '136' value = '38' color='#f06543'></Picker.item>
                  <Picker.item label = '135A' value = '39' color='#f06543'></Picker.item>
                  <Picker.item label = '135B' value = '40' color='#f06543'></Picker.item>
                  <Picker.item label = '134' value = '41' color='#f06543'></Picker.item>
                  <Picker.item label = '130' value = '43' color='#f06543'></Picker.item>
                  <Picker.item label = '132' value = '44' color='#f06543'></Picker.item>
                  <Picker.item label = '133' value = '45' color='#f06543'></Picker.item>
                  <Picker.item label = 'Cafeteria' value = '46' color='#f06543'></Picker.item>
                  <Picker.item label = '180' value = '50' color='#f06543'></Picker.item>
                  <Picker.item label = '181' value = '51' color='#f06543'></Picker.item>
                  <Picker.item label = '182/183' value = '52' color='#f06543'></Picker.item>
                  <Picker.item label = '184' value = '53' color='#f06543'></Picker.item>
                  <Picker.item label = '185' value = '54' color='#f06543'></Picker.item>
              </Picker>
              {/*Button to go to map screen. Sends the starting and ending points as parameters*/}
              <Button
                  style = {styles.continueBtn}
                  disabled = {this.state.selectedClassFrom == '0'}
                  //Disable the continue button until classes are selected
                  disabled = {this.state.selectedClassTo == '0'}
                  title = 'Continue'
                  color = '#4cb944'
                  onPress = {() => this.props.navigation.navigate('Map1Scr' , {scf: this.state.selectedClassFrom, sct: this.state.selectedClassTo})}
              />
              {/*Button to go to screen for information about starting. Sends the starting point as parameters*/}
              <Button
                  style = {styles.continueBtn}
                  disabled = {this.state.selectedClassFrom == '0'}
                  //Disable the continue button until classes are selected
                  title = 'Information-Start'
                  color = '#246eb9'
                  onPress = {() => this.props.navigation.navigate('InfoFrom1' , {scf: this.state.selectedClassFrom})}
              />
              {/*Button to go to screen for information about ending. Sends the ending point as parameters*/}
              <Button
                  style = {styles.continueBtn}
                  disabled = {this.state.selectedClassTo == '0'}
                  //Disable the continue button until classes are selected
                  title = 'Information-Destination'
                  color = '#f5ee9e'
                  onPress = {() => this.props.navigation.navigate('InfoTo1' , {sct: this.state.selectedClassTo})}
              />
          </View>
      );
  }
} 

// map of the first floor
class Map1Screen extends React.Component {

  constructor(props){
    super(props)
    // array to hold all vertices of rooms
    this.vertices = [[173,410],[135,410],[135,385],[60,385],[135,350],[135,320],[135,280],[135,250],[135,220],[135,200],[135,170],[135,145],[155,145],[120,145],[85,145],[50,145],[50,170],[50,200],[50,220],[30,220],[15,220],[30,250],[30,290],[30,330],[30,370],[30,385],[30,405],[30,450],[30,480],[135,450],[135,480],[135,530],[135,560],[135,590],[135,615],[203,410],[228,410],[258,410],[278,410],[298,410],[328,410],[345,410],[345,375],[345,470],[345,490],[203,300],[203,220],[203,185],[228,185],[252,185],[252,155],[252,140],[230,140],[230,160]];
    // array to hold all connected edges
    this.edges = [[0,1],[1,2],[2,3],[2,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[11,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[19,21],[21,22],[22,23],[24,25],[3,25],[25,26],[26,27],[27,28],[1,29],[29,30],[30,31],[31,32],[32,33],[33,34],[0,35],[35,36],[36,37],[37,38],[38,39],[39,40],[40,41],[41,42],[41,43],[43,44],[35,45],[45,46],[46,47],[8,46],[47,48],[48,49],[49,50],[50,51],[51,52],[52,53],[48,53]]
    // array that will be populated with the paths
    this.path = [[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]]
    // array to hold the path from the specific class to the other
    this.routeLine = [];  
    // array to hold distances between each point
    this.dist = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    // array to hold current route
    this.route = [];
    // strings to hold current path
    this.pointVert = '';
    this.pointVerts = [];
    this.pointCoord = '';
  }

  render() {
    // get the parameters from the picker screen
    // the starting and ending classes
    const { navigation } = this.props;  
    const scf = navigation.getParam('scf', 'From');  
    const sct = navigation.getParam('sct', 'To'); 
    // set the starting values of the classes and add them to path aray 
    for (let i = 0; i < 54; i++){
      for (let j = 0; j < 54; j++){
          this.path[i][j] = [i]
        
      }
    }
    // set the original distance from each point to the next to infinity
    for(let i = 0; i < 54; i++){
      for(let j = 0; j < 54; j++){
        this.dist[i][j] = Infinity;
      }
    }

    // loop through the edges array
    for(let e = 0; e < this.edges.length; e++) {
      // let y equal the second point
      let y = this.edges[e][1];
      // let x equal the first point
      let x = this.edges[e][0];
      // set d to the distance between the 2 points
      let d = Math.hypot(this.vertices[y][0] - this.vertices[x][0],this.vertices[y][1] - this.vertices[x][1]);
      // populate the distance array from point 1 to point 2 and vice versa with the distance
      this.dist[x][y] = d;
      this.dist[y][x] = d;      
    }

    // set the distance from one point to itself to 0
    for (let i = 0; i < 54; i++){  
      this.dist[i][i] = 0;
    }

    // loop through all possible paths to get form 1 point to another
    // if stopping at a point get to the destination faster, add that point to the path
    // change the distance to the new shorter distance 
    for (let k = 0; k < 54; k++) {
      for (let i = 0; i < 54; i++) {
        for (let j = 0; j < 54; j++) {
            if (this.dist[i][j] > this.dist[i][k] + this.dist[k][j]) {
                this.dist[i][j] = this.dist[i][k] + this.dist[k][j];
                this.path[i][j] = this.path[i][k] + ',' + [k] + ',' + this.path[k][j];
            }
        }
      }
    }

    // using a switch statement determine which class you are starting from
    switch(scf){
      case '1':
        var from = 0;
        break; 
      case '2':
        var from = 1;
        break; 
      case '3':
        var from = 2;
        break; 
      case '4':
        var from = 3;
        break; 
      case '5':
        var from = 4;
        break;   
      case '6':
        var from = 5;
        break;
      case '7':
        var from = 6;
        break;
      case '8':
        var from = 7;
        break;
      case '10':
        var from = 9;
        break;
      case '11':
        var from = 10;
        break;
      case '13':
        var from = 12;
        break;
      case '14':
        var from = 13;
        break;
      case '15':
        var from = 14;
        break;
      case '16':
        var from = 15;
        break;
      case '17':
        var from = 16;
        break;
      case '18':
        var from = 17;
        break;
      case '21':
        var from = 20;
        break;
      case '22':
        var from = 21;
        break;
      case '23':
        var from = 22;
        break;
      case '24':
        var from = 23;
        break; 
      case '25':
        var from = 24;
        break; 
      case '27':
        var from = 26;
        break; 
      case '28':
        var from = 27;
        break; 
      case '29':
        var from = 28;
        break;  
      case '30':
        var from = 29;
        break;
      case '31':
        var from = 30;
        break; 
      case '32':
        var from = 31;
        break; 
      case '33':
        var from = 32;
        break; 
      case '34':
        var from = 33;
        break;  
      case '35':
        var from = 34;
        break; 
      case '37':
        var from = 36;
        break; 
      case '38':
        var from = 37;
        break; 
      case '39':
        var from = 38;
        break; 
      case '40':
        var from = 39;
        break; 
      case '41':
        var from = 40;
        break; 
      case '43':
        var from = 42;
        break; 
      case '44':
        var from = 43;
        break; 
      case '45':
        var from = 44;
        break; 
      case '46':
        var from = 45;
        break; 
      case '50':
        var from = 49;
        break; 
      case '51':
        var from = 50;
        break; 
      case '52':
        var from = 51;
        break; 
      case '53':
        var from = 52;
        break; 
      case '54':
        var from = 53;
        break; 
    }

    // using a switch statement determine which class you are going to
    switch(sct){
      case '1':
        var to = 0;
        break; 
      case '2':
        var to = 1;
        break; 
      case '3':
        var to = 2;
        break; 
      case '4':
        var to = 3;
        break; 
      case '5':
        var to = 4;
        break; 
      case '6':
        var to = 5;
        break;
      case '7':
        var to = 6;
        break;
      case '8':
        var to = 7;
        break;
      case '10':
        var to = 9;
        break;
      case '11':
        var to = 10;
        break;
      case '13':
        var to = 12;
        break;
      case '14':
        var to = 13;
        break;
      case '15':
        var to = 14;
        break;
      case '16':
        var to = 15;
        break;
      case '17':
        var to = 16;
        break;
      case '18':
        var to = 17;
        break;
      case '21':
        var to = 20;
        break;
      case '22':
        var to = 21;
        break;
      case '23':
        var to = 22;
        break;
      case '24':
        var to = 23;
        break;
      case '25':
        var to = 24;
        break; 
      case '27':
        var to = 26;
        break; 
      case '28':
        var to = 27;
        break; 
      case '29':
        var to = 28;
        break;
      case '30':
        var to = 29;
        break;
      case '31':
        var to = 30;
        break; 
      case '32':
        var to = 31;
        break; 
      case '33':
        var to = 32;
        break; 
      case '34':
        var to = 33;
        break;
      case '35':
        var to = 34;
        break; 
      case '37':
        var to = 36;
        break; 
      case '38':
        var to = 37;
        break; 
      case '39':
        var to = 38;
        break; 
      case '40':
        var to = 39;
        break; 
      case '41':
        var to = 40;
        break; 
      case '43':
        var to = 42;
        break; 
      case '44':
        var to = 43;
        break; 
      case '45':
        var to = 44;
        break; 
      case '46':
        var to = 45;
        break; 
      case '50':
        var to = 49;
        break; 
      case '51':
        var to = 50;
        break; 
      case '52':
        var to = 51;
        break; 
      case '53':
        var to = 52;
        break; 
      case '54':
        var to = 53;
        break; 
    }

    //set pointVert to the specific path from noe point to the next
    this.pointVert = this.path[from][to];
    // set the pointVerts array to each number with the commas split up
    this.pointVerts = this.pointVert.split(',');

    // loop through point verts and add x and y coordinate of that point to the string pointCoord
    for(let i = 0; i < this.pointVerts.length; i++){
      this.pointCoord += (this.vertices[parseInt(this.pointVerts[i])][0] + ',')
      this.pointCoord += (this.vertices[parseInt(this.pointVerts[i])][1] +' ')
    }
    // at the end add the coordinates of the last point to the string (since it is not included int the original path)
    this.pointCoord += (this.vertices[to][0].toString() + ',')
    this.pointCoord += this.vertices[to][1].toString()

    return (      
      <View>
        {/*Button to click to show directions*/}
        {/*pass the path as a parameter*/}
        <Button
          style = {styles.continueBtn}
          title = 'Directions'
          color = '#4cb944'
          onPress = {() => this.props.navigation.navigate('dir' , {path: this.pointCoord})}
        />
        {/*Set red circles in front af all the classes*/}
        <Svg height = "737" width = "410">          
            <Image width = "410" height = "737" href={require('./assets/Map1.jpg')}/> 
            <Circle cx="173" cy="410" r="2" fill="red" />{/*Main*/}
            <Circle cx="135" cy="410" r="2" fill="red" />{/*114*/}
            <Circle cx="135" cy="385" r="2" fill="red" />{/*Student Services*/}
            <Circle cx="60" cy="385" r="2" fill="red" />{/*170/SR*/}
            <Circle cx="135" cy="350" r="2" fill="red" />{/*119/120*/}
            <Circle cx="135" cy="320" r="2" fill="red" />{/*121/122*/}
            <Circle cx="135" cy="280" r="2" fill="red" />{/*123/124*/}
            <Circle cx="135" cy="250" r="2" fill="red" />{/*125/126*/}
            <Circle cx="135" cy="220" r="2" fill="red" />{/*125 intersection*/}
            <Circle cx="135" cy="200" r="2" fill="red" />{/*162B*/}
            <Circle cx="135" cy="170" r="2" fill="red" />{/*162A*/}
            <Circle cx="135" cy="145" r="2" fill="red" />{/*161A interrsection*/}
            <Circle cx="155" cy="145" r="2" fill="red" />{/*161*/}
            <Circle cx="120" cy="145" r="2" fill="red" />{/*161A*/}
            <Circle cx="85" cy="145" r="2" fill="red" />{/*163*/}
            <Circle cx="50" cy="145" r="2" fill="red" />{/*167*/}
            <Circle cx="50" cy="170" r="2" fill="red" />{/*164A*/}
            <Circle cx="50" cy="200" r="2" fill="red" />{/*164B/166A*/}
            <Circle cx="50" cy="220" r="2" fill="red" />{/*155 intersection*/}
            <Circle cx="30" cy="220" r="2" fill="red" />{/*156 intersection*/}
            <Circle cx="15" cy="220" r="2" fill="red" />{/*156*/}
            <Circle cx="30" cy="250" r="2" fill="red" />{/*155/154*/}
            <Circle cx="30" cy="290" r="2" fill="red" />{/*151/152*/}
            <Circle cx="30" cy="330" r="2" fill="red" />{/*149/150*/}
            <Circle cx="30" cy="370" r="2" fill="red" />{/*148*/}
            <Circle cx="30" cy="385" r="2" fill="red" />{/*146 intersection*/}
            <Circle cx="30" cy="405" r="2" fill="red" />{/*146*/}
            <Circle cx="30" cy="450" r="2" fill="red" />{/*142/143*/}
            <Circle cx="30" cy="480" r="2" fill="red" />{/*140/141*/}
            <Circle cx="135" cy="450" r="2" fill="red" />{/*112/MainOffice*/}
            <Circle cx="135" cy="480" r="2" fill="red" />{/*110/AttendenceOffice*/}
            <Circle cx="135" cy="530" r="2" fill="red" />{/*108/105*/}
            <Circle cx="135" cy="560" r="2" fill="red" />{/*106/103*/}
            <Circle cx="135" cy="590" r="2" fill="red" />{/*101/104*/}
            <Circle cx="135" cy="615" r="2" fill="red" />{/*102*/}
            <Circle cx="203" cy="410" r="2" fill="red" />{/*137 intersection*/}
            <Circle cx="228" cy="410" r="2" fill="red" />{/*137*/}
            <Circle cx="258" cy="410" r="2" fill="red" />{/*136*/}
            <Circle cx="278" cy="410" r="2" fill="red" />{/*135A*/}
            <Circle cx="298" cy="410" r="2" fill="red" />{/*135B*/}
            <Circle cx="328" cy="410" r="2" fill="red" />{/*134*/}
            <Circle cx="345" cy="410" r="2" fill="red" />{/*134 intersection*/}
            <Circle cx="345" cy="375" r="2" fill="red" />{/*130*/}
            <Circle cx="345" cy="470" r="2" fill="red" />{/*132*/}
            <Circle cx="345" cy="490" r="2" fill="red" />{/*133*/}
            <Circle cx="203" cy="300" r="2" fill="red" />{/*Cafeteria*/}
            <Circle cx="203" cy="220" r="2" fill="red" />{/*French Hall Intersection*/}
            <Circle cx="203" cy="185" r="2" fill="red" />{/*French Hall 1*/}
            <Circle cx="228" cy="185" r="2" fill="red" />{/*French Hall 2*/}
            <Circle cx="252" cy="185" r="2" fill="red" />{/*180*/}
            <Circle cx="252" cy="155" r="2" fill="red" />{/*181*/}
            <Circle cx="252" cy="140" r="2" fill="red" />{/*182/183*/}
            <Circle cx="230" cy="140" r="2" fill="red" />{/*184*/}
            <Circle cx="230" cy="160" r="2" fill="red" />{/*185*/}
            {/*Using a string draw lines connecting that path in yellow*/}
            <Polyline
              points = {this.pointCoord}
              fill="none"
              stroke={"yellow"}
              strokeWidth="4"
            />
        </Svg>  
      </View>       
    )
  }
}

// screen that shows all possible rooms to be picked for the second floor
// same logic as as the room picker screen for floor 1 
class RoomPickerScreen2 extends React.Component{
  constructor(props){
      super(props);
      this.state = { selectedClassFrom2: '0', selectedClassTo2: '0' };
  }
 
  render(){
    
      return(
          <View>
              <Picker selectedValue = {this.state.selectedClassFrom2} onValueChange = {(value) => {this.setState({selectedClassFrom2: value})}}>
                  <Picker.item label = 'From' value = '0' color='#246eb9'></Picker.item>
                  <Picker.item label = '201/204' value = '1' color='#f06543'></Picker.item>
                  <Picker.item label = '203/206' value = '2' color='#f06543'></Picker.item>
                  <Picker.item label = '208' value = '3' color='#f06543'></Picker.item>
                  <Picker.item label = '210/207' value = '4' color='#f06543'></Picker.item>
                  <Picker.item label = '212' value = '5' color='#f06543'></Picker.item>
                  <Picker.item label = '214/215' value = '7' color='#f06543'></Picker.item>
                  <Picker.item label = '216/221' value = '9' color='#f06543'></Picker.item>
                  <Picker.item label = '220/223' value = '10' color='#f06543'></Picker.item>
                  <Picker.item label = '222/225' value = '11' color='#f06543'></Picker.item>
                  <Picker.item label = '224/227' value = '12' color='#f06543'></Picker.item>
                  <Picker.item label = '271/270' value = '13' color='#f06543'></Picker.item>
                  <Picker.item label = '272/273' value = '14' color='#f06543'></Picker.item>
                  <Picker.item label = '246' value = '16' color='#f06543'></Picker.item>
                  <Picker.item label = '242/245' value = '17' color='#f06543'></Picker.item>
                  <Picker.item label = '240/241' value = '18' color='#f06543'></Picker.item>
                  <Picker.item label = '248' value = '19' color='#f06543'></Picker.item>
                  <Picker.item label = '250/251' value = '20' color='#f06543'></Picker.item>
                  <Picker.item label = '252/253' value = '21' color='#f06543'></Picker.item>
                  <Picker.item label = '254/257' value = '22' color='#f06543'></Picker.item>
                  <Picker.item label = 'South Gym' value = '23' color='#f06543'></Picker.item>
                  <Picker.item label = 'North Gym' value = '25' color='#f06543'></Picker.item>
              </Picker>
              <Picker selectedValue = {this.state.selectedClassTo2} onValueChange = {(value) => {this.setState({selectedClassTo2: value})}}>
                  <Picker.item label = 'To' value = '0' color='#246eb9'></Picker.item>
                  <Picker.item label = '201/204' value = '1' color='#f06543'></Picker.item>
                  <Picker.item label = '203/206' value = '2' color='#f06543'></Picker.item>
                  <Picker.item label = '208' value = '3' color='#f06543'></Picker.item>
                  <Picker.item label = '210/207' value = '4' color='#f06543'></Picker.item>
                  <Picker.item label = '212' value = '5' color='#f06543'></Picker.item>
                  <Picker.item label = '214/215' value = '7' color='#f06543'></Picker.item>
                  <Picker.item label = '216/221' value = '9' color='#f06543'></Picker.item>
                  <Picker.item label = '220/223' value = '10' color='#f06543'></Picker.item>
                  <Picker.item label = '222/225' value = '11' color='#f06543'></Picker.item>
                  <Picker.item label = '224/227' value = '12' color='#f06543'></Picker.item>
                  <Picker.item label = '271/270' value = '13' color='#f06543'></Picker.item>
                  <Picker.item label = '272/273' value = '14' color='#f06543'></Picker.item>
                  <Picker.item label = '246' value = '16' color='#f06543'></Picker.item>
                  <Picker.item label = '242/245' value = '17' color='#f06543'></Picker.item>
                  <Picker.item label = '240/241' value = '18' color='#f06543'></Picker.item>
                  <Picker.item label = '248' value = '19' color='#f06543'></Picker.item>
                  <Picker.item label = '250/251' value = '20' color='#f06543'></Picker.item>
                  <Picker.item label = '252/253' value = '21' color='#f06543'></Picker.item>
                  <Picker.item label = '254/257' value = '22' color='#f06543'></Picker.item>
                  <Picker.item label = 'South Gym' value = '23' color='#f06543'></Picker.item>
                  <Picker.item label = 'North Gym' value = '25' color='#f06543'></Picker.item>
              </Picker>
              <Button
                  style = {styles.continueBtn}
                  disabled = {this.state.selectedClassFrom2 == '0'}
                  disabled = {this.state.selectedClassTo2 == '0'}
                  title = 'Continue'
                  color = '#4cb944'
                  onPress = {() => this.props.navigation.navigate('Map2Scr' , {scf: this.state.selectedClassFrom2, sct: this.state.selectedClassTo2})}
              />
              <Button
                  style = {styles.continueBtn}
                  disabled = {this.state.selectedClassFrom2 == '0'}
                  title = 'Information-Start'
                  color = '#246eb9'
                  onPress = {() => this.props.navigation.navigate('InfoFrom1' , {scf: this.state.selectedClassFrom2})}
              />
              <Button
                  style = {styles.continueBtn}
                  disabled = {this.state.selectedClassTo2 == '0'}
                  title = 'Information-Destination'
                  color = '#f5ee9e'
                  onPress = {() => this.props.navigation.navigate('InfoTo1' , {sct: this.state.selectedClassTo2})}
              />
          </View>
      );
  }
} 

//  shows the mpa for the second floor
// same logic as the first floor
class Map2Screen extends React.Component {

  constructor(props){
    super(props)
    this.vertices = [[145,580],[145,540],[145,510],[145,480],[145,450],[145,435],[145,410],[145,390],[145,360],[145,330],[145,300],[145,270],[100,390],[70,390],[45,390],[45,410],[45,455],[45,490],[45,370],[45,340],[45,310],[45,280],[200,435],[145,240],[210,240]];
    this.edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,22],[5,6],[6,7],[7,12],[7,8],[8,9],[9,10],[10,11],[11,23],[23,24],[12,13],[13,14],[14,18],[14,15],[15,16],[16,17],[18,19],[19,20],[20,21]]
    this.path = [[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]]
    this.routeLine = [];  
    this.dist = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    this.route = [];
    this.pointVert = '';
    this.pointVerts = [];
    this.pointCoord = '';
  }

  render() {
    const { navigation } = this.props;  
    const scf = navigation.getParam('scf', 'From');  
    const sct = navigation.getParam('sct', 'To');  
    for (let i = 0; i < 25; i++){
      for (let j = 0; j < 25; j++){
          this.path[i][j] = [i]
        
      }
    }
    for(let i = 0; i < 25; i++){
      for(let j = 0; j < 25; j++){
        this.dist[i][j] = Infinity;
      }
    }

    for(let e = 0; e < this.edges.length; e++) {
      let y = this.edges[e][1];
      let x = this.edges[e][0];
      let d = Math.hypot(this.vertices[y][0] - this.vertices[x][0],this.vertices[y][1] - this.vertices[x][1]);
      this.dist[x][y] = d;
      this.dist[y][x] = d;      
    }

    for (let i = 0; i < 25; i++){  
      this.dist[i][i] = 0;
    }

    for (let k = 0; k < 25; k++) {
      for (let i = 0; i < 25; i++) {
        for (let j = 0; j < 25; j++) {
            if (this.dist[i][j] > this.dist[i][k] + this.dist[k][j]) {
                this.dist[i][j] = this.dist[i][k] + this.dist[k][j];
                this.path[i][j] = this.path[i][k] + ',' + [k] + ',' + this.path[k][j];
            }
        }
      }
    }

    // these cases do not include places that cannot be selected such as intersections 
    switch(scf){
      case '1':
        var from = 0;
        break; 
      case '2':
        var from = 1;
        break;
      case '3':
        var from = 2;
        break;
      case '4':
        var from = 3;
        break;
      case '5':
        var from = 4;
        break;
      case '7':
        var from = 6;
        break;
      case '8':
        var from = 7;
        break;
      case '9':
        var from = 8;
        break;
      case '10':
        var from = 9;
        break;
      case '11':
        var from = 10;
        break;
      case '12':
        var from = 11;
        break;
      case '13':
        var from = 12;
        break;
      case '14':
        var from = 13;
        break;
      case '16':
        var from = 15;
        break;
      case '17':
        var from = 16;
        break;
      case '18':
        var from = 17;
        break;
      case '19':
        var from = 18;
        break;
      case '20':
        var from = 19;
        break;
      case '21':
        var from = 20;
        break;
      case '22':
        var from =21;
        break;
      case '23':
        var from = 22;
        break;
      case '25':
        var from = 24;
        break;
    }

    switch(sct){
      case '1':
        var to = 0;
        break; 
      case '2':
        var to = 1;
        break;
      case '3':
        var to = 2;
        break;
      case '4':
        var to = 3;
        break;
      case '5':
        var to = 4;
        break;
      case '7':
        var to = 6;
        break;
      case '8':
        var to = 7;
        break;
      case '9':
        var to = 8;
        break;
      case '10':
        var to = 9;
        break;
      case '11':
        var to = 10;
        break;
      case '12':
        var to = 11;
        break;
      case '13':
        var to = 12;
        break;
      case '14':
        var to = 13;
        break;
      case '16':
        var to = 15;
        break;
      case '17':
        var to = 16;
        break;
      case '18':
        var to = 17;
        break;
      case '19':
        var to = 18;
        break;
      case '20':
        var to = 19;
        break;
      case '21':
        var to = 20;
        break;
      case '22':
        var to =21;
        break;
      case '23':
        var to = 22;
        break;
      case '25':
        var to = 24;
        break;
    }

    this.pointVert = this.path[from][to];
    this.pointVerts = this.pointVert.split(',');

    for(let i = 0; i < this.pointVerts.length; i++){
      this.pointCoord += (this.vertices[parseInt(this.pointVerts[i])][0] + ',')
      this.pointCoord += (this.vertices[parseInt(this.pointVerts[i])][1] +' ')
    }
    this.pointCoord += (this.vertices[to][0].toString() + ',')
    this.pointCoord += this.vertices[to][1].toString()
  
  
    return (      
      <View>
        {/*Button to click to show directions*/}
        {/*pass the path as a parameter*/}
        <Button
          style = {styles.continueBtn}
          title = 'Directions'
          color = '#4cb944'
          onPress = {() => this.props.navigation.navigate('dir' , {path: this.pointCoord})}
        />
        <Svg height = "737" width = "410">          
            <Image width = "410" height = "737" href={require('./assets/Map2.jpg')}/> 
            <Circle cx="145" cy="580" r="2" fill="red" />{/*201/204*/}
            <Circle cx="145" cy="540" r="2" fill="red" />{/*203/206*/}
            <Circle cx="145" cy="510" r="2" fill="red" />{/*208*/}
            <Circle cx="145" cy="480" r="2" fill="red" />{/*210/207*/}
            <Circle cx="145" cy="450" r="2" fill="red" />{/*212*/}
            <Circle cx="145" cy="435" r="2" fill="red" />{/*214 intersection*/}
            <Circle cx="145" cy="410" r="2" fill="red" />{/*214/215*/}
            <Circle cx="145" cy="390" r="2" fill="red" />{/*215 intersection*/}
            <Circle cx="145" cy="360" r="2" fill="red" />{/*216/221*/}
            <Circle cx="145" cy="330" r="2" fill="red" />{/*220/223*/}
            <Circle cx="145" cy="300" r="2" fill="red" />{/*222/225*/}
            <Circle cx="145" cy="270" r="2" fill="red" />{/*224/227*/}
            <Circle cx="100" cy="390" r="2" fill="red" />{/*271/270*/}
            <Circle cx="70" cy="390" r="2" fill="red" />{/*272/273*/}
            <Circle cx="45" cy="390" r="2" fill="red" />{/*248 intersection*/}
            <Circle cx="45" cy="410" r="2" fill="red" />{/*246*/}
            <Circle cx="45" cy="455" r="2" fill="red" />{/*242/245*/}
            <Circle cx="45" cy="490" r="2" fill="red" />{/*240/241*/}
            <Circle cx="45" cy="370" r="2" fill="red" />{/*248*/}
            <Circle cx="45" cy="340" r="2" fill="red" />{/*250/251*/}
            <Circle cx="45" cy="310" r="2" fill="red" />{/*252/253*/}
            <Circle cx="45" cy="280" r="2" fill="red" />{/*254/257*/}
            <Circle cx="200" cy="435" r="2" fill="red" />{/*South Gym*/}
            <Circle cx="145" cy="240" r="2" fill="red" />{/*North Gym Intersection*/}
            <Circle cx="210" cy="240" r="2" fill="red" />{/*North Gym*/}
            <Polyline
              points = {this.pointCoord}
              fill="none"
              stroke={"yellow"}
              strokeWidth="4"
            />
        </Svg>  
      </View>       
    );
  }
}

// screen that shows information about the class the you are starting from
class InformationFrom1 extends React.Component{

  constructor(props){
    super(props);
    this.stylesFrom = [
      // stores the characteristics of the card such as dimensions, and content
      { width: 300,
        flex: 1,
        content: 'Room 130 - Music',
        justifyContent: 'center',
        alignItems: 'center',
        title: 'Mr. Temelini',
        imageWidth:  100,
        imageHeight: 100, 
        roundedImage:  true, 
        roundedImageValue:  50, 
        imageMargin: {top: 10},
        left: 0,
        top: 0 
      },
      { width: 300,
        flex: 1,
        content: 'Room 146 - Business',
        justifyContent: 'center',
        alignItems: 'center',
        title: 'Mr. Ferrara',
        imageWidth:  100,
        imageHeight: 100, 
        roundedImage:  true, 
        roundedImageValue:  50, 
        imageMargin: {top: 10} ,
        left: 0,
        top: 0
      },
      { width: 300,
        flex: 1,
        content: 'Room 164A - Computer Engineering',
        justifyContent: 'center',
        alignItems: 'center',
        title: 'Mr. St.Pierre',
        imageWidth:  100,
        imageHeight: 100, 
        roundedImage:  true, 
        roundedImageValue:  50, 
        imageMargin: {top: 10} ,
        left: 0,
        top: 0
      },
      { width: 300,
        flex: 1,
        content: 'Room 167 - Manufacturing Engineering',
        justifyContent: 'center',
        alignItems: 'center',
        title: 'Mr. Awad',
        imageWidth:  100,
        imageHeight: 100, 
        roundedImage:  true, 
        roundedImageValue:  50, 
        imageMargin: {top: 10} ,
        left: 0,
        top: 0
      }
    ]


  }

  render(){
    // takes the parameters from the dropdown menu class - the class being started from
    const { navigation } = this.props;  
    const scf = navigation.getParam('scf', 'From');
    // based on the value of the class choose the specific card from the stylesForm array  
    switch(scf){
      case('43'):
        var classFrom = 0; 
        break;
      case('27'):
        var classFrom = 1;
        break;
      case('17'):
        var classFrom = 2;
        break;
      case('16'):
        var classFrom = 3;
        break;
    }
    return(
      // display the card with the information
      <View styles={styles.container}>
        <CardViewWithImage
          {...this.stylesFrom[classFrom]}
        />
      </View>
    )
  }
}

// screen that shows information about the class the you are going to 
class InformationTo1 extends React.Component{

  constructor(props){
    super(props);
    // stores the characteristics of the card such as dimensions, and content
    this.stylesTo = [
      { width: 300,
        flex: 1,
        content: 'Room 130 - Music',
        justifyContent: 'center',
        alignItems: 'center',
        title: 'Mr. Temelini',
        imageWidth:  100,
        imageHeight: 100, 
        roundedImage:  true, 
        roundedImageValue:  50, 
        imageMargin: {top: 10},
        left: 0,
        top: 0 
      },
      { width: 300,
        flex: 1,
        content: 'Room 146 - Business',
        justifyContent: 'center',
        alignItems: 'center',
        title: 'Mr. Ferrara',
        imageWidth:  100,
        imageHeight: 100, 
        roundedImage:  true, 
        roundedImageValue:  50, 
        imageMargin: {top: 10} ,
        left: 0,
        top: 0
      },
      { width: 300,
        flex: 1,
        content: 'Room 164A - Computer Engineering',
        justifyContent: 'center',
        alignItems: 'center',
        title: 'Mr. St.Pierre',
        imageWidth:  100,
        imageHeight: 100, 
        roundedImage:  true, 
        roundedImageValue:  50, 
        imageMargin: {top: 10} ,
        left: 0,
        top: 0
      },
      { width: 300,
        flex: 1,
        content: 'Room 167 - Manufacturing Engineering',
        justifyContent: 'center',
        alignItems: 'center',
        title: 'Mr. Awad',
        imageWidth:  100,
        imageHeight: 100, 
        roundedImage:  true, 
        roundedImageValue:  50, 
        imageMargin: {top: 10} ,
        left: 0,
        top: 0
      }
    ]

  }

  render(){
    // takes the parameters from the dropdown menu class - the class that is the destination
    const { navigation } = this.props;   
    const sct = navigation.getParam('sct', 'To');
    // based on the value of the class choose the specific card from the stylesForm array  
    switch(sct){
      case('43'):
        var classTo = 0; 
        break;
      case('27'):
        var classTo = 1;
        break;
      case('17'):
        var classTo = 2;
        break;
      case('16'):
        var classTo = 3;
        break;
    }
    return(
      // display the card with the information
      <View styles={styles.container}>
        <CardViewWithImage
          {...this.stylesTo[classTo]}
        />
      </View>
    )
  }
}

//screen to show the directions 
class Directions extends React.Component{
  constructor(props){
    super(props);
    // array to store the coordinates
    this.directions = [];
    // array to store the directions in words
    this.wordDirec = [];
    // variable to store the current direction being travelled in
    this.currentDirec = '';
    // count variables to determine how many nodes have been passed 
    this.leftCount = 0;
    this.rightCount = 0;
    this.upCount = 0;
  }
  render(){
    // parameter for the specific path to calculate the directions of
    const { navigation } = this.props;  
    const direction = navigation.getParam('path', '');
    // array that holds the coordinates
    this.directions = direction.split(',').join(',').split(' ').join(',').split(',');
    // loop through the array and skip t only the x coordinate
    for(let i = 0; i < this.directions.length - 2; i+=2){
      // if the x coordinates of the 2 consecutive points are the same
      if(this.directions[i] == this.directions[i+2] && (this.directions[i+1] != this.directions[i+3])){
        // set count of going left anf right to 0
        this.rightCount = 0;
        this.leftCount = 0;
        // if second y coordinate is greater than the first...
        if(this.directions[i+1] < this.directions[i+3]){
          // if upCount to 0
          if(this.upCount == 0){
            // append turn left
            this.wordDirec.push(' Turn right');
            // set a variable equal to the absolute value of the difference between the two y coordinates
            let dist_pix = Math.abs(parseInt(this.directions[i+3]) - parseInt(this.directions[i+1]));
            // 1 unit in the app is approx. 7 meters. Convert the pixel to meters
            let dist_m = (Math.round(dist_pix/7)).toString();
            // append proceed straight with the certain number of meters
            this.wordDirec.push(' Proceed straight ' + dist_m + ' meters');
            // increase the up count
            this.upCount++;
          }
          // if up count is more than 0
          else{
            // only proceed straight based on the distance calculated 
            let dist_pix = Math.abs(parseInt(this.directions[i+3]) - parseInt(this.directions[i+1]));
            let dist_m = (Math.round(dist_pix/7)).toString();
            this.wordDirec.push(' Proceed straight ' + dist_m + ' meters');
          }
        }
        // same logic 
        // go right if y coordinate of first vertex is greater than y coordinate of second vertex
        else if(this.directions[i+3] < this.directions[i+1]){
          if(this.upCount == 0){
            this.wordDirec.push(' Turn left');
            let dist_pix = Math.abs(parseInt(this.directions[i+1]) - parseInt(this.directions[i+3]));
            let dist_m = (Math.round(dist_pix/7)).toString();
            this.wordDirec.push(' Proceed straight ' + dist_m + ' meters');
            this.upCount++;
          }
          else{
            let dist_pix = Math.abs(parseInt(this.directions[i+3]) - parseInt(this.directions[i+1]));
            let dist_m = (Math.round(dist_pix/7)).toString();
            this.wordDirec.push(' Proceed straight ' + dist_m + ' meters');
          }
        }
      }
      // if 2 consecutive coordinates are the same skip the iteration
      else if((this.directions[i] == this.directions[i+2]) && (this.directions[i+1] == this.directions[i+3])){
        continue;
      }
      // if x coordinates are different
      else{
        // set up count to 0
        this.upCount = 0;
        // if x coordinate of second vertex is greater than x coordinate of first ...
        if(this.directions[i] < this.directions[i+2]){  
          // if you have not moved right yet
          if(this.rightCount == 0){ 
            // append turn right
            this.wordDirec.push(' Turn right');
            // calculate the distance between the 2 x coordinates
            let dist_pix = Math.abs(parseInt(this.directions[i+2]) - parseInt(this.directions[i]));
            let dist_m = (Math.round(dist_pix/7)).toString();
            // append going straight with the corrsponding distance
            this.wordDirec.push(' Proceed straight ' + dist_m + ' meters');
            // set the current direction to L
            this.currentDirec = 'L';
            // increase the count of going in the right direction by 1
            this.rightCount++;
          }
          else{
            // if you have been going right for more then once
            // calculate the distance 
            let dist_pix = Math.abs(parseInt(this.directions[i]) - parseInt(this.directions[i+2]));
            let dist_m = (Math.round(dist_pix/7)).toString();  
            // append going striaght for the corresponding distance 
            this.wordDirec.push(' Proceed straight ' + dist_m + ' meters');
            this.currentDirec = 'L';
          }
        }
        // samle logic if first x coordinate is more than second x coordinate
        else if(this.directions[i+2] < this.directions[i]){
          if(this.leftCount == 0){
            this.wordDirec.push(' Turn left');
            let dist_pix = Math.abs(parseInt(this.directions[i]) - parseInt(this.directions[i+2]));
            let dist_m = (Math.round(dist_pix/7)).toString();   
            this.wordDirec.push(' Proceed straight ' + dist_m + ' meters');
            this.currentDirec = 'R';
            this.leftCount++;
          }
          else{
            let dist_pix = Math.abs(parseInt(this.directions[i]) - parseInt(this.directions[i+2]));
            let dist_m = (Math.round(dist_pix/7)).toString();   
            this.wordDirec.push(' Proceed straight ' + dist_m + ' meters');
            this.currentDirec = 'R';
          }
        }
      }
    }
    // print the directions to the screen
    return(
      <View>
          <Svg height = "737" width = "410">
            <Text fill="black"
    stroke="black"
    fontSize="15"
    fontWeight="bold"
    x="10"
    y="20">
              {this.wordDirec[0]}
            </Text>
            <Text fill="black"
    stroke="black"
    fontSize="15"
    fontWeight="bold"
    x="10"
    y="40">
              {this.wordDirec[1]}
            </Text>
            <Text fill="black"
    stroke="black"
    fontSize="15"
    fontWeight="bold"
    x="10"
    y="60">
              {this.wordDirec[2]}
            </Text>
            <Text fill="black"
    stroke="black"
    fontSize="15"
    fontWeight="bold"
    x="10"
    y="80">
              {this.wordDirec[3]}
            </Text>
            <Text fill="black"
    stroke="black"
    fontSize="15"
    fontWeight="bold"
    x="10"
    y="100">
              {this.wordDirec[4]}
            </Text>
            <Text fill="black"
    stroke="black"
    fontSize="15"
    fontWeight="bold"
    x="10"
    y="120">
              {this.wordDirec[5]}
            </Text>
            <Text fill="black"
    stroke="black"
    fontSize="15"
    fontWeight="bold"
    x="10"
    y="140">
              {this.wordDirec[6]}
            </Text>
            <Text fill="black"
    stroke="black"
    fontSize="15"
    fontWeight="bold"
    x="10"
    y="160">
              {this.wordDirec[7]}
            </Text>
            <Text fill="black"
    stroke="black"
    fontSize="15"
    fontWeight="bold"
    x="10"
    y="180">
              {this.wordDirec[8]}
            </Text>
            <Text fill="black"
    stroke="black"
    fontSize="15"
    fontWeight="bold"
    x="10"
    y="200">
              {this.wordDirec[9]}
            </Text>
            <Text fill="black"
    stroke="black"
    fontSize="15"
    fontWeight="bold"
    x="10"
    y="220">
              {this.wordDirec[10]}
            </Text>
            <Text fill="black"
    stroke="black"
    fontSize="15"
    fontWeight="bold"
    x="10"
    y="240">
              {this.wordDirec[11]}
            </Text>
            <Text fill="black"
    stroke="black"
    fontSize="15"
    fontWeight="bold"
    x="10"
    y="260">
              {this.wordDirec[12]}
            </Text>
            <Text fill="black"
    stroke="black"
    fontSize="15"
    fontWeight="bold"
    x="10"
    y="280">
              {this.wordDirec[13]}
            </Text>
            <Text fill="black"
    stroke="black"
    fontSize="15"
    fontWeight="bold"
    x="10"
    y="300">
              {this.wordDirec[14]}
            </Text>
          </Svg>
        
      </View>
    )
  }
}



// function that contains all styles for various objects on screen
const styles = StyleSheet.create({
  // controls style of whole screen
  container: {
    flex: 1,
    backgroundColor: '#fdfffc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: 'contain'
  },
  floorBtn: {
    justifyContent: 'center',
    marginHorizontal: 16
  },
  break: {
    marginVertical: 30,
    borderBottomColor: '#f5ee9e',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  contnueBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0
  }
});

// creates all the screen name variables in order to navigate between screens
const AppNavigator = createStackNavigator(  
  {  
      Home: FloorPickerScreen,
      RoomPick1: RoomPickerScreen1,
      RoomPick2: RoomPickerScreen2,  
      Map1Scr: Map1Screen,
      Map2Scr: Map2Screen,
      InfoFrom1: InformationFrom1,
      InfoTo1: InformationTo1,
      dir: Directions
  },
  {
    initialRouteName: "Home"  
    // screen starts at the floor picker screen
  } 
);

// App class that contains all the screens
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
    render() {  
        return <AppContainer/>;  
    }  
}
