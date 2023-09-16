import React from 'react';
import styles from '../../assets/styles';

import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import ProfileItem from '../../components/ProfileItem';
import Icon from '../../components/Icon';
import Demo from '../../assets/data/demo.js';
import { Ionicons } from '@expo/vector-icons';


const Settings = () => {
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    interest,
    location,
    match,
    name
  } = Demo[7];

  return (
    <ImageBackground
      source={require('../../assets/images/bg.png')}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
          <View style={styles.top}>
            
          </View>
        </ImageBackground>

        <ProfileItem
          matches={match}
          name={name}
          age={age}
          location={location}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
          interest={interest}
        />
        

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton}>
            <Text style={styles.iconButton}>
              <Ionicons name="ios-options-outline" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.circledButton}>
            <Text style={styles.iconButton}>
              <Ionicons name="ios-bookmarks-sharp" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.iconButton}>
              <Ionicons name="chatbubble-ellipses" />
            </Text>
            <Text style={{
              fontSize: 16,
              fontWeight: "normal",
              marginLeft: 6,
              color: "white",
            }}>Chat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Settings;
