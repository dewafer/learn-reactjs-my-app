import React from 'react';

export default function (props : { name: string }) {
    return (
        <h1>Hello! {props.name}</h1>
    );
}