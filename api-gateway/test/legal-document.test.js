/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const server = require("../src/index");

chai.use(chaiHttp);

describe("Testing legal document API", () => {
  describe("[GET] /api/v1/legal-documents", () => {
    it("[OK]: get all legal documents successfully", (done) => {
      chai
        .request(server)
        .get("/api/v1/legal-documents")
        .end((err, { res }) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });
});
