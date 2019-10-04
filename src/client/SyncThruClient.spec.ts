import axios from "axios";

import { SyncThruClient } from "./SyncThruClient";
import { SyncThruResponseBuilder } from "../builder/SyncThruResponseBuilder";
import { SynchtruModel } from "../model/SyncThruModel";

jest.mock('axios');

describe("SyncThru client", () => {
  let mockedAxios;

  beforeEach(() => {
    mockedAxios = (axios as jest.Mocked<typeof axios>);
  })

  it('should get data and return proper model', () => {
    const syncThruResponse = SyncThruResponseBuilder.aSyncThruResponse().build()
    const client = new SyncThruClient("some-ip");
    const resp = { data: syncThruResponse };
    const expected = SynchtruModel.from(syncThruResponse);

    mockedAxios.get.mockResolvedValue(resp);

    client
      .get()
      .then(model => expect(model).toEqual(expected));
  });

  it('should get raw data', () => {
    const syncThruResponse = SyncThruResponseBuilder.aSyncThruResponse().build()
    const client = new SyncThruClient("some-ip");
    const resp = { data: syncThruResponse };
    const expected = syncThruResponse;

    mockedAxios.get.mockResolvedValue(resp);

    client
      .rawGet()
      .then(model => expect(model).toEqual(expected));
  });

  it('should fail getting to the printer', () => {
    const client = new SyncThruClient("some-non-existing-ip");
    const expected = new Error("42");

    mockedAxios.get.mockRejectedValue(new Error("42"));

    client.get()
          .catch((result) => expect(result).toEqual(expected));
  });
});