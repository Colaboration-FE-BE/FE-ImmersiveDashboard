import React from "react";

const Search = () => {
  return (
    <div>
      <h1>File Search</h1>
      <button onClick={loadFiles}>Load Files</button>
      {files.length > 0 && renderFiles()}
    </div>
  );
};

export default Search;
