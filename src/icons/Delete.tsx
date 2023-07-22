import { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

export const Delete: FC<Props> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.15"
        d="M19 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8Z"
        fill="#0F172A"
      />
      <path
        d="M10 12C9.44772 12 9 12.4477 9 13V17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17V13C11 12.4477 10.5523 12 10 12Z"
        fill="#0F172A"
      />
      <path
        d="M14 12C13.4477 12 13 12.4477 13 13V17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17V13C15 12.4477 14.5523 12 14 12Z"
        fill="#0F172A"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H8ZM10 5C10 4.44772 10.4477 4 11 4H13C13.5523 4 14 4.44772 14 5V6H10V5Z"
        fill="#0F172A"
      />
    </svg>
  );
};
