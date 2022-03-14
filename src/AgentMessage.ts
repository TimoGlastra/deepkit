import { MapName, Pattern } from '@deepkit/type'

import { ThreadDecorator } from './ThreadDecorator'

export const MessageIdRegExp = /[-_./a-zA-Z0-9]{8,64}/
export const MessageTypeRegExp = /(.*?)([a-zA-Z0-9._-]+)\/(\d[^/]*)\/([a-zA-Z0-9._-]+)$/

export class AgentMessage {
  id!: string & MapName<'@id'> & Pattern<typeof MessageIdRegExp>
  type!: string & MapName<'@type'> & Pattern<typeof MessageTypeRegExp>

  public generateId() {
    return '7215b611-6a2e-4e69-8d42-d3ac0d472fab'
  }

  public get threadId(): string {
    return this.thread?.threadId ?? this.id
  }

  thread?: ThreadDecorator & MapName<'~thread'>
}
