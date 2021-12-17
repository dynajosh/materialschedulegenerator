import store from "../store"

const valueCHangeHandlerAction = {
    type: 'CHANGE_VALUE',
    value: 'new value'
}

store.dispatch(valueCHangeHandlerAction)