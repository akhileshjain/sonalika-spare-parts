import React, { Component } from 'react';
import  Item  from '../Item/Item';
import './RateList.css';
import Modal from '../UI/Modal/Modal';
import ItemDetails from '../ItemDetails/ItemDetails';
import ReactPaginate from 'react-paginate';

class RateList extends Component {
    constructor(props) {
        super(props);
            this.state = {
                itemsList: null,
                selectedItemRate: null,
                title: '',
                show: false,
                searchTerm: '',
                pageCount: 0
            }
    }
    fetchParts = async (currentPage) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("API_TOKEN", "WTBW7FSRNIJEHSXCA11ZR");

        var requestOptions = {
            method: 'POST',
            // mode: 'no-cors',
            headers: myHeaders,
            redirect: 'follow'
          };
        fetch(`https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=10`) //, requestOptions
        .then(res => {
            return res.json();
        }).then(responseData => {
            console.log(responseData);
            this.setState({itemsList: responseData, itemListClone: responseData});
        });
    }
    componentDidMount() {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("API_TOKEN", "WTBW7FSRNIJEHSXCA11ZR");

        var requestOptions = {
            method: 'POST',
            // mode: 'no-cors',
            headers: myHeaders,
            redirect: 'follow'
          };
        fetch('https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=10')  // , requestOptions
        .then(res => {
            const total = res.headers.get('x-total-count');   
            this.setState({"pageCount": Math.ceil(total/5)});
            return res.json();
        }).then(responseData => {
            console.log(responseData);
            this.setState({itemsList: responseData, itemListClone: responseData});
        });
    }
    itemSelectedHandler = (selectedItem) => {
        this.setState({selectedItemRate: selectedItem.tranRate, title: selectedItem.iName, show: true});
    }
    orderCancelledHandler = () => {
        this.setState({show: false});
    }
    dynamicSearch = (e, event) => {
        let filteredData = e.state.itemListClone.filter(i => i.iName.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({itemsList: filteredData});
    }
    handlePageClick = async (data) => {
        debugger;
        let currentPage = data.selected + 1 ;
        const pageData  = await this.fetchParts(currentPage);
        this.setState({itemsList: pageData, itemListClone: pageData});    
    }
    render() {
        if (!this.state.itemsList){
            return <div>Fetching Data...</div>
        }    
        return (
            <div className="items-box">
                <div className="searchbar-box">
                    {this.state.show ? 
                    <Modal show={this.state.show} modalClosed={this.orderCancelledHandler}>
                        <ItemDetails onCloseDialog={() => this.orderCancelledHandler()} title={this.state.title} rate={this.state.selectedItemRate}></ItemDetails>
                    </Modal> 
                    : null}
                    <form className="ratelist-form">
                        <input placeholder="Enter the search term here..." onChange={(event) => this.dynamicSearch(this, event)} className="ratelist-form-search-input"></input>
                       
                    </form>
                </div>
                <ReactPaginate
                    previousLabel = {'previous'}
                    nextLabel = {'next'}
                    breakLabel = {'...'}
                    pageCount = {this.state.pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={6}
                    onPageChange={this.handlePageClick}
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
                <div className="parts-header">
                    <div>Part Details</div>
                    <div>Price (In Rs.)</div>
                </div>
                {this.state.itemsList.map(item => {
                return <Item onSelectItem={() => this.itemSelectedHandler(item)} 
                        key={item.id}
                        title={item.name}
                        desc={item.body}
                        location={item.email}
                        rate={item.postId}
                        // key={item.itemId} 
                        // title={item.iName} 
                        // desc={item.iDesc} 
                        // location={item.comment}
                        // rate={item.tranRate}
                        ></Item>
                })}

            </div>
        );
    }
}
export default RateList;