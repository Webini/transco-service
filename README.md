API
===

## /processable
### POST
#### Parameters
```json
{
  "preset": "<Object> media preset"
}
``` 
#### Description
Determine if the given preset is processable or not

#### Return 200 
```json
{
  "success": true,
  "data": {
    "processable": "<Boolean>"
  }
}
```

Config
======
Put your transcoder configuration in the directory `config` at the root of this project,
then pass the configuration name to env variable `CONFIG_NAME`.

Env
===

Variable | Default | Description
-------- | ------- | -----------
RABBITMQ_URL | amqp://localhost | RabbitMQ url
RABBITMQ_TRANSCODING_EXCHANGE | transcoding | Transcoding exchange, it will received transcoding status messages
LISTEN_QUEUE_NAME | transco-service | Queue name where the transcoding tasks are sent
LISTEN_ROUTING_KEY | process.default | Routing key to watch
CONFIG_NAME | default | Config name
STORAGE_PATH | /mnt/data | Storage path, where the file to transcode are located
TRANSCODED_PATH | /mnt/transcoded | Storage where the transcoded file must be created