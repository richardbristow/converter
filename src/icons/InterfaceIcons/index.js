import toReactComponent from 'svgr.macro';

export const {
  ChevronDown,
  ChevronUp,
  Arrow,
  Help,
  HelpFilled,
  About,
  AboutFilled,
} = toReactComponent(
  './svg/*.svg',
  { icon: true },
);
