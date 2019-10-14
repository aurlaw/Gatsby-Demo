import React from "react"
import {Helmet} from "react-helmet";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Layout  from '../components/layout';
import {actionCreators} from '../store/counter';

const AboutPage = (props) => {
    return (
        <Layout headerText="About Gatsby">
            <Helmet title="About" />
            <article>
                <p>This is not home but About.</p>
    
                <h3>Counter</h3>
                    {props.counter}
                    <button onClick={(e) => {
                        e.preventDefault();
                        console.log(props);
                        props.incrementCounter();
                    }}>Increment</button>
            </article>
        </Layout>
      );
}
const mapStateToProps = state => ({
    counter: state.counterReducer.counter
  });
  
  
export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(AboutPage);
