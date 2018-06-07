# Webhook Service

```
mesg-core service deploy https://github.com/mesg-foundation/service-webhook.git
```

## Events

### Request

This even is emitted every time the server receive a `POST` request on the URL `/webhook`.

| data | type | description |
| --- | --- | --- |
| data | Object | All the data contained in the request data |
| headers | Object | All the headers contained in the request |
