export default class RestoService {
	
	_apiBase = 'http://localhost:3001';
	
	async getResource(url) {
		
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error (`Could not ferch ${url}` + 
			`, received${res.status}`);
		}
		return  await res.json();
		
	}

	async getMenuItems () {
		return await this.getResource(`/menu/`)
	}
	
	async setOrder(order) {
        const number = await this.getOrderNumber();
        const newOrder = {
            id: number,
            order: order
        }
        const response = await fetch(`${this._apiBase}/orders`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newOrder)
        });
        if (!response.ok){
            throw new Error('json error'); 
        }
    }
	
	async getOrderNumber(){
        const res = await this.getResource('/orders/');
        const orderNumber = res.length+1;

        return orderNumber
    }
	/* getMenuPizza = async() => {
		const res = await this.getMenuItems();
		const resMap = res.map(this._transformMenu);
		console.log(resMap);
		const resPizza = resMap.filter((item) => {
			return item.category === 'pizza';

		
		})
		
		console.log(resPizza);
	}   */

/* 	isSet(data) {
        if (data) {
            return data
        } else {
            return 'Unknown'
        }
    } 

	_transformMenu = (menu) => {
		return {
			title: this.isSet(menu.title),
			price: this.isSet(menu.price),
			url: this.isSet(menu.url),
			category: this.isSet(menu.category),
			id: this.isSet(menu.id),
			
		}
	} */
	

	
	
	
	

	
	
	
	
}


