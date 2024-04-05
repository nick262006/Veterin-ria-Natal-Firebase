var rollV, nomeV, telefoneV, nomepetV, tipoconsultaV, dataconsultaV; //variaveis que irão receber os dados cadastrados

function readFom() {
  rollV = document.getElementById("roll").value; 
  nomeV = document.getElementById("nome").value;
  telefoneV = document.getElementById("telefone").value;
  nomepetV = document.getElementById("nomepet").value;
  tipoconsultaV = document.getElementById("tipoconsulta").value;
  dataconsultaV = document.getElementById("dataconsulta").value;
  console.log(rollV, nomeV, telefoneV, nomepetV,tipoconsultaV, dataconsultaV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("dadosconsulta/" + rollV)
    .set({
      rollNo: rollV,
      nome: nomeV,
      telefone: telefoneV,
      nomepet: nomepetV,
      tipoconsulta: tipoconsultaV,
      dataconsulta: dataconsultaV,
    });
  alert("Consulta Agendada!");
  document.getElementById("roll").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("nomepet").value = "";
  document.getElementById("tipoconsulta").value = "";
  document.getElementById("dataconsulta").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("dadosconsulta/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("nome").value = snap.val().nome;
      document.getElementById("telefone").value = snap.val().telefone;
      document.getElementById("nomepet").value = snap.val().nomepet;
      document.getElementById("tipoconsulta").value = snap.val().tipoconsulta;
      document.getElementById("dataconsulta").value = snap.val().dataconsulta;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("dadosconsulta/" + rollV)
    .update({
      //   rollNo: rollV,
      nome: nomeV,
      telefone: telefoneV,
      nomepet: nomepetV,
      tipoconsulta: tipoconsultaV,
      dataconsulta: dataconsultaV,
    });
  alert("Consulta Atualizada!");
  document.getElementById("roll").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("nomepet").value = "";
  document.getElementById("tipoconsulta").value = "";
  document.getElementById("dataconsulta").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("dadosconsulta/" + rollV)
    .remove();
  alert("Consulta Desmarcada!");
  document.getElementById("roll").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("nomepet").value = "";
  document.getElementById("tipoconsulta").value = "";
  document.getElementById("dataconsulta").value = "";
};
