/**
 * ARQUIVO DE CONFIGURAÇÃO DO PROJETO
 * -------------------------------------------------------------------------
 * Este arquivo controla todo o conteúdo textual e visual da página do grupo.
 * NÃO é necessário editar os arquivos HTML ou CSS para alterar textos e imagens.
 * * INSTRUÇÕES DE USO:
 * 1. Mantenha a estrutura do código, editando apenas o texto dentro das aspas ("...").
 * 2. As imagens dos integrantes devem ser salvas na pasta 'assets/images'.
 * 3. Se não quiser usar um campo opcional, deixe as aspas vazias ("").
 */

const projectData = {
    // =========================================================================
    // SEÇÃO 1: INFORMAÇÕES GERAIS
    // =========================================================================
    
    // Título principal que aparece no centro da tela com efeito de digitação.
    title: "Javier Cabelo e Estética",

    // Descrição breve do projeto. Evite textos muito longos (max 3 linhas) para não poluir o visual.
    description: "Plataforma web para o Javier Cabelo & Estética integrando agendamento online, vitrine de serviços e área do cliente para modernizar a gestão do negócio.",
    
    // Link para onde o botão "< Acessar Projeto />" irá redirecionar.
    // Pode ser o repositório (GitHub), o protótipo (Figma) ou o site publicado.
    projectLink: "https://javiercee.extencom.gru.br",
    
    // Cor de destaque (Accent Color).
    // Altera a cor dos botões, bordas, cursores e efeitos de 'hover'.
    // Sugestões: Verde IFSP (#32A041) | Vermelho IFSP (#CB0C1F) | Azul Tech (#2563eb)
    accentColor: "#32A041", 

    // =========================================================================
    // SEÇÃO 2: INTEGRANTES DO GRUPO
    // =========================================================================
    
    // Adicione ou remova blocos {...} para ajustar o número de integrantes.
    // O layout se adapta automaticamente, mas recomenda-se no máximo 5 pessoas.
    members: [
        {
            // Nome que aparecerá abaixo da foto
            name: "Ana Julia",
            
            // Função no grupo (Ex: Frontend, Backend, Documentação, Hardware)
            role: "Fullstack Dev",
            
            // Caminho exato da foto. 
            // DICA: Use fotos quadradas (proporção 1:1) para melhor enquadramento no hexágono.
            image: "assets/images/member1.jpg",
            
            // Link para LinkedIn, GitHub ou Portfólio.
            // Se deixar vazio (""), o link 'Link' não aparecerá no card.
            socialLink: "https://github.com/AnaJu-Pires" 
        },
        {
            name: "Gabriel de Souza",
            role: "Fullstack Dev",
            image: "assets/images/member2.jpg",
            socialLink: "https://github.com/Gabrielxsouza"
        },
        {
            name: "Gabriel Feitoza",
            role: "Fullstack Dev",
            image: "assets/images/member3.jpg",
            socialLink: "https://github.com/gabriel-fs1"
        },
        {
            name: "Maria Eduarda",
            role: "Fullstack Dev",
            image: "assets/images/member4.jpg",
            socialLink: "https://github.com/dudaselvatti"
        },
        {
            name: "Nathalie",
            role: "Scrum Master",
            image: "assets/images/member5.jpg",
            socialLink: "https://github.com/xgeilahtan" // Exemplo de campo vazio: o link não será gerado
        }
    ]
};