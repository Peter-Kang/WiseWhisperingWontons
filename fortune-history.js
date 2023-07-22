define`
<fortune-history>
	<h2> Past Fortunes</h2>
  <section history>
  </section>
	<script>
		loadFortuneHistory(this);
	</script>
</fortune-history>
`;

function loadFortuneHistory(fortuneHistory) {
	// get all the previous fortunes, and merge them into a single object
	const hist = JSON.parse(localStorage.getItem('history-fortunes')) || {};
	const seenFortunes = JSON.parse(localStorage.getItem('seen-fortunes')) || {};
	const allFortunesToDisplay = Object.assign({}, hist, seenFortunes);

	// populate the history section with all the fortunes
	const [historySection] = queryAllDOM('section[history]', fortuneHistory);
	historySection.innerHTML = '';
	Object.entries(allFortunesToDisplay)
		.reverse()
		.forEach(([timestamp, fortune]) =>
			historySection.appendChild(html`
				<fortune-box
					fortune="${fortuneList[fortune.id]}"
					lucky-numbers="${fortune.numbers.join(', ')}"
					timestamp="${timestamp}"
				>
				</fortune-box>
			`)
		);
}
