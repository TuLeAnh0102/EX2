import ADD_PROFILE from '../Constant/Constants1';
import store from '../Stores/Store'


export default function Action(payload){
    const Listprofile = store.getState();
    console.log(Listprofile)
    return {type: ADD_PROFILE, payload}
}