import ADD_PROFILE from '../Constant/Constants1'
//import action1 from '../Actions/Action1'

const profileList = [
    {id: 1, title: ''},
    {id: 2, title: 'Game'},
    {id: 3, title: 'Movie'},
    {id: 4, title: 'Music'},
    {id: 5, title: 'Custome 1'},
    {id: 6, title: 'demo long text demo long text demo'}
]
const initialState = {
    profileList: profileList
  };
export default function Reducer(state = initialState, Action1) {
    if(ADD_PROFILE === Action1.type){
        return Object.assign({}, state, {profileList: state.profileList.concat(Action1.payload)})
    }
    return state
}
// export default state  => {
//   return state	
// }


  
