import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { size } from 'lodash';

import { startTest } from '../../actions/testActions';

const TestInstructions = ({ test, startTest }) => (
  <Fragment>
    <div className="panel panel-default">
      <div className="panel-heading text-center">INSTRUCTIONS</div>
      <div className="panel-body">
        <ol start="1" type="1">
          <li>Total duration of this test is&nbsp;
            <b>{test.testDuration} minutes</b>.
          </li>
          <li>There will be&nbsp;
            <b>{test.totalNumberOfQuestions}&nbsp;
              MCQ questions.
            </b>
          </li>
          <li>
            There are&nbsp;
            <b>{test.subjects.length} sections&nbsp;</b>
            in the question paper consisting of&nbsp;
            <For each='subject' of={test.subjects}>
              <span key={subject}>{subject},&nbsp;</span>
            </For>
            having&nbsp;
            <b>
            <For each="subject" of={test.subjects}>
              {size(test.questions[index])} ({subject.charAt(0).toUpperCase() + subject.substr(1)})
              <If condition={index !== test.subjects.length-1}>,</If>&nbsp;
            </For>questions </b>respectively.
          </li>
          <li>Each question is allotted some marks for correct response.
          </li>
          <li>Candidates will be awarded marks as stated above in instruction for correct response of each question.&nbsp;
            <b>some marks will be deducted</b>&nbsp;
            for indicating incorrect response for each question.
          </li>
          <li>
            <b>No deduction</b>&nbsp;
            from the total score will be made if no response is indicated.
          </li>
        </ol>
      </div>
      <div onclick={() => startTest()} className="btn btn-success" style={{width: '100%'}}>start test</div>
    </div>
  </Fragment>
);

TestInstructions.propTypes = {
  test: PropTypes.object.isRequired,
  startTest: PropTypes.func.isRequired
};

export default connect(
  state => ({
    test: state.test
  }), dispatch => ({
    startTest: dispatch(startTest())
  })
)(TestInstructions);

