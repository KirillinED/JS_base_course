'use strict';

const mover = {
	/**
	* Получает и отдает направление от пользователя.
	* @returns {int} Возвращаем направление, введеное пользователем.
	*/
	getDirection() {
		const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
		while (true) {
			let direction = +prompt('Введите число на нумпаде в соответствии с желаемым перемещением (1, 2, 3, 4, 6, 7, 8, 9).\n"Отмена" для выхода.');
			if (isNaN(direction)) {
				return null;
			} else if (!availableDirections.includes(direction)) {
				alert('Для перемещения, необходимо ввести одно из чисел (1, 2, 3, 4, 6, 7, 8, 9).');
				continue;
			}
			return direction;
		}
	},

	// Получаем новые координаты по введенному числу.
	getNextPoint(num) {
		const newPoint = {
			x: player.x,
			y: player.y
		};
		switch (num) {
			case 1:
				newPoint.x--;   
				newPoint.y++;
				break;
			case 2:
				newPoint.y++;
				break;
			case 3:
				newPoint.x++;
				newPoint.y++;
				break;
			case 4:
				newPoint.x--;
				break;
			case 6:
				newPoint.x++;
				break;
			case 7:
				newPoint.x--;
				newPoint.y--;
				break;
			case 8:
				newPoint.y--;
				break;
			case 9:
				newPoint.x++;
				newPoint.y--;
				break;
		}
		return newPoint;
	}
};