import React from "react";
import Child from "./Child";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component{
    
    state={
        arrItems: [
            {id:'1', name:'1',number:'1'},
            {id:'2', name: '2', number: '2' },
            { id: '3', name: '3', number: '3' }
            
        ]
    }

    addNewItems = (items) => {
        console.log('>>>check form dad: ',items)
        // let currenItems= this.state.arrItems;
        // currenItems.push(items)
        this.setState({
            arrItems: [...this.state.arrItems, items]
            // arrItems : currenItems
        })
    }
    deleteAItems = (Item) => {
        let currenItems = this.state.arrItems;
        currenItems = currenItems.filter(item=> item.id !== Item.id);
        this.setState({
            arrItems: currenItems
        })
    }
    
    
    render(){

        console.log('>>> checkprops: ',this.props)

        return(
            //fragnent<></>
            <>
            <AddComponent
                addNewItems = {this.addNewItems}      
            /> 
               
           
            <Child
                arrItems={this.state.arrItems}
                deleteAItems ={this.deleteAItems}
            />
            
            </>
        )
    }
}

export default MyComponent;