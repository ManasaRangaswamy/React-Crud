import React,{ Component  } from 'react'

class Login extends Component{
    state={
        name:'',
        password:'',
        err:'',
        isSubmitted:false

    }

    handleName = (e) =>{
        // const {value} = e.target
        this.setState({
            name:e.target.value
        })
    }

    handlePwd = (e) =>{
        // const {value} = e.target
        this.setState({
            password:e.target.value

        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        
        this.setState({
            
            isSubmitted:true
        })
    }



    render(){
        return(
            <div>
                
                <div className="container">
                    <form className="col-sm-12" >
                        <div className="form-group" >
                            <label>Name</label>
                            <input type="text" placeholder="Enter Name" name={this.state.name} id="name" onChange={(e)=>this.handleName(e)} />
                            {
                                (this.state.name === "" ) && (this.state.isSubmitted) ? <div ClassName="err" name={this.state.err}>Enter Name</div> :null
                            }
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" placeholder="Enter Pwd" name={this.state.password} id="password" onChange={(e)=>this.handlePwd(e)} />
                            {
                                (this.state.password === "")  && (this.state.isSubmitted) ? <div ClassName="err" name={this.state.err}>Enter password</div> : null
                            }
                        </div>
                        <button type="submit" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                        
                    </form>
                </div>
            </div>
        )
    }
}


export default Login
