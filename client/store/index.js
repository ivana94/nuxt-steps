// state is a function that returns an object
export const state = () => ({
    yearlyStepData: 0,
});

// mutations are objects
export const mutations = {
    updateYearlyStepData(state, value) {
        state.yearlyStepData = value;
    },
};
