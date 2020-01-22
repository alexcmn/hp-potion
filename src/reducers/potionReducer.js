const potionReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_POTION':
            return state.concat([action.data])
        break;
        case 'DELETE_POTION':
            return state.filter((potion) => potion.id !== action.id)
        break;
        case 'EDIT_POTION':
            return state.map((potion) => potion.id === action.id ? {...potion, editing: !potion.editing}:potion)
        break;
        case 'UPDATE':
            return state.map((potion) => {
                if(potion.id === action.id){
                    return{
                        ...potion,
                        title: action.data.newTitle,
                        description: action.data.newDescription,
                        editing: !potion.editing
                    }
                }else return potion;
            })
        break;
        default:
            return state;
    }
}

export default potionReducer;