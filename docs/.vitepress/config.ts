import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'pt-BR',
  title: 'Associação de Apicultores',
  description: 'Sistema gereciador projeto',

  themeConfig: {
    nav: [
      { text: '1. Introducao', link: '/1_0_introducao' },
  
       {
         text: 'Dropdown Menu',
         items: [
          { text: '1. Introducao', link: '/1_0_Intoducao' },
          { text: '1.1. Objetivo', link: '/1_1_objetivos' },
          { text: '1.2. Escopo', link: '/1_2_Escopo' },
          { text: '1.3. Definições', link: '/1_3_Definiçoes, Acronimos e abreviações' },
          { text: '1.4. Publico Alvo', link: '/1_4_publico alvo' },
          { text: '2. Descrição', link: '/2_0_Descricao' },
          { text: '3. Recursos', link: '/3_0_Recursos e Funcionalidades' },
          { text: '4. Caso de Uso', link: '/4_1_Casos de Usos' },
          { text: '8. Riscos', link: '/8_Riscos e mitigação' },
          { text: '9. Custos', link: '/9_Custos e Orçamento' },
          { text: '10. Considerações Finais', link: '/10_Considerações' },
         ],
       },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          // ...
        ],
      },
    ],
  },
});
