import React, { type ComponentProps } from "react";
import Head from "@docusaurus/Head";
import { Code, CodeLine } from "@theme/MDXComponents/Code";
import MDXA from "@theme/MDXComponents/A";
import MDXPre from "@theme/MDXComponents/Pre";
import MDXDetails from "@theme/MDXComponents/Details";
import MDXHeading from "@theme/MDXComponents/Heading";
import MDXUl from "@theme/MDXComponents/Ul";
import MDXLi from "@theme/MDXComponents/Li";
import MDXImg from "@theme/MDXComponents/Img";
import Admonition from "@theme/Admonition";
import Mermaid from "@theme/Mermaid";
import Command, { CommandLine, CommandComment } from "/src/components/Command";

import type { MDXComponentsObject } from "@theme/MDXComponents";

const MDXComponents: MDXComponentsObject = {
  Details: MDXDetails,
  Head,
  a: MDXA,
  admonition: Admonition,
  code: Code,
  codeline: CodeLine,
  command: Command,
  commandcomment: CommandComment,
  commandline: CommandLine,
  details: MDXDetails, // For MD mode support, see https://github.com/facebook/docusaurus/issues/9092#issuecomment-1602902274
  h1: (props: ComponentProps<"h1">) => <MDXHeading as="h1" {...props} />,
  h2: (props: ComponentProps<"h2">) => <MDXHeading as="h2" {...props} />,
  h3: (props: ComponentProps<"h3">) => <MDXHeading as="h3" {...props} />,
  h4: (props: ComponentProps<"h4">) => <MDXHeading as="h4" {...props} />,
  h5: (props: ComponentProps<"h5">) => <MDXHeading as="h5" {...props} />,
  h6: (props: ComponentProps<"h6">) => <MDXHeading as="h6" {...props} />,
  img: MDXImg,
  li: MDXLi,
  mermaid: Mermaid,
  pre: MDXPre,
  ul: MDXUl,
};

export default MDXComponents;
