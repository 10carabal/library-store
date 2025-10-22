export type Book = {
  id_book: number;
  title: string;
  author: string;
  publishedDate: Date | null;
  createTime: Date | null;
  genre_id: number | null;
  rating: number | null;
}
