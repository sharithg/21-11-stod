import {
    LOAD_POSTS,
    LOAD_POST_ERROR,
    PostState,
    IPost,
    DOMAIN,
    PostAction,
} from "../actions/types";


const initialState: PostState = {
    posts: [],
    isError: false,
    isLoading: true
}

function postReducer(state = initialState, action: PostAction): PostState {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                posts: action.payload,
                isLoading: false
            }
        // simple case for now to see if error was being produced
        case LOAD_POST_ERROR:
        return {
            ...state,
            isError: true
        }
        default:
            return state;
    }
}

export default postReducer;