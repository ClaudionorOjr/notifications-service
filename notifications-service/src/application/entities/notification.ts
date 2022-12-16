import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

/* 
? Ao invés de criar cada um dos atributos dentro da classe, é feita uma interface com todas as propriedades necessárias, sendo acessadas através de um único atributo do tipo da interface criada, dentro da classe. 
*/
export interface NotificationAttr {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private attributes: NotificationAttr;

  constructor(
    attributes: Replace<NotificationAttr, { createdAt?: Date }>,
    id?: string,
  ) {
    //? Se o id existir, usa ele, se não vai criá-lo
    this._id = id ?? randomUUID();

    this.attributes = {
      ...attributes,
      createdAt: attributes.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  // ? A keyword 'set' indica a criação de um setter para o atributo
  public set recipientId(recipientId: string) {
    this.attributes.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.attributes.recipientId;
  }

  public set content(content: Content) {
    this.attributes.content = content;
  }

  public get content(): Content {
    return this.attributes.content;
  }

  public set category(category: string) {
    this.attributes.category = category;
  }

  public get category(): string {
    return this.attributes.category;
  }

  public read() {
    this.attributes.readAt = new Date();
  }

  public unread() {
    this.attributes.readAt = null;
  }

  public get readAt(): Date | null | undefined {
    return this.attributes.readAt;
  }

  public cancel() {
    this.attributes.canceledAt = new Date();
  }

  public get canceledAt(): Date | null | undefined {
    return this.attributes.canceledAt;
  }

  public get createdAt(): Date {
    return this.attributes.createdAt;
  }
}
