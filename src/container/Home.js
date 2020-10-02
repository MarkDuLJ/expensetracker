import React, { Component } from "react";
import MonthPicker from "../components/MonthPicker";
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import Totle from "../components/Total";

import {
  LIST_VIEW,
  CHART_VIEW,
  TYPE_INCOME,
  TYPE_OUTCOME,
  parseToYearMonth,
  padLeft,
} from "../utility";
import CreateBtn from "../components/CreateBtn";

const categories = {
  1: {
    id: 1,
    name: "Travel",
    type: "outcome",
  },
  2: {
    id: 2,
    name: "Salary",
    type: "income",
  },
};
const items = [
  {
    id: 1,
    title: "traveling to YellowKnife",
    price: 200,
    date: "2020-09-10",
    cid: 1,
  },
  {
    id: 2,
    title: "traveling to Montreal",
    price: 300,
    date: "2020-09-14",
    cid: 1,
  },
  {
    id: 3,
    title: "Jan wage",
    price: 1500,
    date: "2020-09-01",
    cid: 2,
  },
  { id: 9, title: "Dec's wage", price: 1500, date: "2020-12-14", cid: 2 },
];

const newItem = {
  id: 6,
  title: "Child Benefit",
  price: 1000,
  date: "2020-09-07",
  cid: 2,
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items,
      currentDate: parseToYearMonth(),
      tabView: LIST_VIEW,
    };
  }

  changeView = (view) => {
    this.setState({ tabView: view });
  };
  changeDate = (year, month) => {
    this.setState({
      currentDate: { year, month },
    });
  };
  modifyItem = (mitem) => {
    const updatedItem = this.state.items.map((item) => {
      if (item.id === mitem.id) {
        return { ...item, title: "Have a fun in Yunnan" };
      } else {
        return item;
      }
    });

    this.setState({ items: updatedItem });
  };
  createItem = () => {
    this.setState({ items: [newItem, ...this.state.items] });
  };
  deleteItem = (ditem) => {
    const selectedItem = this.state.items.filter(
      (item) => item.id !== ditem.id
    );
    this.setState({ items: selectedItem });
  };

  render() {
    const { items, tabView, currentDate } = this.state;
    const itemsWithCategory = items
      .map((item) => {
        item.category = categories[item.cid];
        return item;
      })
      .filter((item) => {
        return item.date.includes(
          `${currentDate.year}-${padLeft(currentDate.month)}`
        );
      });

    let totalIncome = 0,
      totalOutcome = 0;
    itemsWithCategory.forEach((item) => {
      if (item.category.type === TYPE_INCOME) {
        totalIncome += item.price;
      } else {
        totalOutcome += item.price;
      }
    });
    return (
      <>
        <header className="App-header">
          <div className="row mb-5">
            <h2>Expense Booklet</h2>
          </div>
          <div className="row">
            <div className="col">
              <MonthPicker
                year={currentDate.year}
                month={currentDate.month}
                onChange={this.changeDate}
              />
            </div>
            <div className="col col-6">
              <Totle income={totalIncome} outcome={totalOutcome} />
            </div>
          </div>
        </header>
        <div className="content-area py-3 px-3">
          <ViewTab activeTab={tabView} onTabChange={this.changeView} />
          <CreateBtn createItem={this.createItem} />
          {tabView === LIST_VIEW && (
            <PriceList
              items={itemsWithCategory}
              onModifyItem={this.modifyItem}
              onDeleteItem={this.deleteItem}
            />
          )}
          {tabView === CHART_VIEW && <h2>Todo: ChartList</h2>}
        </div>
      </>
    );
  }
}

export default Home;
