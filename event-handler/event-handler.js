class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick = () => {
        this.setState((state) => ({
            count: state.count + 1,
        }));
    };

    render() {
        return (
            <div>
                <h1>Event Handler</h1>
                <p>You have clicked {this.state.count} times.</p>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
