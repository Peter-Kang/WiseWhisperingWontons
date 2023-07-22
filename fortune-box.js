define`
	<fortune-box fortune="..." lucky-numbers="" >
	<style>
		/* card styling */
		section[fortune] {
			background-color: var(--gray-8);
			border-radius: var(--radius-2);
			padding: var(--size-fluid-3);
			box-shadow: var(--shadow-2);
		}
		section[fortune]:hover {
			box-shadow: var(--shadow-3);
			background-color: var(--gray-7);
		}

		@media (--motionOK) {
			section[fortune] {
				animation: var(--animation-fade-in);
			}
		}
		section[fortune]{
				margin: 15px;
		}
		p#timestamp {
			display: none;
		}
		:host(:not([timestamp=""])) p#timestamp {
			display: inherit;
		}
	</style>
		<section fortune>
			<p id="timestamp">${'timestamp'}</p>
			<p id="fortune-result">${'fortune'}</p>
			<p id="lucky-numbers">${'lucky-numbers'}</p>
		</section>
	</fortune-box>
`;
