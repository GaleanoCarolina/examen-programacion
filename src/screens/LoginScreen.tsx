import React, { useState } from 'react';
import { Alert, StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { supabase } from '../lib/supabase';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) Alert.alert('Error', error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) Alert.alert('Error', error.message);
    else Alert.alert('Éxito', 'Cuenta creada. Ya puedes iniciar sesión.');
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen de Programación</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Correo electrónico"
        autoCapitalize={'none'}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder="Contraseña"
        autoCapitalize={'none'}
      />
      <View style={styles.buttonContainer}>
        <Button title="Iniciar Sesión" disabled={loading} onPress={signInWithEmail} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Registrarse" disabled={loading} onPress={signUpWithEmail} color="#841584" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 15, paddingHorizontal: 10, borderRadius: 5 },
  buttonContainer: { marginBottom: 15 }
});