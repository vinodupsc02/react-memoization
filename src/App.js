import React, { useState } from 'react';
import Post from './components/post/Post';
import { Button, Container } from 'react-bootstrap';



function App() {
  const [signedIn, setSignedIn] = useState(false);
  
  console.log(signedIn)

  return (
    <Container>
        <Post signedIn={signedIn} />
        <Button variant='primary' onClick={() => setSignedIn(!signedIn)}>
          Toggle Signed In {signedIn}
        </Button>

    </Container>
  );
}

export default App;
