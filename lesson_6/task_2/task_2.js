'use strict';

window.addEventListener('load', () => {
	let prodButton = document.querySelectorAll('.toBasket');

	prodButton.forEach((btn) => {
		btn.addEventListener('click', (event) => {
			let id = event.srcElement.dataset.productid;
			let price = event.srcElement.dataset.price;
			let name = event.srcElement.dataset.name;

			basket.addProduct({id: id, price: price, name: name});
		});
	});

	let basket = {
		products: {},

		addProduct(product) {
			this.addProductToObject(product);
			this.renderProductInBasket(product);
			this.renderTotalSum();
			this.addRemoveBtnsListeners();
		},

		addProductToObject(product) {
			if (this.products[product.id] == undefined) {
				this.products[product.id] = {
					name: product.name,
					price: product.price,
					count: 1
				}
			} else {
				this.products[product.id].count++;
			}
		},

		renderProductInBasket(product) {
			let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
			if (productExist) {
				productExist.textContent++;
				return;
			}
			let productRow = `
				<tr>
					<th>${product.id}</th>
					<td>${product.name}</td>
					<td>${product.price} <i class="fa fa-rub" aria-hidden="true"></td>
					<td class="productCount" data-id="${product.id}">1</td>
					<td><i class="fa fa-trash" aria-hidden="true" data-id="${product.id}"></i></td>
				</tr>
			`;
			let tbody = document.querySelector('tbody');
			tbody.insertAdjacentHTML("beforeend", productRow);
		},

		renderTotalSum() {
			document.querySelector('.total').textContent = this.getTotalSum();
		},

		getTotalSum() {
			let sum = 0;
			for (let i in this.products) {
				sum += this.products[i].price * this.products[i].count;
			}
			return sum;
		},

		addRemoveBtnsListeners() {
			let trashElements = document.querySelectorAll('.fa-trash');
			for (let i = 0; i < trashElements.length; i++) {
				trashElements[i].addEventListener('click', this.removeProductListener);
			}
		},

		removeProductListener(event) {
			basket.removeProduct(event);
			basket.renderTotalSum();
		},

		removeProduct(event) {
			basket.products[event.target.dataset.id].count = 0;
			event.target.parentNode.parentNode.remove();
		}
	};

const basketButton = document.querySelector('.basketButton');
const tbody = document.querySelector('tbody');

basketButton.addEventListener('click', (event) => {
	let total = document.querySelector('.total');
		if (!tbody.hasChildNodes()) {
			total.textContent = '0';
		}
		
		let basketInfo = document.querySelector('.basketInfo');
		if (basketInfo.classList.contains('show')) {
			basketInfo.classList.remove('show');
		} else {
			basketInfo.classList.add('show');
		}
	});
});