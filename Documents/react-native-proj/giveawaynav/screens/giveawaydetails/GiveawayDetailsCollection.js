import React, { useEffect, useCallback, useState } from 'react';
import { View, TextInput, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useForm } from 'react-hook-form';

import { Ionicons } from '@expo/vector-icons';

import COLORS from '../../constants/colors'
import { Button } from 'react-native-paper';

const GiveawayDetailsCollection = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [isRegistered, setIsRegistered] = useState(false);

  const onSubmit = useCallback((formData) => {
    console.log(formData);
    setIsRegistered(true);
    
  }, []);

  const onChangeField = useCallback((name) => (text) => {
    setValue(name, text);
  }, []);

  useEffect(() => {
    register('username');
    register('email');
    register('password');
  }, [register]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{flex: 1, marginHorizontal: 22 }}>
        <View style={{
          marginVertical: 22
          }}
          > 
          <Text style={{
            fontSize: 20,
            fontWeight: "bold",
            marginVertical: 12,
            color: COLORS.black,
          }}>
            
            <View
              style={{
                marginLeft: "75px"
              }}
            >Enter your details</View>
          </Text>

          <Text style={{
            fontSize: 16,
            color: COLORS.black
          }}>To satisfy you meet all conditions the user wants you're required to fill a 
            form that satisfy and meets the users requirement for gifting out the Giveaway Item to you!</Text>
          </View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400"
              }}
            >
              <Ionicons name='ios-information-circle-outline' />Please note that any information given in these form
              doesn't have anything to do with us @Giftaway. Every information you give in this page is between the giver and the receiver. Thanks!
            </Text>

        
            
            <View style={{marginBottom: 12}}>
              <Text style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8
              }}>Location</Text>

                <View style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22
                }}>
                <TextInput
                  style={{
                    width: "100%",
                    height:"auto"
                  }}
                  autoCompleteType="Location"
                  textContentType='addressCityAndState'
                  placeholder="Where are you located at the moment?"
                  onChangeText={onChangeField('username')}
                />
              </View>
            </View>

            <View style={{marginBottom: 12}}>
              <Text style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8
              }}>Tell the giver a reason why you deserve the thrash..</Text>

                <View style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22
                }}>

                <TextInput
                  style={{
                    width: "100%",
                    height:"auto"
                  }}
                  autoCompleteType="reason"
                  keyboardType="default"
                  textContentType="nameSuffix"
                  placeholder="Reason"
                  onChangeText={onChangeField('email')}
                />
                </View>
              </View>

              <View style={{marginBottom: 12}}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8
                }}>Briefly describe your story in few words</Text>

                  <View style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22
                  }}>

                  <TextInput
                    multiline
                    style={{  width: "100%", height:"auto" }}
                    secureTextEntry
                    autoCompleteType="story"
                    placeholder="I've lived in Las Vegas since I was a kid.."
                    onChangeText={onChangeField('password')}
                  />
                  </View>
                </View>
                <Button title="Submit" onPress={handleSubmit(onSubmit)} style={{
                  marginTop: 18,
                  marginBottom: 4,
                  height: "auto",
                  width: "auto"
                  
                }} buttonColor="#007260" textColor='#ffffff' height="auto" width="auto" >
                propose</Button>

                
                {/*{isRegistered && <Text style={styles.successText}>Registration successful!</Text>}*/}

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  successText: {
    color: 'green',
    marginTop: 10,
    fontSize: 17,
  },
});

export default GiveawayDetailsCollection;