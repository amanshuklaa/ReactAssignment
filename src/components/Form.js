import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput ,MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [
            {
                username :'',
                age:'',
                email:'',
                password:'',
                rendr : false
            },
          ]
        }
      }


    handleUsernameChange=(event) =>{
        this.setState({
            username:event.target.value
        })
    }
    handleUserageChange = (event) =>{
        this.setState({
            age : event.target.value
        })
    }
    handleEmailChange =(event) =>{
        this.setState({
            email:event.target.value
        })
    }
    handlePasswordChange = (event) =>{
        
        this.setState({
            password:event.target.value
        })
    }


    handleSubmit = event =>{
        
        const data = this.state 
        console.log(data)
        if(this.state.rendr){
            this.setState({
                rendr:false
            })
        }else{
            this.setState({
                rendr:true
            })
        }
        event.preventDefault()
    }
    render() {
        const rendrState = this.state.rendr
        let cardData
        if(rendrState){
            return  (cardData = 
                <MDBCol style={{ maxWidth: "22rem" }}>
                <MDBCard>
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                    waves />
                  <MDBCardBody>
                    <MDBCardTitle>Name: {this.state.username}</MDBCardTitle>
                    <MDBCardText><b>Age: </b>{this.state.age}</MDBCardText>
                    <MDBCardText><b>Email: </b>{this.state.email}</MDBCardText>
                    <MDBCardText><b>password: </b>{this.state.password}</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>               
                )
        }
        return (
          
            <div>
                    <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <form className="toppad">
                  <p className="h5 text-center mb-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                      success="right" onChange={this.handleUsernameChange} />
                    <MDBInput label = "Your age"    icon="user" type  = "text" validate error="wrong"
                      success="right" onChange ={this.handleUserageChange}/>
                    <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                      success="right" onChange ={this.handleEmailChange}/>
                    <MDBInput label="Your password" icon="lock" group type="password" validate onChange = {this.handlePasswordChange}/>
                   
                  </div>
                  <div className="text-center">
                    <MDBBtn color="primary" onClick = {this.handleSubmit}>Register</MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

            <div className = "cardpad">
                {cardData}
            </div>
            </div>
        
            
        );
    }
}


export default Form;