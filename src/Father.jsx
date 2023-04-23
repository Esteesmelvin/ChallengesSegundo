export class Father extends React.Component {
    state = { valor: 0 };

    increment = (num) => {
        this.setState((prevState) => ({ valor: prevState.valor + num }));
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.valor !== nextState.valor) {
            return true;
        }
        return false;
    }

    render() {
        const list = [2, 4, 6, 8, 10];

        return (
            <div>
                <h1>Father</h1>
                <p> Total: {this.state.valor}</p>
                <hr />
                {list.map((n, idx) => (
                    <Son key={idx} numero={n} increment={this.increment} />
                ))}
            </div>
        );
    }
}