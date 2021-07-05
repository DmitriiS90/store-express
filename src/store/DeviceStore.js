import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            // {id:1, name: 'Телевизоры'},
            // {id:2, name: 'Ноутбуки'},
            // {id:3, name: 'Смартфоны'},
            // {id:4, name: 'Холодильники'},
        ]
        this._brands = [
            // {id:1, name: 'Samsung'},
            // {id:2, name: 'Xiomi'},
            // {id:3, name: 'Huawei'},
            // {id:4, name: 'Apple'},
        ]
        this._devices = [
            // {id:1, name: 'Redmi', price: 1200, rating: 4, img: 'https://static.pleer.ru/i/p/793127/793127m.jpg'},
            // {id:2, name: 'iPhone', price: 12000, rating: 4, img: 'https://static.pleer.ru/i/p/793127/793127m.jpg'},
            // {id:3, name: 'Gelaxy', price: 1200, rating: 4, img: 'https://static.pleer.ru/i/p/793127/793127m.jpg'},
            // {id:4, name: 'Huawei', price: 1200, rating: 4, img: 'https://static.pleer.ru/i/p/793127/793127m.jpg'},
            // {id:5, name: 'Huawei', price: 1200, rating: 4, img: 'https://static.pleer.ru/i/p/793127/793127m.jpg'},
        ]
        this._selectedType ={}
        this._selectedBrand ={}
        this._page = 1
        this._totalCount = 0
        this._limit = 0
        makeAutoObservable(this) // теперь mobx будет следить за изменениями этих переменных и перерисовывать их
    }
    //actions
    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevice(devices){
        this._devices = devices
    }
    setSelectedType(type){
        this.setPage(1) // страница в paginator = 1
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this.setPage(1) // страница в paginator = 1
        this._selectedBrand = brand
    }
    setPage(page){
        this._page = page
    }
    setTotalCount(count){
        this._totalCount = count
    }

    //getters
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }


    get page() {
        return this._page
    }
    get totalCount() {
        return this._totalCount
    }
    get limit() {
        return this._limit
    }
}