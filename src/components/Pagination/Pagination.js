import ReactPaginate from "react-paginate";

const Pagination = ({itemsPerPage, totalItems, handlePagination}) => {
    // let currentPage = 0
    // const pageNumbers = [];

    // for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
    //     pageNumbers.push(i);
    //     // console.log(pageNumbers);
    // }

    
    // console.log("handlePagination", handlePagination)
    
    // console.log("after:", currentPage);

    // const numbers = pageNumbers.map((number) => {
    //     // console.log(number);
    //     return (
    //         {number}
            
    //         );

    // });

    // console.log(itemsPerPage);
    return (
        <ReactPaginate 
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={Math.ceil(totalItems / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePagination}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
       />
    );
};

export default Pagination;