import React from 'react'
import ActionButton from 'react-native-action-button';

class FloatButton extends React.Component {
    render() {
        return (
            <ActionButton buttonColor="rgba(68, 138, 255, 1)" onPress={this.props.onPress}/>
        )
    }
}
 
export default FloatButton;