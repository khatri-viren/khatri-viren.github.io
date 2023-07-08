import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Data } from "./Data";
import "./hobbies.css";
import ReactPaginate from "react-paginate";

const Hobbies = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(6);

  useEffect(() => {
    setImages(Data);
  }, []);

  const indexOfLastPost = currentPage * imagesPerPage;
  const indexOfFirstPost = indexOfLastPost - imagesPerPage;
  const currentPosts = images.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <section className="hobbies section" id="hobbies">
      <h2 className="section__title">My Hobbies</h2>
      <span className="section__subtitle">All my artworks</span>
      <div className="hobbies__container container grid">
        {currentPosts.map((item, index) => {
          return <Item img={item.image} key={index} name={item.title} />;
        })}
      </div>
      <div className="hobbies__pagination">
        <ReactPaginate
          onPageChange={paginate}
          pageCount={Math.ceil(images.length / imagesPerPage)}
          previousLabel={"Prev"}
          nextLabel={"Next"}
          containerClassName={"pagination"}
          pageLinkClassName={"page-number"}
          previousLinkClassName={"page-number"}
          nextLinkClassName={"page-number"}
          activeLinkClassName={"active"}
        />
      </div>
    </section>
  );
};

export default Hobbies;
