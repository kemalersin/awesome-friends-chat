export interface IContact {
  id: number;
  avatar: string;
  name: string;
  status: string;
  statusText: string;
  lastMessage: {
    time: number;
    text: string;
  }  
}
