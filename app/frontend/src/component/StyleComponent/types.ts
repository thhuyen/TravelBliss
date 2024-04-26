export interface CommonStyleProps {
  $backgroundColor?: string;
  $border?: string;
  $borderRadius?: string;
  $boxShadow?: string;
  $color?: string;
  $cursor?: string;
  $float?: "left" | "right" | "none" | "inherit";
  $fontSize?: string;
  $fontWeight?: string;
  $height?: string;
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
  $textAlign?: "center" | "left" | "right" | "justify";
  $textTransform?: "capitalize" | "uppercase" | "lowercase";
  $width?: string;
};

export interface BackGroundImagesProps extends CommonStyleProps {
  $backgroundImage: string;
  $backgroundOrigin?: 'padding-box' | ' border-box' | 'content-box' | 'initial' | 'inherit';
  $backgroundPosition?: string;
  $backgroundPositionX?: string;
  $backgroundPositionY?: string;
  $backgroundRepeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'initial' | 'inherit';
  $backgroundSize?: string
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
  $flexDirection?: "row" | "column";
  $flexWrap?: "no-wrap" | "wrap";
  $flexGrow?: number;
}
