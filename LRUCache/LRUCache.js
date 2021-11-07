class LRUCache {
    constructor(size){
        this.size = size
        this.cache = new Map()
    }
    put(key, value) {
        if(this.cache.size === this.size) {
            const lastKey = this.cache.keys().next()
            this.cache.delete(lastKey.value)
        }
        this.cache.set(key, value)
        return true
    }
    get(key) {
        const value = this.cache.get(key)
        if (!value && value !== 0) {
            return false
        }
        this.cache.delete(key)
        this.cache.set(key, value)
        return value
    }
    items() {
       return Array.from(this.cache)
    }
}
module.exports = (size = 3) => {
    const cache = new LRUCache(size)
    return (req, res, next) => {
        req.memo = cache;
        next()
    }
}