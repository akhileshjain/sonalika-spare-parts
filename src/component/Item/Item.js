import React, {Component} from 'react';
import './Item.css';

class Item extends Component {

    onItemClicked = props => {
        this.props.onSelectItem(props);
    }
    render() {
        return (

            <div className="parts-box" onClick={this.onItemClicked.bind(this, this.props)}>
                <div className="parts-desc-box">
                    <div className="parts-name">{this.props.title}</div>
                    <div className="parts-desc">{this.props.desc}</div>
                    <div className="parts-location">Location - {this.props.location? this.props.location:'N/A'}</div>
                </div>
                <div className="parts-rate-box">
                    <div>Rs. {this.props.rate}.00</div>
                </div>
            </div>
        )
    }
}
export default Item;