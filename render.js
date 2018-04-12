import React from 'react';
import ReactDOM from 'react-dom';
import './render.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: Array(9).fill(null),
            isXNext: true
        }
    }

    RenderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.isXNext ? 'X' : 'O';
        this.setState({squares: squares, isXNext: !this.state.isXNext});
    }

    render() {
        const status = `Next player: ${this.state.isXNext ? 'X' : 'O'}`;

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.RenderSquare(0)}
                    {this.RenderSquare(1)}
                    {this.RenderSquare(2)}
                </div>
                <div className="board-row">
                    {this.RenderSquare(3)}
                    {this.RenderSquare(4)}
                    {this.RenderSquare(5)}
                </div>
                <div className="board-row">
                    {this.RenderSquare(6)}
                    {this.RenderSquare(7)}
                    {this.RenderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
