import React, { Component } from 'react';
import Listado from './Listado';

class Posts extends Component {
    
    render() { 
        return ( 
            <div className="col-12 col-md-8">
                <h2 className="text-center"> Posts </h2>
                    <Listado 
                    borrarPost={this.props.borrarPost} 
                    posts={this.props.posts}
                    />
            </div>
          );
    }
}
 
export default Posts;