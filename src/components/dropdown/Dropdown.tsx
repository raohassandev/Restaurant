import React from "react";

export const Dropdown = () => {
  return (
   
      <div className="form-floating w-100 mb-2">
        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label>Works with selects</label>
      </div>
   
  );
};
