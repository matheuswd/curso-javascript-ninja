( function() {
	/*
	Envolva todo o conteúdo desse arquivo em uma IIFE.
	*/

	/*
	Crie um objeto chamado `person`, com as propriedades:
	    `name`: String
	    `lastname`: String
	    `age`: Number
	Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
	de valor para cada propriedade.
	*/
	var person = {
		'name': 'Matheus',
		'lastname': 'Martins',
		'age': 19
	}
	console.log( 'Propriedades de "person":' );

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	console.log( Object.keys( person ) );

	/*
	Crie um array vazio chamado `books`.
	*/
	var books = [];

	/*
	Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
	seguintes propriedades:
	`name`: String
	`pages`: Number
	*/
	books = [
		{
			'name': 'Líder Empreendedor',
			'pages': 431
		},
		{
			'name': 'A Arte da Guerra',
			'pages': 98
		},
		{
			'name': 'Capitalismo e Liberdade',
			'pages': 100
		}
	]
	console.log( '\nLista de livros:' );

	/*
	Mostre no console todos os livros.
	*/
	console.log( books );

	console.log( '\nLivro que está sendo removido:' );
	/*
	Remova o último livro, e mostre-o no console.
	*/
	var lastBook = books.pop();
	console.log( lastBook );
	console.log( '\nAgora sobraram somente os livros:' );
	/*
	Mostre no console os livros restantes.
	*/
	console.log( books );

	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	var booksToString = JSON.stringify( books );
	console.log( '\nLivros em formato string:' );

	/*
	Mostre os livros nesse formato no console:
	*/
	console.log( booksToString );

	/*
	Converta os livros novamente para objeto.
	*/
	parsedBooks = JSON.parse( booksToString );
	console.log( '\nAgora os livros são objetos novamente:' );
	console.log( parsedBooks );

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/
	for( var i = 0; i < books.length; i++ ) {
		var bookName = books[i].name;
		var bookPages = books[i].pages;
		console.log( bookName + ': ' + bookPages );
	}

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	var myName = [ 'M', 'a', 't', 'h', 'e', 'u', 's', 'd', 'e', 'A', 'l', 'm', 'e', 'i', 'd', 'a', 'M', 'a', 'r', 't', 'i', 'n', 's' ];
	console.log( '\nMeu nome é:' );

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	var completeName = myName.join('');
	console.log( completeName );
	console.log( '\nMeu nome invertido é:' );

	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	var invertedName = myName.reverse().join('');
	console.log( invertedName );

	console.log( '\nAgora em ordem alfabética:' );
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	var orderByAB = myName.sort();
	console.log( orderByAB );

} )();