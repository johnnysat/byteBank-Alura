import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { sistemaAutenticacao } from "./sistemaAutenticacao.js";

const cliente = new Cliente("Dinah", 78945612301);
cliente.cadastrarSenha("000");
const diretor = new Diretor("Thaine", 10000, 12345678900);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Johnny", 5000, 12378945601);
gerente.cadastrarSenha("johnny123")

const gerenteLogado = sistemaAutenticacao.login(gerente, "johnny123");
const diretorLogado = sistemaAutenticacao.login(diretor, "123456789");
const clienteLogado = sistemaAutenticacao.login(cliente, "000");

console.log(gerenteLogado, diretorLogado, clienteLogado);


