import React, { useState } from 'react';
import Post from './components/post/Post';
import { Button, Container } from 'react-bootstrap';
import UseMemo from './components/UseMemo';
import ParentComponent from './components/ParentComponent';



function App() {
  const [signedIn, setSignedIn] = useState(false);
  
  console.log(signedIn)

  return (
    <Container>
        <Post signedIn={signedIn} />
        <Button variant='primary' onClick={() => setSignedIn(!signedIn)}>
          Toggle Signed In {signedIn}
        </Button>
        <UseMemo />

        <ParentComponent />
    </Container>
  );
}

export default App;
