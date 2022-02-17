import React, { useState } from 'react';


// siempre que empezamos unp preyecto tien que haber
	//un div padre que englobe todo no tiene que se rcontainer fluid sólo un objeto o un envoltorio.
	//<></> poniendo esto tambien vale para que no de error o no poner un divv con classs name etc.
    
// Declaración de una variable de estado que llamaremos "Table"   //
const Table = () => {
	
    const [imputText, setImputText] = useState(""); // en user state lo dejamos vacio para que entre contenido. 
    const [table, setTable] = useState([]); 
      
    const addText =  (text) => {

            let newText = [...table, text]; // ... establece como infintio que puede variar a tamaño porque puede variar.
            
            setTable(newText)
            
    }  
    const handleKey = event => {
		if (event.key === "Enter" && imputText !== " " && imputText !== "") {
			addText(imputText);
			setInputValue("");
		}
	};
}  

   
	return (
		<div className="container-fluid">
			<div className="imput">
				<input />
			</div>

			<div>
				<table className="table">
					<thead>
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
