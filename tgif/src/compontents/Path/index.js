import React from 'react';


class Path extends React.Component {
    state = {
        dinner: "montBold dinner-select",
        todo: "montBold todo-select inactive"
    };

    dinnerPath = (e) => {
        e.preventDefault();
            this.setState({dinner: "montBold dinner-select", todo: "montBold todo-select inactive"});
    }
    todoPath = (e) => {
        e.preventDefault();
            this.setState({dinner: "montBold dinner-select inactive", todo: "montBold todo-select"});
    }

    render(){
    return (
        <div className="row selection-container">
            <h2 className={this.state.dinner} onClick={this.dinnerPath}>1. WHAT'S FOR DINNER?</h2>
            <h2 className={this.state.todo} onClick={this.todoPath}>2. WHAT DO YOU WANT TO DO?</h2>
        </div>
    );
    }
}
export default Path;