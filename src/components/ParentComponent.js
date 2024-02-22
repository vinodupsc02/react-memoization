import React, { useCallback, useState } from 'react';
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const memoCallbackFunc = useCallback(incrementCount, [count]);

    return (
        <Card className='my-5'>
            <CardTitle className='mt-2 text-center'>Use CallBack Hook</CardTitle>
            <CardBody>
                <p>Count: {count}</p>
                <ChildComponent onIncrement={memoCallbackFunc} />
            </CardBody>
        </Card>
    );
}

const ChildComponent = React.memo(({ onIncrement }) => {
    console.log(`Child Component rendered`);

    return (
        <div>
            <Button variant='primary' onClick={onIncrement}>Increment Count</Button>
        </div>
    );

})

export default ParentComponent;