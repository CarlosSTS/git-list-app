import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
flex-direction: row;
padding-bottom: 20px;
border-bottom-width:1px;
border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
flex: 1;
height: 40px; 
background-color: #eee;
border-radius: 4px;
padding: 0 15px;
border: 1px solid #eee;
font-family:"Lato-Black";
`;

export const SubmitButton = styled(RectButton)`
justify-content:center;
align-items:center;
background-color: #7159c1;
border-radius: 4px;
margin-left: 10px;
padding: 0 12px;
`;
export const List = styled.FlatList.attrs({
showsVerticalScrollIndicator: false,
})`
margin-top: 20px;
`;

export const User = styled.View`
align-items: center;
margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
width: 64px;
height: 64px;
border-radius: 32px;
background-color: #eee;
`;

export const Name = styled.Text`
font-size: 14px;
color: #333;
margin-top: 8px;
text-align: center;
font-weight: bold;

font-family:"Lato-Thinltalic";

`;

export const Bio = styled.Text.attrs({
  numberOfLines : 2,
})`
font-size: 13px;
line-height: 18px;
color: #999;
margin-top: 5px;
text-align: center;
font-weight: bold;
font-family:"Lato-Light";

`;

export const ProfileButton=styled(RectButton) `
margin-top: 10px;
align-self: stretch;
border-radius: 4px;
background-color: #7159c1;
justify-content:center;
align-items: center;
height: 36px;
opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const ProfileButtonText = styled.Text`
font-size: 14px;
font-family:"Lato-Regular";
color: #fff;
text-transform: uppercase;
`;

export const NameOff = styled.Text`
color: #CFD8DD;
font-size: 27px;
margin-top:10px;
font-family: "Lato-BlackItalic";
`;
export const ContainerOff = styled.View`
flex:1;
justify-content:center;
align-items:center;
`;
