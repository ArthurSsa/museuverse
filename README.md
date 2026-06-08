# MuseuVerse

Um museu virtual imersivo dedicado à preservação digital do acervo perdido do Museu Nacional do Rio de Janeiro, destruído no incêndio de setembro de 2018.

**Jogue no navegador:** https://arthurssa.itch.io/museuverse

Projeto desenvolvido para o Hackweb Web3 — Desafio 4 (ExpoVerse / Metaverso).

## Proposta

Em setembro de 2018, um incêndio destruiu boa parte do Museu Nacional do Rio de Janeiro. Estima-se que cerca de 85% do acervo tenha se perdido, de um total que reunia perto de 20 milhões de itens, muitos deles insubstituíveis.

O MuseuVerse parte de uma pergunta simples: e se a memória dessas peças pudesse continuar acessível mesmo depois de o objeto físico ter desaparecido? A resposta é um espaço expositivo navegável em primeira pessoa, onde o visitante percorre quatro peças emblemáticas do acervo, lê sua história e ouve uma narração sobre cada uma. Ao final do percurso, recebe um certificado de visita registrável como NFT — uma prova simbólica de que aquela memória foi revisitada.

## A experiência

O visitante digita seu nome, entra no museu e explora o ambiente livremente (WASD + mouse). Ao se aproximar de uma peça e pressionar **E**, abre-se um painel curatorial com o texto histórico e uma narração em áudio. Um contador acompanha quantas peças já foram visitadas. Visitadas as quatro, o certificado de visita é emitido com o nome do visitante e a opção de resgate como NFT.

### As quatro peças

- **Luzia** — o fóssil humano mais antigo já encontrado nas Américas (cerca de 11.500 anos), descoberto na Lapa Vermelha, em Minas Gerais.
- **Meteorito de Bendegó** — o maior meteorito já achado em território brasileiro (cerca de 5,3 toneladas), encontrado na Bahia em 1784. Por ser metálico, resistiu ao incêndio.
- **Trono de Adandozan** — trono do Reino do Daomé (atual Benim), enviado como presente diplomático ao Brasil no início do século XIX.
- **Sarcófago de Sha-Amun-em-su** — sarcófago egípcio lacrado, de cerca de 2.800 anos, que nunca foi aberto e preserva a múmia em seu interior.

## Funcionalidades

- Navegação em primeira pessoa (movimentação, corrida, pulo e controle de cursor).
- Sistema de interação por raycast: mira numa peça e pressiona **E** para inspecioná-la.
- Painel curatorial com texto histórico e narração em áudio para cada peça.
- Acompanhamento do progresso da visita (peças visitadas / total).
- Tela de certificado de visita ao concluir o percurso, com resgate de NFT.

## Tecnologias

- **Engine:** Unity 2022.3.62f3 LTS (Built-in Render Pipeline)
- **Linguagem:** C#
- **Plataforma:** WebGL
- **Áudio:** narrações geradas com ElevenLabs
- **Blockchain:** contrato inteligente em Solidity na rede Polygon Amoy (testnet), responsável pelo certificado NFT
- **Hospedagem:** itch.io

## Certificado NFT

Ao concluir a visita às quatro peças, o jogador recebe um certificado de visita que pode ser resgatado como NFT na rede **Polygon Amoy** (testnet). O resgate é feito por um link externo, fora da aplicação Unity.

<!-- Guilherme: cole aqui o endereço do contrato e o link de resgate quando estiverem prontos. -->
- **Endereço do contrato:** _(a definir)_
- **Link de resgate:** _(a definir)_

## Estrutura do repositório

- `museuverse-unity/` — projeto Unity (a experiência em si)
- `smart-contract/` — contrato inteligente do certificado NFT
- `docs/` — textos curatoriais e documentação de apoio

## Como rodar

### Jogar no navegador (recomendado)

Acesse https://arthurssa.itch.io/museuverse e clique em **Run game**.

### Rodar localmente (Unity)

Pré-requisitos: **Unity 2022.3.62f3 LTS** com suporte a build WebGL (Windows).

1. Clone o repositório:
   ```
   git clone https://github.com/ArthurSsa/museuverse.git
   ```
2. Abra a pasta `museuverse-unity/` pelo Unity Hub.
3. Abra a cena principal em `Assets/_Project/Scenes/02_Museum`.
4. Pressione **Play** para rodar no editor, ou gere um build WebGL em **File > Build Settings > WebGL > Build** (Color Space Linear, Compression Brotli e Decompression Fallback ativado).

> **Observação:** o modelo 3D do saguão (`.fbx`, acima de 100 MB) não está versionado no repositório por exceder o limite do GitHub — ele já está incluído no build publicado no itch.io.

## Equipe

- **Arthur Santos Sampaio** — Desenvolvedor Unity
- **Ricardo Augusto Belo da Silva** — Modelador 3D / Blender
- **Anthony Davi de Sousa Araujo** — Desenvolvedor Fullstack (Blockchain / UI/UX)
- **Guilherme Pessoa Marinho** — Desenvolvedor Blockchain / Smart Contracts

## Declaração de Uso de Inteligência Artificial

No desenvolvimento do MuseuVerse, a equipe utilizou duas ferramentas de inteligência artificial:

- **Claude (Anthropic)** — assistente de desenvolvimento, usado como apoio na escrita e revisão de código (C#), na assistencia de configuração do projeto Unity e na redação de documentação.
- **ElevenLabs** — geração das narrações em áudio das quatro peças do acervo.

As decisões de design, a arquitetura do projeto e a integração final foram conduzidas pela equipe.
