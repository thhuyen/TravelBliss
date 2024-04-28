export interface CommonStyleProps {
  $backgroundColor?: string;
  $border?: string;
  $borderRadius?: string;
  $bottom?: string;
  $boxShadow?: string;
  $color?: string;
  $cursor?: string;
  $float?: "left" | "right" | "none" | "inherit";
  $fontSize?: string;
  $fontWeight?: string;
  $fontStyle?: "normal" | "italic" | "oblique" | "initial" | "inherit";
  $height?: string;
  $left?: string;
  $letterSpacing?: string;
  $lineHeight?: string;
  $marginBottom?: string;
  $marginLeft?: string;
  $marginRight?: string;
  $marginTop?: string;
  $paddingBottom?: string;
  $paddingLeft?: string;
  $paddingRight?: string;
  $paddingTop?: string;
  $position?: "static" | "relative" | "fixed" | "absolute" | "sticky";
  $right?: string,
  $textAlign?: "center" | "left" | "right" | "justify";
  $textDecoration?: string;
  $textTransform?: "capitalize" | "uppercase" | "lowercase";
  $top?: string;
  $width?: string;
}

export interface BackGroundImagesProps extends CommonStyleProps {
  $backgroundImage: string;
  $backgroundOrigin?:
  | "padding-box"
  | " border-box"
  | "content-box"
  | "initial"
  | "inherit";
  $backgroundPosition?: string;
  $backgroundPositionX?: string;
  $backgroundPositionY?: string;
  $backgroundRepeat?:
  | "repeat"
  | "repeat-x"
  | "repeat-y"
  | "no-repeat"
  | "initial"
  | "inherit";
  $backgroundSize?:
  | "auto"
  | "length"
  | "cover"
  | "contain"
  | "initial"
  | "inherit";
}

export interface FlexStyleProps extends CommonStyleProps {
  $alignContent?:
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "initial"
  | "inherit";
  $alignItems?:
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "start"
  | "end"
  | "baseline"
  | "initial"
  | "inherit";
  $alignSelf?:
  | "auto"
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "initial"
  | "inherit";
  $justifyContent?:
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-evenly"
  | "space-around"
  | "initial";
  $justifyItem?:
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "start"
  | "end"
  | "baseline"
  | "initial"
  | "inherit";
  $justifySelf?:
  | "auto"
  | "normal"
  | "stretch"
  | "positional alignment "
  | "overflow-alignment"
  | "baseline alignment"
  | "initial"
  | "inherit";
  $flexDirection?: "row" | "column";
  $flexWrap?: "no-wrap" | "wrap";
  $flexGrow?: number;
}
