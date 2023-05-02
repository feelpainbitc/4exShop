import {makeAutoObservable} from 'mobx'

export default class DeviceStore{
    constructor(){
        this._types=[
            {id:1,name:'Смартфоны'},
            {id:2,name:'Планшеты'},
            {id:1,name:'Смарт-часы'},
            {id:1,name:'Ноутбуки'},
        ]
        this._brands=[
            {id:1,name:'Samsung'},
            {id:1,name:'Apple'},
            {id:1,name:'Lenovo'},
            {id:1,name:'Asus'},
        ]
        this._devices=[
       
            {id:1,name:'Iphone 14pro', price: 1500, rating:4, img:'https://shop.mts.by/upload/resize_cache/webp/iblock/5f4/gle139l2dqor8x58hpwiodaong3nua0q/270_500_1/iPhone_14_Pro_Max_Purple_1.webp'},
            {id:2,name:'Iphone 14pro2', price: 1500, rating:4, img:'https://shop.mts.by/upload/resize_cache/webp/iblock/5f4/gle139l2dqor8x58hpwiodaong3nua0q/270_500_1/iPhone_14_Pro_Max_Purple_1.webp'},
            {id:3,name:'Iphone 14pro3', price: 1500, rating:4, img:'https://shop.mts.by/upload/resize_cache/webp/iblock/5f4/gle139l2dqor8x58hpwiodaong3nua0q/270_500_1/iPhone_14_Pro_Max_Purple_1.webp'},
            {id:4,name:'Iphone 14pro4', price: 1500, rating:4, img:'https://shop.mts.by/upload/resize_cache/webp/iblock/5f4/gle139l2dqor8x58hpwiodaong3nua0q/270_500_1/iPhone_14_Pro_Max_Purple_1.webp'},
            {id:5,name:'Iphone 14pro5', price: 1500, rating:4, img:'https://shop.mts.by/upload/resize_cache/webp/iblock/5f4/gle139l2dqor8x58hpwiodaong3nua0q/270_500_1/iPhone_14_Pro_Max_Purple_1.webp'},
            {id:6,name:'Iphone 14pro6', price: 1500, rating:4, img:'https://shop.mts.by/upload/resize_cache/webp/iblock/5f4/gle139l2dqor8x58hpwiodaong3nua0q/270_500_1/iPhone_14_Pro_Max_Purple_1.webp'},
            {id:7,name:'Iphone 14pro7', price: 1500, rating:4, img:'https://shop.mts.by/upload/resize_cache/webp/iblock/5f4/gle139l2dqor8x58hpwiodaong3nua0q/270_500_1/iPhone_14_Pro_Max_Purple_1.webp'},

        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types=types
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