
class HandleStorage {
    constructor(items, nameStorage = 'items') {
        this.nameStorage = nameStorage;
        this.items = items;
    }

    getStorage() {
        return JSON.parse(localStorage.getItem(this.nameStorage));
    }

    updateStorage(items) {
        return localStorage.setItem(this.nameStorage, JSON.stringify(items));
    }
}


