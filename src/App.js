import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorDescrpGH = '#4f565E';
const colorGitHub = '#010409';
const imageProfileGH = 'https://avatars.githubusercontent.com/u/93789218?v=4';
const urlToMyGitHub = 'https://github.com/ViihNeris';

const App = () => {
  const handlePressGoToGitHub = async () => {
    console.log('Verificando link...');
    const response = await Linking.canOpenURL(urlToMyGitHub);
    if (response) {
      console.log('...Link aprovado!');
      console.log('Abrindo Link...');
      await Linking.openURL(urlToMyGitHub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Um anime representando Viih Neris!"
          style={style.avatar}
          source={{uri: imageProfileGH}}
        />
        <Text
          accessibilityLabel="Nome: Neris"
          style={[style.defaultText, style.name]}>
          Neris
        </Text>
        <Text
          accessibilityLabel="Nickname: @Viih Neris"
          style={[style.defaultText, style.nickname]}>
          @ViihNeris
        </Text>
        <Text style={style.defaultText}>
          Dev Front-End Jr | Técnica em Desenvolvimento de Sistemas | Dio Campus
          Expert
        </Text>
        <Pressable onPress={handlePressGoToGitHub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open In GitHub!
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1, //Expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    alignItems: 'center',
    padding: 20,
  },

  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
  },
  defaultText: {
    color: 'white',
  },

  name: {
    fontSize: 25,
  },
  nickname: {
    fontSize: 12,
    marginBottom: 7,
    color: colorDescrpGH,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#2EA043',
    borderRadius: 5,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});
