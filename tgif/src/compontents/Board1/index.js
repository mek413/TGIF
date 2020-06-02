import React from "react";

function Board() {
    return (
        <div id="board1" class="home board1 container-fluid">
          <div class="row logo-container">
            <div class="col">
                <h1 class="montBold">TGIF</h1>
                <p class="descriptive">Settle the same old questions with a few simple clicks.</p>
                <h2 class="oswald">ARGUE LESS. <span class="relax">RELAX MORE.</span></h2>    
            </div>
          </div>
          <div class="row selection-container">
            <h2 class="montBold dinner-select">1. WHAT'S FOR DINNER?</h2>
            <h2 class="montBold todo-select inactive">2. WHAT DO YOU WANT TO DO?</h2>
          </div>
        </div>
    );
  }

  export default Board;