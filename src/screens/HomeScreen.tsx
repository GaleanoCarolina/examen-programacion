import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from '../lib/supabase';

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Necesitamos permisos de cámara para tomar fotos.');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const clearPhoto = () => {
    setImage(null);
  };

  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Fotografías</Text>
      
      <View style={styles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.placeholder}>No hay foto seleccionada</Text>
        )}
      </View>

      <View style={styles.buttonRow}>
        <Button title="Abrir Galería" onPress={pickImage} />
        <Button title="Usar Cámara" onPress={takePhoto} />
      </View>

      {image && (
        <View style={styles.actionButton}>
          <Button title="Eliminar Foto" color="red" onPress={clearPhoto} />
        </View>
      )}

      <View style={styles.logoutButton}>
        <Button title="Cerrar Sesión" color="#555" onPress={signOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  imageContainer: { width: 300, height: 300, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center', marginBottom: 20, borderRadius: 10, overflow: 'hidden' },
  image: { width: '100%', height: '100%' },
  placeholder: { color: '#888' },
  buttonRow: { flexDirection: 'row', gap: 15, marginBottom: 15 },
  actionButton: { marginBottom: 15 },
  logoutButton: { marginTop: 40, width: '100%' }
});