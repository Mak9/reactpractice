import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media } from 'reactstrap';


	
	function RenderDish({dish}) {
		return (
			<Card>
				<CardImg top src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		);
	}
	
	function RenderComments({comments}) {
		if (comments != null) {
			const list = comments.map((item) => {
				return (
					<div key={item.id}>
						<Media tag="li">
							<Media body>
								<p>{item.comment}</p>
								<p>-- {item.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}</p>
							</Media>
						</Media>
					</div>
				);
			});
			return (
				<div>
					<h4>Comments</h4>
					<Media list className="list-unstyled">
						{list}
					</Media>
				</div>
			);
		} else
			return (
				<div></div>
			);
	}
	
	const DishDetail=(props)=> {
        
		if (props.dish != null) 
			return (
                <div className="container">
                <div className="row">
					<div className="col-12 col-md-5 m-1">
						<RenderDish dish={props.dish}/>
					</div>
					<div className="col-12 col-md-5 m-1">
						<RenderComments comments={props.dish.comments}/>
					</div>
				</div>
                </div>
				
			);
		else
		 	return (
		 		<div></div>
         	);
       
	}


export default DishDetail;
