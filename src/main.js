export class lionObj {
    constructor(selector) {
        this.elements = typeof selector === 'string' 
        ? Array.from(document.querySelectorAll(selector)) 
        : [selector];
    }
    
    html(content) {
        if (content == undefined) {
            return this.elements[0]?.innerHTML || '';
        }
        this.elements.forEach(el => el.innerHTML = content);
        return this;
    }
    
    append(htmlString) {
        this.elements.forEach(el => {
            el.insertAdjacentHTML('beforeend', htmlString);
        });
        return this;
    }
    
    remove() {
        this.elements.forEach(el => el.remove());
        return this;
    }
    
    text(text) {
        this.elements.forEach(el => {
            el.textContent = text;
        });
        return this;
    }
    
    addClass(className) {
        this.elements.forEach(el => {
            el.classList.add(className);
        })
        return this;
    }
    
    removeClass(className) {
        this.elements.forEach(el => {
            el.classList.remove(className);
        })
        return this;
    }
    
    on(event, callback) {
        this.elements.forEach(el => el.addEventListener(event, callback));
        return this;
    }
}