import React from 'react';
import {
    Link, Route
  } from "react-router-dom";
import LoadFile from './Loadfile'
class Gists extends React.Component {
    state = {
        gists:null
    }
    componentDidMount(){
        console.log('method:componentdidmount called...')
        fetch('https://api.github.com/gists')
        .then(res=>res.json())
        .then(gists =>{
            this.setState({gists:gists})
        })
    }
    render(){
        const {gists} = this.state;
        
        return(
            
                <div className="Gists">
                    <h1>Gist List</h1>
                    {gists ?(
                        gists.map((gist)=>{
                            return <div key={gist.id}>
                                <Link to={'/gists/g/'+ gist.id}>{gist.id}</Link>
                                </div>
                        })
                    ):(
                        <div>Loading ... </div>
                    )}    
                    <Route path="/gists/g/:gistId" render={
                        ({match})=>{
                            return <Gist gist={gists.find(g=>g.id===match.params.gistId)}/>
                        }
                    }>
                    </Route>                   
                </div>
                
          
           
        );
    }
  
}

export default Gists;

const Gist = ({gist}) => {
    return (
        <div>
        <h1>Welcome to Gist</h1>
        <div>
            {gist.description}
        </div>
        {Object.keys(gist.files).map((key)=>{
            console.log(key)
            return <li>
                <b>{key}</b>
                <LoadFile url={gist.files[key].raw_url}>
                    {text => (
                    <pre>{text}</pre>
                    )}
                </LoadFile>            
            </li>
        })}
        </div>
    )
}


