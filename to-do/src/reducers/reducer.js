

export const initialState =[
    {
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }

]

export const reducer = (state,action) => {
    console.log("inside the reducer", action)
    switch(action.type) {
        case "ADD_TASK":
            const newTask={...action.payload, id: Date.now(), completed:false}
            return [...state, newTask]
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
