import {createAction} from 'redux-act';

const getUsers = createAction('GETUSERS');
const setUsers = createAction('SETUSERS');
const SET_CONNECTION = createAction('SET_CONNECTION');

export const addTodo = content => ({
  type: 'ADD_TODO',
  payload: {
    content,
  },
  meta: {
    offline: {
      effect: {
        url: 'https://rnapp-mock-developer-edition.ap24.force.com/assignment1visualforce/services/apexrest/apiservice',
        method: 'POST',
        body: `${content}`,
        headers: {'content-type': 'application/json'},
      },

      commit: {type: 'ADD_TODO_COMMIT', meta: {content}},
      rollback: {type: 'ADD_TODO_ROLLBACK', meta: {content}},
    },
  },
});

export {getUsers, setUsers, SET_CONNECTION};
