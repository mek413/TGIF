import React from 'react';
import Food from '../Food';
import Recipe from '../Recipe';

class Path extends React.Component {
    state = {
        dinner: "montBold dinner-select",
        todo: "montBold todo-select inactive",
        dinnerDiv : "col dinner-selection",
        todoDiv : "col todo-selection hide",
        dinnerBtn1: "btn deliver-btn circle-btn",
        dinnerBtn2: "btn circle-btn",
        delForm: "flex hide",
    };

    dinnerPath = (e) => {
        e.preventDefault();
            this.setState({
                dinner: "montBold dinner-select", dinnerDiv : "col dinner-selection",
                todo: "montBold todo-select inactive", todoDiv : "col todo-selection hide",
                dinnerBtn1: "btn deliver-btn circle-btn", dinnerBtn2: "btn circle-btn", todoBtn : "btn circle-btn hide",
                delForm: "flex hide"
            });
    }
    todoPath = (e) => {
        e.preventDefault();
            this.setState({
                dinner: "montBold dinner-select inactive", dinnerDiv : "col dinner-selection hide",
                todoDiv : "col todo-selection", todo: "montBold todo-select",
                dinnerBtn1: "btn circle-btn hide", dinnerBtn2: "btn circle-btn hide"
            });
    }
    startDelivery = (e) => {
        e.preventDefault();
            this.setState({dinnerBtn1: "btn circle-btn hide",
                delForm: "flex"
            });
    }

    render(){
    return (
        <div className="row selection-container">
            <h2 className={this.state.dinner} onClick={this.dinnerPath}>1. WHAT'S FOR DINNER?</h2>
            <h2 className={this.state.todo} onClick={this.todoPath}>2. WHAT DO YOU WANT TO DO?</h2>
            <div className={this.state.dinnerDiv}>
                <button id="deliverIt" className={this.state.dinnerBtn1} onClick={this.startDelivery}><span>Deliver it.</span></button>
                 <form id="enterZip" className={this.state.delForm}>
                    <label id="locationInput" className="location" value="Zip Code" htmlFor="zipSearch">Enter Your Zip Code</label>
                    <input type="text" placeholder="55555" id="zipSearch"></input>
                    <button className="zipVarStore btn">Search</button> 
                </form> 
            </div>
            <div className={this.state.dinnerDiv}>
                <button id="getRecipe" className={this.state.dinnerBtn2}>Get Me a Recipe.</button>            
            </div>

            <div className={this.state.todoDiv}>
                <button id="watchMovie" className="btn circle-btn">Watch a Movie</button>
            </div>

            <div className={this.state.todoDiv}>
                <button id="listenMusic" className="btn circle-btn">Listen to Music</button>
            </div>

            <div className={this.state.todoDiv}>
                <button id="readBook" className="btn circle-btn">Read a Book</button>
            </div>

        </div>
    );
    }
}
export default Path;