onst initialWagonState = {
  supplies : 100,
  distance : 0, 
  days : 0
};

const reducer = (state=initialWagonState, action) => {
  switch (action.type) {
    default : {
      return state;
    }
    case 'gather' : {
      return [...state, {
        supplies : state.supplies + 15,
        days : state.days +1,

      }]
    }
    case 'travel' :{
      return [...state, {
        supplies : state.supplies - 20 * action.payload,
        distance : state.distance + 10 * action.payload,
        days : state.days + action.payload
      }]
    }
  }
};

let action = {
  type:'travel',
  payload:1
};
let wagon = reducer(wagon,action)
console.log(wagon)
