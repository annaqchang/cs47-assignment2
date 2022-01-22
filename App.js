import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

let scale = (Dimensions.get('window').width > 400)? scale = 1.8 : scale = 1; // For scaling text + icons (please let me know if this isn't acceptable)

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  StatusBar.setBarStyle(Themes.light.statusBar);

  return (
    <View style={styles.container}>
        
      <View style={styles.navbar}>
        <Image style={styles.smallicons} source={require("./assets/Icons/menu_light.png")} />
        <Text style={styles.logo}>ensom</Text>
        <Image style={styles.smallicons} source={require("./assets/Icons/sun.png")} />
      </View>
      
      <View style={styles.flex}>
        
        <View style={styles.middlebox}>

          <View style={[styles.shadow, {flex: 2}]}>
            <ImageBackground style={styles.mtl} source={require("./assets/Profiles/mtl.jpg")}>
              <View style={{position: "absolute", top: 8, left: 8}}>
                <Text style={[styles.whitetext,{fontSize: 32 * scale}]}>MTL</Text>
              </View>
              <View style={{position: "absolute", bottom: 8, left: 8}}>
                <Text style={[styles.whitetext,{fontSize: 18 * scale}]}>2 miles away</Text>
              </View>
            </ImageBackground>
          </View>
            
          <View style={[styles.whitebox, styles.shadow]}>
            <View style={{position: "absolute", top: 18, left: 18}}>
              <Text style={styles.blacktext}>My hottest take</Text>
            </View>
            <View style={styles.audiogroup}>
              <Image style= {[styles.audio, {flex: 1}, {marginRight: 6}]} source={require("./assets/Icons/player_light.png")}/>
              <Image style= {[styles.audio, {flex: 4}]} source={require("./assets/Icons/audio_waveform_light.png")}/>
            </View>
          </View>

        </View>
        
        
        <View style={styles.blackbox}>
          
          <View style={{alignItems: 'center'}}>
            <Image style={styles.smallicons} source={require("./assets/Icons/discover_light.png")}/>
            <Text style={styles.whitetext}>Discover</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image style={styles.smallicons} source={require("./assets/Icons/heart_light.png")}/>
            <Text style={styles.whitetext}>Matches</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image style={styles.smallicons} source={require("./assets/Icons/messages_light.png")}/>
            <Text style={styles.whitetext}>DMs</Text>
          </View>
          
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
  },

  flex : {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },

  shadow: Themes.light.shadows,

  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Sydney-Bold',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 45,
  },

  logo: {
    fontFamily: 'Sydney-Bold',
    fontSize: 40 * scale,
  },

  mtl: {
    flex: 1,
    aspectRatio: 1 / 1.1, 
    borderRadius: 10,
    overflow: 'hidden',
  },

  middlebox: {
    flex:  6,
    margin: 100,
    marginTop: 15,
  },

  whitebox: {
    marginTop: 20,
    flex: 0.8,
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 20, 
  },

  audio: {
    flex: 1, 
    width: undefined, 
    height: undefined, 
    resizeMode: 'contain',
  },

  audiogroup: {
    flex:  1,
    flexDirection: 'row',
    padding: 12,
    paddingTop: 35,
  },

  blacktext: {
    fontFamily: 'Sydney', 
    fontSize: 25 * scale,
  },

  blackbox: {
    flex:  1,
    backgroundColor: Themes.light.navigation,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '18%',
    paddingRight: '18%',
  },

  smallicons: {
    height: 38 * scale,
    width: 38 * scale,
    marginBottom: 7,
    resizeMode:'contain'
  },

  whitetext: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    fontSize: 20 * scale,
  },

});