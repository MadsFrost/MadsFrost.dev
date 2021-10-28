import React from 'react'
import { Transition } from 'react-transition-group';

export const Animate = (props) => {

    {/* 
        @param: duration
        Set the default animation duration
    */}

    const duration = props.duration ? props.duration : 1000;

    {/* 
        @param: type
        Set the default animation type

        The type prop is of type transition css animation:
          {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0,
          } 
    */}

    const type = props.type ? props.style : {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    } 

    {/* 
        @param: transition
        Set the default animation transition

        The transition prop is of type transition object:
          {
            entering: { opacity: 1 },
            entered:  { opacity: 1 },
            exiting:  { opacity: 0 },
            exited:  { opacity: 0 },
          };
    */}

      const transition = props.transition ? props.transition : {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
      }

    return (
      <Transition in={props.in} timeout={duration}>
      {state => (
        <div style={{
          ...type,
          ...transition[state]
        }}>
          {props.children}
        </div>
      )}
    </Transition>
    )
};