'use strict';

let renderer = {
	// Сюда запишем все, что надо отобразить.
	map : "",

	/**
	* Отображает игровое поле в консоли.
	*/
	render() {
		for (let row = 0; row < config.rowsCount; row++) {
			for (let col = 0; col < config.colsCount; col++) {
				if (player.x === col && player.y === row) {
					this.map += 'o ';
					continue;	
				}
				this.map += 'x ';
			}
			this.map += '\n';
		}
		console.log(this.map);
	},

	clear() {
		// Чистим консоль.
		console.clear();
		// Чистим карту.
		this.map = "";
	}
}