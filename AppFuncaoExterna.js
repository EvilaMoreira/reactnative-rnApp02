import React, { useState } from 'react';
import { Text,View } from 'react-native';
import styled from 'styled-components/native';

//Criando componente página.
const Pagina = styled.SafeAreaView` 
 flex:1;
 justify-content:center;
 align-items:center;
`;

const Entrada = styled.TextInput`

width:200px;
height:40px;
border: 1px solid #000;

`;


const Hello = function (){ //Componente Hello
  //Criando state; 
  const [nome,setNome] = useState('Tads UEPA');
 
  function mudarTexto(texto) {
    setNome(texto);
  }
 
 
 
  return (
  <View>
    <Entrada value={nome} onChangeText={mudarTexto} />
   <Text>Olá, {nome}</Text>
  </View>
  );
}

export default function App() { //Função principal
  return(
    <Pagina>
     <Hello/> 
    </Pagina>
  )
}