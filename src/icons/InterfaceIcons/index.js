import toReactComponent from 'svgr.macro';

export const {
  ChevronDown,
  ChevronUp,
  ConverterArrow,
  Help,
  HelpFilled,
  Info,
  InfoFilled,
} = toReactComponent(
  './svg/*.svg',
  { icon: true },
);
