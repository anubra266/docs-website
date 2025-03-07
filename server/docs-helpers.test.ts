import { describe, expect, test } from "@jest/globals";
import { categoryHrefToDocID } from "./docs-helpers";

describe("categoryHrefToDocID", () => {
  interface testCase {
    description: string;
    href: string;
    expectedID: string;
  }

  const testCases: Array<testCase> = [];

  test.each(testCases)("$description", (c) => {
    expect(categoryHrefToDocID(c.href)).toEqual(c.expectedID);
  });
});
