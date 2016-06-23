import React from 'react';
import imageLogo from '../logo.png';
import './NewsHeader.css'
/*
export default class NewsHeader extends React.Component{
	render(){
		return(
			<div className="newsHeader">
				I am NewsHeader
			</div>
		);
	}
}
*/
export default class NewsHeader extends React.Component{
	getLogo(){
		return(
			<div className="newsHeader-logo">
				<a href="https://myurl.com/"><img width="20" height="20" src={imageLogo} /></a>
			</div>
		)
	}
	getTitle(){
		return(
			<div className="newsHeader-title">
				<a className="newsHeader-textLink" href="#">Hacker News</a>
			</div>
		);
	}
	getNav(){
		var navLinks = [
				{name: 'new',url: 'newest'},
				{name: 'comments',url: 'newcomments'},
				{name: 'show',url: 'show'},
				{name: 'ask',url: 'ask'},
				{name: 'jobs',url: 'jobs'},
				{name: 'submit',url: 'submit'}
		];
		return(
			<div className="newsHeader-nav">
				{
					navLinks.map(function(item){
						return (
							<a key={item.url} className="newsHeader-navLink textLink" href={"https://myurl/" + item.url}>
								{item.name}
							</a>
						)
					})
				}
			</div>
		)
	}
	getLogin(){
		return(
			<div className="newsHeader-login">
				<a className="newsHeader-textLink" href="https://myurl/login?goto=news">login</a>
			</div>
		)
	}
	render(){
		return(
			<div className="newsHeader">
				{this.getLogo()}
				{this.getTitle()}
				{this.getNav()}
				{this.getLogin()}
				I am NewsHeader
			</div>
		);
	}
}