import React, { useState,useEffect } from 'react';
import SideBar from '../../components/SideBar';
import { HrSearch, HomeContainer, ConteudoContainer, BodyContainer,Body,H1Container, DivSearch, InputSearch, HeaderContainer, ImgContainer } from './styled'
import Card from '../../components/Card';
import api from "../../services";
import posts from "../../assets/posts.png"

export default function HomePage(){

  const [lancamentos, setLancamentos] = useState<any>([]);

  useEffect(() => {
    (async () => {
      let res = await api.get('api/posts');
      console.log(res.data);
      setLancamentos(res.data.reverse());
    })();
  }, []);

  return (
    <HomeContainer>
      <SideBar location={"Home"}/>
      <ConteudoContainer>
        <Body>
          <HeaderContainer>
            
            <H1Container><ImgContainer src={posts} className="" alt="foguete" /> Posts</H1Container>

          </HeaderContainer>
          <HrSearch/>
          <BodyContainer>

            { 
            lancamentos.map((item: any, key: number) => {
              console.log(key)
              return (<Card id={key} dados={item}/>)
              })
            }
            
          </BodyContainer>
        </Body>
      </ConteudoContainer>
    </HomeContainer>
  );
}