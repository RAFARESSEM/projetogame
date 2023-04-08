import React from 'react';
import cavaleiro from "../../img/cavaleiro.jpg"
import mago from "../../img/mago.jpg"
import hunter from "../../img/hunter.jpg"

export default class Home extends React.Component{
  
    state={
      textsimple: "you are located in the square is: ",
      location: "",
      result: ""
    }
    
    
    
    
    sum = () => {
      const result = this.state.textsimple + this.state.location;
      this.setState({result});
    }
    imgkight=()=> {  
      const knight1= <img src={cavaleiro} alt="knight" title="knight"/>
      this.setState({knight1});
      
    }
    imgmago=()=> {  
      const mago1=<img src={mago} alt="mago" title="mago"/>
      this.setState({mago1});
    }
    imghunter=()=> {  
      const hunter1=<img src={hunter} alt="hunter" title="hunter"/>
      this.setState({hunter1});
    }

    render() {
        return (
          <div className="Home">
                <label> choose your piece class: </label>
                <br />          
               
                <button type="button" class="btn btn-danger" onClick={this.imgkight}>knight</button>
                <button type="button" class="btn btn-info"onClick={this.imgmago}>Mago</button>
                <button type="button" class="btn btn-success"onClick={this.imghunter}>hunter</button>
                <br />
                <br />
            <div class="form-group">
                 <label className="col-form-label mt-4" for="inputDefault">choose the position in the square:</label>
                 <input type="text" className="form-control" placeholder="choose the position in the square:" id="inputDefault" value={this.state.location} onChange={(e)=>{this.setState({location: e.target.value})}}/>
            </div>
    
              <br />
              <button type="button" class="btn btn-outline-primary" onClick={this.sum}>position</button>
              <br />
              <br />
    
              
              <label>  {this.state.knight1}</label>
              <label>  {this.state.mago1}</label>
              <label>  {this.state.hunter1}</label>
              <br />
              <label>  {this.state.result}</label>
          </div>
        );
      }
    
}