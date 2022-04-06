import React from "react";

class AddComponent extends React.Component{

    state = {
        id:'',
        name: '',
        number: '',
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleChangeNumber = (event) => {
        this.setState({
            number: event.target.value
        })

    }
    handleSubmit = (event) => {
        event.preventDefault()
        if(!this.state.name || !this.state.number){
            alert('Missing required params')
            return;
        }
        console.log('>>>checkdateinput: ',this.state)
        this.props.addNewItems({
            id: this.state.id,
            name : this.state.name,
            number : this.state.number,
        })
        this.setState({
            id:'',
            name:'',
            number: ''
        })
    }


    render() {
        return(
            <>
            <form>
                <label htmlFor="fname">Name:</label><br />
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(event) => this.handleChangeName(event)}
                />
                <br />
                <label htmlFor="lname">Number:</label><br />
                <input
                    type="text"
                    value={this.state.number}
                    onChange={(event) => this.handleChangeNumber(event)}

                />
                <br /><br />
                <input type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
            </>
        )
    }

}
export default AddComponent;