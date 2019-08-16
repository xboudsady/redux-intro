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
        amountOfMoneyToCollect: amountOfMoneyToCollect
      }
    };
  }

  // Reducers (Department)

  const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
      // we care about this action (FORM!)
      return [...oldListOfClaims, action.payload];
    }

    // we don't care about the action (form!!!)
    return oldListOfClaims;
  }

  const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
      return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY') {
      return bagOfMoney + action.payload.amount;
    }

    return bagOfMoney;
  }

  return <div>Redux</div>;
}

export default App;
