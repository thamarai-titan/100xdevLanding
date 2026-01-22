class CustomButton extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:
            'open'
        })
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const text = this.getAttribute('text');
        const variant = this.getAttribute('variant') || 'blue';

        const variantStyle = {
            empty: 'padding: 12px 25px;border: 1px solid #A1ABC2;border-radius: 10px;background-color: white;color: #001958;',
            blue: 'padding: 12px 25px;border: 1px solid;border-radius: 10px;background-color: #001958;color: white;',
        }

        this.shadowRoot.innerHTML = `
        
        <button style="${variantStyle[variant]}">${text}</button>
        
        `
    }

}

customElements.define('custom-button',CustomButton)


class CustomCard extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const imagePath = this.getAttribute('imagePath')
        const title = this.getAttribute('title')
        const description = this.getAttribute('description')
        const oldRate = this.getAttribute('oldRate')
        const newRate = this.getAttribute('newRate')

        this.shadowRoot.innerHTML = `
        
        

        `
    }
}