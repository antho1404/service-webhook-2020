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

## Tasks

### Call

This task will call a webhook and return the result of the call

#### inputs

| Input | Type | Description |
| --- | --- | --- |
| url | String | URL that you want to call |
| data | Object | Data the you want to send |
| headers | Object | Additional headers that you want to send |

#### outputs
| ouput | description |
| --- | --- |
| result | Result of the call |
| error | Return the `message` if the error |
