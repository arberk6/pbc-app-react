import React, { useEffect, useState } from "react";
import { Container, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
export const Login = () => {

    const [data, setData] = useState({})

    useEffect(()=>{

    },[])
    
    useEffect(()=>{
        setData({email:'asdfasdf'})
        console.log(data)
    },[data])

    const handleLogin = (e) => {
        e.preventDefault()
        if (data.email && data.password) {
            toast.success('data is sent to backend')
            axios.post('http://localhost:43122/user/login', data).then(res => {
                toast.success('you are logged in')
            }).catch(err => {
                toast.error('Server error, please try again later')
            })
            return
        }
        else {
            toast.error('Please fill data')
            return
        }
    }

    const handleChange = (event) => {
        let tempData = {
            ...data,
            [event.target.name]: event.target.value
        }
        console.log(tempData)
        setData(tempData)
    }

    return <Container className="mt-5">
        <ToastContainer />
        <Form className="p-5" onSubmit={handleLogin}>
            <FormGroup>
                <FormLabel>Email:</FormLabel>
                <FormControl onChange={handleChange} type='text' name='email' />
            </FormGroup>

            <FormGroup>
                <FormLabel>Password:</FormLabel>
                <FormControl onChange={handleChange} type='password' name='password' />
            </FormGroup>

            <FormGroup className="mt-3 d-flex justify-content-center">
                <FormControl type='submit' className="w-25 btn-primary" />
            </FormGroup>
        </Form>
    </Container>
}