class Machine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hostname: 'asd',
            connectedUsers: [ "asdasd", "dsadasd", "Dsadasd" ],
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.hostname}</h1>
                {this.state.connectedUsers.map(x =>
                    <span key={x}>{x}</span>
                )}
            </div>
        );
    }
}