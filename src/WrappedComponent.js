import React from 'react';

function WrappedComponent (Component){
return function Loading({ isLoading, ...props}){
if (!isLoading) return (<Component {...props}/> );
return (<div id="loading"> </div>);

}

}


export default WrappedComponent;