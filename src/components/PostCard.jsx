import React from "react";
import { Col, Card } from 'react-bootstrap'
export const PostCard = ({post}) => {
    return <>
        <Col sm={12} md={6} lg={4} className='p-2'>
            <Card>
                <Card.Title>{post.title}</Card.Title>
                <Card.Body>
                    <img src="https://picsum.photos/200" />
                    <h2>{post.title}</h2>
                </Card.Body>
                <Card.Footer>{post.price} Euro</Card.Footer>
            </Card>
        </Col>
    </>
}