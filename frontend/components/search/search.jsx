import React from 'react';
import { Link } from 'react-router-dom';

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.props.search(e.currentTarget.value)
    }

    render() {

        return (
            <div >
              
                    <input type="text"
                    onChange={this.handleChange}
                    placeholder="Search"
                    className=""
                    />
                    <div>
                        
                    </div>
            </div>
        )
    }
}