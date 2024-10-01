export interface ListAllRequestParams {
  token: string;
}

export interface Tweet {
  id: string;
  user: { username: string; name: string; avatar?: string };
  content: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  userId: string;
  Like: {
    id: string;
    userId: string;
    tweetId: string;
    user: { username: string };
  }[];
}

export interface CreateTweetRequestBody {
  token: string;
  content: string;
}
