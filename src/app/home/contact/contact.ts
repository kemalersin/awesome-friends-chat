// ...................................................................................................

export interface IContact {
  id: number;
  avatar: string;
  name: string;
  status: string;
  statusText: string;
  conversationId: number;
  lastMessage: {
    time: number;
    text: string;
  };
}

// ...................................................................................................
