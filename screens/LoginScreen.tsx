import React, { FC } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import LoginDuck from '../redux/login/login.duck';
import UIDuck from '../redux/ui/ui.duck';
import { Controller, useForm } from 'react-hook-form';
import AuthService from '../services/auth/auth.service';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../constants/Colors';

const LoginScreen: FC = () => {
  const { control, handleSubmit, errors } = useForm();
  const isLoading: boolean = useSelector(UIDuck.isLoading);
  const dispatch = useDispatch();

  const getToken = (requestData: any) => {
    dispatch(UIDuck.setLoading(1));
    AuthService.getToken(requestData)
      .then(({ data }) => {
        dispatch(LoginDuck.addToken(data));
      })
      .catch((e) => {
        // tslint:disable-next-line:no-console
        console.error(e);
      })
      .finally(() => dispatch(UIDuck.setLoading(-1)));
  };

  const onSubmit = (data: any) => getToken(data);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="User Name"
            />
          )}
          name="userName"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.userName && <Text style={styles.error}>This field is required.</Text>}
      </View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              secureTextEntry={true}
              placeholder="Password"
            />
          )}
          name="password"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.password && <Text style={styles.error}>This field is required.</Text>}
      </View>

      <Button color="#10b1fc" title={isLoading ? 'Submitting...' : 'Submit'} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  error: {
    color: '#f13'
  },
  inputContainer: {
    maxWidth: 300,
    width: '80%',
    paddingBottom: 10
  },
  input: {
    borderColor: Colors.light.tint,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#fff',
    height: 40,
    width: '100%',
    paddingVertical: 2,
    paddingHorizontal: 5
  }
});
