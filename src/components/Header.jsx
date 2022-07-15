import { Button, NavLink, Container  } from "react-bootstrap";
import React, { useState } from "react";
import {Link} from 'react-router-dom'

export const Header=({emri, color})=>{
    const [count, setCounter]= useState(0)

    const changeCounter=()=>{
        setCounter(count+1)
        // setCounter(count++)
        // setCounter(++count)
    }

    return<Container>
        <div>
            <img />
        </div>
        <div>
            <ol>
                <NavLink><Link to="/">home</Link></NavLink>
                <li><Link to="/user">User</Link></li>
                <li><Link to="/aboutus">Aboutus</Link></li>
                <li><Link to="/">bla bla</Link></li>
            </ol>
            <h1>Welcome {emri}, you have logged in {count} times </h1>
            <Button variant="info" onClick={changeCounter} >Login</Button>
            <button>Login</button>
        </div>
    </Container>
}