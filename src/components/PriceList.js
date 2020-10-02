import React from "react";
import { IoIosBicycle, IoIosAdd, IoIosClose } from "react-icons/io";

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
  return (
    <ul className="list-group list-group-flush">
      {items.map((item, i) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={i}
        >
          <span className="col-1">
            <IoIosBicycle size="4em" color="#007bff" />
          </span>
          <span className="col-5">{item.title}</span>
          <span className="col-2 font-weight-bold">
            {item.category.type === "income" ? "+" : "-"}${item.price}
          </span>
          <span className="col-2">{item.date}</span>
          <a
            className="col-1"
            href="#"
            onClick={() => {
              onModifyItem(item);
            }}
          >
            <IoIosAdd size="4em" />
          </a>
          <a
            className="col-1"
            href="#"
            onClick={() => {
              onDeleteItem(item);
            }}
          >
            <IoIosClose size="4em" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PriceList;
