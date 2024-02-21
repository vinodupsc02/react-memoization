import React from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";

const Post = ({ signedIn }) => {
    console.log('Rendering Post');
    const post = { title: 'Hi all', content: 'This is the post content!'};
    return (
      <Card className="my-4">
        <CardTitle className="text-center mt-2">{post.title}</CardTitle>
        <CardBody>{post.content}</CardBody>
        {signedIn && <Button variant="secondary">Edit Post</Button>}
      </Card>
    );
  };
  
  export default React.memo(Post);