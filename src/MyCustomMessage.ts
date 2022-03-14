import { AgentMessage } from './AgentMessage'

export class MyCustomMessage extends AgentMessage {
  type: AgentMessage['type'] = 'https://didcomm.org/custom-protocol/1.0/custom-message'
  name: string

  public constructor({ name, id }: { name: string; id?: string }) {
    super()

    this.name = name
    this.id = id ?? this.generateId()
  }
}
