'use strict';

let game = {
	/**
	* Запускает игру.
	*/
	run(){
		while (true) {
			// Получаем направление от игрока.
			const direction = mover.getDirection();
			
			if (direction === null) {
				console.log('Спасибо за игру! До свидания!');
				break;
			}
			
			// Получаем координаты исходя из направления.
			const nextPoint = mover.getNextPoint(direction);
			
			if (nextPoint.x < 0 || nextPoint.x > 9 || nextPoint.y < 0 || nextPoint.y > 9) {
				console.log('Вы ударились о стену!');
				continue;
			}

			renderer.clear();
			player.move(nextPoint);
			renderer.render();
		}
	},

	// Метод выполняется при открытии страницы.
	init() {
		console.log('Ваше положение на поле в виде - о.');
		renderer.render();
		console.log('Чтобы начать игру наберите game.run() и нажмите Enter.')
	}
};

game.init();