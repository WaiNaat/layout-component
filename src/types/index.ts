type ElementPolymorphProp<Element extends React.ElementType> = {
  as?: Element;
};

export type PolymorphicElementPropsWithoutRef<
  Element extends React.ElementType,
  Props = Record<string, never>,
> = Omit<Props, keyof ElementPolymorphProp<Element>> &
  ElementPolymorphProp<Element> &
  Omit<React.ComponentPropsWithoutRef<Element>, keyof Props>;

export type PolymorphicElementPropsWithRef<
  Element extends React.ElementType,
  Props = Record<string, never>,
> = PolymorphicElementPropsWithoutRef<Element, Props> & {
  ref?: React.ComponentPropsWithRef<Element>['ref'];
};