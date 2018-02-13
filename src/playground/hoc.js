//Higher Order Component (HOC) - Component that renders another component
//HOC goals:
//reuse code, 
//render hijacking, 
//Prop manipulation, 
//absract state

import React from 'react';
import ReactDOM from 'react-dom';

//Info is any react fn
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

//Info2 is any react fn
const Info2 = (props) => (
    <div>
        <h1>Info2</h1>
        <p>The info2 is: {props.info}</p>
    </div>
);

//1. create Regular fn that called with component we wrap
const withAdminWarning = (WrappedComponent, WrappedComponent2) => { //WrappedComponents starts with UpperCase!!!
    return (props) => (
        <div>
            <p> It's recommend to either use && or the ternary operator since they're much more concise.</p>
            
            { 
                props.isAdmin ? 
                (<WrappedComponent {...props} />)
                : 
                (<p>Please log in </p>)
            }

        </div>
    )
};

//2. create Higher Order Function 
const AdminInfo = withAdminWarning(Info, Info2);

ReactDOM.render(<AdminInfo isAdmin={false} info = "there are the details" />, document.getElementById('app'));










// const Info = (props) => (
//     <div>
//         <h1>Info</h1>
//         <p>The info is: {props.info}</p>
//     </div>
// )

// //requireAuthentication
// const requireAuthentication = (WrappedAuthentication) => {
//     return (props) => (
//         <div>
//         {props.isAutenticated &&  <p>This is the info that you can not share!</p>}
//             <WrappedAuthentication {...props} />
//         </div>
//     )
// }

// const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(<AuthInfo isAutenticated={false} info="there are the details" />, document.getElementById('app'));