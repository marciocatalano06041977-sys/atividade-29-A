const servidores = [
  { nome: "Servidor Web", status: "Online", cpu: 45 },
  { nome: "Banco de Dados", status: "Online", cpu: 78 },
  { nome: "Servidor de Backup", status: "Offline", cpu: 0 },
  { nome: "API Pagamentos", status: "Online", cpu: 92 }
];

servidores.forEach((servidor) => {
  console.log(`Servidor: ${servidor.nome} - Status: ${servidor.status}`);

  if (servidor.cpu > 80) {
    console.log(`ALERTA: Alto consumo de CPU no ${servidor.nome}!`);
  }
});

