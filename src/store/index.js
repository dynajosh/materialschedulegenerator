import {createStore} from 'redux';
import valueChangeHandler from '../reducers/index'
import rootReducer from '../reducers/rootReducer'



const initState = {
    renderingCement: 0,
    blockworkCement: 0,
    blockworkSand: 0,
    numberOfBlocks: 0,
    blockworkArea: 0,
    mortarQty: 0,
    renderingArea: 0,
    renderingCement: 0,
    renderingSand: 0,
    renderingMortarVolume: 0,
    renderingThickess: 0,
    concreteVolume: 0,
    concreteCement: 0,
    concreteSand: 0,
    concreteMixRatio: 0,
    concreteGranite: 0,

}

const store = createStore(rootReducer)

export default store;