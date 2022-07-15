import React from "react";
import { Card, Col, Row } from 'react-bootstrap'
import { PostCard } from "../components/PostCard";

export const Dashboard = () => {

    const posts = [
        {
            title: "shtepi ne shitje1",
            price: 25
        },
        {
            title: "shtepi ne shitje2",
            price: 25
        },
        {
            title: "shtepi ne shitje3",
            price: 25
        },
        {
            title: "shtepi ne shitje4",
            price: 25
        },
        {
            title: "shtepi ne shitje5",
            price: 25
        },
    ]
    return <>
        <div>
            <h1>This is dashboard</h1>
        </div>
        <div>
            <h3>hello people</h3>
        </div>
        <div className="d-flex justify-content-center">
            <Row className="w-75">
                {posts.map(post => {
                    return <PostCard post={post} />
                })}
            </Row>
        </div>

    </>


} 