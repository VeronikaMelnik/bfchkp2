import { SVGProps, Ref, forwardRef, memo } from 'react';
import { ThemeIcons } from '../types';

interface Props extends SVGProps<SVGSVGElement> {
  theme?: ThemeIcons;
}
const SvgComponent = (
  { theme = 'light', ...props }: Props,
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
    <path
      d="M21.1744 9.63937C20.8209 9.27 20.4553 8.88938 20.3175 8.55469C20.19 8.24813 20.1825 7.74 20.175 7.24781C20.1609 6.33281 20.1459 5.29594 19.425 4.575C18.7041 3.85406 17.6672 3.83906 16.7522 3.825C16.26 3.8175 15.7519 3.81 15.4453 3.6825C15.1116 3.54469 14.73 3.17906 14.3606 2.82562C13.7137 2.20406 12.9788 1.5 12 1.5C11.0212 1.5 10.2872 2.20406 9.63937 2.82562C9.27 3.17906 8.88938 3.54469 8.55469 3.6825C8.25 3.81 7.74 3.8175 7.24781 3.825C6.33281 3.83906 5.29594 3.85406 4.575 4.575C3.85406 5.29594 3.84375 6.33281 3.825 7.24781C3.8175 7.74 3.81 8.24813 3.6825 8.55469C3.54469 8.88844 3.17906 9.27 2.82562 9.63937C2.20406 10.2863 1.5 11.0212 1.5 12C1.5 12.9788 2.20406 13.7128 2.82562 14.3606C3.17906 14.73 3.54469 15.1106 3.6825 15.4453C3.81 15.7519 3.8175 16.26 3.825 16.7522C3.83906 17.6672 3.85406 18.7041 4.575 19.425C5.29594 20.1459 6.33281 20.1609 7.24781 20.175C7.74 20.1825 8.24813 20.19 8.55469 20.3175C8.88844 20.4553 9.27 20.8209 9.63937 21.1744C10.2863 21.7959 11.0212 22.5 12 22.5C12.9788 22.5 13.7128 21.7959 14.3606 21.1744C14.73 20.8209 15.1106 20.4553 15.4453 20.3175C15.7519 20.19 16.26 20.1825 16.7522 20.175C17.6672 20.1609 18.7041 20.1459 19.425 19.425C20.1459 18.7041 20.1609 17.6672 20.175 16.7522C20.1825 16.26 20.19 15.7519 20.3175 15.4453C20.4553 15.1116 20.8209 14.73 21.1744 14.3606C21.7959 13.7137 22.5 12.9788 22.5 12C22.5 11.0212 21.7959 10.2872 21.1744 9.63937ZM20.0916 13.3228C19.6425 13.7916 19.1775 14.2763 18.9309 14.8716C18.6947 15.4434 18.6844 16.0969 18.675 16.7297C18.6656 17.3859 18.6553 18.0731 18.3638 18.3638C18.0722 18.6544 17.3897 18.6656 16.7297 18.675C16.0969 18.6844 15.4434 18.6947 14.8716 18.9309C14.2763 19.1775 13.7916 19.6425 13.3228 20.0916C12.8541 20.5406 12.375 21 12 21C11.625 21 11.1422 20.5387 10.6772 20.0916C10.2122 19.6444 9.72375 19.1775 9.12844 18.9309C8.55656 18.6947 7.90313 18.6844 7.27031 18.675C6.61406 18.6656 5.92688 18.6553 5.63625 18.3638C5.34562 18.0722 5.33437 17.3897 5.325 16.7297C5.31562 16.0969 5.30531 15.4434 5.06906 14.8716C4.8225 14.2763 4.3575 13.7916 3.90844 13.3228C3.45937 12.8541 3 12.375 3 12C3 11.625 3.46125 11.1422 3.90844 10.6772C4.35562 10.2122 4.8225 9.72375 5.06906 9.12844C5.30531 8.55656 5.31562 7.90313 5.325 7.27031C5.33437 6.61406 5.34469 5.92688 5.63625 5.63625C5.92781 5.34562 6.61031 5.33437 7.27031 5.325C7.90313 5.31562 8.55656 5.30531 9.12844 5.06906C9.72375 4.8225 10.2084 4.3575 10.6772 3.90844C11.1459 3.45937 11.625 3 12 3C12.375 3 12.8578 3.46125 13.3228 3.90844C13.7878 4.35562 14.2763 4.8225 14.8716 5.06906C15.4434 5.30531 16.0969 5.31562 16.7297 5.325C17.3859 5.33437 18.0731 5.34469 18.3638 5.63625C18.6544 5.92781 18.6656 6.61031 18.675 7.27031C18.6844 7.90313 18.6947 8.55656 18.9309 9.12844C19.1775 9.72375 19.6425 10.2084 20.0916 10.6772C20.5406 11.1459 21 11.625 21 12C21 12.375 20.5387 12.8578 20.0916 13.3228ZM13.125 16.875C13.125 17.0975 13.059 17.315 12.9354 17.5C12.8118 17.685 12.6361 17.8292 12.4305 17.9144C12.225 17.9995 11.9988 18.0218 11.7805 17.9784C11.5623 17.935 11.3618 17.8278 11.2045 17.6705C11.0472 17.5132 10.94 17.3127 10.8966 17.0945C10.8532 16.8762 10.8755 16.65 10.9606 16.4445C11.0458 16.2389 11.19 16.0632 11.375 15.9396C11.56 15.816 11.7775 15.75 12 15.75C12.2984 15.75 12.5845 15.8685 12.7955 16.0795C13.0065 16.2905 13.125 16.5766 13.125 16.875ZM15.75 10.125C15.75 11.7544 14.46 13.1184 12.75 13.4325V13.5C12.75 13.6989 12.671 13.8897 12.5303 14.0303C12.3897 14.171 12.1989 14.25 12 14.25C11.8011 14.25 11.6103 14.171 11.4697 14.0303C11.329 13.8897 11.25 13.6989 11.25 13.5V12.75C11.25 12.5511 11.329 12.3603 11.4697 12.2197C11.6103 12.079 11.8011 12 12 12C13.2403 12 14.25 11.1562 14.25 10.125C14.25 9.09375 13.2403 8.25 12 8.25C10.7597 8.25 9.75 9.09375 9.75 10.125V10.5C9.75 10.6989 9.67098 10.8897 9.53033 11.0303C9.38968 11.171 9.19891 11.25 9 11.25C8.80109 11.25 8.61032 11.171 8.46967 11.0303C8.32902 10.8897 8.25 10.6989 8.25 10.5V10.125C8.25 8.26406 9.93188 6.75 12 6.75C14.0681 6.75 15.75 8.26406 15.75 10.125Z"
      fill="#344054"
      opacity={theme === 'dark' ? 0 : 1}
    />
    <path
      d="M21.1744 9.63937C20.8209 9.27 20.4553 8.88938 20.3175 8.55469C20.19 8.24813 20.1825 7.74 20.175 7.24781C20.1609 6.33281 20.1459 5.29594 19.425 4.575C18.7041 3.85406 17.6672 3.83906 16.7522 3.825C16.26 3.8175 15.7519 3.81 15.4453 3.6825C15.1116 3.54469 14.73 3.17906 14.3606 2.82562C13.7137 2.20406 12.9788 1.5 12 1.5C11.0212 1.5 10.2872 2.20406 9.63937 2.82562C9.27 3.17906 8.88938 3.54469 8.55469 3.6825C8.25 3.81 7.74 3.8175 7.24781 3.825C6.33281 3.83906 5.29594 3.85406 4.575 4.575C3.85406 5.29594 3.84375 6.33281 3.825 7.24781C3.8175 7.74 3.81 8.24813 3.6825 8.55469C3.54469 8.88844 3.17906 9.27 2.82562 9.63937C2.20406 10.2863 1.5 11.0212 1.5 12C1.5 12.9788 2.20406 13.7128 2.82562 14.3606C3.17906 14.73 3.54469 15.1106 3.6825 15.4453C3.81 15.7519 3.8175 16.26 3.825 16.7522C3.83906 17.6672 3.85406 18.7041 4.575 19.425C5.29594 20.1459 6.33281 20.1609 7.24781 20.175C7.74 20.1825 8.24813 20.19 8.55469 20.3175C8.88844 20.4553 9.27 20.8209 9.63937 21.1744C10.2863 21.7959 11.0212 22.5 12 22.5C12.9788 22.5 13.7128 21.7959 14.3606 21.1744C14.73 20.8209 15.1106 20.4553 15.4453 20.3175C15.7519 20.19 16.26 20.1825 16.7522 20.175C17.6672 20.1609 18.7041 20.1459 19.425 19.425C20.1459 18.7041 20.1609 17.6672 20.175 16.7522C20.1825 16.26 20.19 15.7519 20.3175 15.4453C20.4553 15.1116 20.8209 14.73 21.1744 14.3606C21.7959 13.7137 22.5 12.9788 22.5 12C22.5 11.0212 21.7959 10.2872 21.1744 9.63937ZM12 18C11.7775 18 11.56 17.934 11.375 17.8104C11.19 17.6868 11.0458 17.5111 10.9606 17.3055C10.8755 17.1 10.8532 16.8738 10.8966 16.6555C10.94 16.4373 11.0472 16.2368 11.2045 16.0795C11.3618 15.9222 11.5623 15.815 11.7805 15.7716C11.9988 15.7282 12.225 15.7505 12.4305 15.8356C12.6361 15.9208 12.8118 16.065 12.9354 16.25C13.059 16.435 13.125 16.6525 13.125 16.875C13.125 17.1734 13.0065 17.4595 12.7955 17.6705C12.5845 17.8815 12.2984 18 12 18ZM12.75 13.4325V13.5C12.75 13.6989 12.671 13.8897 12.5303 14.0303C12.3897 14.171 12.1989 14.25 12 14.25C11.8011 14.25 11.6103 14.171 11.4697 14.0303C11.329 13.8897 11.25 13.6989 11.25 13.5V12.75C11.25 12.5511 11.329 12.3603 11.4697 12.2197C11.6103 12.079 11.8011 12 12 12C13.2403 12 14.25 11.1562 14.25 10.125C14.25 9.09375 13.2403 8.25 12 8.25C10.7597 8.25 9.75 9.09375 9.75 10.125V10.5C9.75 10.6989 9.67098 10.8897 9.53033 11.0303C9.38968 11.171 9.19891 11.25 9 11.25C8.80109 11.25 8.61032 11.171 8.46967 11.0303C8.32902 10.8897 8.25 10.6989 8.25 10.5V10.125C8.25 8.26406 9.93188 6.75 12 6.75C14.0681 6.75 15.75 8.26406 15.75 10.125C15.75 11.7544 14.46 13.1184 12.75 13.4325Z"
      fill="#344054"
      opacity={theme === 'dark' ? 1 : 0}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as IconQuestion };
