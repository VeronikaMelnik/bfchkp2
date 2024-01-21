import { SVGProps, Ref, forwardRef, memo } from "react"
export const Envelope = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    fill="rgb(255, 255, 255)"
    width="25px"
    height="25px"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={0.00032}
    ref={ref}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <title>{"envelope"}</title>
      <path d="M28 4.25h-24c-1.518 0.002-2.748 1.232-2.75 2.75v18c0.002 1.518 1.232 2.748 2.75 2.75h24c1.518-0.002 2.748-1.232 2.75-2.75v-18c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM4 5.75h24c0.563 0.005 1.036 0.386 1.18 0.904l0.002 0.009-13.182 9.416-13.182-9.416c0.146-0.527 0.619-0.908 1.181-0.913h0.001zM28 26.25h-24c-0.69-0.001-1.249-0.56-1.25-1.25v-16.543l12.814 9.153c0.014 0.010 0.032 0.006 0.046 0.015 0.108 0.073 0.24 0.118 0.382 0.123l0.001 0 0.005 0.002h0.002l0.005-0.002c0.143-0.005 0.275-0.051 0.386-0.125l-0.003 0.002c0.014-0.009 0.032-0.005 0.046-0.015l12.814-9.153v16.543c-0.001 0.69-0.56 1.249-1.25 1.25h-0z" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(Envelope)
const Memo = memo(ForwardRef)
export { Memo as ReactComponent }
