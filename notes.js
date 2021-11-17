/* 

1) Instalar bibliotecas
2) Inicializar banco de dados

-> Organização da arquitetura do projeto por domínios, por "áreas" (artigos / categorias), onde ficarão os controllers e os models


-> Será semelhante ao mvc, separando os controllers de cada um destes 'domínios'

-> controller: onde ficam as funcionalidades, lógicas e rotas

-> Models:  representação da tabela
nome do arquivo com letra maiuscula e no singular
express router: permite a criação de rotas sem usar a variável app 


Geralmente, pode-se representar os relacionamentos entre as tabelas por mais de uma forma: 

por exemplo: 
artigos <-> categorias 

(1 - 1)
-> um artigo pertecen a uma categoria

(N - 1)
-> uma categoria pode ter vários artigos
Pode-se escolher qualquer um dos relacionamentos. Neste caso, no projeto, usou-se os dois. - Relacionamento de mao dupla

//CRIANDO RELACIONAMENTO NO SEQUELIZE
-> Definir em apenas um arquivo 

 */