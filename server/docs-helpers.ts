import { resolve } from "path";

export const getVersion = (filepath: string) => {
  const result = /content\/([^/]+)\/docs\//.exec(filepath);
  return result ? result[1] : "";
};

/**
 * Used by some remark plugins to resolve paths to assets based on the
 * current docs folders. E. g. remark-includes.
 */
export const getVersionRootPath = (filepath: string) => {
  const version = getVersion(filepath);

  if (version) {
    return resolve(`content/${version}`);
  } else {
    // CI task for linting stored files in the root of the content folder
    return resolve("content");
  }
};

// categoryHrefoToDocID returns the Docusaurus page ID that corresponds to the
// given href. Category pages do not have IDs in the items prop, so we generate
// a page ID based on the assumption that category page slugs are the same as
// their containing directory names.
export function categoryHrefToDocID(href: string): string {
  if (!href) {
    return href;
  }
  const idPrefix = href.replace(new RegExp(`^/ver/[0-9]+\\.x/`), "");
  const slugRE = new RegExp(`/([^/]+)/$`);
  const slug = slugRE.exec(href);
  if (!slug || slug.length != 2) {
    return "";
  }
  return idPrefix + slug[1];
}
