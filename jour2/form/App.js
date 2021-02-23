import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder={"Email"}
        onChangeText={(email) => setEmail(email)}
        value={email}
        autoCompleteType={"email"}
        textContentType={"emailAddress"}
        keyboardType={"email-address"}
      />

      <TextInput
        style={styles.input}
        placeholder={"Password"}
        onChangeText={(password) => setPassword(password)}
        value={password}
        secureTextEntry={true}
        autoCompleteType={"password"}
        textContentType={"password"}
      />

      <Pressable
        style={({ pressed }) => [
          {
            // backgroundColor: pressed ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 1)",
            backgroundColor: pressed ? "green" : "black"
          },
          styles.button,
        ]}
        onPress={() => { password.length < 6 && Alert.alert("Your password must contain at least 6 alphanumerical characters.") }}
      >
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    marginBottom: 32,
    fontSize: 40,
    fontWeight: 'bold',
  },

  input: {
    width: 240,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 8,
    paddingLeft: 8,
  },

  button: {
    width: 240,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 8,
  },

  buttonText: {
    padding: 12,
    textAlign: 'center',
    color: '#fff',
  },

});

export default App;
