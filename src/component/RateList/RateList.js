import React, { useState, useEffect } from 'react';
import RateListView from '../RateListView/RateListView';
import * as PartsService from '../../services/parts.service';
import './RateList.css';
import  Item  from '../Item/Item';
import Modal from '../UI/Modal/Modal';
import ItemDetails from '../ItemDetails/ItemDetails';
import Paginate from '../Paginator/Paginator';

const RateList = () => {
    const [pageCount, setPageCount] = useState(null);
    const [itemsList, setItemsList] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedItemRate, setSelectedItemRate] = useState();
    const [title, setTitle] = useState();

    const itemSelectedHandler = (selectedItem) => {
        setSelectedItemRate(selectedItem.tranRate);
        setTitle(selectedItem.iName + ' (' + selectedItem.iDesc + ')');
        setShow(true);
    }
   const orderCancelledHandler = () => {
        setShow(false);
    }
    const handlePageClick = async (pageNo) => {
        fetchParts(pageNo);   
    }
    const dynamicSearch = async (e, event) => {
        let searchTerm = event.target.parentElement.children[0].value.trim();
        if(searchTerm !== '') {
            const pageData  = await PartsService.getSearchResults(searchTerm);
            setPageCount(Math.ceil(pageData.length/20));
            setItemsList(pageData);                
        } else {
            fetchPageCount();
            fetchParts(0); 
        }
    }
    async function fetchPageCount() {
        const response = await PartsService.getPartsCount();
        setPageCount(Math.ceil(response/20));
    }
    async function fetchParts(pageNo) {
        const response = await PartsService.getPartsByPage(pageNo);
        setItemsList(response);
    }
    useEffect(() => {
        fetchPageCount();
        fetchParts(0); 
    }, [])

    return(
        <div className="items-box">
        <div className="searchbar-box">
            {show ? 
            <Modal show={show} modalClosed={orderCancelledHandler}>
                <ItemDetails onCloseDialog={() => orderCancelledHandler()} title={title} rate={selectedItemRate}></ItemDetails>
            </Modal> 
            : null}
            {/* <form className="ratelist-form" onSubmit={(event) => dynamicSearch(this, event)}> */}
                <div className="ratelist-form">
                    <input placeholder="Enter the search term here..." className="ratelist-form-search-input"></input>
                    <button onClick={(event) => dynamicSearch(this, event)}>Search</button>
                </div>
            {/* </form> */}
        </div>
        <Paginate pageCount={pageCount} onPageChange={(data) => handlePageClick(data)}
        ></Paginate>
        <RateListView itemsList={itemsList} onItemClicked={(data) => itemSelectedHandler(data)}></RateListView>

    </div>
    )
}

export default RateList;

// class RateList extends Component {
//     constructor(props) {
//         super(props);
//             this.state = {
//                 itemsList: [],
//                 selectedItemRate: null,
//                 title: '',
//                 show: false,
//                 searchTerm: '',
//                 pageCount: 0
//             }
//     }
//     fetchParts = async (currentPage, searchTerm) => {
//         let myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");
//         myHeaders.append("API_TOKEN", "WTBW7FSRNIJEHSXCA11ZR");

//         var requestOptions = {
//             method: 'POST',
//             headers: myHeaders,
//             redirect: 'follow'
//           };

//         fetch(`https://web.accountsdeck.com/ws/spd/itemList_off?page=${currentPage}&offset=20`, requestOptions)
//         .then(res => {
//             return res.json();
//         }).then(responseData => {
//             console.log(responseData);
//             this.setState({itemsList: responseData, itemListClone: responseData});
//         });
//     }
//     // itemSelectedHandler = (selectedItem) => {
//     //     this.setState({selectedItemRate: selectedItem.tranRate, title: selectedItem.iName, show: true});
//     // }
//     orderCancelledHandler = () => {
//         this.setState({show: false});
//     }
//     // dynamicSearch = async (e, event) => {
//     //     // let filteredData = e.state.itemListClone.filter(i => i.iName.toLowerCase().includes(event.target.value.toLowerCase()));
//     //     let searchTerm = event.target.children[0].value.trim();
//     //     const pageData = await this.fetchParts(0, searchTerm);
//     //     this.setState({itemsList: pageData, itemListClone: pageData});
//     // }
//     // handlePageClick = async (pageNo) => {
//     //     debugger;
//     //     let currentPage = pageNo;
//     //     const pageData  = await this.fetchParts(currentPage, this.state.searchTerm);
//     //     this.setState({itemsList: pageData, itemListClone: pageData});    
//     // }
//     render() {
//         // if (!this.state.itemsList){
//         //     return <div>Fetching Data...</div>
//         // }    
//         return (
//             <div className="items-box">
//                 <div className="searchbar-box">
//                     {this.state.show ? 
//                     <Modal show={this.state.show} modalClosed={this.orderCancelledHandler}>
//                         <ItemDetails onCloseDialog={() => this.orderCancelledHandler()} title={this.state.title} rate={this.state.selectedItemRate}></ItemDetails>
//                     </Modal> 
//                     : null}
//                     {/* <form className="ratelist-form" onSubmit={(event) => this.dynamicSearch(this, event)}>
//                         <input placeholder="Enter the search term here..." className="ratelist-form-search-input"></input>
//                         <button type="submit">Search</button>
//                     </form> */}
//                 </div>
//                 <Paginate onPageChange={(data) => this.handlePageClick(data)}
//                 ></Paginate>
//                 {/* <div className="parts-header">
//                     <div>Part Details</div>
//                     <div>Price (In Rs.)</div>
//                 </div> */}
//                 <RateListView></RateListView>
//                 {/* <div>
//                     {this.state.itemsList.map(item => {
//                     return <Item onSelectItem={() => this.itemSelectedHandler(item)} 
//                             key={item.itemId} 
//                             title={item.iName} 
//                             desc={item.iDesc} 
//                             location={item.comment}
//                             rate={item.tranRate}
//                         ></Item>
//                     })}
//                 </div> */}

//             </div>
//         );
//     }
// }
// export default RateList;