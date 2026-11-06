import getUserData from "./lib/getUserData";
import loginUser from "./lib/loginUser";
import logoutUser from "./lib/logoutUser";
import registerUser from "./lib/registerUser";
import { isExerciseType } from "./types/ExerciseType";
import { isExercise } from "./types/Exercise";
import getResource from "./lib/fetchLib/getResource";
import postResource from "./lib/fetchLib/postResource";

// todo : add callbacks to fetchlib functions to customise how we handle the response
// (could remove repeated code from user functions and future additions)
export const api = {
    user: {
        getCurrent: getUserData,
        register: registerUser,
        login: loginUser,
        logout: logoutUser,
    },
    exercise: {
        ...createBasicResource("exercises", isExercise),
        type: createBasicResource("exercise-types", isExerciseType),
    },
};

function createBasicResource<Type>(
    resourcePath: string,
    isResource: (obj: any) => obj is Type,
) {
    return {
        getMany: () => getResource(resourcePath, isResource),
        create: (resource: Type) => postResource(resourcePath, resource),
    };
}
