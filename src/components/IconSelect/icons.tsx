const req = require.context("@/assets/icons", false, /\.svg$/);
const requireAll = (requireContext: any) => requireContext.keys();

const re = /\.\/(.*)\.svg/;

const icons = requireAll(req).map((i: any) => {
  return i.match(re)[1];
});

export default icons;
