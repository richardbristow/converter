import toReactComponent from 'svgr.macro';

export const {
  ChevronDown,
  ChevronUp,
  Arrow,
  Help,
  HelpFilled,
  Info,
  InfoFilled,
} = toReactComponent(
  './svg/*.svg',
  { icon: true },
);
