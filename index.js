// Copyright (c) Zheng Junyi. All rights reserved. Licensed under the MIT license.

const data = [
  /* 0x0000 */ 0x2f, 0x2a, 0x2a, 0x0a, 0x20, 0x2a, 0x20, 0x54, 0x68, 0x69, 0x73,
  /* 0x000b */ 0x20, 0x69, 0x73, 0x20, 0x61, 0x20, 0x73, 0x65, 0x6c, 0x66, 0x72,
  /* 0x0016 */ 0x65, 0x70, 0x20, 0x28, 0x71, 0x75, 0x69, 0x6e, 0x65, 0x29, 0x20,
  /* 0x0021 */ 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x0a, 0x20,
  /* 0x002c */ 0x2a, 0x0a, 0x20, 0x2a, 0x20, 0x49, 0x74, 0x20, 0x75, 0x73, 0x65,
  /* 0x0037 */ 0x73, 0x20, 0x74, 0x68, 0x65, 0x20, 0x61, 0x62, 0x6f, 0x76, 0x65,
  /* 0x0042 */ 0x20, 0x64, 0x61, 0x74, 0x61, 0x20, 0x28, 0x77, 0x68, 0x69, 0x63,
  /* 0x004d */ 0x68, 0x20, 0x69, 0x73, 0x20, 0x74, 0x68, 0x65, 0x20, 0x55, 0x54,
  /* 0x0058 */ 0x46, 0x2d, 0x31, 0x36, 0x20, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x69,
  /* 0x0063 */ 0x6e, 0x67, 0x20, 0x6f, 0x66, 0x20, 0x74, 0x68, 0x69, 0x73, 0x20,
  /* 0x006e */ 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x29, 0x20, 0x74,
  /* 0x0079 */ 0x6f, 0x20, 0x70, 0x72, 0x69, 0x6e, 0x74, 0x0a, 0x20, 0x2a, 0x20,
  /* 0x0084 */ 0x69, 0x74, 0x73, 0x65, 0x6c, 0x66, 0x20, 0x74, 0x6f, 0x20, 0x74,
  /* 0x008f */ 0x68, 0x65, 0x20, 0x63, 0x6f, 0x6e, 0x73, 0x6f, 0x6c, 0x65, 0x2e,
  /* 0x009a */ 0x0a, 0x20, 0x2a, 0x2f, 0x0a, 0x65, 0x78, 0x70, 0x6f, 0x72, 0x74,
  /* 0x00a5 */ 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x71,
  /* 0x00b0 */ 0x75, 0x69, 0x6e, 0x65, 0x28, 0x29, 0x20, 0x7b, 0x0a, 0x20, 0x20,
  /* 0x00bb */ 0x63, 0x6f, 0x6e, 0x73, 0x6f, 0x6c, 0x65, 0x2e, 0x6c, 0x6f, 0x67,
  /* 0x00c6 */ 0x28, 0x0a, 0x20, 0x20, 0x20, 0x20, 0x22, 0x2f, 0x2f, 0x20, 0x43,
  /* 0x00d1 */ 0x6f, 0x70, 0x79, 0x72, 0x69, 0x67, 0x68, 0x74, 0x20, 0x28, 0x63,
  /* 0x00dc */ 0x29, 0x20, 0x5a, 0x68, 0x65, 0x6e, 0x67, 0x20, 0x4a, 0x75, 0x6e,
  /* 0x00e7 */ 0x79, 0x69, 0x2e, 0x20, 0x41, 0x6c, 0x6c, 0x20, 0x72, 0x69, 0x67,
  /* 0x00f2 */ 0x68, 0x74, 0x73, 0x20, 0x72, 0x65, 0x73, 0x65, 0x72, 0x76, 0x65,
  /* 0x00fd */ 0x64, 0x2e, 0x20, 0x4c, 0x69, 0x63, 0x65, 0x6e, 0x73, 0x65, 0x64,
  /* 0x0108 */ 0x20, 0x75, 0x6e, 0x64, 0x65, 0x72, 0x20, 0x74, 0x68, 0x65, 0x20,
  /* 0x0113 */ 0x4d, 0x49, 0x54, 0x20, 0x6c, 0x69, 0x63, 0x65, 0x6e, 0x73, 0x65,
  /* 0x011e */ 0x2e, 0x5c, 0x6e, 0x22, 0x0a, 0x20, 0x20, 0x29, 0x3b, 0x0a, 0x0a,
  /* 0x0129 */ 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x73, 0x74, 0x20, 0x63, 0x68, 0x61,
  /* 0x0134 */ 0x72, 0x73, 0x20, 0x3d, 0x20, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x6d,
  /* 0x013f */ 0x61, 0x70, 0x28, 0x28, 0x63, 0x68, 0x61, 0x72, 0x2c, 0x20, 0x69,
  /* 0x014a */ 0x29, 0x20, 0x3d, 0x3e, 0x20, 0x7b, 0x0a, 0x20, 0x20, 0x20, 0x20,
  /* 0x0155 */ 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x60, 0x24, 0x7b, 0x0a,
  /* 0x0160 */ 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x69, 0x20, 0x25, 0x20, 0x31,
  /* 0x016b */ 0x31, 0x20, 0x3d, 0x3d, 0x3d, 0x20, 0x30, 0x20, 0x3f, 0x20, 0x60,
  /* 0x0176 */ 0x5c, 0x6e, 0x20, 0x20, 0x2f, 0x2a, 0x20, 0x30, 0x78, 0x24, 0x7b,
  /* 0x0181 */ 0x69, 0x2e, 0x74, 0x6f, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x28,
  /* 0x018c */ 0x31, 0x36, 0x29, 0x2e, 0x70, 0x61, 0x64, 0x53, 0x74, 0x61, 0x72,
  /* 0x0197 */ 0x74, 0x28, 0x34, 0x2c, 0x20, 0x22, 0x30, 0x22, 0x29, 0x7d, 0x20,
  /* 0x01a2 */ 0x2a, 0x2f, 0x60, 0x20, 0x3a, 0x20, 0x22, 0x22, 0x0a, 0x20, 0x20,
  /* 0x01ad */ 0x20, 0x20, 0x7d, 0x20, 0x30, 0x78, 0x24, 0x7b, 0x63, 0x68, 0x61,
  /* 0x01b8 */ 0x72, 0x2e, 0x74, 0x6f, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x28,
  /* 0x01c3 */ 0x31, 0x36, 0x29, 0x2e, 0x70, 0x61, 0x64, 0x53, 0x74, 0x61, 0x72,
  /* 0x01ce */ 0x74, 0x28, 0x32, 0x2c, 0x20, 0x22, 0x30, 0x22, 0x29, 0x7d, 0x2c,
  /* 0x01d9 */ 0x60, 0x3b, 0x0a, 0x20, 0x20, 0x7d, 0x29, 0x3b, 0x0a, 0x20, 0x20,
  /* 0x01e4 */ 0x63, 0x6f, 0x6e, 0x73, 0x6f, 0x6c, 0x65, 0x2e, 0x6c, 0x6f, 0x67,
  /* 0x01ef */ 0x28, 0x60, 0x63, 0x6f, 0x6e, 0x73, 0x74, 0x20, 0x64, 0x61, 0x74,
  /* 0x01fa */ 0x61, 0x20, 0x3d, 0x20, 0x5b, 0x24, 0x7b, 0x63, 0x68, 0x61, 0x72,
  /* 0x0205 */ 0x73, 0x2e, 0x6a, 0x6f, 0x69, 0x6e, 0x28, 0x22, 0x22, 0x29, 0x7d,
  /* 0x0210 */ 0x5c, 0x6e, 0x5d, 0x3b, 0x5c, 0x6e, 0x60, 0x29, 0x3b, 0x0a, 0x0a,
  /* 0x021b */ 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x73, 0x6f, 0x6c, 0x65, 0x2e, 0x6c,
  /* 0x0226 */ 0x6f, 0x67, 0x28, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x2e, 0x66,
  /* 0x0231 */ 0x72, 0x6f, 0x6d, 0x43, 0x68, 0x61, 0x72, 0x43, 0x6f, 0x64, 0x65,
  /* 0x023c */ 0x28, 0x2e, 0x2e, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x29, 0x29, 0x3b,
  /* 0x0247 */ 0x0a, 0x7d, 0x0a, 0x0a, 0x74, 0x72, 0x79, 0x20, 0x7b, 0x0a, 0x20,
  /* 0x0252 */ 0x20, 0x69, 0x66, 0x20, 0x28, 0x69, 0x6d, 0x70, 0x6f, 0x72, 0x74,
  /* 0x025d */ 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x2e, 0x75, 0x72, 0x6c, 0x2e, 0x65,
  /* 0x0268 */ 0x6e, 0x64, 0x73, 0x57, 0x69, 0x74, 0x68, 0x28, 0x70, 0x72, 0x6f,
  /* 0x0273 */ 0x63, 0x65, 0x73, 0x73, 0x2e, 0x61, 0x72, 0x67, 0x76, 0x5b, 0x31,
  /* 0x027e */ 0x5d, 0x29, 0x29, 0x20, 0x71, 0x75, 0x69, 0x6e, 0x65, 0x28, 0x29,
  /* 0x0289 */ 0x3b, 0x0a, 0x7d, 0x20, 0x63, 0x61, 0x74, 0x63, 0x68, 0x20, 0x28,
  /* 0x0294 */ 0x5f, 0x29, 0x20, 0x7b, 0x7d, 0x0a,
];

/**
 * This is a selfrep (quine) function.
 *
 * It uses the above data (which is the UTF-16 encoding of this function) to print
 * itself to the console.
 */
export function quine() {
  console.log(
    "// Copyright (c) Zheng Junyi. All rights reserved. Licensed under the MIT license.\n"
  );

  const chars = data.map((char, i) => {
    return `${
      i % 11 === 0 ? `\n  /* 0x${i.toString(16).padStart(4, "0")} */` : ""
    } 0x${char.toString(16).padStart(2, "0")},`;
  });
  console.log(`const data = [${chars.join("")}\n];\n`);

  console.log(String.fromCharCode(...data));
}

try {
  if (import.meta.url.endsWith(process.argv[1])) quine();
} catch (_) {}
