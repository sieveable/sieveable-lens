import React from 'react';

const SearchComponent = function searchComponent() {
  return (
    <div className="row" id="search-box">
      <h1 className="search-form text-center col-md-12">
      Search the best Android design patterns and dev tools
      </h1>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="input-group">
            <input type="text" className="form-control input-lg" placeholder="Seach Sieveable" />
            <span className="input-group-btn">
              <button type="button" className="btn btn-info btn-lg">
                <span className="glyphicon glyphicon-search" /> Search
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
