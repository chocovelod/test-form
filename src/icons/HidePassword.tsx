import { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

export const HidePassword: FC<Props> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity=".15"
        d="M18.849 17.435 6.789 5.374l-.692.503C3.963 7.431 2.796 9.56 2.27 10.74a3.088 3.088 0 0 0 0 2.52C3.14 15.213 5.892 20 12 20c2.468 0 4.413-.792 5.904-1.877l.945-.688Z"
        fill="#0F172A"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.879 9.879a3 3 0 1 0 4.243 4.243L9.878 9.878Z"
        fill="#0F172A"
      />
      <path
        opacity=".15"
        d="M12 4c6.11 0 8.861 4.788 9.73 6.74a3.088 3.088 0 0 1 0 2.52c-.155.35-.364.775-.634 1.24a1 1 0 0 1-1.73-1c.229-.398.406-.76.537-1.053a1.088 1.088 0 0 0 0-.893C19.11 9.772 16.856 6 12 6h-1a1 1 0 1 1 0-2h1Z"
        fill="#0F172A"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z"
        fill="#0F172A"
      />
    </svg>
  );
};
