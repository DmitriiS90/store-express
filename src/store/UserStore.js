import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this) // теперь mobx будет следить за изменениями этих переменных и перерисовывать их
    }
    //actions
    setIsAuth(bool){
        this._isAuth = bool
    }
    setIsUser(user){
        this._user = user
    }
    //getters
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}