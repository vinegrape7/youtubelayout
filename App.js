import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import VideoItem from "./components/videoitem";
import data from "./data.json";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image source={require("./images/logo.png")} style={styles.youtubelogo} />
          <View style={styles.rightNavContainer}>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="account-circle" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={data.items}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: "#CCCCCC" }} />}
            renderItem={video => <VideoItem video={video.item} />}
          />
          {/* <VideoItem video={data.items[0]} /> */}
        </View>
        <View style={styles.tabbar}>
          <TouchableOpacity>
            <Icon style={styles.tabBarItem} name="home" size={30} />
            <Text style={styles.tabBarTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.tabBarItem} name="whatshot" size={30} />
            <Text style={styles.tabBarTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.tabBarItem} name="subscriptions" size={30} />
            <Text style={styles.tabBarTitle}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.tabBarItem} name="folder" size={30} />
            <Text style={styles.tabBarTitle}>Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "green"
  },
  navbar: {
    marginTop: 25,
    backgroundColor: "#fff",
    height: 55,
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  youtubelogo: {
    height: 22,
    width: 98
    // backgroundColor: "yellow"
  },
  rightNavContainer: {
    flexDirection: "row"
    // backgroundColor: "red"
  },
  navItem: {
    marginLeft: 25
  },
  tabbar: {
    backgroundColor: "white",
    height: 60,
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  body: {
    flex: 1
  },
  tabBarItem: {
    textAlign: "center",
    color: "#3c3c3c"
  },
  tabBarTitle: {
    fontSize: 11,
    color: "#3c3c3c",
    textAlign: "center"
  }
});
