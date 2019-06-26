import React from 'react';
import Post from './Components/Post';
import PostForm from './Components/PostForm';
import "bootstrap/dist/css/bootstrap.min.css"; // añadimos bootstrap
import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
	 <Provider store={store}>
	    <div className="container">
	    	<PostForm />
	    	<hr />
	        <Post />
	    </div>
    </Provider>
  );
}

export default App;
