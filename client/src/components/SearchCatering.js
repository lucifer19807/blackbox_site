import React, {useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { CATERING_API_URL } from "../constants";

const SearchCatering = () => {

    const [halls, setHalls] = useState([])

    const getAllBanquetHalls = (e) => {
        axios.get(CATERING_API_URL).then( (response) => {
            // setHalls(JSON.parse(JSON.stringify(response.data)))
            setHalls(response.data)
        })
    }
        
    useEffect(()=>{
        getAllBanquetHalls();
      },[]);
    
  return (
    <Container>
        <Row>
            <Col></Col>
            <Col xs={8}>
                <h1 style={{'paddingTop':40, 'textAlign':'center', 'fontFamily':'Serif', 'fontSize':40}}>Search results</h1>
                    {
                        halls.map(item=> {
                            return (
                                <div style={{paddingTop:20}}>
                                    <Card style={{ width: '100%'}}>
                                        <Card.Body>
                                        <Card.Title>{item.caterer_name}</Card.Title>
                                        <Card.Text>
                                            <div>
                                                <strong>Caterer Name: </strong> <p>{item.caterer_name}</p>
                                                <strong>Catering Price: </strong> <p>{item.catering_price}</p>
                                                <strong>Phone Number: </strong> <p>{item.phone_number}</p>
                                            </div>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
            </Col>
            <Col></Col>

        </Row>
    </Container>
  )
}

export default SearchCatering