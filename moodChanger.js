const happyBtn = document.querySelector("#happy");
const angryBtn = document.querySelector("#angry");
const sadBtn = document.querySelector("#sad");
const confusedBtn = document.querySelector("#confused");

const div = document.querySelector("#mood");

happyBtn.addEventListener("click", () => {
  store.dispatch({ type: "MAKE_HAPPY" });
  const state = store.getState();
  div.innerText = state.mood;
  div.style.backgroundColor = state.backgroundColor;
});

angryBtn.addEventListener("click", () => {
  store.dispatch({ type: "MAKE_ANGRY" });
  const state = store.getState();
  div.innerText = state.mood;
  div.style.backgroundColor = state.backgroundColor;
});

confusedBtn.addEventListener("click", () => {
  store.dispatch({ type: "MAKE_CONFUSED" });
  const state = store.getState();
  div.innerText = state.mood;
  div.style.backgroundColor = state.backgroundColor;
});

sadBtn.addEventListener("click", () => {
  store.dispatch({ type: "MAKE_SAD" });
  const state = store.getState();
  div.innerText = state.mood;
  div.style.backgroundColor = state.backgroundColor;
});
