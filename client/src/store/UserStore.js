import {makeAutoObservable} from 'mobx'

export default class UserStore{
    constructor(){
        this._isAuth=false
        this._user={}
        makeAutoObservable(this)
    }

    setIsAuth(){
        this._isAuth=bool
    }
    setIsAuth(){
        this._isAuth=bool
    }
}