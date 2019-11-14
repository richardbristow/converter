import toReactComponent from 'svgr.macro';

export const {
  ChevronDown,
  ChevronUp,
  Arrow,
  Index,
  IndexFilled,
  About,
  AboutFilled,
} = toReactComponent('./svg/*.svg', { icon: true });
