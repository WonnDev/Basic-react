import React from "react";
import './Demo.scss';
class Child extends React.Component {

    state = {
        show: false

    }

    handleShowHide = () => {
        this.setState({
            show: !this.state.show
        })
    }

    handleOnclickDelete = (item) => {
        console.log('>>> handleOnclickDelete: ', item)
        this.props.deleteAItems(item)
    }

    render() {
        let { arrItems } = this.props;

        let { show } = this.state;
        let check = show === true ? 'show = true' : 'show = false';
        console.log('>>>check conditional: ', check)

        return (
            //fragnent<></>
            <>
                {show === false ?
                    < div >
                        <button style={{ color: 'red' }}
                            onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="list">{
                            arrItems.map((item) => {
                                return (
                                    <div key={item.id}>
                                        {item.name} - {item.number} <></>
                                        <span onClick={() => this.handleOnclickDelete(item)}><button> x </button></span>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default Child;