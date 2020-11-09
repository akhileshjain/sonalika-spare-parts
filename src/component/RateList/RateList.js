import React, { Component } from 'react';
import  Item  from '../Item/Item';
import Modal from '../UI/Modal/Modal';
import ItemDetails from '../ItemDetails/ItemDetails';

class RateList extends Component {
    constructor(props) {
        super(props);
            this.state = {
                itemsList: null,
                selectedItemRate: ''
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
    itemSelectedHandler = (selectedItemRate) => {
        this.setState({selectedItemRate: selectedItemRate});
    }
    render() {
        if (!this.state.itemsList){
            return <div>Fetching Data...</div>
        }    
        return (
            <div className="items-box">
                <div>
                    <Modal>
                        <ItemDetails rate={this.state.selectedItemRate}></ItemDetails>
                    </Modal>
                    <form>
                        <input></input>
                        <button>Search</button>
                    </form>
                </div>
                {this.state.itemsList.map(item => {
                return <Item onSelectItem={() => this.itemSelectedHandler(item.id)} 
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