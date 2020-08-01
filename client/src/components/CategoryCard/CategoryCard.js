import React from "react";

function CategoryCard(props) {
  return (
    <div className="col">
            <div className="card">
                <div className="card-body text-center">
                  {props.title}
                </div>
            </div>
        </div>
  );
}

export default CategoryCard;