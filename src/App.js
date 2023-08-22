import React from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [sortedby, setSortedBy] = React.useState(0);

  let redinedArticles = () => {
    if (sortedby === 0) {
      let sortedByVOte = articles.sort((a, b) =>
        a.upvotes > b.upvotes ? -1 : a.upvotes < b.upvotes ? 1 : 0
      );
      return sortedByVOte;
    } else {
      let sortedByDate = articles.sort((a, b) =>
        a.date > b.date ? -1 : a.date < b.date ? 1 : 0
      );
      return sortedByDate;
    }
  };

  articles = redinedArticles();

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button data-testid="most-upvoted-link" onClick={() => setSortedBy(0)}>
          Most Up-Voted{" "}
        </button>
        <button data-testid="most-recent-link" onClick={() => setSortedBy(1)}>
          Most Recent
        </button>
      </div>
      <Articles articles={articles} />
    </div>
  );
}

export default App;
