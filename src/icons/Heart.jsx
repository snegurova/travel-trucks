const HeartIcon = (props) => {
  const { color = 'var(--main-color)' } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 9.854L10.659 7.1705C10.326 6.506 9.7485 5.5505 8.931 4.778C8.127 4.0175 7.164 3.5 6 3.5C3.486 3.5 1.5 5.489 1.5 7.88C1.5 9.6965 2.331 10.979 4.302 12.935C4.8075 13.436 5.3835 13.9775 6.021 14.5745C7.683 16.1345 9.75 18.0755 12 20.6705C14.25 18.0755 16.317 16.1345 17.979 14.5745C18.6165 13.9775 19.194 13.4345 19.698 12.935C21.669 10.979 22.5 9.6965 22.5 7.88C22.5 5.489 20.514 3.5 18 3.5C16.8345 3.5 15.873 4.0175 15.069 4.778C14.2515 5.5505 13.674 6.506 13.341 7.1705L12 9.854ZM12.588 22.292C12.5158 22.3776 12.4257 22.4463 12.3242 22.4935C12.2226 22.5407 12.112 22.5651 12 22.5651C11.888 22.5651 11.7774 22.5407 11.6758 22.4935C11.5743 22.4463 11.4842 22.3776 11.412 22.292C9.0105 19.439 6.837 17.399 5.0475 15.7205C1.95 12.812 0 10.9835 0 7.88C0 4.6325 2.685 2 6 2C8.4 2 10.0785 3.575 11.106 5.012C11.496 5.5595 11.793 6.086 12 6.5C12.2597 5.982 12.5586 5.48456 12.894 5.012C13.9215 3.5735 15.6 2 18 2C21.315 2 24 4.6325 24 7.88C24 10.9835 22.05 12.812 18.9525 15.7205C17.163 17.4005 14.9895 19.442 12.588 22.292Z"
        fill={color}
      />
    </svg>
  );
};

export default HeartIcon;
