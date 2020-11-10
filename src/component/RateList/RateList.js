import React, { Component } from 'react';
import  Item  from '../Item/Item';
import './RateList.css';
import Modal from '../UI/Modal/Modal';
import ItemDetails from '../ItemDetails/ItemDetails';

class RateList extends Component {
    constructor(props) {
        super(props);
            this.state = {
                itemsList: null,
                selectedItemRate: null,
                title: '',
                show: false
            }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            return res.json();
        }).then(responseData => {
            this.setState({itemsList: responseData});
        });
    }
    itemSelectedHandler = (selectedItem) => {
        this.setState({selectedItemRate: selectedItem.id, title: selectedItem.title, show: true});
    }
    orderCancelledHandler = () => {
        this.setState({show: false});
    }
    render() {
        if (!this.state.itemsList){
            return <div>Fetching Data...</div>
        }    
        return (
            <div className="items-box">
                <div>
                    {this.state.show ? 
                    <Modal show={this.state.show} modalClosed={this.orderCancelledHandler}>
                        <ItemDetails title={this.state.title} rate={this.state.selectedItemRate}></ItemDetails>
                    </Modal> 
                    : null}
                    <form className="ratelist-form">
                        <input className="ratelist-form-search-input"></input>
                        <button>Search</button>
                    </form>
                </div>
                {this.state.itemsList.map(item => {
                return <Item onSelectItem={() => this.itemSelectedHandler(item)} 
                        key={item.id} 
                        title={item.title} 
                        desc={item.body} 
                        rate={item.id}></Item>
                })}
            </div>
        );
    }
}
export default RateList;