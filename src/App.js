import styled from 'styled-components';
import './App.css';

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
const Item = styled.li`
    width: 250px;
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
`;

const H3 = styled.h3`
  font-size: 15px;
`;

const P = styled.p`
  font-size: 1em;
  color: #333; 
  `

const Div = styled.div`
background-color: #f8f8f8;
border-radius: 25px;
padding: 20px;
  `

function App() {
  return (
    <div className="App">
      <List>
        <Item>
          <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfbJq5pbaqcTfA8fU_8fH1CP5EPGvJt7EPQ&s"
            alt="burger" />
          <H3>smoked salmon burger</H3>
          <Div>
            <List>
              <Item><P>20 min</P></Item>
              <Item><P>6 servings</P></Item>
              <Item><P>210 calories</P></Item>
            </List>
          </Div>
          <Div>
            <H3>Difficulty</H3>
            <List>
              <Item><P>Easy</P></Item>
              <Item><P>Medium</P></Item>
              <Item><P>Hard</P></Item>
            </List>
          </Div>
        </Item>
      </List>
    </div>
  );
}

export default App;
