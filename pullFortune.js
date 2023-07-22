function generateLuckyNumbers() {
	return new Array(6).fill(0).map(() => Math.floor(Math.random() * 100));
}

function pullFortune() {
	// filter fortunes to ones we haven't seen
	let seenFortunes = JSON.parse(localStorage.getItem('seen-fortunes')) || {};
	let seenFortuneIds = Object.values(seenFortunes).map((fortune) => fortune.id);
	let unseenFortunesIds = fortuneList.map((fortune, index) => index).filter((index) => !seenFortuneIds.includes(index));

	if (unseenFortunesIds.length === 0) {
		// dump all of the seen fortunes in a history
		// then reset seen-fortunes
		const hist = JSON.parse(localStorage.getItem('history-fortunes')) || {};
		Object.assign(hist, seenFortunes);
		localStorage.setItem('history-fortunes', JSON.stringify(hist));
		seenFortunes = {};
		seenFortuneIds = [];
		unseenFortunesIds = fortuneList.map((fortune, index) => index);
	}

	// pull a random fortune
	const randomIndex = Math.floor(Math.random() * unseenFortunesIds.length);
	const fortuneId = unseenFortunesIds[randomIndex];

	// set the text in the placeholder to the fortune
	const fortuneBox = document.querySelector('fortune-box');
	fortuneBox.setAttribute('fortune', fortuneList[fortuneId]);

	// get and set the lucky numbers
	const luckyNumbers = generateLuckyNumbers();
	fortuneBox.setAttribute('lucky-numbers', luckyNumbers.join(', '));

	// write the fortune to localstorage
	const timestamp = new Date(Date.now()).toLocaleString();
	seenFortunes[timestamp] = { id: fortuneId, numbers: luckyNumbers };
	localStorage.setItem('seen-fortunes', JSON.stringify(seenFortunes));

	loadFortuneHistory();
}
