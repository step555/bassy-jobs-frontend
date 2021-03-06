import React from "react"
import { Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         employer: localStorage.is_employer
    //     }
    // }

    render(){
        return(
        <div>
            <div className="topnav">
            <Link className="active" to="/">Bassy Jobs</Link>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <div className="topnav-right">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                {this.props.employer === "false" || this.props.employer === false ? <Link to="/jobs">Jobs</Link> : null }
                {this.props.isLoggedIn === "true" && this.props.employer === "false" || this.props.employer === false ? <Link to="/profile">Profile</Link> : null}
                {this.props.isLoggedIn === "true" && this.props.employer === "true" || this.props.employer === true ? <Link to="/employer-profile">Employer Profile</Link> : null}                
                {/* {this.props.isLoggedIn === "true" ?  null : <Link to="/sign-up">Sign Up</Link>} */}
                {/* {this.props.isLoggedIn === "true" ? <Link onClick={this.props.logOut} to="/login"> Log Out</Link> : <Link to="/login">Log In</Link>} */}
                {this.props.isLoggedIn === "true" ? <Link onClick={this.props.logOut} to="/"> Log Out</Link> : null}
                {this.props.isLoggedIn === undefined || this.props.isLoggedIn === false ?
                <div className="dropdown1">
                    <button className="dropbtn">For Employers
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                    {this.props.isLoggedIn === "false" || this.props.isLoggedIn === false || this.props.isLoggedIn === undefined  ?  <Link to="/sign-up-company">Sign Up</Link> : null}
                    {this.props.isLoggedIn === "false" || this.props.isLoggedIn === false || this.props.isLoggedIn === undefined ?  <Link to="/login-company">Log in</Link> : null }
                    </div>
                </div>
                :
                null
                }
                {this.props.isLoggedIn === undefined || this.props.isLoggedIn === false ?
                <div className="dropdown2">
                    <button className="dropbtn">For Job Seekers
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        {this.props.isLoggedIn === false || this.propsIsLoggedin === "false" || this.props.isLoggedIn === undefined ?  <Link to="/sign-up">Sign Up</Link> : null}
                        {this.props.isLoggedIn === false || this.propsIsLoggedin === "false" || this.props.isLoggedIn === undefined ?  <Link to="/login">Log in</Link> : null}
                    </div>
                </div> 
                :
                null
                }
            </div>
        </div>

        </div>
        ) 
    }
}

export default Nav


// import React from "react"
// import { Header} from 'semantic-ui-react'
// import { Link } from 'react-router-dom';
// import {
//     Button,
//     Container,
//     Divider,
//     Grid,
//     Icon,
//     Image,
//     List,
//     Menu,
//     Responsive,
//     Segment,
//     Sidebar,
//     Visibility,
//   } from 'semantic-ui-react'

// class Nav extends React.Component {

//     render(){
//         return(
//         // <Menu pointing secondary>
//         //  <Fragment>
//         <div > 
//             <div className={`ui inverted blue menu navbar color`}>
//             <h2 className="ui header">
//                 <i className="blue icon"></i>
//                 <br/>
//                 <div className="content"> Bassy Jobs </div>
//                 <br /><br />
//             </h2>
//             <div className="item nav-bar" >
//                 <Link to="/">Home</Link>
//             </div>
//             <div className="item nav-bar">
//                 <Link to="/about">About</Link>
//             </div>
//             <div className="item nav-bar">
//                 <Link to="/jobs">Jobs</Link>
//             </div>
//             {this.props.isLoggedIn === "true" ?
//             <div className="item nav-bar">
//             <Link to="/profile">Profile</Link>
//             </div> 
//             :
//             null
//             }
//             {this.props.isLoggedIn === "true" ?
//             <div className="item nav-bar">
//             <Link onClick={this.props.logOut} to="/login">
//                 Log out
//             </Link>
//             </div>
//             :
//             <div className="item nav-bar">
//             <Link to="/login">Log In</Link>
//             </div>
//             }
//             </div>
//         </div>
//         ) 
//     }
// }

// export default Nav