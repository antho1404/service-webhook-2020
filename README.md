# Webhook

Receive HTTP connections and emit events with the data

# Contents

- [Installation](#Installation)
- [Definitions](#Definitions)
  - [Events](#Events)
    - [request](#request)
  - [Tasks](#Tasks)
    - [call](#call)

# Installation

## MESG Core

This service requires [MESG Core](https://github.com/mesg-foundation/core) to be installed first.

You can install MESG Core by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
bash <(curl -fsSL https://mesg.com/install)
```

## Service

Download the source code of this service, and then in the service's folder, run the following command:
```bash
mesg-core service deploy
```

# Definitions

# Events

## request

Event key: `request`

This even is emitted every time the server receive a `POST` request on the URL `/webhook`.

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **data** | `data` | `Object` | All the data contained in the request data |
| **headers** | `headers` | `Object` | All the headers contained in the request |

# Tasks

## call

Task key: `call`

This task will call a webhook and return the result of the call

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **data** | `data` | `Object` | Data the you want to send |
| **headers** | `headers` | `Object` | Additional headers that you want to send |
| **url** | `url` | `String` | URL that you want to call |

### Outputs

#### error

Output key: `error`

Output if an error occurs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` | Error message |

#### result

Output key: `result`

Result of the call the returns the list of the data from the API call result

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |


