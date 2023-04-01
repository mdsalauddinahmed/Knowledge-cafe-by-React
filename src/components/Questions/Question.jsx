import React from "react";
import "./Questions.css";
const Question = () => {
  return (
    <div className="container pb-6">
      <h1 className="text-center border-bottom">Important Four Questions</h1>
      <h3>1.Props vs state?</h3>
      <p>
        In the context of React, props and state are both used to manage data
        and communication between components, but they serve slightly different
        purposes. <br />
        <span>Props</span>, short for properties, are used to pass data from a
        parent component to a child component. They are read-only, meaning that
        the child component cannot modify the props that it receives. Props are
        useful for customizing the behavior or appearance of a component based
        on its parent's needs.
        <br /> <span>State</span>, on the other hand, is used to manage data
        that is internal to a component and can change over time. Unlike props,
        state can be modified by the component itself using the setState()
        method. State is useful for keeping track of user input, changes in the
        component's own data, or triggering re-renders when something important
        changes.
      </p>
      <h3>2.How does useState work?</h3>
      <p>
        <span> The useState()</span> is a Hook that allows you to have state
        variables in functional components . so basically useState is the
        ability to encapsulate local state in a functional component. React has
        two types of components, one is class components which are ES6 classes
        that extend from React and the other is functional components. Class
        components a Component and can have state and lifecycle methods: class
        Message extends React. The useState hook is a special function that
        takes the initial state as an argument and returns an array of two
        entries. UseState encapsulate only singular value from the state, for
        multiple state need to have useState calls.
      </p>
      <h3>3.Purpose of useEffect other than fetching data.</h3>
      While fetching data from an API is a common use case for <span>useEffect</span>, it has
      several other purposes beyond that: <br />
     <span> Managing component side effects:</span>
      useEffect can be used to manage side effects in a component, such as
      updating the document title or subscribing to a WebSocket connection. It
      allows you to run side effects after rendering, which is useful for
      interacting with external resources that are not part of the React
      component tree. <br />
      <span>Cleaning up after a component: </span> useEffect can return a
      cleanup function that is called when the component is unmounted or when
      the dependencies of the effect change. This is useful for cleaning up any
      resources that were allocated by the effect, such as closing a database
      connection or unsubscribing from an event. <br />
     <span> Synchronizing with external data sources:</span> useEffect can be used to synchronize
       the component with
      external data sources, such as a server or a database. This can involve
      fetching data from an API, but it can also involve updating the component
      when the external data changes. <br />
     <span>Managing animations:</span> useEffect can be used
      to manage animations in a component, such as starting or stopping an
      animation when a certain condition is met.
      <h3>4.How Does React work?</h3>
      <p>
     <span> React</span> uses <span>components, a virtual DOM, reconciliation, one-way data flow, and hooks</span> to efficiently manage updates to the UI and build declarative, reusable user interfaces.it is a declarative, component-based JavaScript library for building user interfaces.
      </p>
    </div>
  );
};

export default Question;
