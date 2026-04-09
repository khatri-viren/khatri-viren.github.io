import React, { useState } from "react";
import Item from "./Item";
import { Data } from "./Data";
import ReactPaginate from "react-paginate";

const Hobbies = () => {
  const [images] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(6);

  const indexOfLastPost = currentPage * imagesPerPage;
  const indexOfFirstPost = indexOfLastPost - imagesPerPage;
  const currentPosts = images.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = ({ selected }) => {
    setCurrentPage(() => selected + 1);
  };

  return (
    <section className="section" id="hobbies">
      <h1 className="section__title">My Hobbies</h1>
      <span className="section__subtitle">All my artworks</span>
      <div className="container grid grid-cols-[repeat(3,max-content)] justify-center gap-8 max-[992px]:grid-cols-[repeat(2,max-content)] max-[992px]:gap-5 max-md:grid-cols-[max-content] max-[576px]:grid-cols-1 max-[576px]:justify-items-stretch">
        {currentPosts.map((item) => (
          <Item file={item.file} key={item.file} name={item.title} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <ReactPaginate
          onPageChange={paginate}
          pageCount={Math.ceil(images.length / imagesPerPage)}
          previousLabel={"Prev"}
          nextLabel={"Next"}
          containerClassName={"pagination"}
          pageLinkClassName={"page-number"}
          previousLinkClassName={"page-number"}
          nextLinkClassName={"page-number"}
          activeClassName={"active"}
        />
      </div>
    </section>
  );
};

export default Hobbies;
