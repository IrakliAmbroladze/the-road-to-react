import * as React from "react";

const Search = (props) => {
  //i think this is not necessary for current situation
  const [searchTerm, setSearchTerm] = React.useState("");
  console.log(searchTerm);
  const handleChange = (event) => {
    //i think this is not necessary for current situation
    setSearchTerm(event.target.value);
    props.onSearch(event);
  };
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

function App() {
  console.log("App renders");

  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  const List = (props) => {
    console.log("List renders");
    return (
      <ul>
        {props.list.map((item) => (
          <Item key={item.objectID} item={item} />
        ))}
      </ul>
    );
  };

  const Item = (props) => (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={stories} />
    </div>
  );
}

export default App;
