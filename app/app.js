import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import NewsList from './touch/NewsList.js';
import './app.css';
/*
class HelloWorld extends React.Component{
  render(){
    return (
        <div>Hello World魂牵梦萦</div>
        );
  }
}

render(<HelloWorld />, $('#app')[0]);
*/
//render(<NewsList />, $('#app')[0]);

function get(url) {
	return Promise.resolve($.ajax(url));
}

/*
get('https://hacker-news.firebaseio.com/v0/topstories.json').then( function(stories){
	return Promise.all(stories.slice(0, 30).map(itemId => get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
}).then(function(items) {
	render(<NewsList items={items} />, $('#content')[0]);
}).catch(function(err) {
	console.log('error occur', err);
});
*/

ReactDOM.render(<NewsList />, $('#app')[0],()=>console.log('完成'));
