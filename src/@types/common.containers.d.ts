type ChildrenWithOptionalArgs<T> = (args?: T) => JSX.Element
type ChildrenWithRequiredArgs<T> = (args: T) => JSX.Element

/**
 * This type is responsible to let the component props to know that the children is a function
 * that requires some objects to be passed, like when the T type is passed, this will be the children args
 * and the second parameter is whether the component receives any other param
 */

type ContainerWithProps<T = undefined, P = {}> = {
  children: T extends undefined ? ChildrenWithOptionalArgs<T> : ChildrenWithRequiredArgs<T>
} & P
