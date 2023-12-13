import * as React from "react";

const [value, setValue] = React.useState("");
const updateValue = (event: Event) => {
	setValue(event.target.value);
};

export const App = () => (
	<form>
		<div>
			<label htmlFor="uurtarief">Uurtarief</label>
			<input type="number" id="uurtarief" onChange={() => updateValue}></input>
		</div>
		<div>
			<label htmlFor="belastingSchaal2">
				Geschat jaarinkomen {">"} €69.399
			</label>
			<input
				type="checkbox"
				id="belastingSchaal2"
				onChange={() => updateValue}
			></input>
		</div>
		<div>
			<label htmlFor="gewerkteUren">Gewerkte uren deze maand</label>
			<input type="number" id="gewerkteUren"></input>
		</div>
		<button>Bereken</button>
	</form>
);
