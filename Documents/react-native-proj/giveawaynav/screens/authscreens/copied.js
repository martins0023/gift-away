import { View, Text, TextInput, TouchableOpacity, Image, Pressable, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from '@expo/vector-icons'
import Checkbox from 'expo-checkbox'

import COLORS from '../../constants/colors'
import Button from '../../components/Button'

import {openDatabase} from 'react-native-sqlite-storage';

//import firebase from '../../database/firebase';
//import {auth} from '../../database/firebase';
//import { createUserWithEmailAndPassword } from 'firebase/auth'

//const validatePassword = () => {
//  let isValid = true
//  if (password !== '' && confirmPassword !== '') {
//    if (password !== '' && confirmPassword) {
//      isValid = false
//      setUserProperties('Passwords do not match')
//    }
//  }
//  return isValid
//}

//const register = e => {
//  e.preventDefault()
//  setError('')
//  if(validatePassword()) {
//    createUserWithEmailAndPassword(auth, email, password).then((res) => {
//      console.log(res.user)
//    })
//    .catch(err => setError(err.message))
//  }
//  setEmail('')
//  setPassword('')
//  setConfirmPassword('')
//}

//set database variable
var db = openDatabase({name: 'UserDatabase.db'});

const signup = () => {
  //user registration state
  let [emailAddress, setEmailAddress] = useState('');
  let [fullName, setFullName] = useState('');
  let [mobileNumber, setMobileNumber] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [checkbox, setCheckbox] = useState('');

  //user registration logic
  let register_user = () => {
    console.log(emailAddress, fullName, mobileNumber, password, confirmPassword, checkbox);

    if (!emailAddress) {
      alert('Please enter your email address');
      return;
    }
    if (!fullName) {
      alert('Please enter your Full Name, por favor');
      return;
    }
    if (!mobileNumber) {
      alert('Please enter your mobile number, por favor');
      return;
    }
    if (!password) {
      alert('Please enter your password, por favor');
      return;
    }
    if (!confirmPassword) {
      alert('Please enter confirm your password');
      return;
    }
    if (password !== confirmPassword) {
      alert('Please enter make sure your password matches');
      return;
    }
    if (!checkbox) {
      alert('Please check checkbox');
      return;
    }

    db.transaction(function(tx) {
      tx.executeSql(
        'INSERT INTO table_user (emailAddress, fullName, mobileNumber, password, confirmPassword) VALUES (?,?,?)',
        [emailAddress, fullName, mobileNumber, password, confirmPassword],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are registered successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate("Navigation"),
                },
              ],
              {cancelable: false},
            );
          }else alert('Registration Failed');
        },
      );
    });
  };

  //navigation
  const navigation = useNavigation();
  
  //check password and confirm
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{flex: 1, marginHorizontal: 22 }}>
        <View style={{marginVertical: 22}}>
          <Text style={{
            fontSize: 22,
            fontWeight: "bold",
            marginVertical: 12,
            color: COLORS.black
          }}>
            Create Account
          </Text>

          <Text style={{
            fontSize: 16,
            color: COLORS.black
          }}>Giveaway your thrash to a friend today!</Text>
        </View>
        <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
        
          {/*Email address*/}
          <View style={{marginBottom: 12}}>
            <Text style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8
            }}>Email Address</Text>

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
                placeholder="Enter your email address" 
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>

          {/*Name*/}
          <View style={{marginBottom: 12}}>
            <Text style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8
            }}>Full Name</Text>

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
                placeholder="Enter your full name" 
                placeholderTextColor={COLORS.black}
                keyboardType="default"
                onChangeText={(fullName) => setFullName(fullName)}
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>

          {/*Mobile number*/}
          <View style={{marginBottom: 12}}>
            <Text style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8
            }}>Mobile Number</Text>

            <View style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 22
            }}>
              <TextInput 
                placeholder="+234" 
                placeholderTextColor={COLORS.black}
                keyboardType="numeric"
                style={{
                  width: "12%",
                  borderRightWidth: 1,
                  borderLeftColor: COLORS.grey,
                  height: "100%"
                }}
              />

              <TextInput 
                placeholder="Enter your mobile number" 
                placeholderTextColor={COLORS.black}
                keyboardType="numeric"
                onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
                style={{
                  width: "80%"
                }}
              />
            </View>
          </View>

          {/*Password*/}
          <View style={{marginBottom: 12}}>
            <Text style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8
            }}>Password</Text>

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
                placeholder="Enter your password" 
                placeholderTextColor={COLORS.black}
                secureTextEntry={isPasswordShown}
                onChangeText={(password) => setPassword(password)}
                style={{
                  width: "100%",
                }}
              />

              <TouchableOpacity
                onPress={()=> setIsPasswordShown(!isPasswordShown)}
                style={{
                  position: "absolute",
                  right: 12
                }}
              >
                {
                  isPasswordShown == true ? (
                    <Ionicons name='eye-off' size={24} colors={COLORS.black} /> 
                  ) : (
                    <Ionicons name='eye' size={24} colors={COLORS.black} /> 
                  )
                }
              
              </TouchableOpacity>
            </View>
          </View>

          {/*Confirm Password*/}
          <View style={{marginBottom: 12}}>
            <Text style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8
            }}>Confirm Password</Text>

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
                placeholder="Confirm your password" 
                placeholderTextColor={COLORS.black}
                secureTextEntry={isPasswordShown}
                onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                style={{
                  width: "100%",
                }}
              />

              <TouchableOpacity
                onPress={()=> setIsPasswordShown(!isPasswordShown)}
                style={{
                  position: "absolute",
                  right: 12
                }}
              >
                {
                  isPasswordShown == true ? (
                    <Ionicons name='eye-off' size={24} colors={COLORS.black} /> 
                  ) : (
                    <Ionicons name='eye' size={24} colors={COLORS.black} /> 
                  )
                }
              
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>

        {/*Checkbox*/}
        <View style={{
          flexDirection: "row",
          marginVertical: 6
        }}>
          <Checkbox
            onChangeText={(checkbox) => setCheckbox(checkbox)}
            style={{marginRight: 8}}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />

          <Text>I agree to the terms and conditions</Text>
        </View>

        <Button
          title="Sign Up"
          filled
          onPress={register_user}
          /*onPress={() =>navigation.navigate("Navigation")}*/
          style={{
            marginTop: 18,
            marginBottom: 4,

          }}
        />

        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 20}}>
          <View 
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10
            }}
          />
          <Text style={{fontSize: 14}}>Or Sign up with</Text>
          <View 
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10
            }}
          />
        </View>

        <View style={{
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <TouchableOpacity
            onPress={() => console.log("Signed in")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10
            }}
          >
            <Image 
              source={require("../../assets/google.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8
              }}
              resizeMode='contain'
            />

            <Text> Sign Up with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Signed in")}
            style={{
              marginTop: 12,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10
            }}
          >
            <Image 
              source={require("../../assets/facebook.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8
              }}
              resizeMode='contain'
            />

            <Text> Sign Up with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Signed in")}
            style={{
              marginTop: 12,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10
            }}
          >
            <Image 
              source={require("../../assets/apple.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8
              }}
              resizeMode='contain'
            />

            <Text> Sign Up with Apple</Text>
          </TouchableOpacity>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 22
        }}>
          <Text style={{
            fontSize: 16,
            color: COLORS.black
          }}>Already have an account ?</Text>
          <Pressable
            onPress={() =>navigation.navigate("login")}
          >
            <Text style={{
              fontSize: 16,
              color: COLORS.primary,
              fontWeight: "bold",
              marginLeft: 6,
            }}>Login</Text>
          </Pressable>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default signup