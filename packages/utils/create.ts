function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`;
  }
  if (element) {
    prefixName += `__${element}`;
  }
  if (modifier) {
    prefixName += `--${modifier}`;
  }
  return prefixName;
}
function createBEM(prefixName: string) {
  const b = (blockSuffix: string = "") => _bem(prefixName, blockSuffix, "", "");
  return {
    b,
  };
}
function createNameSpace(name: string) {
  const prefixName = `c-${name}`;
  return createBEM(prefixName);
}

const bem = createNameSpace("icon");
console.log(bem.b("box"));
