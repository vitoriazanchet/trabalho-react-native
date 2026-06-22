export interface Book {
  id: string;
  title: string;
  authors?: string[];
  averageRating?: number;
  ratingsCount?: number;
  description?: string;
  thumbnail?: string;
}

interface GoogleBooksVolume {
  id: string;
  volumeInfo?: {
    title?: string;
    authors?: string[];
    averageRating?: number;
    ratingsCount?: number;
    description?: string;
    imageLinks?: {
      thumbnail?: string;
      smallThumbnail?: string;
    };
  };
}

interface GoogleBooksResponse {
  items?: GoogleBooksVolume[];
}

const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyAj_KXBTsSfsBBhSlFs7GhFwxt_63kJRY8';

const LIVRO_DO_MES_FALLBACK: Book = {
  id: 'crescent-city-fallback',
  title: 'Cidade da Lua Crescente',
  authors: ['Sarah J. Maas'],
  averageRating: 4.5,
  ratingsCount: 120000,
  description: 'Bryce Quinlan tinha a vida perfeita — trabalhava duro o dia todo e festejava a noite toda — até que um demônio assassinou seus amigos mais próximos, deixando-a desolada, ferida e sozinha. Quando o acusado é preso, mas os crimes recomeçam, Bryce se vê no centro da investigação. Ela fará o que for preciso para vingar a morte de seus amigos. Hunt Athalar é um notório anjo caído, agora escravizado pelos arcanjos que um dia desafiou. Suas habilidades brutais e força incrível foram direcionadas a um único propósito: assassinar os inimigos de seu chefe, sem perguntas. Mas com um demônio causando estragos na cidade, ele recebe uma proposta inesperada: ajudar Bryce a encontrar o assassino e sua liberdade estará ao seu alcance.',
  thumbnail: 'https://covers.openlibrary.org/b/isbn/9781635574043-L.jpg',
};

function normalizeVolume(volume: GoogleBooksVolume): Book {
  const info = volume.volumeInfo ?? {};

  return {
    id: volume.id,
    title: info.title ?? 'Título desconhecido',
    authors: info.authors,
    averageRating: info.averageRating,
    ratingsCount: info.ratingsCount,
    description: info.description,
    thumbnail: info.imageLinks?.thumbnail?.replace('http://', 'https://'),
  };
}

export async function buscarLivrosPorAssunto(
  subject: string,
  maxResults: number = 6
): Promise<Book[]> {
  try {
    const query = encodeURIComponent(`subject:${subject}`);
    const url = `${GOOGLE_BOOKS_API}?q=${query}&maxResults=${maxResults}&key=${API_KEY}`;

    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error(`Erro na busca de livros: ${resposta.status}`);
    }

    const dados: GoogleBooksResponse = await resposta.json();

    return (dados.items ?? []).map(normalizeVolume);
  } catch (erro) {
    console.warn('Falha ao buscar livros:', erro);
    return [];
  }
}

export async function buscarLivroDoMes(): Promise<Book | null> {
  try {
    const query = encodeURIComponent('intitle:Crescent City inauthor:Sarah J. Maas');
    const url = `${GOOGLE_BOOKS_API}?q=${query}&orderBy=relevance&maxResults=1&key=${API_KEY}`;

    const resposta = await fetch(url);

    if (!resposta.ok) {
      console.warn(`Google Books indisponível (${resposta.status}), usando fallback.`);
      return LIVRO_DO_MES_FALLBACK;
    }

    const dados: GoogleBooksResponse = await resposta.json();
    const primeiroLivro = dados.items?.[0];

    return primeiroLivro ? normalizeVolume(primeiroLivro) : LIVRO_DO_MES_FALLBACK;
  } catch (erro) {
    console.warn('Falha ao buscar livro do mês, usando fallback:', erro);
    return LIVRO_DO_MES_FALLBACK;
  }
}