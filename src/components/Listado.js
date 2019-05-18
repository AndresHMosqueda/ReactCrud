import React, { Component } from 'react';
import Post from './Post'

class Listado extends Component {

    mostrarPosts = () => {
        const posts = this.props.posts;
        if(posts.length === 0) return null;
       
        return (
            <React.Fragment>
            {Object.keys(posts).map(post => (
                <Post 
                    key={post}
                    borrarPost={this.props.borrarPost} 
                    info={this.props.posts[post]}
                />
            ))}

            </React.Fragment>
        )
    }


    state = {  }
    render() { 
        return ( 
            <table className="table">
                <thead>
                    <tr>
                        <th className="col">ID </th>
                        <th className="col">Titulo:  </th>
                        <th className="col">Acciones </th>
                    </tr>
                </thead>
                <tbody>
                    {this.mostrarPosts()}
                </tbody>
            </table>
         );
    }
}
 
export default Listado;