import * as React from 'react';
import styled from 'styled-components'
import { Animate } from './Components/Animation';

const AppWrapper = styled.div`
  background-color: #012A3A;
  height: 100vh;
  color: #FFFFFF;
`;


const ChildOne = () => {return (<div><h1>Hi</h1></div>)};
  
const ChildTwo = () => {return (<div><p>Hi</p></div>)};

function App() {
  const [inProp, setInProp] = React.useState(true);

  return (
    <AppWrapper>
      <Animate in={inProp} children={<ChildOne />}/>
      <button onClick={() => setInProp(!inProp)}>Hi</button>
    </AppWrapper>
      
  );
}

export default App;
