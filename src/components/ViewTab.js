import React from "react";
import propTypes from "prop-types";
import { IoMdList, IoIosStats } from "react-icons/io";
import { LIST_VIEW, CHART_VIEW } from "../utility";

const getActiveLink = (current, view) => {
  return current === view ? "nav-link active" : "nav-link";
};

const ViewTab = ({ activeTab, onTabChange }) => (
  <ul className="nav nav-tabs nav-fill my-4">
    <li className="nav-item">
      <a
        className={getActiveLink(activeTab, LIST_VIEW)}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onTabChange(LIST_VIEW);
        }}
      >
        <IoMdList />
        List Mode
      </a>
    </li>
    <li className="nav-item">
      <a
        className={getActiveLink(activeTab, CHART_VIEW)}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onTabChange(CHART_VIEW);
        }}
      >
        <IoIosStats />
        Map Mode
      </a>
    </li>
  </ul>
);

ViewTab.propTypes = {
  onTabChange: propTypes.func.isRequired,
};
export default ViewTab;
