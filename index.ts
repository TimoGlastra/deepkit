import { validate, deserialize, serialize } from '@deepkit/type'
import { MyCustomMessage } from './src/MyCustomMessage'

export const MessageIdRegExp = /[-_./a-zA-Z0-9]{8,64}/
export const MessageTypeRegExp = /(.*?)([a-zA-Z0-9._-]+)\/(\d[^/]*)\/([a-zA-Z0-9._-]+)$/

const receivedMessageJson = {
  '@type': 'https://didcomm.org/connections/1.0/send-request',
  '@id': 'ac32c5df-1620-434c-b17f-29b2acccef6d',
  name: 'hello',
  '~thread': {
    thid: '5efdfa11-6d1f-4cd5-862c-945b0369c55f',
    received_orders: {
      hello: 10,
    },
  },
}

const message = deserialize<MyCustomMessage>(receivedMessageJson)
console.log(message)
console.log(serialize<MyCustomMessage>(message))

const errors = validate<MyCustomMessage>(message)

if (errors.length) {
  throw errors
}
