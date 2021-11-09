import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

//Criando componente página.
const Pagina = styled.SafeAreaView` 
 flex:1;
 justify-content:center;
 align-items:center;
`;

const Hello = function (){ //Componente Hello
  //Criando state; 
  const [nome,setNome] = useState('Tads UEPA');
  return (
   <Text>Nome: {nome}</Text>
  );
}

export default function App() { //Função principal
  return(
    <Pagina>
     <Hello/> 
    </Pagina>
  )
}