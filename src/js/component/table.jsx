import React, { useState } from "react";

// siempre que empezamos unp preyecto tien que haber
//un div padre que englobe todo no tiene que se rcontainer fluid sólo un objeto o un envoltorio.
//<></> poniendo esto tambien vale para que no de error o no poner un divv con classs name etc.

// Declaración de una variable de estado que llamaremos "Table"   //
const Table = () => {
	const [imputText, setImputText] = useState(""); // en user state lo dejamos vacio para que entre contenido.
	const [table, setTable] = useState([]);

	const addText = (text) => {
		let newText = [...table, text]; // ... establece como infintio que puede variar a tamaño porque puede variar.

		setTable(newText);
	};
	const handleKey = (event) => {
		if (event.key === "Enter" && imputText !== " " && imputText !== "") {
			addText(imputText);
			setImputText("");
		}
	};

	// esta funcion sirve para borrar elementos
	const DeleteItems = (indexItem) => {
		setTable(
			(prevState) => prevState.filter((f, index) => index !== indexItem) // la puta i es no hace nada pero si la quitas no va y si cambias a otra letra lo hace igual
		);
	};

	return (
		<div className="container-fluid">
			<div className="imput">
				<input
					type="text"
					onKeyPressCapture={(e) => handleKey(e)}
					onChange={(event) => {
						setImputText(event.target.value);
						console.log(event.target.value);
					}}
					name=""
					id=""
				/>
			</div>

			<div>
				<table className="table">
					<thead>
						{table.map((t, index) => (
							<li key={index} className="list-group-item index">
								{t}
								<button
									className="btn DelItem"
									onClick={() => DeleteItems(index)}>
									<i className="fas fa-times" />
								</button>
							</li>
						))}

						<tr>
							<th scope="col">HOLA LECHON</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	);
};

export default Table;
