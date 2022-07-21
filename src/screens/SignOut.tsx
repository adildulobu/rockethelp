import { useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { VStack, Heading, Icon, useTheme, HStack, IconButton } from 'native-base';
import { CaretLeft, Envelope, Key } from 'phosphor-react-native';

import Logo from '../assets/logo_primary.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Header } from '../components/Header';

export function SignOut() {
  const [isLoading,setIsLoading] = useState(false); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { colors } = useTheme();

  function handleSignOut() {
    if(!email || !password || !confirmPassword) {
      return Alert.alert('Registar', 'Preencha os campos');
    }

    if(password != confirmPassword){
      return Alert.alert('Registar', 'As senhas devem ser iguais.')
    }
    
    setIsLoading(true);

    auth().createUserWithEmailAndPassword(email,password)
      .catch((error) =>{  
        setIsLoading(false);

        if(error.code === 'auth/invalid-email'){
          return Alert.alert('Registar','Email Inválido.')
        }

        if(error.code === 'auth/user-not-found'){
          return Alert.alert('Registar','Email ou senha Inválido.')
        }

        return Alert.alert('Registar', 'Não foi possível acessar.')

      });


  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Header title="Crie sua conta"/>

      <Input
        mb={4}
        placeholder="E-mail"
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
        onChangeText={setEmail}
      />

      <Input
        mb={4}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
      />

     <Input
        mb={8}
        placeholder="Confirmar senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={setConfirmPassword}
      />

      <Button 
        title="Registar" 
        w="full"
        isLoading={isLoading} 
        onPress={handleSignOut} 
      />
    </VStack>
  )
}