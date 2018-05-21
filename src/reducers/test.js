import { size } from 'lodash';

const calculateTotalNumberOfQuestions = questions => {
  let totalQuestions = 0;
  questions.map(question => {
    totalQuestions += size(question);
  });
  return totalQuestions;
};

const questions = [{1:{}},{1:{},2:{},3:{}},{1:{},2:{},3:{}}];

const initialState = {
  questions,
  testDuration: 180,
  totalNumberOfQuestions: calculateTotalNumberOfQuestions(questions),
  subjects: ['mathematics', 'physics', 'Chemistry']
};

export default (state=initialState, action) => {
  switch(action.type) {
    default: return state;
  }
};
