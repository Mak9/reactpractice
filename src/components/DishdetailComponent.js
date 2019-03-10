import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
class DishDetail extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }



    render() {
        const com=this.props.detail.comments.map((c)=>{
            return(
                <div key={c.id}>
                    
                    <p>{c.comment}</p>
                    <p>--{c.author} , {c.date}</p>

                </div>
            )
        }
        );
        console.log(this.props.detail.comments)
        return (
            //<div><p>{this.props.detail.name}</p><br></br><p>{this.props.detail.description}</p></div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top width="100%" src={this.props.detail.image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{this.props.detail.name}</CardTitle>
                            <CardText>{this.props.detail.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                    {com}
                </div>
            </div>



        )
    }

}
export default DishDetail;