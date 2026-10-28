import createExercise from "./lib/createExercise";
import createExerciseType from "./lib/createExerciseType";
import getExerciseTypes from "./lib/getExerciseTypes";
import getUserData from "./lib/getUserData";
import loginUser from "./lib/loginUser";
import logoutUser from "./lib/logoutUser";
import registerUser from "./lib/registerUser";

export const api = {
    user: {
        getCurrent: getUserData,
        register: registerUser,
        login: loginUser,
        logout: logoutUser,
    },
    exercise: {
        getMany: () => {},
        create: createExercise,
        type: {
            getMany: getExerciseTypes,
            create: createExerciseType,
        },
    },
};
