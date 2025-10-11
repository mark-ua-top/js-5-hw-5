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
  padding: 20px;
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
`;

const H2 = styled.h2`
  font-size: 1.5em;
`;

const P = styled.p`
  font-size: 1em;
  color: #333; 
  `

function App() {
  return (
    <div className="App">
      <List>
        <Item>
          <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfbJq5pbaqcTfA8fU_8fH1CP5EPGvJt7EPQ&s"
            alt="burger" />
          <H2>smoked salmon burger</H2>
          <List>
            <Item><P>20 min</P></Item>
            <Item><P>6 servings</P></Item>
            <Item><P>210 calories</P></Item>
          </List>
        </Item>
      </List>
    </div>
  );
}

export default App;
