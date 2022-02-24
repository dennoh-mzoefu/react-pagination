import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Posts from "./Posts";
import "./Home.css";

function Home() {
  const [users, setUsers] = useState();
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pageVisited = pageNumber * usersPerPage;
  let pageCount = users ? Math.ceil(users.length / usersPerPage) : null;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    console.log(users);
    console.log(pageVisited);
  });

  return (
    <div>
      {users && (
        <Posts users={users.slice(pageVisited, pageVisited + usersPerPage)} />
      )}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Home;
