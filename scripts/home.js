// Importação da base de dados e das funçoes

import { database } from "./database.js";
import { getProdId, loadProducts} from "./functions.js";

// -------- Variaveis do projeto ------------------------
const sectionNovidades = document.querySelector("#section-1 .swiper-wrapper")
const sectionMaisVendidos = document.querySelector("#section-2 .swiper-wrapper")
const sectionPromocoes = document.querySelector("#section-3 .swiper-wrapper")


//Fitros
let filtroCategoriaNovidades = database.filter(produto => produto.classificacaoProduto === "Novidades" && produto.exibirHome == true )
let filtroMaisVendidos = database.filter(produto => produto.classificacaoProduto === "Mais_Vendidos" && produto.exibirHome == true )
let filtroPromocoes = database.filter(produto => produto.classificacaoProduto === "Promocoes" && produto.exibirHome == true )


//Funçoes com parametros
loadProducts(filtroCategoriaNovidades,sectionNovidades);
loadProducts(filtroMaisVendidos,sectionMaisVendidos);
loadProducts(filtroPromocoes,sectionPromocoes);
getProdId()