import styled from 'styled-components';
import reset from './reset.css';
import style from "./index.css"
import './App.css';

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;
const ListDif = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: center;
  justify-content: center;
`;
const Item = styled.li`

`;

const ItemDif = styled.li`
background-color: rgb(255, 248, 148);
padding: 5px;
padding-left: 10px;
padding-right: 10px;
border-radius: 10px;
`;

const ItemDifActive = styled.li`
background-color: rgba(255, 76, 49, 1);
padding: 5px;
padding-left: 10px;
padding-right: 10px;
border-radius: 10px;
`;

const DivParam = styled.div`
margin-bottom: 10px;
background-color: #f8f8f8;
border-radius: 25px;
padding-top: 10px;
padding-bottom: 10px;
`;

const DivDif = styled.div`
background-color: #f8f8f8;
border-radius: 25px;
padding-top: 10px;
padding-bottom: 10px;
width: 200px;
margin-left: auto;
margin-right: auto;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
`;

const Title = styled.h1`
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #333; 
`;

const SubTitle = styled.h2`
  font-size: 15px;
  margin-right: auto;
    max-width: 100px;
    margin-bottom: 10px;
  `

const Des = styled.p`
  font-size: 10px;
  color: #333; 
  `
const DesActive = styled.p`
  font-size: 10px;
  color: #ffffffff; 
  `

function App() {
  return (
    <div className="App">
      <List>
        <Item>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfbJq5pbaqcTfA8fU_8fH1CP5EPGvJt7EPQ&s"
            alt="burger" />
          <Title>Smoked salmon burger</Title>
          <DivParam>
            <List>
              <Item><Des>20 min</Des></Item>
              <Item><Des>6 servings</Des></Item>
              <Item><Des>210 calories</Des></Item>
            </List>
          </DivParam>
          <DivDif>
            <SubTitle>Difficulty</SubTitle>
            <ListDif>
              <ItemDifActive><DesActive>Easy</DesActive></ItemDifActive>
              <ItemDif><Des>Medium</Des></ItemDif>
              <ItemDif><Des>Hard</Des></ItemDif>
            </ListDif>
          </DivDif>
        </Item>
      </List>
    </div>
  );
}

export default App;
