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
                    <div className="parts-desc">{this.props.title}</div>
                </div>
                <div className="parts-rate-box">
                    <div>{this.props.rate}</div>
                </div>
            </div>
        )
    }
}
export default Item;