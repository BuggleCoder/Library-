export class elModifier {
    constructor(selector) {
        if (typeof selector === 'string') {
            this.elements = Array.from(document.querySelectorAll(selector));
        } else if (selector instanceof NodeList || Array.isArray(selector)) {
            this.elements = Array.from(selector);
        } else if (selector) {
            this.elements = [selector];
        } else {
            this.elements = [];
        }
    }
    
    html(content) {
        if (content === undefined) {
            return this.elements[0]?.innerHTML || '';
        }
        this.elements.forEach(el => el.innerHTML = content);
        return this;
    }

    text(content) {
        if (content === undefined) {
            return this.elements[0]?.textContent || '';
        }
        this.elements.forEach(el => el.textContent = content);
        return this;
    }
    
    append(htmlString) {
        this.elements.forEach(el => el.insertAdjacentHTML('beforeend', htmlString));
        return this;
    }
    
    remove() {
        this.elements.forEach(el => el.remove());
        return this;
    }
    
    addClass(className) {
        this.elements.forEach(el => el.classList.add(className));
        return this;
    }
    
    removeClass(className) {
        this.elements.forEach(el => el.classList.remove(className));
        return this;
    }

    toggleClass(className) {
        this.elements.forEach(el => el.classList.toggle(className));
        return this;
    }
    
    on(event, callback) {
        this.elements.forEach(el => el.addEventListener(event, callback));
        return this;
    }

    css(property, value) {
        if (value === undefined) {
            return this.elements[0] ? getComputedStyle(this.elements[0])[property] : '';
        }
        this.elements.forEach(el => el.style[property] = value);
        return this;
    }

    attr(name, value) {
        if (value === undefined) {
            return this.elements[0]?.getAttribute(name) || null;
        }
        this.elements.forEach(el => el.setAttribute(name, value));
        return this;
    }

    getIDs() {
        return this.elements.map(el => el.id).filter(Boolean);
    }

    getClasses() {
        return this.elements.map(el => Array.from(el.classList));
    }
}

const $ = (selector) => new elModifier(selector);
