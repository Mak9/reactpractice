import React, { Component } from "react";
import { ModalBody,ModalHeader, Modal,
    Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal=this.toggleModal.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  } 
  handleSubmit(values){
    console.log("Current State is:"+JSON.stringify(values));
    alert("Current State is:"+JSON.stringify(values))
  
}
  render() {
    return (
      <div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
          <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <Row className="form-group">
          <label htmlFor="user.name">Rating</label>
        <Control.text model="user.name" id="user.name" />

        
        <Control.select model="user.faveColor" id="user.faveColor">
          <option value="red">1</option>
          <option value="green">2</option>
          <option value="blue">3</option>
          <option value="red">4</option>
          <option value="green">5</option>
        </Control.select>
                            </Row>
          
          <Row className="form-group">
                                <Label htmlFor="yourname" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                                </Col>
                            </Row>
            </LocalForm>
                            
              
          </ModalBody>
        </Modal>
        <Button outline onClick={this.toggleModal} color="secondary">
          <i class="fa fa-pencil" /> Submit Comment
        </Button>
      </div>
    );
  }
}
export default CommentForm;
