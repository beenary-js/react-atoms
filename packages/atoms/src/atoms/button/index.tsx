import { useObjectRef } from "@react-aria/utils"
import {
  ElementRef,
  ElementType,
  ForwardedRef,
  HTMLProps,
  ReactElement,
  Ref,
  createElement,
  forwardRef,
} from "react"
import { AriaButtonProps, useButton } from "react-aria"

export type ButtonProps<E extends ElementType = "button"> = AriaButtonProps<E> &
  HTMLProps<ElementRef<E>> & {
    as?: E
  }

export const Button = forwardRef(
  <E extends ElementType = "button">(
    { as, ...props }: ButtonProps<E>,
    forwardedRef: ForwardedRef<ElementRef<E>>
  ) => {
    const ref = useObjectRef(forwardedRef)
    const button = useButton(props, ref as any)

    return createElement(
      as || "button",
      { ref, ...props, ...button.buttonProps },
      props.children
    )
  }
) as <E extends ElementType = "button">(
  p: ButtonProps<E> & { ref?: Ref<ElementRef<E>> }
) => ReactElement
