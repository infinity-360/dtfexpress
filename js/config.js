/* =========================================================
   Estampas DTF Express — configurações gerais do site
   Altere aqui telefone, preços e larguras de impressão.
   ========================================================= */
window.M3 = {
  nome: 'Estampas DTF Express',
  whatsapp: '5544984450079',            // só números, com DDI 55
  whatsappExibicao: '(44) 98445-0079',
  instagram: 'https://www.instagram.com/estampasdtfexpress/',
  instagramUser: '@estampasdtfexpress',

  /* Tipos de impressão do montador.
     largura e alturaFolha em cm. precoMetro em R$ por metro linear.
     O valor é cobrado pelo comprimento usado, arredondado para cima
     em múltiplos de "arredondarCm", respeitando o "minimoCm". */
  impressoes: {
    textil: {
      nome: 'DTF Têxtil',
      descricao: 'Para camisetas, bonés, moletons, uniformes e qualquer tecido.',
      largura: 58,
      alturaFolha: 100,
      precoMetro: 45.00,
      minimoCm: 100,
      arredondarCm: 10
    },
    uv: {
      nome: 'DTF UV (adesivo)',
      descricao: 'Para copos, canecas, vidros, acrílicos, metais e superfícies rígidas.',
      largura: 29,
      alturaFolha: 100,
      precoMetro: 80.00,
      minimoCm: 100,
      arredondarCm: 10
    }
  },

  espacamentoCm: 0.5,   // distância padrão entre as estampas
  margemCm: 0.5,        // margem nas bordas da folha
  dpi: 300              // resolução do PNG final
};
