import React from 'react';

export class Square extends React.Component {

    clickHandler = () => {
        const { onChangeColor } = this.props;
        if (onChangeColor) {
            onChangeColor();
        }
    }

    render() {
        const bgcolor = this.props.bgcolor;
        return (
            <div>

                <div
                    title="Square"
                    onClick={this.clickHandler}
                    style={{ width: 100, height: 100, backgroundColor: bgcolor, border: "1px solid #FFF" }} />

            </div>

        );

    }

}

export default Square;