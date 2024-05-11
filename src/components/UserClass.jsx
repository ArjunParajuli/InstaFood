import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            userInfo:{
                avatar: "",
                name: "",
                id: "",
                github: ""
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ArjunParajuli");
        const response = await data.json();
        
        this.setState({
            avatar: response?.avatar_url,
            name: response.login,
            id: response?.id,
            github: response?.url
        })
        console.log(response)
    }

    render(){
        const {count} = this.state;
        return (
            <div>
                <h1>Team Members: {count}</h1>
                {/* <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                     })
                }}>Increase Count</button> */}
                <img src={this.state.avatar} alt="avatar" ></img>
                <h2>{this.state.name}</h2>
                <p>{this.state.id}</p>
            </div>
        );
    }
}
export default UserClass  