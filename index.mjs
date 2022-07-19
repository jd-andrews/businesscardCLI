#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
  padding: { top: 1, right: 2, bottom: 0, left: 2 },
  title: "jd andrews",
  width: 58,
  titleAlignment: "center",
  borderStyle: "double",
  borderColor: "#75C281",
};

const colors = ["#F9F7FA", "#579764", "#90F7FF", "#FFE690"];

const blurb = chalk.bold(
  "howdy! \n\ni'm jd. i like makin' things in almost every medium, be it physical or digital. \n\ngo on, take a gander - \n\n"
);

const data = [
  {
    info: chalk.hex("fff").bgHex("#488846")("website"),
    url: "  https://www.jda.photos/",
  },
  {
    info: chalk.hex("fff").bgHex("#676867")("ig"),
    url: "       https://www.instagram.com/jda.photos/",
  },
  {
    info: chalk.hex("fff").bgHex("#6e5494")("github"),
    url: "   https://github.com/jd-andrews",
  },
];

const flowers = [
  {
    name: chalk.hex(colors[0])(
      "   __/)                                   (\\__"
    ),
  },
  {
    name:
      chalk.hex(colors[0])(".-(__(=: ") +
      chalk.hex(colors[2])("             ") +
      chalk.hex(colors[2])("        _       ") +
      chalk.hex(colors[0])("   :=)__)-."),
  },
  {
    name:
      chalk.hex(colors[1])(" \\") +
      chalk.hex(colors[0])("   \\) ") +
      chalk.hex(colors[3])("_(_)_    ") +
      chalk.hex(colors[0])("wWWWw") +
      chalk.hex(colors[2])("      _(_)_        ") +
      chalk.hex(colors[0])(" (/   ") +
      chalk.hex(colors[1])("/"),
  },
  {
    name:
      chalk.hex(colors[1])(".|") +
      chalk.hex(colors[3])("     (_)#(_)   ") +
      chalk.hex(colors[0])("{___}") +
      chalk.hex(colors[2])("     (_)@(_) ") +
      chalk.hex(colors[3])("vVVVv      ") +
      chalk.hex(colors[1])("|"),
  },
  {
    name:
      chalk.hex(colors[1])("`|/| ") +
      chalk.hex(colors[2])(" ,,,") +
      chalk.hex(colors[3])("(_)") +
      chalk.hex(colors[1])("\\/|  \\~") +
      chalk.hex(colors[0])("Y") +
      chalk.hex(colors[1])("~/      /") +
      chalk.hex(colors[2])("(_)   ") +
      chalk.hex(colors[3])("(___)    ") +
      chalk.hex(colors[1])("|\\|  "),
  },
  {
    name:
      chalk.hex(colors[1])(" | / ") +
      chalk.hex(colors[2])("{{}}}") +
      chalk.hex(colors[1])("   | /  \\|/    \\ |        \\") +
      chalk.hex(colors[3])("Y") +
      chalk.hex(colors[1])("/     \\ | /"),
  },
  {
    name:
      chalk.hex(colors[1])("\\|//,\\~Y~/\\\\|///,,\\|//,,,,") +
      chalk.hex(colors[1])("\\\\|//,,,,\\\\|///,,,\\\\|//"),
  },
  {
    name: chalk.hex(colors[1])(
      "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
    ),
  },
];

const enterEnter = chalk.bold("\n\n");

const flowersList = flowers.map((flower) => `+ ${flower.name}`).join("\n");
const socialsList = data.map((item) => `${item.info} ${item.url}`).join("\n");

console.log(
  boxen(blurb + socialsList + enterEnter + flowersList, boxenOptions)
);
