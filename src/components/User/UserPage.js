import React, { Component } from "react";
import { getUser } from "../../services/UserService";
import Loader from "../Utils/Loader";
import avatar from "../../assets/avatar.jpg";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    setTimeout(
      function() {
        getUser(id).then(user =>
          this.setState({
            loading: false,
            user: user
          })
        );
      }.bind(this),
      4000
    );
  }

  render = () => {
    if (this.state.loading) {
      return <Loader />;
    }

    return (
      this.state.user && (
        <div className="row">
          <div className="col">
            
               <div className='List' key={' ' + this.state.user.id}>
                   <li><span>Name:</span>{' ' + this.state.user.name}</li>
                   <li><span>UseName:</span> {' ' + this.state.user.username}</li>
                   <li><span>Email:</span>{' ' + this.state.user.email}</li>
                   <li><span>Address:</span> 
                        <ul>
                        <li><span>Street:</span> {' ' + this.state.user.address.street}</li>
                        <li><span>Suite:</span> {' ' + this.state.user.address.suite}</li>
                        <li><span>City:</span> {' ' + this.state.user.address.city}</li>
                        <li><span>Zip code: </span> {' ' + this.state.user.address.zipcode}</li>
                        <li><span>Geo: </span>
                           <ul>
                           <li><span>Lat:</span> {' ' + this.state.user.address.geo.lat}</li>
                           <li><span>Lng:</span> {' ' + this.state.user.address.geo.lng}</li>
                           </ul></li>
                        </ul></li>
                    <li><span>Phone:</span>{' ' + this.state.user.phone}</li>
                    <li><span>WebSite:</span> {' ' + this.state.user.website}</li>
                    <li><span>Company:</span>
                        <ul>
                          <li><span>Name:</span> {' ' + this.state.user.company.name}</li>
                          <li><span>CatchtPhrase:</span> {this.state.user.company.catchPhrase}</li>
                          <li><span>Bs:</span> {' ' + this.state.user.company.bs}</li>
                         </ul>
                     </li>
           </div>
            <a href="/" className="btn btn-sm btn-primary">Return To Home</a>
        </div>
        <div className="col">
          <img src={avatar} alt={this.state.user.name} />
          <h1>{this.state.user.name}</h1>

        </div>
    </div>
      )
    );
  };
}

export default UserPage;
