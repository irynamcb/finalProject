import React from 'react';


export default class SingleComment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="single-comment">
                {/* we need to add an author name */}
                {this.props.body}
            </div>
        )
    }
};