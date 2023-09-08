import React, { useState,useEffect } from 'react';
import SideBar from '../../components/SideBar';
import { HrSearch, HomeContainer, ConteudoContainer, BodyContainer,Body,H1Container, DivSearch, InputSearch, HeaderContainer, ImgContainer } from './styled'
import Card from '../../components/Card';
import api from "../../services";
import posts from "../../assets/posts.png"
import TopBar from '../../components/TopBar';

export default function HomePage(){

  const [lancamentos, setLancamentos] = useState<any>([]);

  useEffect(() => {
    (async () => {
      let res = await api.get('api/posts');
      console.log(res.data);
      setLancamentos(res.data.data.reverse());
    })();
  }, []);

  return (
    <HomeContainer>
      <TopBar location={"Home"}/>
      <SideBar location={"Home"}/>
      <ConteudoContainer>
        <Body>
          <BodyContainer>

            { 
            lancamentos.map((item: any, key: number) => {
              console.log(key)
              return (<><Card id={key} dados={item}/><Card id={key} dados={item}/></>)
              })
            }
            
          </BodyContainer>
        </Body>
      </ConteudoContainer>
    </HomeContainer>
  );
}