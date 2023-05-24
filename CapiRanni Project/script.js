function toggleAreaRegistros() {
    var areaRegistros = document.getElementById("area-registros");
    if (areaRegistros.style.display === "block") {
      areaRegistros.style.display = "none";
    } else {
      areaRegistros.style.display = "block";
    }
  }

  function adicionarRegistro() {
    var registro = document.getElementById("registro").value;
    var areaRegistros = document.getElementById("registros-list");
    areaRegistros.innerHTML += registro + " <button onclick='deletarRegistro(this)'>Deletar</button><br>";
    document.getElementById("registro").value = "";

    // Armazenar o registro no armazenamento local
    var registrosSalvos = localStorage.getItem("registros");
    if (registrosSalvos) {
      registrosSalvos += "\n" + registro;
    } else {
      registrosSalvos = registro;
    }
    localStorage.setItem("registros", registrosSalvos);
  }

  function deletarRegistro(element) {
    var registro = element.parentNode.innerText.replace(" Deletar", "");
    var areaRegistros = document.getElementById("registros-list");
    areaRegistros.innerHTML = areaRegistros.innerHTML.replace(registro + " <button onclick='deletarRegistro(this)'>Deletar</button><br>", "");

    // Remover o registro do armazenamento local
    var registrosSalvos = localStorage.getItem("registros");
    registrosSalvos = registrosSalvos.replace(registro, "").replace(/^\n|\n$/g, "").replace(/\n{2,}/g, "\n");
    localStorage.setItem("registros", registrosSalvos);
  }

  // Carregar registros salvos do armazenamento local ao carregar a página
  window.onload = function() {
    var registrosSalvos = localStorage.getItem("registros");
    if (registrosSalvos) {
      var areaRegistros = document.getElementById("registros-list");
      var registrosArray = registrosSalvos.split("\n");
      for (var i = 0; i < registrosArray.length; i++) {
        var registro = registrosArray[i];
        areaRegistros.innerHTML += registro + " <button onclick='deletarRegistro(this)'>Deletar</button><br>";
      }
    }
  };