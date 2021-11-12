const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case "NEXT_COLOR":
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      }
    case "PREVIOUS_COLOR":
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index -1,
      };
    case "RANDOM_COLOR":
      return {
        ...state,
        index: state.index = Math.floor(Math.random() * 6),
        }
      default:
        return state;
      };
    }

const store = Redux.createStore(
  reducer, 
  __REDUX_DEVTOOLS_EXTENSION__()
);

document.getElementById('next').addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});

document.getElementById('previous').addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});

document.getElementById('random').addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM_COLOR' });
})

store.subscribe(() => {
  const { colors, index } = store.getState();
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
})