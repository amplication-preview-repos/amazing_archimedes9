export type Post = {
  authorId: number | null;
  content: string | null;
  createdAt: Date;
  id: string;
  publishedAt: Date | null;
  title: string | null;
  updatedAt: Date;
};