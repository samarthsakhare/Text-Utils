import React from 'react'

export default function Alert(props) {

    const capitalize = (word)=>{
        let w = word.toLowerCase();
        return w.charAt(0).toUpperCase() + w.slice(1);
    }

    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}
            </div>
        </div>
    )
}
