import React from 'react';

export default class PostItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.post.body}
                </div>
                
            </div>
        )
    }
};