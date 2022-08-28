import React from 'react';
import ReactPaginate from 'react-paginate';

const Paginate = (props) => {

    const onPageClicked = data => {
       props.onPageChange(data.selected);
    }
    return (
        <ReactPaginate
        previousLabel = {'<'}
        nextLabel = {'>'}
        breakLabel = {'...'}
        pageCount = {props.pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={6}
        onPageChange={onPageClicked}
        // onPageChange={this.handlePageClick}
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
    )
}

export default Paginate;
