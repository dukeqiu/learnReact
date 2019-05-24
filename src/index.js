import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import { Square } from "./Square";

class App extends React.Component {
    render() {
        const { bgColor, onChangeColor } = this.props;
        return (
            <div className="App">
                <Square bgColor={bgColor} onChangeColor={onChangeColor} />
            </div>
        );
    }
}

const changeColorAction = {
    type: "CHANGE_COLOR"
};

const initialState = {
    bgColor: "red"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return {
                bgColor: state.bgColor === "red" ? "green" : "red"
            };
        default:
            return initialState;
    }
};

let store = createStore(reducer);

function mapStateToProps(state) {
    return { bgColor: state.bgColor };
}


function mapDispatchToProps(dispatch) {
    return {
        onChangeColor: () => dispatch(changeColorAction)
    };
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
