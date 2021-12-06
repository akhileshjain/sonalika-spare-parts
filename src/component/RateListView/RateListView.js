import React from 'react';
import  Item  from '../Item/Item';

const RateListView = (props) => {

    const itemClickedHandler = (item) => {
        props.onItemClicked(item);
    }

    if (!props.itemsList){
        return <div>Fetching Data...</div>
    } 
    return (       
        <div>
                <div className="parts-header">
                    <div>Part Details</div>
                    <div>Price (In Rs.)</div>
                </div>
                <div>
                    {props.itemsList.map(item => {
                    return <Item onSelectItem={() => itemClickedHandler(item)} 
                            key={item.itemId} 
                            title={item.iName} 
                            desc={item.iDesc} 
                            location={item.comment}
                            rate={item.tranRate}
                        ></Item>
                    })}
                </div>
        </div>
    )
}

export default RateListView;


