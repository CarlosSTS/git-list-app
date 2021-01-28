import React, { Component } from 'react';
import { Keyboard, ActivityIndicator, Alert } from "react-native"
import AddIcon from "react-native-vector-icons/MaterialIcons"
import UserSlashIcon from "react-native-vector-icons/FontAwesome5"
import api from "../../service/api";
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
  NameOff,
  ContainerOff
} from './styles';


export default class Main extends Component {
  state = {
    newUser: "",
    users: [],
    loading: false,
  }

  async componentDidMount() {
    const users = await AsyncStorage.getItem("users");

    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState !== users) {
      AsyncStorage.setItem("users", JSON.stringify(users))
    }
  }

  handleAddUser = async () => {
    try {
      const { users, newUser } = this.state;
      this.setState({ loading: true })
      const response = await api.get(`/users/${newUser}`);

      const data = {
        name: response.data.name,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
        login: response.data.login,
      }
      this.setState({
        users: [...users, data],
        newUser: "",
        loading: false,
      })

      Keyboard.dismiss()
    } catch {
      Keyboard.dismiss()
      this.setState({ loading: false })
      Alert.alert("Aviso", "Usuário não encontrado")
    }
  }

  navigateToUser = user => {
    const { navigation } = this.props;
    navigation.navigate('User', { user })
  };

  render() {
    const { users, newUser, loading } = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>

            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
                <AddIcon name="add" color="#fff" size={20} />
              )}
          </SubmitButton>
        </Form>

            {users[0] ? (
              <List
                data={users}
                keyExtractor={user => user.login}
                onEndReachedThreshold={0.2}
                renderItem={({ item }) => (
                  <User>
                    <Avatar source={{ uri: item.avatar }} />
                    <Name>{item.name}</Name>
                    <Bio>{item.bio}</Bio>
                    <ProfileButton onPress={() => this.navigateToUser(item)}>
                      <ProfileButtonText>Ver perfil</ProfileButtonText>
                    </ProfileButton>
                  </User>
                )}
              />
            ) : (
              <ContainerOff>
              <UserSlashIcon size={100} name="user-alt-slash" color="#CFD8DD" />
              <NameOff>Você ainda não adicionou nenhum usuário</NameOff>
            </ContainerOff>
              )}
      </Container>
    )
  }
}