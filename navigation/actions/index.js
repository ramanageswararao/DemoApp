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

// export const statusChanged= content => ({

//     type: "STATUS_CHANGED",
//     payload: {

//       content
//     },
//     meta: {
//       offline: {
//         effect: {
//           url: "https://rnapp-mock-developer-edition.ap24.force.com/assignment1visualforce/services/apexrest/apiservice",
//           method: "POST",
//           body: `${content}`,
//           headers: { "content-type": "application/json" }
//         },

//         commit: { type: "ADD_TODO", meta: { content } },
//         rollback: { type: "ADD_TODO_ROLLBACK", meta: { content } }
//       }
//     }
//   });
// const setUsers = users => ({
//     type: 'SETUSERS',
//     payload: users,
//     meta: {
//       offline: {
//         // the network action to save the changes
//         effect: { url: 'https://rnapp-mock-developer-edition.ap24.force.com/assignment1visualforce/services/apexrest/apiservice', method: 'POST', json: { users } },
//         // action to dispatch when effect succeeds:
//         commit: { type: 'SAVE_USERS_COMMIT', meta: { users } },
//         // action to dispatch if network action fails permanently:
//         rollback: { type: 'SAVE_USERS_ROLLBACK', meta: { users } }
//       }
//     }
//   });

export {getUsers, setUsers, SET_CONNECTION};
