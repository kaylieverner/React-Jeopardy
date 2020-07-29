import React from "react";

function Container({children}) {
  return (
<div class="card">
    <div class="card-body ">
        {children}
    </div>
</div>
  );
}

export default Container;