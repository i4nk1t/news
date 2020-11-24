import React from 'react';
import News from './News';

class App extends React.Component{
    render(){
        return (
            <div>
      <div style={{text_align: "center"}}>
          <h1>News</h1>
      </div>
      <div>
            </div>
            <News />
      </div>

        )
    }
}

export default App;