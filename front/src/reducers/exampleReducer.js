const initialState = {
    // ... définissez votre état initial
};

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        // ... définissez vos cas de réduction ici
        default:
            return state;
    }
};

export default exampleReducer;