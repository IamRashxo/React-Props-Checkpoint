
   
    import Card from 'react-bootstrap/Card';

    function BasicExample({name,team,nationality,jerseyNumber,age,image}) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{width:'200px'}} variant="top" src={image}/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            Team: {team} <br/>
            
            nationality: {nationality} <br />

            jerseyNumber: {jerseyNumber} <br />
            age: {age} <br />
            </Card.Text>
            
        </Card.Body>
        </Card>
    );
    }


        BasicExample.defaultProps = {
        name: 'Unknown Player',
        team: 'Unassigned',
        nationality: 'N/A',
        jerseyNumber: 0,
        age: 0,
        image: 'https://via.placeholder.com/150'
        };
        export default BasicExample;