import {createStore} from 'redux'
//import Reducer from '../Reducers/Reducer1'
import Reducer from '../Reducers/Reducer1'
//import addArticle from '../Actions/Action1'

const store = createStore(Reducer)
// const Store = () => {
//     store.subscribe(() => console.log('Look ma, Redux!!'));
//     store.dispatch(addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );
//     return store;
// }

export default store;