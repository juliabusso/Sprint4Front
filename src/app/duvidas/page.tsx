import React from "react";
import Image from "next/image";
import estacaoduvidas01 from "@/img/estacaoduvidas01.png"

export default function Duvidas() {
  return (
    <div className="duvidas-container">
      {/* Título */}
      <div className="titulo">
        <h1>Dúvidas sobre a nossa mobilidade?</h1>
      </div>

      {/* Texto Explicativo */}
      <p className="descricao">
        Aqui estão algumas dúvidas gerais que as pessoas costumam ter sobre a CCR (Companhia de Concessões Rodoviárias), que administra rodovias, metrôs e outras infraestruturas no Brasil:
      </p>

      {/* Imagem */}
      <div className="imagem-container">
        <Image src={estacaoduvidas01} alt="Estação de trem" width={1068} height={464} />
      </div>

      {/* Perguntas e Respostas */}
      <div className="faq">
        <div className="pergunta">
          <h3>O que é a CCR e quais serviços ela oferece?</h3>
          <p>A CCR é um grupo que administra rodovias, metrôs, barcas e aeroportos no Brasil, garantindo infraestrutura e segurança para os usuários.</p>
        </div>

        <div className="pergunta">
          <h3>Quais rodovias são administradas pela CCR?</h3>
          <p>A CCR administra diversas rodovias em diferentes estados. Para saber quais, consulte o site oficial ou os canais de atendimento da empresa.</p>
        </div>

        <div className="pergunta">
          <h3>Como funciona o pedágio nas rodovias da CCR?</h3>
          <p>O valor do pedágio varia conforme a rodovia e a categoria do veículo. O pagamento pode ser feito em dinheiro, cartão ou por meio de tags eletrônicas.</p>
        </div>

        <div className="pergunta">
          <h3>O que fazer em caso de emergência na estrada?</h3>
          <p>Os usuários podem acionar a CCR pelo telefone de emergência indicado na rodovia ou utilizar os telefones de atendimento disponíveis no site da concessionária.</p>
        </div>

        <div className="pergunta">
          <h3>A CCR oferece assistência mecânica ou médica nas rodovias?</h3>
          <p>Sim, as rodovias administradas pela CCR oferecem serviços de atendimento a emergências médicas e mecânicas, como guinchos e ambulâncias.</p>
        </div>

        <div className="pergunta">
          <h3>Como posso entrar em contato com a CCR?</h3>
          <p>A empresa disponibiliza atendimento telefônico, site oficial e aplicativos para dúvidas, reclamações e sugestões.</p>
        </div>
        
        <div className="pergunta">
          <h3>A CCR é responsável por quais transportes urbanos?</h3>
          <p>Além das rodovias, a CCR opera metrôs em cidades como São Paulo, Salvador e Belo Horizonte, além de barcas no Rio de Janeiro.</p>
        </div>

        <div className="pergunta">
          <h3>Como posso recorrer a uma multa ou cobrança indevida em pedágios da CCR?</h3>
          <p>Caso haja dúvidas sobre cobranças, é possível entrar em contato com o atendimento ao cliente da concessionária para esclarecimentos e eventuais contestações.</p>
        </div>


      </div>
    </div>
  );
}