import React from 'react';

class Profile extends React.Component {
    state = {
        profile:null
    }
    componentDidMount(){
        console.log('method:componentdidmount called...')
        Promise.all([
            fetch('https://api.github.com/users/kalburgimanjunath'),
            fetch('https://api.github.com/users/kalburgimanjunath')
        ]).then(function (res) {
            // Get a JSON object from each of the res
            return Promise.all(res.map(function (res) {
                console.log(res)
                return res.json();
            }));
        })
        // .then(res=>res.json())
        .then(profile =>{
            this.setState({profile:profile})
        })
    }
    render(){
        console.log('method:render() called...')
        const {profile} = this.state;
        console.log(profile)
        
        return(
            
                <div className="Profile">
                    <h1>My Profile from Github List</h1>
                    <div>
                       {
                           profile ? (
                            <div>
                                <div>{profile.name}<span>:{profile.location}</span></div>
                                <div><img src={profile.avatar_url} width="200" alt="" /></div>
                                <div>
                                    <div>Followers:<span>{profile.followers}</span></div>
                                    <div>Following:<span>{profile.following}</span></div>
                                    <div>Followers:<span>{profile.followers}</span></div>
                                    <div>Repositories:<span>{profile.public_repos}</span></div>
                                </div>
                            </div>
                           ):(
                            <div>load.....</div>
                           )                             
                           
                       }
                        
                        
                   
                    </div>
                    
                </div>
                
          
           
        );
    }
  
}

export default Profile;



