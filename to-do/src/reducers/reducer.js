

export const initialState =[
    {
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        task: 'Learn about reducers part 2',
        completed: false,
        id: 3892987584
    },
    {
        task: 'Learn about reducers part 3?',
        completed: false,
        id: 3892987584
    }

]

export const reducer = (state,action) => {
    console.log("inside the reducer", action)
    switch(action.type) {
        case "ADD_TASK":
            return [
                ...state, {
                    task:action.payload,
                    completed: false,
                    id: Date.now()
                }
            ]
        case "TOGGLE_TASK":
            return state.map(item=>{
                return item.id === action.payload ? {...item, completed: !item.completed}:item});
        case "CLEAR_TASK":
           return state.filter(item=> 
            !item.completed
            )
        default: return state;    
    }
}
