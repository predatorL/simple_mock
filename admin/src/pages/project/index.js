import React from 'react';
import CreatePro from './create';
import List from './list';

class View extends React.Component {

    render() {
        return (
            <div className="view-project">
                <CreatePro></CreatePro>
                <List></List>
            </div>
        );
    }
}

export default View;
