import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
padding: 30px;  
`;

export const Header = styled.View`
align-items: center;
padding-bottom: 20px;
border-bottom-width: 1px;
border-color: #eee;
`;

export const Avatar = styled.Image`
width: 100px;
height: 100px;
border-radius: 50px;
background-color: #eee;
`;

export const Name = styled.Text`
font-size: 20px;
color: #333;
margin-top: 10px;
text-align:center;
font-weight: bold;
font-family:"Lato-Thinltalic";

`;

export const Bio = styled.Text`
font-size: 14px;
line-height: 18px;
color: #999;
margin-top: 5px;
text-align:center;
font-weight:bold;
font-family:"Lato-Light";

`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
margin-top: 20px;
`;

export const Starred = styled(RectButton)`
background-color: #f5f5f5;
border-radius: 4px;
padding: 10px 15px;
margin-bottom: 20px;
flex-direction: row;
align-items: center;
`;

export const OwnerAvatar =styled.Image`
height: 42px;
width: 42px;
border-radius: 21px;
background-color: #eee;
`;

export const Info = styled.View`
margin-left: 10px;
flex:1;
`;

export const Title = styled.Text.attrs({
  numberOfLines : 2,
})`
font-size: 15px;
color: #333;
font-family: "Lato-Black";
`;

export const  Author = styled.Text`
font-size: 13px;
margin-top: 4px;
color: #666;
font-family:"Lato-Light";
`;
export const NameOff = styled.Text`
color: #CFD8DD;
font-size: 23px;
margin-top:10px;
font-family: "Lato-BlackItalic";
`;
export const ContainerOff = styled.View`
flex:1;
padding: 30px;  
justify-content:center;
align-items:center;
`;