import React from 'react';
//import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 1000
}

const modal = (props) => {
    //const cssClasses = ['Modal', props.show ? 'ModalOpen' : 'ModalClosed'];
    /*const cssClasses = ['Modal',
        props.show === 'Entering' ? 'ModalOpen' :
            props.show === 'Exiting' ? 'ModalClosed' : null];*/
    return (
        /*<Transition mountOnEnter unmountOnExit in={props.show} timeout={animationTiming}>
            {state => {
                const cssClasses = ['Modal',
                    state === 'entering' ? 'ModalOpen' :
                        state === 'exiting' ? 'ModalClosed' : null];
                        console.log(state);
                return (
                    <div className={cssClasses.join(' ')}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>Dismiss</button>
                    </div>
                );
            }}
        </Transition>*/

        <CSSTransition  mountOnEnter 
                        unmountOnExit 
                        in={props.show} 
                        timeout={animationTiming}
                        classNames="fade-slide">
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>
    );
};

export default modal;