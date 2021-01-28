import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ActivityIndicator } from "react-native"
import api from "../../service/api";
import StarOffIcon from "react-native-vector-icons/MaterialCommunityIcons"
import {
  Container,
  Header,
  Name,
  Avatar,
  Bio,
  Stars,
  Starred,
  Info,
  Title,
  Author,
  OwnerAvatar,
  NameOff,
  ContainerOff,
} from './styles';

const User = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const user = route.params.user;
  const [loading, setLoading] = useState(false)
  const [stars, setStars] = useState([])
  const [page, setPage] = useState(1)


  async function handleStars() {

    const response = await api.get(`/users/${user.login}/starred`,{
      params : { page }
    })
    setStars([...stars, ...response.data])
    setPage(page + 1)
    setLoading(true)
  }

  useEffect(() => {
    handleStars()
  }, [])

  function navigateToStar(stars) {
    navigation.navigate("Star", { stars })
  }

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>

      {loading ? (
        <>
          {stars[0] ? (
            <Stars
              data={stars}
              keyExtractor={star => String(star.id)}
              onEndReached={handleStars}
              onEndReachedThreshold={0.2}
              renderItem={({ item }) => (

                <Starred onPress={() => navigateToStar(item)}>
                  <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                  <Info>
                    <Title>{item.name}</Title>
                    <Author>{item.owner.login}</Author>
                  </Info>  
                </Starred>
              )}
            />

          ) : (
              <ContainerOff>
                <StarOffIcon size={100} name="star-off" color="#CFD8DD" />
                <NameOff>Esse usuário ainda não adicionou nenhuma ⭐️. </NameOff>
              </ContainerOff>
            )}
        </>
      ) : (
          <ActivityIndicator color="#000" />
        )}

    </Container>
  )
}

export default User;