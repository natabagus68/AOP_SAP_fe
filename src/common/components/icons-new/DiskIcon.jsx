export default function DiskIcon({ color = "white", ...props }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6667 12C12.6667 12.3673 12.368 12.6667 12 12.6667H10.6667V10.6667C10.6667 10.2987 10.3687 10 10 10H6C5.63133 10 5.33333 10.2987 5.33333 10.6667V12.6667H4C3.632 12.6667 3.33333 12.3673 3.33333 12V4C3.33333 3.63267 3.632 3.33333 4 3.33333H5.33333V6.66667C5.33333 7.03467 5.63133 7.33333 6 7.33333H8.66667C9.03533 7.33333 9.33333 7.03467 9.33333 6.66667C9.33333 6.29867 9.03533 6 8.66667 6H6.66667V3.33333H8.78133C8.95667 3.33333 9.128 3.40467 9.25267 3.52867L12.4713 6.74733C12.5973 6.87333 12.6667 7.04133 12.6667 7.21933V12ZM6.66667 12.6667H9.33333V11.3333H6.66667V12.6667ZM13.414 5.80467L10.1953 2.586C9.818 2.208 9.31533 2 8.78133 2H4C2.89733 2 2 2.89733 2 4V12C2 13.1027 2.89733 14 4 14H6H10H12C13.1027 14 14 13.1027 14 12V7.21933C14 6.68467 13.7913 6.182 13.414 5.80467Z"
        fill={color}
      />
    </svg>
  );
}
