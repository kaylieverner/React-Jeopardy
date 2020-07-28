import React from "react";

function ScoreContainer({children}) {
  return (
<div class="card">
    <div class="card-body ">
        {children}
    </div>
</div>
  );
}

export default ScoreContainer;