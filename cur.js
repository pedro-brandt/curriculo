Parse.serverURL = "https://parseapi.back4app.com"; 
Parse.initialize(
    "8YUzi06H0YOWirjxLGJfhwMDIJaFNRhWv1yVaxrd",
    "ce0NUKGco7mKhVESZMuSUkwaDupf2dQMYz7BCsxS"
  );
  const Lista1 = Parse.Object.extend("Lista1");

  const divFormacao = document.getElementById("divFormacao");

  const lerFormacao = async () => {
    const query = new Parse.Query(Lista1);
    try {
      const results = await query.find(); // pegando o que está no back4app
      divFormacao.innerHTML = ""; // estyá apagando tudo da DIV 
      for (const formacao of results) {
        // <p><label>Curso</label>Administração</p>
        const pElement = document.createElement("p");
        const labelElement = document.createElement("label");
        const labelText = document.createTextNode("Curso");
        labelElement.appendChild(labelText);
        pElement.appendChild(labelElement);
        const pText = document.createTextNode(formacao.get("formacao"));
        pElement.appendChild(pText);

        divFormacao.appendChild(pElement)

      }
    } catch (error) {
      console.error("Error while fetching Lista1", error);
    }
  };

  lerFormacao();
  