// ACTION TYPES
const ADD_SECTION = "ADD_SECTION";
const ADD_PROJECT = "ADD_PROJECT";

// SELECTORS
const MODULE_NAME = "projects";
export const getSections = (state) => state[MODULE_NAME].sections;

// REDUCER
const initialState = {
  sections: [],
};

export function projectsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_SECTION:
      return {
        ...state,
        sections: [
          ...state.sections,
          {
            id: `${Math.random()}${Date.now()}`,
            name: payload,
            projectsList: [],
          },
        ],
      };
    case ADD_PROJECT:
      const updatedState = { ...state };
      updatedState.sections = [...updatedState.sections];
      const indexOfSection = updatedState.sections.findIndex(
        (item) => item.id === payload.sectionId
      );
      updatedState.sections[indexOfSection] = {
        ...updatedState.sections[indexOfSection],
        projectsList: [
          ...updatedState.sections[indexOfSection].projectsList,
          {
            id: `${Math.random()}${Date.now()}`,
            name: payload.name,
            image: payload.image,
            todos: [],
          },
        ],
      };
      return updatedState;
    default:
      return state;
  }
}

// ACTION CREATORS

export const addSection = (payload) => ({
  type: ADD_SECTION,
  payload,
});
export const addProject = (payload) => ({
  type: ADD_PROJECT,
  payload,
});

// {
//   id: 1,
//   name: "Regular",
//   projectsList: [
//     {
//       id: "1",
//       image:
//         "https://images.unsplash.com/photo-1588653964846-3eaa2663dba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
//       name: "Test Title",
//       todos: [
//         { id: 1, text: "Hello World" },
//         { id: 2, text: "Hello World" },
//         { id: 3, text: "Hello World" },
//       ],
//     },
//     {
//       id: "2",
//       image:
//         "https://images.unsplash.com/photo-1587613842560-0816bd27a096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
//       name: "Test Title 2",
//       todos: [
//         { id: 1, text: "Hello World" },
//         { id: 2, text: "Hello World" },
//       ],
//     },
//   ],
// },
// {
//   id: 2,
//   name: "Important",
//   projectsList: [
//     {
//       id: "1",
//       image:
//         "https://images.unsplash.com/photo-1588646477621-10afb2d195a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
//       name: "Second Section Project",
//       todos: [
//         { id: 1, text: "Hello World" },
//         { id: 2, text: "Hello World" },
//         { id: 3, text: "Hello World" },
//       ],
//     },
//   ],
// },
