// function _bem(
//   prefixName: string,
//   blockSuffix: string,
//   element: string,
//   modifier: string
// ) {
//   const blockPart = blockSuffix ? `-${blockSuffix}` : "";
//   const elementPart = element ? `__${element}` : "";
//   const modifierPart = modifier ? `--${modifier}` : "";

//   return `${prefixName}${blockPart}${elementPart}${modifierPart}`;
// }

// function createBEM(prefixName: string) {
//   const b = (blockSuffix: string = "") => _bem(prefixName, blockSuffix, "", "");
//   const e =
//     (element: string) =>
//     (modifier: string = "") =>
//       _bem(prefixName, "", element, modifier);
//   const m = (modifier: string) => _bem(prefixName, "", "", modifier);

//   return { b, e, m };
// }

// function createNameSpace(name: string) {
//   const prefixName = `c-${name}`;
//   return createBEM(prefixName);
// }

// const bem = createNameSpace("icon");
// console.log(bem.b("box"));
// console.log(bem.e("header")("title"));
// console.log(bem.m("active"));
