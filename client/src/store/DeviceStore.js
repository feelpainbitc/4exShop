import {makeAutoObservable} from 'mobx'

export default class Devicetore{
    constructor(){
        this._types = [
            {id:1, name:'Holodos'},
            {id:2, name:'Holodos2'}
        ]
        this._brands=[
            {id:1, name:'Samsung'},
            {id:2, name:'Apple'}
        ]
        this._devices=[
            {id:1, name:'Samsung lite', price: 20000, rating: 5, img:'https://img.5element.by/import/images/ut/goods/good_1ed4a1a6-fdd3-11ec-bb95-0050560120e8/sm-a135fzwkskz-belyy-128gb-telefon-gsm-samsung-galaxy-a13-1_600.jpg'},
            {id:2, name:'Samsung pro', price: 20000, rating: 5, img:'https://img.5element.by/import/images/ut/goods/good_1ed4a1a6-fdd3-11ec-bb95-0050560120e8/sm-a135fzwkskz-belyy-128gb-telefon-gsm-samsung-galaxy-a13-1_600.jpg'},
            {id:1, name:'Samsung lite', price: 20000, rating: 5, img:'https://img.5element.by/import/images/ut/goods/good_1ed4a1a6-fdd3-11ec-bb95-0050560120e8/sm-a135fzwkskz-belyy-128gb-telefon-gsm-samsung-galaxy-a13-1_600.jpg'},
            {id:1, name:'Samsung lite', price: 20000, rating: 5, img:'https://img.5element.by/import/images/ut/goods/good_1ed4a1a6-fdd3-11ec-bb95-0050560120e8/sm-a135fzwkskz-belyy-128gb-telefon-gsm-samsung-galaxy-a13-1_600.jpg'}
        ]
        makeAutoObservable(this)
    }
    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands=brands
    }
    setDevices(devices){
        this._devices=devices
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
}