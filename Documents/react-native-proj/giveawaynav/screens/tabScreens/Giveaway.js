import React, { Component } from 'react'
import { Image, View, TextInput, SafeAreaView } from 'react-native'

import { Text, Button } from 'react-native-paper'
import COLORS from '../../constants/colors'

import { Ionicons } from '@expo/vector-icons';

//import { withFirebaseHOC } from '../../utils'

class Giveaway extends Component {
  state = { image: null, title: '', description: '' }

  onChangeTitle = title => {
    this.setState({ title })
  }
  onChangeDescription = description => {
    this.setState({ description })
  }

  onSubmit = async () => {
    try {
      const post = {
        photo: this.state.image,
        title: this.state.title,
        description: this.state.description
      }
      this.props.firebase.uploadPost(post)

      this.setState({
        image: null,
        title: '',
        description: ''
      })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={{ flex: 1, marginHorizontal: 22, padding: 10, flexDirection: 'row' }}>
          <View>
            
          </View>
          
          <Ionicons name="ios-cloud-outline" size={40}
            style={{ resizeMode: 'contain', aspectRatio: 1, width: 72 }}
          />
          <TextInput
            multiline
            style={{ flex: 1, paddingHorizontal: 16 }}
            placeholder="Add a neat description about your giveaway..."
            onChangeText={text => {
              this.setState({ text });
              this.props.navigation.setParams({ text });
            }}
          />
        </View>
      </SafeAreaView>

      /*<View style={{ flex: 1, marginTop: 60 }}>
        <View>
          {this.state.image ? (
            <Image
              source={this.state.image}
              style={{ width: '100%', height: 300 }}
            />
          ) : (
            <Button
              onPress={this.selectImage}
              style={{
                alignItems: 'center',
                padding: 10,
                margin: 30
              }}>
              Add an image
            </Button>
          )}
        </View>
        <View style={{ marginTop: 80, alignItems: 'center' }}>
          <Text category='h4'>Post Details</Text>
          <TextInput
            placeholder='Enter title of the post'
            style={{ margin: 20 }}
            value={this.state.title}
            onChangeText={title => this.onChangeTitle(title)}
          />
          <TextInput
            placeholder='Enter description'
            style={{ margin: 20 }}
            value={this.state.description}
            onChangeText={description => this.onChangeDescription(description)}
          />
          <Button
            status='success'
            onPress={this.onSubmit}
            disabled={
              this.state.image && this.state.title && this.state.description
                ? false
                : true
            }>
            Add post
          </Button>
        </View>
          </View>*/
      
    )
  }
}

export default Giveaway;