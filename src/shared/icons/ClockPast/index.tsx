import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <rect width={24} height={24} rx={12} fill="#1B9E7F" />
    <path
      d="M13.3231 8.48651V11.6684L15.967 13.2546C16.1001 13.3346 16.1961 13.4642 16.2337 13.6149C16.2713 13.7656 16.2475 13.9251 16.1675 14.0583C16.0876 14.1915 15.9579 14.2874 15.8072 14.325C15.6565 14.3626 15.497 14.3388 15.3638 14.2588L12.4359 12.5021C12.3493 12.4501 12.2776 12.3764 12.2278 12.2884C12.178 12.2005 12.1519 12.1011 12.1519 12V8.48651C12.1519 8.33121 12.2136 8.18226 12.3234 8.07245C12.4333 7.96263 12.5822 7.90093 12.7375 7.90093C12.8928 7.90093 13.0418 7.96263 13.1516 8.07245C13.2614 8.18226 13.3231 8.33121 13.3231 8.48651ZM12.7375 4.97304C11.8138 4.97074 10.8987 5.15167 10.0454 5.50535C9.19199 5.85904 8.41725 6.37846 7.76596 7.03355C7.23381 7.57228 6.76096 8.09052 6.29616 8.63291V7.31536C6.29616 7.16005 6.23446 7.01111 6.12464 6.90129C6.01483 6.79147 5.86588 6.72978 5.71058 6.72978C5.55527 6.72978 5.40633 6.79147 5.29651 6.90129C5.18669 7.01111 5.125 7.16005 5.125 7.31536V10.2432C5.125 10.3986 5.18669 10.5475 5.29651 10.6573C5.40633 10.7671 5.55527 10.8288 5.71058 10.8288H8.63847C8.79377 10.8288 8.94272 10.7671 9.05253 10.6573C9.16235 10.5475 9.22405 10.3986 9.22405 10.2432C9.22405 10.0879 9.16235 9.939 9.05253 9.82918C8.94272 9.71936 8.79377 9.65767 8.63847 9.65767H6.95493C7.47829 9.04135 7.99946 8.46089 8.59382 7.85921C9.40766 7.04537 10.4433 6.4894 11.5713 6.26079C12.6993 6.03217 13.8697 6.14104 14.9362 6.57378C16.0027 7.00653 16.918 7.74397 17.5678 8.69396C18.2176 9.64395 18.573 10.7644 18.5896 11.9152C18.6063 13.066 18.2834 14.1962 17.6614 15.1646C17.0394 16.133 16.1458 16.8966 15.0922 17.36C14.0387 17.8234 12.872 17.9661 11.7378 17.7702C10.6037 17.5743 9.55237 17.0486 8.71532 16.2586C8.65938 16.2057 8.59357 16.1644 8.52165 16.137C8.44974 16.1095 8.37312 16.0965 8.29618 16.0987C8.21923 16.1009 8.14348 16.1182 8.07322 16.1496C8.00297 16.1811 7.9396 16.2261 7.88673 16.282C7.83386 16.338 7.79253 16.4038 7.7651 16.4757C7.73766 16.5476 7.72466 16.6242 7.72684 16.7012C7.72901 16.7781 7.74632 16.8539 7.77777 16.9241C7.80923 16.9944 7.85421 17.0577 7.91015 17.1106C8.7442 17.8977 9.7582 18.4687 10.8637 18.7737C11.9691 19.0788 13.1325 19.1087 14.2521 18.8607C15.3718 18.6128 16.4137 18.0946 17.2871 17.3514C18.1604 16.6082 18.8386 15.6625 19.2624 14.5969C19.6862 13.5313 19.8428 12.3782 19.7185 11.2381C19.5941 10.0981 19.1927 9.00584 18.5491 8.05665C17.9056 7.10746 17.0395 6.3302 16.0265 5.79269C15.0135 5.25519 13.8843 4.97379 12.7375 4.97304Z"
      fill="#FDFCFB"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconClockPast };