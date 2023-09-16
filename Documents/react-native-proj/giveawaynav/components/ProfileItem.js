import React from 'react';
import styles from '../assets/styles';

import { Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { tweets } from "../data/tweets";
import Post from "../components/Post";

const ProfileItem = ({
  age,
  info1,
  info2,
  info3,
  info4,
  interest,
  location,
  matches,
  name
}) => {
  return (
    <View style={styles.containerProfileItem}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.descriptionProfileItem}>
        {age} - {location}
      </Text>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Ionicons name="person" />
        </Text>
        <Text style={styles.infoContent}>{info1}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Ionicons name="at-circle-outline" />
        </Text>
        <Text style={styles.infoContent}>{info2}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Ionicons name="compass-outline" />
        </Text>
        <Text style={styles.infoContent}>{info3}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Ionicons name="calendar" />
        </Text>
        <Text style={styles.infoContent}>{info4}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Ionicons name="heart-half-sharp" />
        </Text>
        <Text style={styles.infoContent}>{interest}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Ionicons name="ios-timer-outline" />
        </Text>
        <Text style={styles.infoContent}>2 of 3 Giveaways remaining this month</Text>
      </View>

      <View style={styles.divider} />
      <View
        style={{
          marginTop: "7",
        }}
      >
        <Text
          style={styles.name}
        >Recent Giveaway Posts</Text>
        <FlatList
          data={tweets.slice(0, 10)}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return <Post tweet={item} />;
          }}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />
      </View>
    </View>
  );
};

export default ProfileItem;
