import React from "react";

const CreateBtn = ({ createItem }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      createItem();
    }}
  >
    Create a new expense
  </a>
);

export default CreateBtn;
