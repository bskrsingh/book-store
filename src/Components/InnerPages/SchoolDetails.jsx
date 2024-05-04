import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const schoolDetails = () => {
    return (
        <div className='containers flip-card'>
            <Card border="primary" className='cardProps'>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>School Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter School name" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default schoolDetails