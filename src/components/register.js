import React,{Component} from 'react'
import axios from 'axios'

class Register extends Component {

    state={
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        isSubmit:false,
        users:""
    }

    componentDidMount(){
        axios.get("http://localhost:8090/auth/signup ",{
            data:{
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:password
            }
        }).then(res =>{
            const result=res.data
            console.log(result)
    
        this.setState({
            users:result,
        })
    })
        .catch(err =>{
            console.log(err)
        })

        

    }
    handleFname = (e) =>{
        // const {value} = e.target
        this.setState({
            firstname:e.target.value
        })
    }

    handleLname = (e) =>{
        this.setState({
            lastname:e.target.value
        })
    }

    handleMail = (e) =>{
        this.setState({
            email:e.target.value
        })
    }

    handlePwd = (e) => {
        this.setState({
            password:e.target.value
        })
    }

    handleSubmit= (e) =>{
        e.preventDefault()
        this.setState({
            isSubmit:true
        })
    }
    render(){
        return(
            <div>
                <div className="container">
                    <form className="col-sm-12 mt-5">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="firstname" onChange={(e) =>this.handleFname(e)} />
                            {
                                (this.state.firstname === "" ) && (this.state.isSubmit)? <div>Enter FirstName</div> : null
                            }
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="lastname" onChange={(e) =>this.handleLname(e)} />
                            {
                            (this.state.lastname === "") && (this.state.isSubmit) ? <div>Enter LastName</div> : null
                            }
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" onChange={(e) =>this.handleMail(e)} />
                            {
                            (this.state.email === "") && (this.state.isSubmit) ? <div>Enter Email</div> : null
                            }
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" name="pwd" onChange={(e) =>this.handlePwd(e)}/>
                            {
                            (this.state.password === "") && (this.state.isSubmit) ? <div>Enter Password</div> : null
                            }
                        </div>
                        <button type="submit" onClick={(e)=>this.handleSubmit(e)}>Click Me</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Register