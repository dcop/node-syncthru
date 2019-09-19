import axios from "axios";
import { SynchTruClient } from "./client/SynchTruClient";
import { SynchTruResponseBuilder } from "./builder/SynchTruResponseBuilder";
import { SynchtruModel } from "./model/SynchtruModel";

jest.mock('axios');

describe("SynchTru client", () => {

  afterAll(() => { jest.resetAllMocks() })

  it('should get data and return proper model', () => {
    const synchTruResponse = SynchTruResponseBuilder.aSynchTruResponse().build()
    const client = new SynchTruClient("some-ip");
    const resp = { data: synchTruResponse };
    const expected = SynchtruModel.from(synchTruResponse);

    (axios as jest.Mocked<typeof axios>).get.mockResolvedValue(resp);

    client
      .get()
      .then(model => expect(model).toEqual(expected));
  });

  it('should get raw data', () => {
    const synchTruResponse = SynchTruResponseBuilder.aSynchTruResponse().build()
    const client = new SynchTruClient("some-ip");
    const resp = { data: synchTruResponse };
    const expected = synchTruResponse;

    (axios as jest.Mocked<typeof axios>).get.mockResolvedValue(resp);

    client
      .rawGet()
      .then(model => expect(model).toEqual(expected));
  });

  it('should fail getting to the printer', () => {
    const client = new SynchTruClient("some-non-existing-ip");
    const expected = new Error("42");

    (axios as jest.Mocked<typeof axios>).get.mockRejectedValue(new Error("42"));

    client.get()
          .catch((result) => expect(result).toEqual(expected));
  });
});