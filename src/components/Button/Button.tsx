interface IButton {
  content: string;
  href: string;
  customStyles?: string;
}

export function Button({ content, href, customStyles }: IButton) {
  return (
    <a
      className={`bg-primary-color rounded-3xl text-white block h-fit p-4 w-fit no-underline shadow-md ${customStyles}`}
      href={href}
    >
      {content}
    </a>
  );
}
