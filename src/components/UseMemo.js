import React, { useMemo, useState } from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState('');

    const expensiveComputation = (num) => {
        let i = 0;
        while(i < 1000000000) i++;
        return num * num;
    }

    const memoizationValue = useMemo(() => expensiveComputation(count), [count]);

    return (
        <Card className="mt-5">
            <CardTitle className="text-center mt-2">Use Memo for exoensive calculations</CardTitle>
            <CardBody>
                <p>Count: {count}</p>
                <p>Square: {memoizationValue}</p>
                <Button variant="danger" onClick={() => setCount(count + 1)}>Increase Count</Button>
                <input className="form-control" type="text" onChange={(e) => setOtherState(e.target.value)} />
            </CardBody>
        </Card>
    );

}

export default UseMemo;