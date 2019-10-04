[![Build Status](https://travis-ci.org/dcop/node-syncthru-client.svg?branch=master)](https://travis-ci.org/dcop/node-syncthru-client)

# node-syncthru-client

A TypeScript port of [PySyncThru](https://github.com/nielstron/pysyncthru).

The app currently supports:
* Toner level (Black, Magenta, Cyan, Yellow)
* Model name

## Example usage

```
const client = new SyncThruClient("http://my-local-printer");

const syncThruResponse: SyncThruResponse = await client.rawGet(); // gets the raw file returned from the printer
const syncThruModel: SyncThruModel = await client.get(); // gets a custom model object based on printer response

console.log(syncThruResponse.toner_black.remaining) // outputs 28
console.log(syncThruModel.blackTonerLevel()) // outputs 28
```
