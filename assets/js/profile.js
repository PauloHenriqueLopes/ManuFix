document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('servicosBtn').addEventListener('click', function() {
        showSection('servicos');
        setActiveButton(this);
    });
    document.getElementById('avaliacoesBtn').addEventListener('click', function() {
        showSection('avaliacoes');
        setActiveButton(this);
    });
    document.getElementById('comentariosBtn').addEventListener('click', function() {
        showSection('comentarios');
        setActiveButton(this);
    });

    function showSection(sectionId) {
        // Esconde todas as seções
        document.querySelectorAll('.content-section').forEach(function(section) {
            section.classList.add('hidden');
        });

        // Mostra a seção clicada
        document.getElementById(sectionId).classList.remove('hidden');
    }

    function setActiveButton(activeButton) {
        // Remove a classe ativa de todos os botões
        document.querySelectorAll('.right__col nav ul li').forEach(function(btn) {
            btn.classList.remove('active');
        });

        // Adiciona a classe ativa ao botão clicado
        activeButton.classList.add('active');
    }
});
