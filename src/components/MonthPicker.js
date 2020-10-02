import React from "react";
import PropTypes from "prop-types";
import { padLeft, range } from "../utility";

class MonthPicker extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
    };
  }
  toggleDropdown = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
      selectedYear: this.props.year,
    });
  };

  selectYear = (event, yearNum) => {
    event.preventDefault();
    this.setState({
      selectedYear: yearNum,
    });
  };
  selectMonth = (event, monthNum) => {
    event.preventDefault();
    this.setState({
      isOpen: false,
    });
    this.props.onChange(this.state.selectedYear, monthNum);
  };
  render() {
    const { year, month } = this.props;
    const { isOpen, selectedYear } = this.state;
    const monthRange = range(12, 1);
    const yearRange = range(9, -4).map((num) => num + year);
    return (
      <div className="dropdown month-picker-component">
        <h4>Choose Month</h4>
        <button
          className="btn btn-lg btn-secondary dropdown-toggle"
          onClick={this.toggleDropdown}
        >
          {year}-{padLeft(month)}
        </button>
        {isOpen && (
          <div className="dropdown-menu" style={{ display: "block" }}>
            <div className="row">
              <div className="col">
                {yearRange.map((y, i) => (
                  <a
                    key={i}
                    href="#"
                    onClick={(e) => this.selectYear(e, y)}
                    className={
                      y === selectedYear
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                  >
                    {y}
                  </a>
                ))}
              </div>
              <div className="col">
                {monthRange.map((m, i) => (
                  <a
                    key={i}
                    className={
                      m === month ? "dropdown-item active" : "dropdown-item"
                    }
                    href="#"
                    onClick={(e) => this.selectMonth(e, m)}
                  >
                    {padLeft(m)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// MonthPicker.PropTypes = {
//   year: PropTypes.number.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
export default MonthPicker;
