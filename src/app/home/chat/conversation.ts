export interface IMessage {
  type: number;
  time: number;
  text: string;
}

export interface IConversation {
  id?: number;
  messages: IMessage[];
}
