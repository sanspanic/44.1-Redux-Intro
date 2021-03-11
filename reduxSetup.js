const initialState = { mood: "😐", backgroundColor: "white" };
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MAKE_HAPPY":
      return { ...state, mood: "🙂", backgroundColor: "pink" };
    case "MAKE_SAD":
      return { ...state, mood: "😞", backgroundColor: "blue" };
    case "MAKE_ANGRY":
      return { ...state, mood: "😠", backgroundColor: "red" };
    case "MAKE_CONFUSED":
      return { ...state, mood: "🧐", backgroundColor: "gray" };
    default:
      return state;
  }
  //if action not matched
  return state;
};

const store = Redux.createStore(countReducer);
