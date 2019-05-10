import React, { Component } from 'react';

class Video extends Component {
    render() { 
        return ( 
        <div style = {{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
              <iframe title = 'myFrame'
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/16xGceArnz8" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
              </iframe>
        </div> );
    }
}
 
export default Video;