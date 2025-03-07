import { describe, expect, test } from "@jest/globals";
import { categoryHrefToDocID } from "./href-to-id";

describe("categoryHrefToDocID", () => {
  interface testCase {
    description: string;
    href: string;
    expectedID: string;
  }

  const testCases: Array<testCase> = [
    {
      description: "category index page in versioned path",
      href: "/ver/15.x/reference/agent-services/",
      expectedID: "reference/agent-services/agent-services",
    },
    {
      description: "category index page in unversioned path",
      href: "/reference/agent-services/",
      expectedID: "reference/agent-services/agent-services",
    },
  ];

  test.each(testCases)("$description", (c) => {
    expect(categoryHrefToDocID(c.href)).toEqual(c.expectedID);
  });
});
