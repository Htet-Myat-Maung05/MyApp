import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UserFormData, userSchema } from '../utils/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { error },
    reset,
    watch,
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  const password = watch('password');

  const Submit = async (data: UserFormData) => {
    setIsSubmitting(true);
    Alert.alert(
      'Success!',
      `Registration successful for ${data.firstName} ${data.lastName}`,
      [{ text: 'OK', onPress: () => reset() }],
    );
    console.log('Form data:', data);
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.content}>User Registeration</Text>

      <View>
        <View>
          <Text>First Name *</Text>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="John"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                autoCapitalize="words"
                autoCorrect={false}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
