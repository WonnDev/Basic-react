import React from "react";

import Color from "../HOC/Color";
import logo from '../../assets/images/meo.jpg'
import { connect } from 'react-redux';


class Home extends React.Component {
    componentDidMount() {
        // setTimeout(()=>{
        //     this.props.history.push('/todo')
        // },5000)
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    handleDeleteUser = (user) => {
        console.log('check user del: ', user);
        this.props.deleteUserRedux(user);
    }

    render() {
        console.log('>>> Check Props redux: ', this.props.dataRedux);

        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>Hello from Homepage</div>
                <div>Wellcome to MyReactWeb</div>
                <div>
                    <img src={logo} style={{ width: '200px', height: '200px', margin: '20px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} <></>

                                    &nbsp;<span onClick={() => this.handleDeleteUser(item)}><button> x </button></span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}

// export default withRouter(Home);

const mapStateToProps = (state) => { //state of redux
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));