import React from 'react';

function App() {
  console.clear();

  // People Dropping off a form (Action Creaters)
  const createPolicy = (name, amount) => {
    return { // Action (a form in our anology )
      type: 'CREATE_POLICY',
      payload: {
        name: name,
        amount: amount
      }
    };
  }

  // (Action Creator)
  const deletePolicy = (name, ) => {
    return {
      type: 'DELETE_POLICY',
      payload: {
        name: name
      }
    };
  }

  // Create Claim (Action Creator)
  const createClaim = (name, amountOfMoneyToCollect) => {
    return {
      type: 'CREATE_CLAIM',
      payload: {
        name: name,
        amountOfMoneyToCollection: amountOfMoneyToCollect
      }
    };
  }

  return <div>Redux</div>;
}

export default App;
