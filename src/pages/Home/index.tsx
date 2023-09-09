import React, { useState,useEffect } from 'react';
import SideBar from '../../components/SideBar';
import { HrSearch, HomeContainer, ConteudoContainer, BodyContainer,Body } from './styled'
import Card from '../../components/Card';
import api from "../../services";
import posts from "../../assets/posts.png"
import TopBar from '../../components/TopBar';

export default function HomePage(){

  const [lancamentos, setLancamentos] = useState<any>([]);

  useEffect(() => {
    (async () => {
      await api.get('api/posts').then((response) => {
        console.log(response.data);
        if(response.data.data.length > 0){
          setLancamentos(response.data.data.reverse());
        } else {
          setLancamentos([{ conteudo: "Nenhum post encontrado...", user: { nome: "Sistema"}}]);
        }
      }).catch((error) => {
        setLancamentos([{ conteudo: "Nenhum post encontrado...", user: { nome: "Sistema"}}]);
      });

    })();
  }, []);

  return (
    <HomeContainer>
      <TopBar location={"Home"}/>
      <SideBar location={"Home"}/>
      <ConteudoContainer>
            <Body>
              { 
              lancamentos.map((item: any, key: number) => {
                console.log(key)
                return (<Card id={key} dados={item}/>)
                })
              }
            </Body>
      </ConteudoContainer>
    </HomeContainer>
  );
}